import { MainScene } from '../scenes/mainScene'
import { Player } from '../player'
import { Projectiles, getDistanceProjectile } from './projectiles'


export const weaponsConfig = {
    pistol: {
        name: 'pistol',
        frame: 'pistol-gun.png',
        cooldownDelay: 0.7,
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
        cooldownDelay: 0.5,
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
        cooldownDelay: 0.2,
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
        cooldownDelay: 0.2,
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
        cooldownDelay: 5,
        projectileKey: 'thompsonBullet',
        laserConfig: {
            color: 0x0000ff,
            width: 3,
            alpha: 0.9,
        }
    }
}

export interface LaserConfig {
    width: number
    color: number
    alpha: number
}

export interface WeaponConfig {
    name: string
    frame: string
    cooldownDelay: number
    projectileKey: string
    laserConfig: LaserConfig
}


export class Weapon  {
    public scene: MainScene
    public player: Player
    public projectiles: Projectiles
    public name: string
    public frame: string
    public laser: Phaser.GameObjects.Graphics
    public projectileKey: string
    public cooldownDelay: number
    public canFire: boolean
    public rangeDistance: number
    public weaponTimerEvent: Phaser.Time.TimerEvent | null
    
    constructor(scene: MainScene, weaponConfig: WeaponConfig) {
        this.scene = scene
        this.projectiles = scene.projectiles
        this.name = weaponConfig.name
        this.frame = weaponConfig.frame
        this.cooldownDelay = weaponConfig.cooldownDelay
        this.projectileKey =  weaponConfig.projectileKey
        this.canFire = true
        this.rangeDistance = getDistanceProjectile(this.projectileKey)
        this.laser = this.scene.add.graphics({
            lineStyle: weaponConfig.laserConfig
        })
    }

    public trigger(
        player: Player,
        sourcePosition: Phaser.Math.Vector2,
        pointerPosition: Phaser.Math.Vector2,
    ) : void {
        const rotationPlayer = Phaser.Math.Angle.Between(
            sourcePosition.x, sourcePosition.y,
            pointerPosition.x, pointerPosition.y,
        )
        this.projectiles.syncFire(this.projectileKey, player.id, sourcePosition, rotationPlayer)
    }

    
    public draw(
        sourcePosition: Phaser.Math.Vector2,
        pointerPosition: Phaser.Math.Vector2,
        isLaserReady: boolean
    ): void {
        const angleToPointer = Phaser.Math.Angle.Between(
            sourcePosition.x, sourcePosition.y,
            pointerPosition.x, pointerPosition.y,
        )
        
        if (isLaserReady) {
            this.laser.alpha = 0.5
        } else {
            this.laser.alpha = 0.1
        }

        const line = new Phaser.Geom.Line(
            sourcePosition.x, sourcePosition.y,
            sourcePosition.x + Math.cos(angleToPointer) * this.rangeDistance * 0.98,
            sourcePosition.y + Math.sin(angleToPointer) * this.rangeDistance * 0.98,
        )
        this.laser.clear()
        this.laser.strokeLineShape(line)
    }

    public clearDraw() {}
}


export function buildWeapons(
    scene: MainScene,
): Record<string, Weapon> {
    const weapons = {}
    for(const [key, weaponConfig] of Object.entries(weaponsConfig)) {
        weapons[key] = new Weapon(scene, weaponConfig)
    }
    return weapons
}
