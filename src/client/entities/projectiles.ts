import { MainScene } from "../scenes/mainScene"
import { ProjectileModel } from "../../shared/models"
import { Player } from "../player"
import { Weapon } from "./weapons"


const projectilesConfig = {
    laserRed: {
        name: 'laserRed',
        frame: 'laserRed03.png',
        speed: 1300,
        lifespan: 0.4,
        width: 6,
        height: 6,
    },
    laserBlue: {
        name: 'laserBlue',
        frame: 'laserBlue03.png',
        speed: 1400,
        lifespan: 0.5,
        width: 10,
        height: 10,
    },
    laserGreen: {
        name: 'laserGreen',
        frame: 'laserGreen03.png',
        speed: 1600,
        lifespan: 0.2,
        width: 20,
        height: 20,
    }
}



export interface ProjectileInterface {
    fire(weapon: Weapon, position: Phaser.Math.Vector2, rotation: number): void
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
        this.scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
        this.scene.add.existing(this)
        
        this.setDisplaySize(projectileConfig.width, projectileConfig.height)
        this.body.setEnable(false)
        this.setActive(false)
        this.setVisible(false)
    }

    public fire(weapon: Weapon, position: Phaser.Math.Vector2, rotation: number) {
        const body = this.body as Phaser.Physics.Arcade.Body
        this.damage = weapon.damage
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

        const laserRedBullets = Array.from({length: 200}, () => {
            return new Bullet(scene, projectilesConfig.laserRed)
        })

        const laserBlueBullets = Array.from({length: 200}, () => {
            return new Bullet(scene, projectilesConfig.laserBlue)
        })

        const laserGreenBullets = Array.from({length: 200}, () => {
            return new Bullet(scene, projectilesConfig.laserGreen)
        })

        
        laserBlueGroup.addMultiple(laserBlueBullets)
        laserRedGroup.addMultiple(laserRedBullets)
        laserGreenGroup.addMultiple(laserGreenBullets)
        
        this.projectiles.set('laserRed', laserRedGroup)
        this.projectiles.set('laserBlue', laserBlueGroup)
        this.projectiles.set('laserGreen', laserGreenGroup)
    }

    
    public fire(
        key: string,
        weapon: Weapon,
        position: Phaser.Math.Vector2,
        rotation: number): void {
        const bulletGroup = this.projectiles.get(key)
        const projectile = bulletGroup.getFirstDead()
        projectile.fire(weapon, position, rotation)
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
        ]
    }
}
