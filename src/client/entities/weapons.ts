import { MainScene } from '../scenes/mainScene'
import { WeaponModel } from '../../shared/models'
import { Player } from '../player'
import { Projectiles } from './projectiles'


const weaponsConfig = {
    laserRed: {
        name: 'laserRed',
        frame: 'laserRed02.png',
        damage: 100,
        shotInterval: 1,
        cooldown: 0,
        projectileKey: 'laserRed',
        laserConfig: {
            color: 0xff5252,
            width: 3,
            alpha: 0.9,
        }
    },
    laserBlue: {
        name: 'laserBlue',
        frame: 'laserBlue02.png',
        damage: 200,
        shotInterval: 4,
        cooldown: 0,
        projectileKey: 'laserBlue',
        laserConfig: {
            color: 0x00f8f8,
            width: 3,
            alpha: 0.9,
        }
    },
    laserGreen: {
        name: 'laserGreen',
        frame: 'laserGreen02.png',
        damage: 500,
        shotInterval: 12,
        cooldown: 0,
        projectileKey: 'laserGreen',
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
    damage: number
    fire(position: Phaser.Math.Vector2, playerId: string, rotation: number): void
}


export class Weapon implements WeaponInterface {
    public scene: MainScene
    public player: Player
    public projectiles: Projectiles
    public name: string
    public frame: string
    public damage: number
    public laser: Phaser.GameObjects.Graphics
    public projectileKey: string
    public shotInterval: number
    public canFire: boolean
    public weaponTimerEvent: Phaser.Time.TimerEvent | null
    
    constructor(scene: MainScene, weaponModel: WeaponModel) {
        this.scene = scene
        this.projectiles = scene.projectiles
        this.name = weaponModel.name
        this.frame = weaponModel.frame
        this.damage = weaponModel.damage
        this.shotInterval = weaponModel.shotInterval
        this.projectileKey =  weaponModel.projectileKey
        this.canFire = true
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

    public getDistance(): number {
        return this.projectiles.getDistance(this.projectileKey)
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
        
        const distance = this.getDistance()
        
        if (isLaserReady) {
            this.laser.alpha = 0.9
        } else {
            this.laser.alpha = 0.3
        }

        const line = new Phaser.Geom.Line(
            sourcePosition.x, sourcePosition.y,
            sourcePosition.x + Math.cos(angleToPointer) * distance * 0.98,
            sourcePosition.y + Math.sin(angleToPointer) * distance * 0.98,
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
