import { MainScene } from "../scenes/mainScene"
import { ProjectileModel, BlockModel } from "../../shared/models"
import { Player } from "../player"


const projectilesConfig = {
    laserRed: {
        name: 'laserRed',
        frame: 'laserRed03.png',
        damage: 100,
        speed: 1300,
        lifespan: 0.4,
        width: 8,
        height: 8,
    },
    laserBlue: {
        name: 'laserBlue',
        frame: 'laserBlue03.png',
        damage: 200,
        speed: 1400,
        lifespan: 0.5,
        width: 10,
        height: 10,
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
    flame: {
        name: 'flame',
        radius: 50,
        lifespan: 3,
        damage: 200,
        tickTime: 1,
        fillColor: 0xaa0000,
        strokeColor: 0xff0000,
        fillAlpha: 0.6,
        strokeAlpha: 0.8,
    }
}



export interface ProjectileInterface {
    fire(position: Phaser.Math.Vector2, rotation: number): void
    actionOnCollision(hittedPlayer: Player): void
}

export class Bullet extends Phaser.GameObjects.Sprite implements ProjectileInterface {
    public body: Phaser.Physics.Arcade.Body
    public scene: MainScene
    public gate: number
    public lifespan: number
    public speed: number
    public shotInterval: number
    public damage?: number
    public constructor(scene: MainScene, projectileConfig: ProjectileModel) {
        super(scene, -10000, -10000, 'atlas', projectileConfig.frame)
        this.scene = scene
        this.gate = 0
        this.lifespan = projectileConfig.lifespan
        this.speed = projectileConfig.speed
        this.damage = projectileConfig.damage
        this.scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
        this.scene.add.existing(this)
        
        this.setDisplaySize(projectileConfig.width, projectileConfig.height)
        this.body.setEnable(false)
        this.setActive(false)
        this.setVisible(false)
    }

    public fire(position: Phaser.Math.Vector2, rotation: number) {
        const body = this.body as Phaser.Physics.Arcade.Body
        const ux = Math.cos(rotation)
        const uy = Math.sin(rotation)
        body.reset(position.x, position.y)
        this.setRotation(rotation + Math.PI / 2)
        body.velocity.x = ux * this.speed
        body.velocity.y = uy * this.speed
        body.setEnable(true)
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
        this.kill()
    }
    
    public kill() {
        this.setActive(false)
        this.setVisible(false)
        this.body.setEnable(false)
        this.body.reset(-10000, -10000)        
    }
}


export class Block extends Phaser.GameObjects.Graphics{
    public body: Phaser.Physics.Arcade.Body
    public scene: MainScene
    public radius: number
    public tickTime: number
    public lifespan: number
    public damage: number
    public fillColor: number
    public strokeColor: number
    public fillAlpha: number
    public strokeAlpha: number
    
    public constructor(scene: MainScene, blockConfig: BlockModel) {
        super(scene)
        this.radius = blockConfig.radius
        this.tickTime = blockConfig.tickTime
        this.lifespan = blockConfig.lifespan
        this.damage = blockConfig.damage
        this.fillColor = blockConfig.fillColor
        this.strokeColor = blockConfig.strokeColor
        this.fillAlpha = blockConfig.fillAlpha
        this.strokeAlpha = blockConfig.strokeAlpha
        this.scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
        this.scene.add.existing(this)
        this.body.setEnable(false)
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
        const laserBlueGroup = new Phaser.Physics.Arcade.Group(scene.physics.world, scene)
        const laserRedGroup = new Phaser.Physics.Arcade.Group(scene.physics.world, scene)
        const laserGreenGroup = new Phaser.Physics.Arcade.Group(scene.physics.world, scene)
        const flameGroup = new Phaser.Physics.Arcade.Group(scene.physics.world, scene)

        const laserRedBullets = Array.from({length: 200}, () => {
            return new Bullet(scene, projectilesConfig.laserRed)
        })

        const laserBlueBullets = Array.from({length: 200}, () => {
            return new Bullet(scene, projectilesConfig.laserBlue)
        })

        const laserGreenBullets = Array.from({length: 200}, () => {
            return new Bullet(scene, projectilesConfig.laserGreen)
        })

        const flameBlocks = Array.from({length: 20}, () => {
            return new Block(scene, projectilesConfig.flame)
        })
        
        
        laserBlueGroup.addMultiple(laserBlueBullets)
        laserRedGroup.addMultiple(laserRedBullets)
        laserGreenGroup.addMultiple(laserGreenBullets)
        flameGroup.addMultiple(flameBlocks)
        
        this.projectiles.set('laserRed', laserRedGroup)
        this.projectiles.set('laserBlue', laserBlueGroup)
        this.projectiles.set('laserGreen', laserGreenGroup)
        this.projectiles.set('flame', flameGroup)
    }

    
    public fire(
        key: string,
        position: Phaser.Math.Vector2,
        rotation?: number): void {
        const projectileGroup = this.projectiles.get(key)
        const projectile = projectileGroup.getFirstDead()
        projectile.fire(position, rotation)
    }


    public getDistance(key): number {
        const projectileModel = projectilesConfig[key]
        return projectileModel.speed * projectileModel.lifespan
    }

    public getAll(): Array<Phaser.Physics.Arcade.Group> {
        return [
            this.projectiles.get('laserRed'),
            this.projectiles.get('laserBlue'),
            this.projectiles.get('laserGreen'),
            this.projectiles.get('flame'),
        ]
    }
}
