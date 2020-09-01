import { MainScene } from '../scenes/mainScene'
import { Player } from '../player'
import { Projectiles } from './projectiles'


export enum DrawingStyles {
    Zone,
    Ray,
}

export enum Action {
    Blink,
    Projectile,
    ProjectileWithRotation,
}


export interface AbilityConfig {
    name: string
    frame: string
    action: Action
    projectileKey?: string
    cooldownDelay: number
    rangeDistance?: number
    drawingStyle: DrawingStyles
    radiusDistance?: number
    rangeDistanceColor?: number
    triggerAfter?: number
    radiusDistanceColor?: number
    raySize?: number
    rayColor?: number
}



const abilitiesConfig = {
    blink: {
        name: 'blink',
        frame: 'teleport.png',
        action: Action.Blink,
        drawingStyle: DrawingStyles.Zone,
        cooldownDelay: 10,
        rangeDistance: 500,
        radiusDistance: 30,
        triggerAfter: 0.05,
    },
    flame: {
        name: 'flame',
        frame: 'fire-zone.png',
        action: Action.Projectile,
        projectileKey: 'flameProjectile',
        drawingStyle: DrawingStyles.Zone,
        cooldownDelay: 20,
        rangeDistance: 420,
        radiusDistance: 50,
    },
    rootTip: {
        name: 'rootTip',
        frame: 'root-tip.png',
        projectileKey: 'rootTipProjectile',
        action: Action.Projectile,
        drawingStyle: DrawingStyles.Zone,
        cooldownDelay: 15,
        rangeDistance: 450,
        radiusDistance: 50,
    },
    chargedArrow: {
        name: 'chargedArrow',
        frame: 'charged-arrow.png',
        action: Action.ProjectileWithRotation,
        projectileKey: 'chargedArrowProjectile',
        drawingStyle: DrawingStyles.Ray,
        cooldownDelay: 10,
    },
}


export class Ability  {
    public scene: MainScene
    public projectiles: Projectiles
    public name: string
    public frame: string
    public action: Action
    public cooldownDelay: number
    public drawingStyle: DrawingStyles
    public projectileKey?: string
    public rangeDistance: number
    public radiusDistance: number
    public triggerAfter: number
    public rangeDistanceColor?: number
    public radiusDistanceColor?: number
    public raySize?: number
    public rayColor?: number
    public rangeGraphics?: Phaser.GameObjects.Graphics
    public radiusGraphics?: Phaser.GameObjects.Graphics
    public rayGraphics?: Phaser.GameObjects.Graphics
    
    
    constructor(scene: MainScene, config: AbilityConfig) {
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

        switch(config.drawingStyle) {
            case DrawingStyles.Zone:
                this.rangeGraphics = this.scene.add.graphics()
                this.radiusGraphics = this.scene.add.graphics()
                break;
                
            case DrawingStyles.Ray:
                this.rangeDistance = this.projectiles.getDistance(this.projectileKey)
                this.rangeGraphics = this.scene.add.graphics()
                this.rayGraphics = this.scene.add.graphics()
                break;
        }
    }
   public draw(player: Player, pointerPosition: Phaser.Math.Vector2): void {
        if (this.rangeGraphics) {
            this.rangeGraphics.clear()
            this.rangeGraphics.fillStyle(this.rangeDistanceColor, 0.2)
            this.rangeGraphics.fillCircle(player.body.center.x, player.body.center.y, this.rangeDistance)
            this.rangeGraphics.lineStyle(2, this.rangeDistanceColor, 0.2)
            this.rangeGraphics.strokeCircle(player.body.center.x, player.body.center.y, this.rangeDistance)
        }

        if (this.radiusGraphics) {
            this.radiusGraphics.clear()
            const targetPosition = this.isInRangeToTrigger(player.body.center, pointerPosition) ?
                pointerPosition:
                this.getMaxRadiusPosition(player)
                

            this.radiusGraphics.fillStyle(this.rangeDistanceColor, 0.8)
            this.radiusGraphics.fillCircle(targetPosition.x, targetPosition.y, this.radiusDistance)
            this.radiusGraphics.lineStyle(2, this.rangeDistanceColor, 0.8)
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
           
           this.rayGraphics.lineStyle(this.raySize, this.rayColor)
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

    public isInRangeToTrigger(sourcePosition: Phaser.Math.Vector2, pointerPosition: Phaser.Math.Vector2): boolean {
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
            pointerPosition:
            this.getMaxRadiusPosition(player)
        
        switch (this.action) {
            case Action.Blink:
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
                            duration: this.triggerAfter * 10 * 1000,
                            ease: 'Cubic.easeOut',
                        })
                    },
                })

                
                
                break
            case Action.Projectile:
                this.triggerProjectile(player, sourcePosition, targetPosition)
                break
            case Action.ProjectileWithRotation:
                this.triggerProjectile(player, sourcePosition, targetPosition, true)
                break
        }
    }
}


export function buildAbilities(
    scene: MainScene,
): Record<string, Ability> {
    const abilities = {}
    for(const [key, config] of Object.entries(abilitiesConfig)) {
        abilities[key] = new Ability(scene, config)
    }
    return abilities
}

