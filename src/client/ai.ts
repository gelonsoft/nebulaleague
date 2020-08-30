import { Player } from './player'
import { MainScene } from './scenes/mainScene'
import { BehaviorTreeBuilder, BehaviorTreeStatus, TimeData, IBehaviorTreeNode } from 'ts-behavior-tree'
import { PlayerAIConfig } from './playersAI'
import * as steering from './steering'
import { Weapon } from './entities/weapons'
import { Ability } from './entities/abilities'

export const SEEK_BEHAVIOUR = 'seek'
export const FLEE_BEHAVIOUR = 'flee'
export const WANDER_BEHAVIOUR = 'wander'


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
    public steeringsBehaviour: Array<string>
    public wander: steering.Wander
    public weaponPrecisionHandicap: number
    public fleeRatio: number
    public weaponPrimaryTriggerRange: [number, number]
    public weaponSecondaryTriggerRange: [number, number]
    public ability1TriggerRange: [number, number]
    public ability2TriggerRange: [number, number]
    public ability3TriggerRange: [number, number]
    public ability4TriggerRange: [number, number]
    public tree: IBehaviorTreeNode
    
    
    constructor(
        scene: MainScene,
        player: Player,
        players: Array<Player>,
        playerConfig: PlayerAIConfig
    ) {
        this.scene = scene
        this.player = player
        this.player.controlledByAI = this
        this.players = players
        this.playersInHittableRange = []
        this.playersInViewRange = []
        this.steeringsForce = []
        this.steeringsBehaviour = []
        this.wander = playerConfig.wander
        this.weaponPrecisionHandicap = playerConfig.weaponPrecisionHandicap
        this.fleeRatio = playerConfig.fleeRatio
        this.weaponPrimaryTriggerRange = playerConfig.weaponPrimaryTriggerRange
        this.weaponSecondaryTriggerRange = playerConfig.weaponSecondaryTriggerRange
        this.ability1TriggerRange = playerConfig.ability1TriggerRange
        this.ability2TriggerRange = playerConfig.ability2TriggerRange
        this.ability3TriggerRange = playerConfig.ability3TriggerRange
        this.ability4TriggerRange = playerConfig.ability4TriggerRange

        
        this.tree = this.buildTree()
        
        if (this.scene.game.debug) {
            window[`ia-${player.id}`] = this
        }
    }

    public buildTree(): IBehaviorTreeNode  {
        const builder = new BehaviorTreeBuilder()
            .Selector('attackingSelector')
            .Do('playersInHittableRange', () => {
                if (this.playersInHittableRange.length > 0) {
                    // this.doSeekTarget()
                    this.doAttack()
                    return BehaviorTreeStatus.Success
                }
                return BehaviorTreeStatus.Failure
            })
            .Do('playersInViewRange', () => {
                if (this.playersInViewRange.length > 0) {
                    const isLowHealth = (this.player.health / this.player.maxHealth) > this.fleeRatio
                    if (isLowHealth) {
                        this.doSeekTarget()
                        return BehaviorTreeStatus.Success
                    } else {
                        this.doFleeTarget()
                        return BehaviorTreeStatus.Success
                    }
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


    public update(deltaTime: number) {
        this.steeringsForce = []
        this.steeringsBehaviour = []
        this.setPlayersInVisibleRange()
        this.setPlayersInHittableRange()
        this.tree.Tick(new TimeData(deltaTime))
        if (this.player.isParalyzed || this.player.isStunned) {
            this.player.body.acceleration = Phaser.Math.Vector2.ZERO.clone()
            this.player.body.velocity = Phaser.Math.Vector2.ZERO.clone()
        } else {
            this.player.body.acceleration = this.sumSteeringsForce()
        }
    }


    public setPlayersInVisibleRange(): void {
        const playersInRange = []
        const width = this.scene.cameras.main.displayWidth
        const height = this.scene.cameras.main.displayHeight
        const x = this.player.x - width / 2
        const y = this.player.y - height / 2
        const squareVision = new Phaser.Geom.Rectangle(x, y, width, height)
        for (const otherPlayer of this.players ) {
            if (otherPlayer.id !== this.player.id &&
                squareVision.contains(otherPlayer.x, otherPlayer.y)) {
                playersInRange.push(otherPlayer)
            }
        }
        this.playersInViewRange = playersInRange
    }



    public setPlayersInHittableRange(): void {
        const playersInRange = []
        const actionsKeysReady = Object.keys(this.player.actionTimes)
            .filter(key => this.player.actionTimes[key].ready)
        
        for (const playerInViewRange of this.playersInViewRange ) {
            if (playerInViewRange.id !== this.player.id) {
                const actionsInRange = actionsKeysReady.filter((key) => {
                    return this.isInRangeCircle(
                        this.player.body.center,
                        playerInViewRange.body.center,
                        this.player.actions[key].rangeDistance
                    )
                })
                if (actionsInRange.length > 0) {
                    playersInRange.push({
                        player: playerInViewRange,
                        actions: actionsInRange,
                    })        
                }
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
        radius: number): boolean {

        const circleVision = new Phaser.Geom.Circle(
            sourcePosition.x,
            sourcePosition.y,
            radius
        )
        return circleVision.contains(targetPosition.x, targetPosition.y)
    }


    public sumSteeringsForce(): Phaser.Math.Vector2 {
        const netForce = Phaser.Math.Vector2.ZERO.clone()
        for(let i=0; i < this.steeringsForce.length; i++ ) {
            netForce.add(this.steeringsForce[i])
        }
        return netForce
    }
    

    public doSeekTarget(): void {
        const target = this.playersInViewRange[0].body
        const newForce = steering.pursuit(this.player.body, target)
        this.steeringsBehaviour.push(SEEK_BEHAVIOUR)
        this.steeringsForce.push(newForce)
    }

    public doFleeTarget(): void {
        const target = this.playersInViewRange[0].body
        const newForce = steering.evade(this.player.body, target)
        this.steeringsBehaviour.push(FLEE_BEHAVIOUR)
        this.steeringsForce.push(newForce)
    }
    

    public doObstacleAvoidance(): void {
        console.log('avoid obstacle')
    }


    public doWander(): void {
        const newForce = steering.limit(steering.wander(this.player.body, this.wander), 1000)
        this.steeringsBehaviour.push(WANDER_BEHAVIOUR)
        this.steeringsForce.push(newForce)
        this.wander.angle += Phaser.Math.Between(-this.wander.variance, this.wander.variance)
        this.player.rotation = steering.facing(this.player.body.velocity)
    }

    
    public doAttack(): void {
        const choosenTarget: PlayerAIActionsInterface = Phaser.Math.RND.pick(this.playersInHittableRange)
        const choosenActionKey: string = Phaser.Math.RND.pick(choosenTarget.actions)
        const choosenPlayer: Player = choosenTarget.player
        const choosenAction: Weapon | Ability = choosenPlayer.actions[choosenActionKey]

        const timeToReachTarget = choosenAction.projectiles.getTimeToReachTarget(
            choosenAction.projectileKey,
            choosenPlayer.body.center.clone().distance(this.player.body.center)
        )
                
        const playerToTarget = choosenPlayer.body.center.clone()
            .add(choosenPlayer.body.velocity.clone().scale(timeToReachTarget))
        
        const handicapPrecisionAngle = Phaser.Math.RND.normal()
            * Math.PI * (this.weaponPrecisionHandicap / 360)
        const predictedPosition = playerToTarget.clone()
            .rotate(handicapPrecisionAngle)

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
