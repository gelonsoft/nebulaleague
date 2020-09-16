import { MainScene } from "../scenes/mainScene"
import { Player, EffectKeys, EffectInterface } from "../player"
import { GameObjects } from "phaser"


const projectilesConfig = {
    pistolBullet: {
        name: 'pistolBullet',
        className: 'Bullet',
        frame: 'beams-purple1.png',
        damage: 80,
        speed: 1300,
        lifespan: 0.4,
        radius: 14,
    },
    ak47Bullet: {
        name: 'ak47Bullet',
        className: 'Bullet',
        frame: 'beams-purple1.png',
        damage: 70,
        speed: 1200,
        lifespan: 0.45,
        radius: 14,
    },
    p90Bullet: {
        name: 'p90Bullet',
        className: 'Bullet',
        frame: 'beams-purple1.png',
        damage: 40,
        speed: 1500,
        lifespan: 0.3,
        radius: 14,
    },
    revolverBullet: {
        name: 'revolverBullet',
        className: 'Bullet',
        frame: 'beams-purple1.png',
        damage: 450,
        speed: 100,
        lifespan: 10,
        radius: 16,
    },
    thompsonBullet: {
        name: 'thompsonBullet',
        className: 'Bullet',
        frame: 'beams-purple1.png',
        damage: 200,
        speed: 1700,
        lifespan: 0.45,
        radius: 18,
    },
    chargedArrowProjectile: {
        name: 'chargedArrowProjectile',
        className: 'Bullet',
        frame: 'charged_arrow_bullet.png',
        damage: 80,
        speed: 1200,
        lifespan: 0.5,
        radius: 25,
        effects: [{
            name: EffectKeys.Slow,
            value: 0.8,
            duration: 2,
        }]
    },
    flameProjectile: {
        name: 'flameProjectile',
        className: 'BlockWithTick',
        radius: 50,
        lifespan: 1,
        damage: 25,
        tick: 0.15,
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
        className: 'BlockWithDelay',
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
    },
    frozenWaveProjectile: {
        name: 'frozenWaveProjectile',
        className: 'BlockWithDelay',
        radius: 320,
        damage: 10,
        lifespan: 0.6,
        triggerAfter: 0.2,
        fillColor: 0x00aaff,
        strokeColor: 0x00aaff,
        fillAlpha: 0.6,
        strokeAlpha: 0.8,
        effects: [{
            name: EffectKeys.Freeze,
            value: 0.8,
            duration: 4,
        }]
    },
    psychicWaveProjectile: {
        name: 'psychicWaveProjectile',
        className: 'BlockWithDelay',
        radius: 230,
        damage: 0,
        lifespan: 0.6,
        triggerAfter: 0.2,
        fillColor: 0x800080,
        strokeColor: 0xa000a0,
        fillAlpha: 0.6,
        strokeAlpha: 0.8,
        effects: [{
            name: EffectKeys.Stun,
            value: 0.8,
            duration: 1.5,
        }]
    },
    lightningWaveProjectile: {
        name: 'lightningWaveProjectile',
        className: 'BlockWithDelay',
        radius: 260,
        damage: 10,
        lifespan: 0.6,
        triggerAfter: 0.2,
        fillColor: 0xfdd023,
        strokeColor: 0xfee034,
        fillAlpha: 0.6,
        strokeAlpha: 0.8,
        effects: [{
            name: EffectKeys.Paralyze,
            value: 0.8,
            duration: 2.5,
        }]
    },
    fireWaveProjectile: {
        name: 'fireWaveProjectile',
        className: 'BlockWithDelay',
        radius: 240,
        damage: 30,
        lifespan: 0.6,
        triggerAfter: 0.2,
        fillColor: 0xe25822,
        strokeColor: 0xe37a33,
        fillAlpha: 0.6,
        strokeAlpha: 0.8,
        effects: [{
            name: EffectKeys.Burn,
            value: 10,
            duration: 1,
            tick: 0.5,
        }]
    }
}


export interface ProjectileInterface {
    fire(position: Phaser.Math.Vector2, rotation: number): void
    actionOnCollision(hittedPlayer: Player): void
    kill(): void
    fromPlayerId: string
    name: string
    x: number
    y: number
    rotation?: number
}

export interface ProjectileConfig {
    name: string
    frame: string
    speed: number
    damage: number
    lifespan: number
    effects?: Array<any>
    radius: number
    fillColor?: number
    strokeColor?: number
    fillAlpha?: number
    strokeAlpha?: number
    tick?: number
    triggerAfter?: number
    shouldBeKilled: false
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
    public fromPlayerId: string
    public killEvent: Phaser.Time.TimerEvent
    public shouldBeKilled: boolean
    public effects?: Array<EffectInterface>
        

    public constructor(scene: MainScene, projectileConfig: ProjectileConfig) {
        super(scene, -10000, -10000, 'atlas', projectileConfig.frame)
        this.scene = scene
        this.name = projectileConfig.name
        this.lifespan = projectileConfig.lifespan
        this.speed = projectileConfig.speed
        this.damage = projectileConfig.damage
        this.fromPlayerId = 'unknown'
        this.effects = projectileConfig.effects || []
        this.killEvent = null
        this.shouldBeKilled = false
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
        this.setRotation(rotation)
        this.body.velocity.x = ux * this.speed
        this.body.velocity.y = uy * this.speed
        this.killEvent = this.scene.time.addEvent({
            delay: this.lifespan * 1000,
            callback: () => {
                
                this.shouldBeKilled = true

                this.kill()

            },
            callbackScope: this,
        })
    }

    public actionOnCollision(hittedPlayer: Player) {
        hittedPlayer.hit(this.damage, this.effects)
        this.kill()
        this.killEvent.remove()
        this.killEvent = null
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
    public fromPlayerId: string
    public effects?: Array<EffectInterface>
    public fillColor: number
    public strokeColor: number
    public fillAlpha: number
    public strokeAlpha: number
    public hittedPlayerIds: Set<string>
    public killedOnHit: boolean
    
    
    public constructor(scene: MainScene, blockConfig: ProjectileConfig) {
        super(scene)
        this.fromPlayerId = 'unkown'
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
        this.hittedPlayerIds = new Set()
        this.killedOnHit = false
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
        // this.scene.syncProjectileFire(this)
    }

    public actionOnCollision(hittedPlayer: Player) {
        if (!this.hittedPlayerIds.has(hittedPlayer.id)) {
            hittedPlayer.hit(this.damage, this.effects)
            this.hittedPlayerIds.add(hittedPlayer.id)
        }
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
    public constructor(scene: MainScene, blockConfig: ProjectileConfig) {
        super(scene, blockConfig)
        this.triggerAfter = blockConfig.triggerAfter
        this.active = false
    }

    public fire(position: Phaser.Math.Vector2) {
        super.fire(position)
        this.active = false

        this.scene.tweens.add({
            targets: this,
            alpha: { from: 0.2, to: 1 },
            duration: this.triggerAfter * 1000,
            ease: 'Cubic.easeIn',
        })
        
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
        }
    }
}


export class BlockWithTick extends Block implements ProjectileInterface {
    public tick: number
    public tickTimer: number
    public constructor(scene: MainScene, blockConfig: ProjectileConfig) {
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
    public projectileByIds: Map<string, Bullet | Block>
    public scene: MainScene
    constructor (scene: MainScene)
    {
        this.projectiles = new Map()
        this.projectileByIds = new Map()
        this.scene = scene
        
        this.addProjectile('pistolBullet', projectilesConfig.pistolBullet, 200)
        this.addProjectile('ak47Bullet', projectilesConfig.ak47Bullet, 200)
        this.addProjectile('p90Bullet', projectilesConfig.p90Bullet, 200)
        this.addProjectile('revolverBullet', projectilesConfig.revolverBullet, 200)
        this.addProjectile('thompsonBullet', projectilesConfig.thompsonBullet, 200)
        this.addProjectile('chargedArrowProjectile', projectilesConfig.chargedArrowProjectile, 20)
        this.addProjectile('flameProjectile', projectilesConfig.flameProjectile, 20)
        this.addProjectile('rootTipProjectile', projectilesConfig.rootTipProjectile, 20)
        this.addProjectile('frozenWaveProjectile', projectilesConfig.frozenWaveProjectile, 40)
        this.addProjectile('psychicWaveProjectile', projectilesConfig.psychicWaveProjectile, 40)
        this.addProjectile('lightningWaveProjectile', projectilesConfig.lightningWaveProjectile, 40)
        this.addProjectile('fireWaveProjectile', projectilesConfig.fireWaveProjectile, 40)
    }


    public static getTimeToReachTarget(key: string, targetDistance: number) {
        if (projectilesConfig[key]?.speed) {
            return targetDistance / projectilesConfig[key].speed
        } else if(projectilesConfig[key]?.triggerAfter) {
            return projectilesConfig[key].triggerAfter 
        } else {
            return 0
        }
    }


    public static getProjectileByClassName(projectileKeyName: string) {
        return {
            'Bullet': Bullet,
            'BlockWithTick': BlockWithTick,
            'BlockWithDelay': BlockWithDelay,
        }[projectileKeyName]
    }
    

    public static getDistanceProjectile(key): number {
        const projectileConfig = projectilesConfig[key]
        return projectileConfig.speed * projectileConfig.lifespan
    }

    
    public addProjectile(
        key: string,
        projectileConfig: any,
        length: number): void {
        const group = new Phaser.Physics.Arcade.Group(this.scene.physics.world, this.scene)
        const keys = [...Array(length).keys()]
        keys.forEach((index) => {
            const ClassName = Projectiles.getProjectileByClassName(projectileConfig.className)
            const projectile = new ClassName(this.scene, projectileConfig)
            projectile.setName(`${key}-${index}`)
            this.projectileByIds.set(projectile.name, projectile)
            group.add(projectile)
        })
        this.projectiles.set(key, group)
    }

    public fire(
        key: string,
        fromPlayerId: string,
        position: Phaser.Math.Vector2,
        rotation?: number)
    : void {
        const projectileGroup = this.projectiles.get(key)
        const projectile = projectileGroup.getFirstDead()
        projectile.fromPlayerId = fromPlayerId
        projectile.fire(position, rotation)
    }


    public getAll(): Array<Phaser.Physics.Arcade.Group> {
        return Array.from(this.projectiles.values())
    }
}
