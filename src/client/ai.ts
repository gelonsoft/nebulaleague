import { Player, SelectedWeapon } from './player'
import { MainScene } from './scenes/mainScene'
import { BehaviorTreeBuilder, BehaviorTreeStatus, TimeData, IBehaviorTreeNode } from 'ts-behavior-tree'
import { PlayerAIConfig } from './playersAI'
import * as steering from './steering'

export const SEEK_BEHAVIOUR = 'seek'
export const WANDER_BEHAVIOUR = 'wander'



interface PlayerAIDistanceActionsInterface {
    weaponPrimary: number
    weaponSecondary: number
    ability1: number
    ability2: number
    ability3: number
    ability4: number
}


interface PlayerAIActionsInterface {
    player: Player
    actions: Array<string>
}


export class PlayerAI {
    public scene: MainScene
    public player: Player
    public players: Array<Player>
    public playersInHittableRange: Array<Player>
    public playersInViewRange: Array<Player>
    public steeringsForce: Array<Phaser.Math.Vector2>
    public steeringsBehaviour: Array<string>
    public wander: steering.Wander
    public weaponPrecisionHandicap: number
    public playerAIActions: PlayerAIActionsInterface
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
        // this.playerAIActions = this.setPlayerAIActions()
        
        this.tree = this.buildTree()
        if (this.scene.game.debug) {
            window[`ia-${player.id}`] = this
        }
    }

    public buildTree(): IBehaviorTreeNode  {
        const builder = new BehaviorTreeBuilder()
            .Selector('attackingSelector')
            .Do('attackingAction', () => {
                if (this.playersInHittableRange.length > 0) {
                    // this.doSeekTarget()
                    this.doAttack()
                    return BehaviorTreeStatus.Success
                }
                return BehaviorTreeStatus.Failure
            })
            .Do('seekingAction', () => {
                if (this.playersInViewRange.length > 0) {
                    this.doSeekTarget()
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


    // public setPlayerAIActions(): PlayerAIActionsInterface {
    //     return {
    //        weaponPrimary: {
    //            distance: this.player.weaponPrimary.rangeDistance,
    //        },
    //        weaponSecondary: {
    //            distance: this.player.weaponSecondary.rangeDistance,
    //        },
    //        ability1: {
    //            distance: this.player.abilities.ability1.rangeDistance,
    //        },
    //        ability2: {
    //            distance: this.player.abilities.ability2.rangeDistance,
    //        },
    //        ability3: {
    //            distance: this.player.abilities.ability3.rangeDistance,
    //        },
    //        ability4: {
    //            distance: this.player.abilities.ability4.rangeDistance,
    //        }
    //     }        
    // }
    

    public setPlayersInHittableRange(): void {
        const playersInRange = []
        const actionsKeysReady = Object.keys(this.player.actionTimes)
            .filter(key => this.player.actionTimes[key].ready)
        
        

        
        // console.log(distances)
            


        

        // for (const playerInViewRange of this.playersInViewRange ) {
        //     if (playerInViewRange.id !== this.player.id)
        //         playersInRange.push({
        //             player: playerInViewRange,
        //             actions: actionsKeysReady.filter((key) => {
        //                 return this.isInRangeCircle(
        //                     this.player.body.center,
        //                     playerInViewRange.body.center,
        //                     this.playerAIActions[key].distance
        //                 )
        //             })
        //         })
        //     }
        // this.playersInHittableRange = playersInRange
        
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
        // const choosenTarget: Player = Phaser.Math.RND.pick(this.playersInHittableRange).player
        // console.log(this.playersInHittableRange)
        // const playerToTarget = choosenTarget.body.position.clone()
        //     .subtract(this.player.body.center)


        // const handicapPrecisionAngle = Phaser.Math.RND.normal() * Math.PI / (this.weaponPrecisionHandicap * 360)
        // const predictedPosition = choosenTarget.body.position.clone()
        //     .add(choosenTarget.body.velocity)
        //     .rotate(handicapPrecisionAngle)
        
        // this.player.rotation = steering.facing(playerToTarget)
        // this.player.fire(SelectedWeapon.Primary, predictedPosition)
    }
}
