import { MainScene } from "../scenes/mainScene"
import { ProjectileModel, BlockModel, BlockModelMultiple } from "../../shared/models"
import { Player, EffectKeys, EffectInterface } from "../player"


const projectilesConfig = {
    laserRed: {
        name: 'laserRed',
        frame: 'laserRed03.png',
        damage: 100,
        speed: 1300,
        lifespan: 0.3,
        width: 12,
        height: 12,
    },
    laserBlue: {
        name: 'laserBlue',
        frame: 'laserBlue03.png',
        damage: 200,
        speed: 1400,
        lifespan: 0.35,
        width: 16,
        height: 16,
    },
    laserGreen: {
        name: 'laserGreen',
        frame: 'laserGreen03.png',
        damage: 500,
        speed: 1600,
        lifespan: 0.2,
        width: 20,
        height: 20,
    },
    chargedArrow: {
        name: 'chargedArrow',
        frame: 'charged_arrow_bullet.png',
        damage: 400,
        speed: 1200,
        lifespan: 0.5,
        width: 25,
        height: 25,
        effects: [{
            name: EffectKeys.ChangeMaxSpeed,
            value: 0.8,
            duration: 2,
        }]
    },
    flame: {
        name: 'flame',
        radius: 50,
        lifespan: 3,
        damage: 50,
        tick: 0.2,
        fillColor: 0xaa0000,
        strokeColor: 0xff0000,
        fillAlpha: 0.6,
        strokeAlpha: 0.8,
    },
    rootTip: {
        name: 'rootTip',
        radius: 50,
        damage: 50,
        lifespan: 3,
        fillColor: 0xaa0000,
        strokeColor: 0xff0000,
        fillAlpha: 0.6,
        strokeAlpha: 0.8,
        delay: 1, // delay when the spell is active
        effects: [{
            name: EffectKeys.Paralyze,
            value: 0.8,
            duration: 3,
        }]
    }
}



export interface ProjectileInterface {
    fire(position: Phaser.Math.Vector2, rotation: number): void
    actionOnCollision(hittedPlayer: Player): void
    fromPlayerId?: string
}

export class Bullet extends Phaser.GameObjects.Sprite implements ProjectileInterface {
    public body: Phaser.Physics.Arcade.Body
    public scene: MainScene
    public gate: number
    public lifespan: number
    public speed: number
    public shotInterval: number
    public damage?: number
    public fromPlayerId?: string
    public effects?: Array<EffectInterface>
    public constructor(scene: MainScene, projectileConfig: ProjectileModel) {
        super(scene, -10000, -10000, 'atlas', projectileConfig.frame)
        this.scene = scene
        this.gate = 0
        this.lifespan = projectileConfig.lifespan
        this.speed = projectileConfig.speed
        this.damage = projectileConfig.damage
        this.effects = projectileConfig.effects || []
        this.scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
        this.scene.add.existing(this)
        
        this.setDisplaySize(projectileConfig.width, projectileConfig.height)
        this.body.setEnable(false)
        this.setActive(false)
        this.setVisible(false)
    }

    public fire(position: Phaser.Math.Vector2, rotation: number) {
        const ux = Math.cos(rotation)
        const uy = Math.sin(rotation)
        this.body.reset(position.x, position.y)
        this.setRotation(rotation + Math.PI / 2)
        this.body.velocity.x = ux * this.speed
        this.body.velocity.y = uy * this.speed
        this.body.setEnable(true)
        this.setActive(true)
        this.setVisible(true)

        this.scene.time.addEvent({
            delay: this.lifespan * 1000,
            callback: function() {
                this.kill()
            },
            callbackScope: this,
        })
    }

    public actionOnCollision(hittedPlayer: Player) {
        hittedPlayer.health -= this.damage
        hittedPlayer.addEffects(this.effects)
        this.kill()
    }
    
    public kill() {
        this.setActive(false)
        this.setVisible(false)
        this.body.setEnable(false)
        this.body.reset(-10000, -10000)        
    }
}


export class Block extends Phaser.GameObjects.Graphics {
    public body: Phaser.Physics.Arcade.Body
    public scene: MainScene
    public radius: number
    public lifespan: number
    public damage: number
    public fromPlayerId?: string
    public effects?: Array<EffectInterface>
    public fillColor: number
    public strokeColor: number
    public fillAlpha: number
    public strokeAlpha: number

    
    public constructor(scene: MainScene, blockConfig: BlockModel) {
        super(scene)
        this.radius = blockConfig.radius
        this.lifespan = blockConfig.lifespan
        this.damage = blockConfig.damage
        this.effects = blockConfig.effects || []
        this.fillColor = blockConfig.fillColor
        this.strokeColor = blockConfig.strokeColor
        this.fillAlpha = blockConfig.fillAlpha
        this.strokeAlpha = blockConfig.strokeAlpha
        this.scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
        this.scene.add.existing(this)
        this.body.setEnable(false)
        this.body.reset(-10000, -10000)
        this.setActive(false)
        this.setVisible(false)
    }

    public draw() {
        this.clear()
        this.fillStyle(this.fillColor, this.fillAlpha)
        this.fillCircle(0, 0, this.radius)
        this.lineStyle(2, this.strokeColor, this.strokeAlpha)
        this.strokeCircle(0, 0, this.radius)
    }

    public fire(position: Phaser.Math.Vector2) {
        this.body.setEnable(true)
        this.setActive(true)
        this.setVisible(true)
        this.body.reset(position.x, position.y)
        this.body.setCircle(this.radius)
        this.body.setOffset(-this.radius, -this.radius)
        this.draw()

        this.scene.time.addEvent({
            delay: this.lifespan * 1000,
            callback: function() {
                this.kill()
            },
            callbackScope: this,
        })
    }

    public actionOnCollision(hittedPlayer: Player) {
        hittedPlayer.health -= this.damage
        hittedPlayer.addEffects(this.effects)
    }
    
    
    public kill() {
        this.setActive(false)
        this.setVisible(false)
        this.body.setEnable(false)
        this.body.reset(-10000, -10000)        
    }
}

export class BlockWithTick extends Block implements ProjectileInterface {
    public tick: number
    public tickTimer: number
    public constructor(scene: MainScene, blockConfig: BlockModelMultiple) {
        super(scene, blockConfig)
        this.tick = blockConfig.tick
    }

    public fire(position: Phaser.Math.Vector2) {
        super.fire(position)
        this.tickTimer = this.tick
    }
    
    public actionOnCollision(hittedPlayer: Player) {
        this.tickTimer += this.scene.game.loop.delta / 1000
        if (this.tickTimer >= this.tick) {
            this.tickTimer = 0
            hittedPlayer.health -= this.damage
            hittedPlayer.addEffects(this.effects)
        }
    }
}



export class Projectiles
{
    public projectiles: Map<string, Phaser.Physics.Arcade.Group>
    public scene: MainScene
    constructor (scene: MainScene)
    {
        this.projectiles = new Map()
        this.scene = scene
        
        this.addProjectile('laserRed', Bullet, projectilesConfig.laserRed, 200)
        this.addProjectile('laserBlue', Bullet, projectilesConfig.laserBlue, 200)
        this.addProjectile('laserGreen', Bullet, projectilesConfig.laserGreen, 200)
        this.addProjectile('chargedArrow', Bullet, projectilesConfig.chargedArrow, 20)
        this.addProjectile('flame', BlockWithTick, projectilesConfig.flame, 20)
        this.addProjectile('rootTip', BlockWithTick, projectilesConfig.rootTip, 20)
    }

    public addProjectile(
        key: string,
        ProjectileClass: new (scene: MainScene, projectileConfig: any) => any,
        projectileConfig: any,
        length: number): void {
        const projectiles = Array.from({length: length}, () => {
            return new ProjectileClass(this.scene, projectileConfig)
        })
        const group = new Phaser.Physics.Arcade.Group(this.scene.physics.world, this.scene)
            .addMultiple(projectiles)
        this.projectiles.set(key, group)
    }

    
    public fire(
        key: string,
        playerId: string,
        position: Phaser.Math.Vector2,
        rotation?: number): void {
        const projectileGroup = this.projectiles.get(key)
        const projectile = projectileGroup.getFirstDead()
        projectile.fromPlayerId = playerId
        projectile.fire(position, rotation)
    }


    public getDistance(key): number {
        const projectileModel = projectilesConfig[key]
        return projectileModel.speed * projectileModel.lifespan
    }

    public getAll(): Array<Phaser.Physics.Arcade.Group> {
        return Array.from(this.projectiles.values())
    }
}
