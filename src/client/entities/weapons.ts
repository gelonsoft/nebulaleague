import { WeaponModel } from '@shared/models'
import { Config } from '@shared/config'
import { MainScene } from '~/scenes/mainScene'
import { Player } from '~/player'
import { Projectiles } from '~/entities/projectiles'



export class Weapon  {
    public scene: MainScene
    public player: Player
    public projectiles: Projectiles
    public name: string
    public frame: string
    public laserGraphics: Phaser.GameObjects.Graphics
    public projectileKey: string
    public cooldownDelay: number
    public canFire: boolean
    public rangeDistance: number
    public weaponTimerEvent: Phaser.Time.TimerEvent | null
    
    constructor(scene: MainScene, weaponModel: WeaponModel) {
        this.scene = scene
        this.projectiles = scene.projectiles
        this.name = weaponModel.name
        this.frame = weaponModel.frame
        this.cooldownDelay = weaponModel.cooldownDelay
        this.projectileKey =  weaponModel.projectileKey
        this.canFire = true
        this.rangeDistance = Projectiles.getDistance(this.projectileKey)
        this.laserGraphics = this.scene.add.graphics({
            lineStyle: weaponModel.laser
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
        this.projectiles.fire(this.projectileKey, player.id, sourcePosition, rotationPlayer)
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
            this.laserGraphics.alpha = 0.5
        } else {
            this.laserGraphics.alpha = 0.1
        }

        const line = new Phaser.Geom.Line(
            sourcePosition.x, sourcePosition.y,
            sourcePosition.x + Math.cos(angleToPointer) * this.rangeDistance,
            sourcePosition.y + Math.sin(angleToPointer) * this.rangeDistance,
        )
        this.laserGraphics.clear()
        this.laserGraphics.strokeLineShape(line)
    }
    public clearDraw() {}
}


export function buildWeapons(
    scene: MainScene,
): Record<string, Weapon> {
    const weapons = {}
    for(const [key, weaponConfig] of Object.entries(Config.weapons)) {
        weapons[key] = new Weapon(scene, weaponConfig)
    }
    return weapons
}
