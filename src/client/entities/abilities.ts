import { AbilityDrawingStyle, AbilityModel, AbilityAction } from '@shared/models'
import { Config } from '@shared/config'
import { MainScene } from '~/scenes/mainScene'
import { Player } from '~/player'
import { Projectiles } from '~/entities/projectiles'


export class Ability {
    public scene: MainScene
    public projectiles: Projectiles
    public name: string
    public frame: string
    public action: AbilityAction
    public cooldownDelay: number
    public drawingStyle: AbilityDrawingStyle
    public projectileKey?: string
    public rangeDistance: number
    public radiusDistance: number
    public triggerAfter: number
    public raySize: number
    public rayColor?: number
    public rangeDistanceColor: number
    public radiusDistanceColor: number
    public rangeDistanceAlpha: number
    public radiusDistanceAlpha: number
    public rayDistanceAlpha: number
    public rangeGraphics?: Phaser.GameObjects.Graphics
    public radiusGraphics?: Phaser.GameObjects.Graphics
    public rayGraphics?: Phaser.GameObjects.Graphics


    constructor(scene: MainScene, config: AbilityModel) {
        this.scene = scene
        this.projectiles = this.scene.projectiles
        this.name = config.name
        this.frame = config.frame
        this.action = config.action
        this.drawingStyle = config.drawingStyle
        this.projectileKey = config.projectileKey
        this.cooldownDelay = config.cooldownDelay
        this.rangeDistance = config.rangeDistance || 0
        this.radiusDistance = config.radiusDistance || 0
        this.triggerAfter = config.triggerAfter || 0
        this.raySize = config.raySize || 20
        this.rayColor = config.rayColor || 0xffffff
        this.rangeDistanceColor = config.rangeDistanceColor || 0xffffff
        this.radiusDistanceColor = config.radiusDistanceColor || 0xffffff
        this.rangeDistanceAlpha = config.rangeDistanceAlpha || 0.2
        this.radiusDistanceAlpha = config.radiusDistanceAlpha || 0.8
        this.rayDistanceAlpha = config.radiusDistanceAlpha || 1


        switch (config.drawingStyle) {
            case AbilityDrawingStyle.Zone:
                this.rangeGraphics = this.scene.add.graphics()
                this.radiusGraphics = this.scene.add.graphics()
                break;

            case AbilityDrawingStyle.Ray:
                this.rangeDistance = Projectiles.getDistance(this.projectileKey)
                this.rangeGraphics = this.scene.add.graphics()
                this.rayGraphics = this.scene.add.graphics()
                break;
        }
    }
    public draw(player: Player, pointerPosition: Phaser.Math.Vector2): void {
        if (this.rangeGraphics) {
            this.rangeGraphics.clear()
            this.rangeGraphics.fillStyle(this.rangeDistanceColor, this.rangeDistanceAlpha)
            this.rangeGraphics.fillCircle(player.body.center.x, player.body.center.y, this.rangeDistance)
            this.rangeGraphics.lineStyle(2, this.rangeDistanceColor, this.rangeDistanceAlpha)
            this.rangeGraphics.strokeCircle(player.body.center.x, player.body.center.y, this.rangeDistance)
        }

        if (this.radiusGraphics) {
            this.radiusGraphics.clear()
            const targetPosition = this.isInRangeToTrigger(player.body.center, pointerPosition) ?
                pointerPosition :
                this.getMaxRadiusPosition(player)

            this.radiusGraphics.fillStyle(this.rangeDistanceColor, this.radiusDistanceAlpha)
            this.radiusGraphics.fillCircle(targetPosition.x, targetPosition.y, this.radiusDistance)
            this.radiusGraphics.lineStyle(2, this.rangeDistanceColor, this.radiusDistanceAlpha)
            this.radiusGraphics.strokeCircle(targetPosition.x, targetPosition.y, this.radiusDistance)
        }

        if (this.rayGraphics) {
            this.rayGraphics.clear()
            const rayEndPosition = this.getMaxRadiusPosition(player)

            const line = new Phaser.Geom.Line(
                player.body.center.x,
                player.body.center.y,
                rayEndPosition.x,
                rayEndPosition.y,
            )

            this.rayGraphics.lineStyle(this.raySize, this.rayColor, this.rayDistanceAlpha)
            this.rayGraphics.strokeLineShape(line)
        }
    }

    public clearDraw(): void {
        if (this.rangeGraphics) {
            this.rangeGraphics.clear()
        }
        if (this.radiusGraphics) {
            this.radiusGraphics.clear()
        }
        if (this.rayGraphics) {
            this.rayGraphics.clear()
        }
    }

    public isInRangeToTrigger(
        sourcePosition: Phaser.Math.Vector2,
        pointerPosition: Phaser.Math.Vector2
    ): boolean {
        const distance = Phaser.Math.Distance.Between(
            sourcePosition.x, sourcePosition.y,
            pointerPosition.x, pointerPosition.y
        )
        return distance <= this.rangeDistance
    }

    public getMaxRadiusPosition(player: Player): Phaser.Math.Vector2 {
        return Phaser.Math.Vector2.ONE
            .clone()
            .setToPolar(player.rotation - Math.PI / 2)
            .scale(this.rangeDistance)
            .add(player.body.center)
    }


    public triggerProjectile(
        player: Player,
        sourcePosition: Phaser.Math.Vector2,
        pointerPosition: Phaser.Math.Vector2,
        withRotation = false,
    ): void {
        if (withRotation) {
            const rotationPlayer = Phaser.Math.Angle.Between(
                sourcePosition.x, sourcePosition.y,
                pointerPosition.x, pointerPosition.y,
            )
            this.projectiles.fire(this.projectileKey, player.id, sourcePosition, rotationPlayer)
        } else {
            this.projectiles.fire(this.projectileKey, player.id, pointerPosition)
        }
    }


    public trigger(
        player: Player,
        sourcePosition: Phaser.Math.Vector2,
        pointerPosition: Phaser.Math.Vector2
    ): void {
        const targetPosition =
            this.isInRangeToTrigger(player.body.center, pointerPosition) ?
                pointerPosition :
                this.getMaxRadiusPosition(player)

        switch (this.action) {
            case AbilityAction.Blink:
                this.scene.tweens.add({
                    targets: player,
                    alpha: { from: 1, to: 0 },
                    duration: this.triggerAfter * 1000,
                    ease: 'Cubic.easeIn',
                    onComplete: () => {
                        player.body.reset(targetPosition.x, targetPosition.y)
                        this.scene.tweens.add({
                            targets: player,
                            alpha: { from: 0.2, to: 1 },
                            duration: this.triggerAfter * 20 * 1000,
                            ease: 'Cubic.easeOut',
                        })
                    },
                })
                break
            case AbilityAction.Projectile:
                this.triggerProjectile(player, sourcePosition, targetPosition)
                break
            case AbilityAction.ProjectileWithRotation:
                this.triggerProjectile(player, sourcePosition, targetPosition, true)
                break
        }
    }
}


export function buildAbilities(
    scene: MainScene,
): Record<string, Ability> {
    const abilities = {}
    for (const [key, config] of Object.entries(Config.abilities)) {
        abilities[key] = new Ability(scene, config)
    }
    return abilities
}

