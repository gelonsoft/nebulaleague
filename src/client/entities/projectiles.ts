import { MainScene } from "../scenes/mainScene"
import { ProjectileModel, BlockModel, BlockModelMultiple } from "../../shared/models"
import { Player, EffectKeys, EffectInterface } from "../player"


const projectilesConfig = {
    pistolBullet: {
        name: 'pistolBullet',
        frame: 'laserRed03.png',
        damage: 80,
        speed: 1300,
        lifespan: 0.3,
        radius: 14,
    },
    ak47Bullet: {
        name: 'ak47Bullet',
        frame: 'laserRed03.png',
        damage: 50,
        speed: 1000,
        lifespan: 0.35,
        radius: 12,
    },
    p90Bullet: {
        name: 'p90Bullet',
        frame: 'laserRed03.png',
        damage: 40,
        speed: 1500,
        lifespan: 0.22,
        radius: 12,
    },
    revolverBullet: {
        name: 'revolverBullet',
        frame: 'laserRed03.png',
        damage: 200,
        speed: 1000,
        lifespan: 0.2,
        radius: 12,
    },
    thompsonBullet: {
        name: 'thompsonBullet',
        frame: 'laserRed03.png',
        damage: 150,
        speed: 1700,
        lifespan: 0.35,
        radius: 18,
    },
    chargedArrowProjectile: {
        name: 'chargedArrowProjectile',
        frame: 'charged_arrow_bullet.png',
        damage: 80,
        speed: 1200,
        lifespan: 0.5,
        radius: 25,
        effects: [{
            name: EffectKeys.ChangeMaxSpeed,
            value: 0.8,
            duration: 2,
        }]
    },
    flameProjectile: {
        name: 'flameProjectile',
        radius: 50,
        lifespan: 3,
        damage: 25,
        tick: 0.5,
        fillColor: 0xaa0000,
        strokeColor: 0xff0000,
        fillAlpha: 0.6,
        strokeAlpha: 0.8,
        effects: [{
            name: EffectKeys.Burn,
            value: 10,
            duration: 3,
            tick: 0.5,
        }]
    },
    rootTipProjectile: {
        name: 'rootTipProjectile',
        radius: 60,
        damage: 30,
        lifespan: 0.6,
        triggerAfter: 0.4,
        fillColor: 0x00aa00,
        strokeColor: 0x00ff00,
        fillAlpha: 0.6,
        strokeAlpha: 0.8,
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
    public radius: number
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
        this.radius = projectileConfig.radius
        this.setDisplaySize(projectileConfig.radius, projectileConfig.radius )
        this.body.setEnable(false)
        this.setActive(false)
        this.setVisible(false)
    }

    public fire(position: Phaser.Math.Vector2, rotation: number) {
        const ux = Math.cos(rotation)
        const uy = Math.sin(rotation)
        this.body.reset(position.x, position.y)
        this.setVisible(true)
        this.setActive(true)
        this.body.setEnable(true)
        this.setRotation(rotation + Math.PI / 2)
        this.body.velocity.x = ux * this.speed
        this.body.velocity.y = uy * this.speed

        this.scene.time.addEvent({
            delay: this.lifespan * 1000,
            callback: function() {
                this.kill()
            },
            callbackScope: this,
        })
    }

    public actionOnCollision(hittedPlayer: Player) {
        hittedPlayer.hit(this.damage, this.effects)
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
            callback: () => {
                this.kill()
            },
            callbackScope: this,
        })
    }

    public actionOnCollision(hittedPlayer: Player) {
        hittedPlayer.hit(this.damage, this.effects)
    }
    
    
    public kill() {
        this.setActive(false)
        this.setVisible(false)
        this.body.setEnable(false)
        this.body.reset(-10000, -10000)        
    }
}

export class BlockWithDelay extends Block implements ProjectileInterface {
    public triggerAfter: number
    public active: boolean
    public constructor(scene: MainScene, blockConfig: BlockModelMultiple) {
        super(scene, blockConfig)
        this.triggerAfter = blockConfig.triggerAfter
        this.active = false
    }

    public fire(position: Phaser.Math.Vector2) {
        super.fire(position)
        this.active = false

        this.scene.tweens.add({
            targets: this,
            alpha: { from: 0, to: 1 },
            duration: this.triggerAfter * 1000,
            ease: 'Cubic.easeIn',
            completeDelay: this.triggerAfter * 1000
        });
        
        this.scene.time.addEvent({
            delay: this.triggerAfter * 1000,
            callback: () => {
                this.active = true
            }
        })
    }

    public actionOnCollision(hittedPlayer: Player) {
        if (this.active) {
            super.actionOnCollision(hittedPlayer)
            this.kill()            
        }
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
            hittedPlayer.hit(this.damage, this.effects)
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
        
        this.addProjectile('pistolBullet', Bullet, projectilesConfig.pistolBullet, 200)
        this.addProjectile('ak47Bullet', Bullet, projectilesConfig.ak47Bullet, 200)
        this.addProjectile('p90Bullet', Bullet, projectilesConfig.p90Bullet, 200)
        this.addProjectile('revolverBullet', Bullet, projectilesConfig.revolverBullet, 200)
        this.addProjectile('thompsonBullet', Bullet, projectilesConfig.thompsonBullet, 200)
        this.addProjectile('chargedArrowProjectile', Bullet, projectilesConfig.chargedArrowProjectile, 20)
        this.addProjectile('flameProjectile', BlockWithTick, projectilesConfig.flameProjectile, 20)
        this.addProjectile('rootTipProjectile', BlockWithDelay, projectilesConfig.rootTipProjectile, 20)
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
