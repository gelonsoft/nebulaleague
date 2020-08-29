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
    radiusDistanceColor?: number
    raySize?: number
    rayColor?: number
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
            if(this.isInRangeToTrigger(player.body.center, pointerPosition)) {
                this.radiusGraphics.fillStyle(this.rangeDistanceColor, 0.8)
                this.radiusGraphics.fillCircle(pointerPosition.x, pointerPosition.y, this.radiusDistance)
                this.radiusGraphics.lineStyle(2, this.rangeDistanceColor, 0.8)
                this.radiusGraphics.strokeCircle(pointerPosition.x, pointerPosition.y, this.radiusDistance)
            } else {
                this.radiusGraphics.fillStyle(this.rangeDistanceColor, 0.2)
                this.radiusGraphics.fillCircle(pointerPosition.x, pointerPosition.y, this.radiusDistance)
                this.radiusGraphics.lineStyle(2, this.rangeDistanceColor, 0.2)
                this.radiusGraphics.strokeCircle(pointerPosition.x, pointerPosition.y, this.radiusDistance)
            }
        }

       if (this.rayGraphics) {
           this.rayGraphics.clear()
           const rayEndPosition = Phaser.Math.Vector2.ONE
               .clone()
               .setToPolar(player.rotation - Math.PI / 2)
               .scale(this.rangeDistance)
           
           const line = new Phaser.Geom.Line(
               player.body.center.x,
               player.body.center.y,
               player.body.center.x + rayEndPosition.x,
               player.body.center.y + rayEndPosition.y,
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
            this.projectiles.fire(this.projectileKey, player.id, sourcePosition)
        }
    }


    public trigger(
        player: Player,
        sourcePosition: Phaser.Math.Vector2,
        pointerPosition: Phaser.Math.Vector2
    ): void {
        switch (this.action) {
            case Action.Blink:
                player.body.reset(pointerPosition.x, pointerPosition.y)
                break
            case Action.Projectile:
                this.triggerProjectile(player, sourcePosition, pointerPosition)
                break
            case Action.ProjectileWithRotation:
                this.triggerProjectile(player, sourcePosition, pointerPosition, true)
                break
        }
    }
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
    },
    flame: {
        name: 'flame',
        frame: 'fire-zone.png',
        action: Action.Projectile,
        projectileKey: 'flameProjectile',
        drawingStyle: DrawingStyles.Zone,
        cooldownDelay: 10,
        rangeDistance: 420,
        radiusDistance: 50,
    },
    rootTip: {
        name: 'rootTip',
        frame: 'root-tip.png',
        projectileKey: 'rootTipProjectile',
        action: Action.Projectile,
        drawingStyle: DrawingStyles.Zone,
        cooldownDelay: 1,
        rangeDistance: 450,
        radiusDistance: 50,
    },
    chargedArrow: {
        name: 'chargedArrow',
        frame: 'charged-arrow.png',
        action: Action.ProjectileWithRotation,
        projectileKey: 'chargedArrowProjectile',
        drawingStyle: DrawingStyles.Ray,
        cooldownDelay: 1,
    },
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

