import * as _ from 'lodash'
import { ProjectileName, WeaponModel } from '~/shared/models'
import { Config } from '~/shared/config'
import { GameScene } from '~/client/scenes/gameScene'
import { Player } from '~/client/entities/player'
import { Projectiles } from '~/client/entities/projectiles'

export class Weapon {
    public scene: GameScene
    public player: Player
    public projectiles: Projectiles
    public name: string
    public frame: string
    public laserGraphics: Phaser.GameObjects.Graphics
    public projectileKey: ProjectileName
    public cooldownDelay: number
    public canFire: boolean
    public rangeDistance: number
    public weaponTimerEvent: Phaser.Time.TimerEvent | null

    constructor(scene: GameScene, weaponModel: WeaponModel) {
        this.scene = scene
        this.projectiles = scene.projectiles
        this.name = weaponModel.name
        this.frame = weaponModel.frame
        this.cooldownDelay = weaponModel.cooldownDelay
        this.projectileKey = weaponModel.projectileKey
        this.canFire = true
        this.rangeDistance = Projectiles.getDistance(this.projectileKey)
        this.laserGraphics = this.scene.add.graphics({
            lineStyle: weaponModel.laser,
        })
    }

    public trigger(
        player: Player,
        sourcePosition: Phaser.Math.Vector2,
        pointerPosition: Phaser.Math.Vector2
    ): void {
        const rotationPlayer = Phaser.Math.Angle.Between(
            sourcePosition.x,
            sourcePosition.y,
            pointerPosition.x,
            pointerPosition.y
        )
        this.projectiles.fire(this.projectileKey, player.id, sourcePosition, rotationPlayer)
    }

    public draw(
        sourcePosition: Phaser.Math.Vector2,
        pointerPosition: Phaser.Math.Vector2,
        isLaserReady: boolean
    ): void {
        const angleToPointer = Phaser.Math.Angle.Between(
            sourcePosition.x,
            sourcePosition.y,
            pointerPosition.x,
            pointerPosition.y
        )

        if (isLaserReady) {
            this.laserGraphics.alpha = 0.5
        } else {
            this.laserGraphics.alpha = 0.1
        }

        const line = new Phaser.Geom.Line(
            sourcePosition.x,
            sourcePosition.y,
            sourcePosition.x + Math.cos(angleToPointer) * this.rangeDistance,
            sourcePosition.y + Math.sin(angleToPointer) * this.rangeDistance
        )
        this.laserGraphics.clear()
        this.laserGraphics.strokeLineShape(line)
    }
    public clearDraw() { }
}

export function buildWeapons(scene: GameScene): Record<string, Weapon> {
    return _.mapValues(Config.weapons, config => new Weapon(scene, config))
}
