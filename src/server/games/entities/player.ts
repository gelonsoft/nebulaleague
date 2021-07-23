import * as _ from 'lodash'
import * as Matter from 'matter'
import { GameScene } from '~/server/games/scenes/gameScene'
import { Config } from '~/shared/config'
import {
    PlayerModel,
    ControlledBy,
    EffectKeys,
    EffectModel,
    PlayerChanged,
    WeaponKey,
    AbilityKey,
    ActionKey,
    Vector,
} from '~/shared/models'



export interface ActionTimeInterface {
    cooldown: number
    ready: boolean
    timerEvent?: Phaser.Time.TimerEvent
}


export class Player extends Phaser.Physics.Matter.Sprite {
    public scene: GameScene
    public body: Matter.BodyType
    public id: string
    public playerModel: PlayerModel
    public defaultSpeed: number

    constructor(scene: GameScene, playerModel: PlayerModel) {        
        super(scene.matter.world, playerModel.x, playerModel.y, Config.textureKeys.ships)
        this.scene = scene
        this.scene.add.existing(this)
        this.playerModel = playerModel
        this.init()
        this.initPhysics()
    }

    public init() {
        this.id = this.playerModel.id
        this.defaultSpeed = Config.player.defaultSpeed
        this.setDisplaySize(Config.player.size, Config.player.size)
    }

    public initPhysics() {
        this.setBody({
            type: 'circle',
            radius: this.displayWidth / 2,
        })
        this.body.label = this.id
        this.setFriction(0)
        this.setFrictionAir(0)
        this.setFrictionStatic(0)
        this.setFixedRotation()
        this.setCollisionGroup(Config.matter.group.player)
        this.setCollidesWith(Config.matter.group.player | Config.matter.group.bullet)
    }
    

    public directionToVelocity(playerDirection: Vector): Vector {
        const linearSpeed = this.defaultSpeed
        const crossSpeed = Math.cos(Math.PI / 4) * this.defaultSpeed
        const { x, y } = playerDirection
        const directions: Record<string, Vector> = {
            '00': { x: 0, y: 0 },
            '0-1': { x: 0, y: -linearSpeed },
            '1-1': { x: crossSpeed, y: -crossSpeed },
            '10': { x: linearSpeed, y: 0 },
            '11': { x: crossSpeed, y: crossSpeed },
            '01': { x: 0, y: linearSpeed },
            '-11': { x: -crossSpeed, y: crossSpeed },
            '-10': { x: -linearSpeed, y: 0 },
            '-1-1': { x: -crossSpeed, y: -crossSpeed },
        }
        return directions[`${x}${y}`]
    }
    
    public move(playerDirection: Vector): void {
        const velocity = this.directionToVelocity(playerDirection)
        this.setVelocity(
            velocity.x * this.scene.game.dt,
            velocity.y * this.scene.game.dt,
        )
    }




    public getPrimaryWeaponPosition(): Phaser.Math.Vector2 {
        const positionCenter = new Phaser.Math.Vector2(this.x, this.y)
        const offset = Phaser.Math.Vector2.ONE.clone()
            .setToPolar(this.rotation - Math.PI * 0.5 - Math.PI * 0.5)
            .scale(this.displayWidth * 0.5)
        return positionCenter.clone().add(offset)
    }

    public getSecondaryWeaponPosition(): Phaser.Math.Vector2 {
        const positionCenter = new Phaser.Math.Vector2(this.x, this.y)
        const offset = Phaser.Math.Vector2.ONE.clone()
            .setToPolar(this.rotation - Math.PI * 0.5 + Math.PI * 0.5)
            .scale(this.displayWidth * 0.5)
        return positionCenter.clone().add(offset)
    }

   
    public getChanged(): PlayerChanged {
        return {
            x: this.body.position.x,
            y: this.body.position.y,
            rotation: this.rotation,
            // health: this.health,
        }
    }
}
