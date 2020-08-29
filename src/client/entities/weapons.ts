import { MainScene } from '../scenes/mainScene'
import { WeaponModel } from '../../shared/models'
import { Player } from '../player'
import { Projectiles } from './projectiles'


const weaponsConfig = {
    pistol: {
        name: 'pistol',
        frame: 'pistol-gun.png',
        shotInterval: 1,
        cooldown: 0,
        projectileKey: 'pistolBullet',
        laserConfig: {
            color: 0xff5252,
            width: 3,
            alpha: 0.9,
        }
    },
    ak47: {
        name: 'ak47',
        frame: 'ak47.png',
        shotInterval: 0.5,
        cooldown: 0,
        projectileKey: 'ak47Bullet',
        laserConfig: {
            color: 0x00f8f8,
            width: 3,
            alpha: 0.9,
        }
    },
    p90: {
        name: 'p90',
        frame: 'p90.png',
        shotInterval: 0.2,
        cooldown: 0,
        projectileKey: 'p90Bullet',
        laserConfig: {
            color: 0x00ff00,
            width: 3,
            alpha: 0.9,
        }
    },
    revolver: {
        name: 'revolver',
        frame: 'revolver.png',
        shotInterval: 10,
        cooldown: 0,
        projectileKey: 'revolverBullet',
        laserConfig: {
            color: 0x00ff00,
            width: 3,
            alpha: 0.9,
        }
    },
    thompson: {
        name: 'thompson',
        frame: 'thompson-m1928.png',
        shotInterval: 12,
        cooldown: 0,
        projectileKey: 'thompsonBullet',
        laserConfig: {
            color: 0x00ff00,
            width: 3,
            alpha: 0.9,
        }
    }
    
}


export interface WeaponInterface {
    scene: MainScene
    projectiles: Projectiles
    shotInterval: number
    name: string
    frame: string
    fire(position: Phaser.Math.Vector2, playerId: string, rotation: number): void
}


export class Weapon implements WeaponInterface {
    public scene: MainScene
    public player: Player
    public projectiles: Projectiles
    public name: string
    public frame: string
    public laser: Phaser.GameObjects.Graphics
    public projectileKey: string
    public shotInterval: number
    public canFire: boolean
    public rangeDistance: number
    public weaponTimerEvent: Phaser.Time.TimerEvent | null
    
    constructor(scene: MainScene, weaponModel: WeaponModel) {
        this.scene = scene
        this.projectiles = scene.projectiles
        this.name = weaponModel.name
        this.frame = weaponModel.frame
        this.shotInterval = weaponModel.shotInterval
        this.projectileKey =  weaponModel.projectileKey
        this.canFire = true
        this.rangeDistance = this.projectiles.getDistance(this.projectileKey)
        this.laser = this.scene.add.graphics({
            lineStyle: weaponModel.laserConfig
        })
    }

    public fire(position: Phaser.Math.Vector2, playerId: string, rotation: number ): void {
        this.projectiles.fire(
            this.projectileKey,
            playerId,
            position,
            rotation,
        )
    }

    
    public draw(
        sourcePosition: Phaser.Math.Vector2,
        pointerPosition: Phaser.Math.Vector2,
        isLaserReady: boolean
    ): void {
        const angleToPointer =
            Phaser.Math.Angle.Between(
                sourcePosition.x, sourcePosition.y,
                pointerPosition.x, pointerPosition.y,
            )
        
        if (isLaserReady) {
            this.laser.alpha = 0.9
        } else {
            this.laser.alpha = 0.3
        }

        const line = new Phaser.Geom.Line(
            sourcePosition.x, sourcePosition.y,
            sourcePosition.x + Math.cos(angleToPointer) * this.rangeDistance * 0.98,
            sourcePosition.y + Math.sin(angleToPointer) * this.rangeDistance * 0.98,
        )
        this.laser.clear()
        this.laser.strokeLineShape(line)
    }
}


export function buildWeapons(
    scene: MainScene,
): Record<string, Weapon> {
    const weapons = {}
    for(const [key, value] of Object.entries(weaponsConfig)) {
        weapons[key] = new Weapon(scene, value)
    }
    return weapons
}
