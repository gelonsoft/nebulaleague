import { BehaviorTreeBuilder, BehaviorTreeStatus, TimeData, IBehaviorTreeNode } from 'ts-behavior-tree'
import * as steering from '~/ai/steering'
import { MainScene } from '~/scenes/mainScene'
import { Player } from '~/entities/player'
import { PlayerDirection } from '@shared/models'
import { PlayerAIConfig } from '~/ai/playerConfigAI'
import { Weapon } from '~/entities/weapons'
import { Ability } from '~/entities/abilities'
import { Projectiles } from '~/entities/projectiles'

export const SEEK_BEHAVIOUR = 'seek'
export const FLEE_BEHAVIOUR = 'flee'
export const WANDER_BEHAVIOUR = 'wander'
export const MOVE_AROUND_BEHAVIOUR = 'move'

enum Behaviour {
    Default,
    Seek,
    Flee,
    Wander,
    MoveAround,
    newMoveAroundAngle,
}

interface PlayerAIActionsInterface {
    player: Player
    actions: Array<string>
}

export class PlayerAI {
    public scene: MainScene
    public player: Player
    public players: Array<Player>
    public playersInHittableRange: Array<PlayerAIActionsInterface>
    public playersInViewRange: Array<Player>
    public steeringsForce: Array<Phaser.Math.Vector2>
    public previousDirection: PlayerDirection
    public steeringBehaviour: Behaviour
    public previousSteeringBehaviour: Behaviour
    public wander: steering.Wander
    public weaponPrecisionHandicap: number
    public fleeForSecondRange: [number, number]
    public fleeAfterSecondRange: [number, number]
    public isFleeingInCombat: boolean
    public moveCombatRandomAngle: number
    public moveCombatSecondRange: [number, number]
    public moveCombatAngleRange: [number, number]
    public actionsTriggerSecondRange: {
        weaponPrimary: [number, number]
        weaponSecondary: [number, number]
        ability1: [number, number]
        ability2: [number, number]
        ability3: [number, number]
        ability4: [number, number]
    }
    public tree: IBehaviorTreeNode
    constructor(scene: MainScene, player: Player, players: Array<Player>, playerConfig: PlayerAIConfig) {
        this.scene = scene
        this.player = player
        this.player.controlledByAI = this
        this.players = players
        this.playersInHittableRange = []
        this.playersInViewRange = []
        this.steeringsForce = []
        this.previousDirection = { x: 0, y: 0 }
        this.steeringBehaviour = Behaviour.Default
        this.previousSteeringBehaviour = Behaviour.Default
        this.isFleeingInCombat = false
        this.wander = playerConfig.wander
        this.weaponPrecisionHandicap = playerConfig.weaponPrecisionHandicap
        this.fleeForSecondRange = playerConfig.fleeForSecondRange
        this.fleeAfterSecondRange = playerConfig.fleeAfterSecondRange
        this.moveCombatAngleRange = playerConfig.moveCombatAngleRange
        this.moveCombatSecondRange = playerConfig.moveCombatSecondRange
        this.moveCombatRandomAngle = Phaser.Math.RND.between(...this.moveCombatAngleRange)
        this.actionsTriggerSecondRange = playerConfig.actionsTriggerSecondRange
        this.tree = this.buildTree()

        // add random angle to choose moving target
        this.scene.time.addEvent({
            delay: Phaser.Math.RND.realInRange(...this.moveCombatSecondRange) * 1000,
            callback: () => {
                this.moveCombatRandomAngle = Phaser.Math.RND.between(...this.moveCombatAngleRange)
                this.steeringBehaviour = Behaviour.newMoveAroundAngle
            },
            loop: true,
        })

        if (this.scene.game.debug) {
            window[`ia-${player.id}`] = this
        }
    }

    public buildTree(): IBehaviorTreeNode {
        const builder = new BehaviorTreeBuilder()
            .Selector('attackingSelector')
            .Do('playersInHittableRange', () => {
                if (this.playersInHittableRange.length > 0) {
                    const choosenTarget = Phaser.Math.RND.pick(this.playersInHittableRange)
                    const choosenActionKey = Phaser.Math.RND.pick(choosenTarget.actions)
                    if (choosenActionKey === undefined) {
                        this.doMoveInCombat(choosenTarget)
                    } else {
                        if (this.shouldAttack(choosenActionKey)) {
                            this.doAttack(choosenTarget, choosenActionKey)
                        } else {
                            this.doMoveInCombat(choosenTarget)
                        }
                    }
                    return BehaviorTreeStatus.Success
                }
                return BehaviorTreeStatus.Failure
            })
            .Do('defaultAction', () => {
                if (!(this.playersInViewRange.length > 0) && !(this.playersInHittableRange.length > 0)) {
                    this.doWander()
                    return BehaviorTreeStatus.Success
                }
                return BehaviorTreeStatus.Failure
            })
            .End()
            .Build()
        return builder
    }

    public update() {
        if (this.player.active) {
            this.steeringsForce = []
            this.previousSteeringBehaviour = this.steeringBehaviour
            this.setPlayersInVisibleRange()
            this.setPlayersInHittableRange()

            this.tree.Tick(new TimeData(this.scene.game.loop.delta))
            if (this.player.isParalyzed || this.player.isStunned) {
                this.player.body.acceleration = Phaser.Math.Vector2.ZERO.clone()
                this.player.body.velocity = Phaser.Math.Vector2.ZERO.clone()
            } else {
                const netForce = this.sumSteeringsForce()
                this.player.body.acceleration = netForce
                this.player.rotation = steering.facing(this.player.body.velocity)
                if (this.steeringBehaviour !== this.previousSteeringBehaviour) {
                    this.player.body.velocity.set(0, 0)
                }
            }
        }
    }

    public setPlayersInVisibleRange(): void {
        const playersInRange = []
        const width = this.scene.cameras.main.displayWidth
        const height = this.scene.cameras.main.displayHeight
        const x = this.player.x - width / 2
        const y = this.player.y - height / 2
        const squareVision = new Phaser.Geom.Rectangle(x, y, width, height)
        for (const otherPlayer of this.players) {
            if (otherPlayer.id !== this.player.id && squareVision.contains(otherPlayer.x, otherPlayer.y)) {
                playersInRange.push(otherPlayer)
            }
        }
        this.playersInViewRange = playersInRange
    }

    public simulateDirection(velocity: Phaser.Math.Vector2): PlayerDirection {
        const directions = [
            [0, 0],
            [1, 0],
            [1, -1],
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
            [1, 1],
        ]
        let choosenDirectionIndex = 0
        let angleStart = 0
        for (const i of [...Array(7).keys()]) {
            const index = i + 1
            const angleEnd: number = ((index * Math.PI) / 4) as number
            if (velocity.angle() >= angleStart && velocity.angle() <= angleEnd) {
                choosenDirectionIndex = index
            }
            angleStart = angleEnd
        }
        const choosenDirection = directions[choosenDirectionIndex]
        return {
            x: choosenDirection[0],
            y: choosenDirection[1],
        }
    }

    public setPlayersInHittableRange(): void {
        const playersInRange = []
        const actionsKeysReady = Object.keys(this.player.actions).filter(
            (key) => this.player.actionTimes[key].ready
        )

        for (const playerInViewRange of this.playersInViewRange) {
            if (playerInViewRange.id !== this.player.id) {
                const actionsInRange = actionsKeysReady.filter((key) => {
                    return this.isInRangeCircle(
                        this.player.body.center,
                        playerInViewRange.body.center,
                        this.player.actions[key].rangeDistance
                    )
                })
                playersInRange.push({
                    player: playerInViewRange,
                    actions: actionsInRange,
                })
            }
        }
        this.playersInHittableRange = playersInRange
    }

    public setProjectilesInHittableRange(): void {
        this.scene.projectiles.getAll()
    }

    public isInRangeCircle(
        sourcePosition: Phaser.Math.Vector2,
        targetPosition: Phaser.Math.Vector2,
        radius: number
    ): boolean {
        const circleVision = new Phaser.Geom.Circle(sourcePosition.x, sourcePosition.y, radius)
        return circleVision.contains(targetPosition.x, targetPosition.y)
    }

    public sumSteeringsForce(): Phaser.Math.Vector2 {
        const netForce = Phaser.Math.Vector2.ZERO.clone()
        for (let i = 0; i < this.steeringsForce.length; i++) {
            netForce.add(this.steeringsForce[i])
        }
        return netForce
    }

    public doSeekTarget(): void {
        const target = this.playersInViewRange[0].body
        const newForce = steering.pursuit(this.player.body, target)
        this.steeringBehaviour = Behaviour.Seek
        this.steeringsForce.push(newForce)
    }

    public doFleeTarget(): void {
        const target = this.playersInViewRange[0].body
        const newForce = steering.evade(this.player.body, target)
        this.steeringBehaviour = Behaviour.Flee
        this.steeringsForce.push(newForce)
    }

    public doMoveAroundTarget(
        choosenTarget: PlayerAIActionsInterface,
        closestActionDistance: number,
        randomAngle: number
    ): void {
        const sourcePosition = this.player.body.center.clone()
        const targetPosition = choosenTarget.player.body.center.clone()

        const goalPosition = targetPosition
            .subtract(sourcePosition)
            .normalize()
            .rotate(Phaser.Math.DegToRad(randomAngle))
            .scale(closestActionDistance)

        const newForce = steering.limit(goalPosition, this.player.body.maxSpeed)
        this.steeringsForce.push(newForce)
        this.steeringBehaviour = Behaviour.MoveAround
    }

    public doMoveInCombat(choosenTarget: PlayerAIActionsInterface): void {
        const actionsKeyRange = Object.keys(this.player.actions)
            .filter((key) => this.player.actionTimes[key].ready)
            .map((key) => [key, this.player.actions[key].rangeDistance])
            .sort((action1, action2) => action2[1] - action1[1])

        const rondamFleeing =
            Phaser.Math.RND.realInRange(...this.fleeAfterSecondRange) * Math.random() * 2 <=
            this.scene.game.loop.delta / 1000

        if ((!this.isFleeingInCombat && actionsKeyRange.length === 0) || rondamFleeing) {
            this.isFleeingInCombat = true
            this.scene.time.addEvent({
                delay: Phaser.Math.RND.realInRange(...this.fleeForSecondRange) * 1000,
                callback: () => {
                    this.isFleeingInCombat = false
                },
            })
        }

        if (!this.isFleeingInCombat) {
            this.doMoveAroundTarget(choosenTarget, actionsKeyRange[0][1], this.moveCombatRandomAngle)
        } else {
            this.doFleeTarget()
        }
    }

    public doObstacleAvoidance(): void {}

    public doWander(): void {
        const newForce = steering.limit(
            steering.wander(this.player.body, this.wander),
            this.player.body.maxSpeed
        )
        this.steeringsForce.push(newForce)
        this.wander.angle += Phaser.Math.Between(-this.wander.variance, this.wander.variance)
        this.avoidBoundariesWander()
        this.player.rotation = steering.facing(this.player.body.velocity)
        this.steeringBehaviour = Behaviour.Wander
    }

    public avoidBoundariesWander(): void {
        const left = this.scene.physics.world.bounds.left + 50
        const right = this.scene.physics.world.bounds.right - 50
        const top = this.scene.physics.world.bounds.top + 50
        const bottom = this.scene.physics.world.bounds.bottom - 50
        if (
            this.player.body.center.x <= left ||
            this.player.body.center.x >= right ||
            this.player.body.center.y <= top ||
            this.player.body.center.y >= bottom
        ) {
            this.player.body.velocity.rotate(Math.PI)
        }
    }

    public shouldAttack(actionKey: string): boolean {
        const [start, end] = this.actionsTriggerSecondRange[actionKey]
        const randomRatio = Phaser.Math.RND.realInRange(start, end) * Math.random() * 2
        const randomTime = this.player.actions[actionKey].cooldownDelay * randomRatio
        return randomTime <= this.scene.game.loop.delta / 1000
    }

    public doAttack(choosenTarget: PlayerAIActionsInterface, choosenActionKey: string): void {
        const choosenPlayer: Player = choosenTarget.player
        const choosenAction: Weapon | Ability = choosenPlayer.actions[choosenActionKey]

        const timeToReachTarget = Projectiles.getTimeToReachTarget(
            choosenAction.projectileKey,
            choosenPlayer.body.center.clone().distance(this.player.body.center)
        )

        const playerToTarget = choosenPlayer.body.center
            .clone()
            .add(choosenPlayer.body.velocity.clone().scale(timeToReachTarget))

        const handicapPrecisionAngle =
            Phaser.Math.RND.normal() * Math.PI * (this.weaponPrecisionHandicap / 360)

        const predictedPosition = playerToTarget.clone().rotate(handicapPrecisionAngle)

        if (choosenAction instanceof Weapon) {
            this.player.fire(choosenActionKey, predictedPosition)
            this.player.rotation = steering.facing(predictedPosition)
        } else {
            if (this.player.actions[choosenActionKey].name === 'blink') {
                this.player.castAbility(
                    choosenActionKey,
                    Phaser.Math.Vector2.UP.clone()
                        .rotate(Phaser.Math.RND.normal() * Math.PI)
                        .scale(this.player.actions[choosenActionKey].rangeDistance)
                        .add(this.player.body.center)
                )
            } else {
                this.player.castAbility(choosenActionKey, predictedPosition)
            }
        }
    }
}
