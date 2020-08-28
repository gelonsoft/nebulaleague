import { MainScene } from '../scenes/mainScene'
import { Player } from '../player'
import { Projectiles } from './projectiles'


export enum AbilityTypes {
    Zone,
    Ray,
}

export interface AbilityConfig {
    name: string
    frame: string
    type: AbilityTypes
    cooldownDelay: number
    rangeDistance?: number
    radiusDistance?: number
    rangeDistanceColor?: number
    radiusDistanceColor?: number
    raySize?: number
    rayColor?: number
}


export interface  AbilityInterface extends AbilityConfig {
    draw(player: Player, pointerPosition: Phaser.Math.Vector2): void
    trigger(player: Player, pointerPosition: Phaser.Math.Vector2): void
    isInRangeToTrigger(sourcePosition: Phaser.Math.Vector2, pointerPosition: Phaser.Math.Vector2): boolean
    clearDraw(): void
}



export class Ability implements AbilityInterface  {
    public scene: MainScene
    public projectiles: Projectiles
    public name: string
    public frame: string
    public cooldownDelay: number
    public type: AbilityTypes
    public rangeDistance?: number
    public radiusDistance?: number
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
        this.type = config.type
        this.cooldownDelay = config.cooldownDelay
        this.rangeDistance = config.rangeDistance
        this.radiusDistance = config.radiusDistance
        this.raySize = config.raySize || 20
        this.rayColor = config.rayColor || 0xffffff
        this.rangeDistanceColor = config.rangeDistanceColor || 0xffffff
        this.radiusDistanceColor = config.radiusDistanceColor || 0xffffff

        switch(config.type) {
            case AbilityTypes.Zone:
                this.rangeGraphics = this.scene.add.graphics()
                this.radiusGraphics = this.scene.add.graphics()
                break;
                
            case AbilityTypes.Ray:
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
    
    public trigger(_player: Player, pointerPosition: Phaser.Math.Vector2): void {
        throw new Error("Method not implemented.")
    }
}


export class Blink extends Ability implements AbilityInterface {
    constructor(scene, config) {
        super(scene, config)
        this.rangeGraphics = this.scene.add.graphics()
        this.radiusGraphics = this.scene.add.graphics()
    }

    public trigger(player: Player, pointerPosition: Phaser.Math.Vector2): void {
        player.body.reset(pointerPosition.x, pointerPosition.y)
    }
}



export class Flame extends Ability implements AbilityInterface {
    constructor(scene, config) {
        super(scene, config)
    }
    
    public trigger(player: Player, pointerPosition: Phaser.Math.Vector2): void {
        this.projectiles.fire('flame', player.id, pointerPosition)   
    }
}


export class RootTip extends Ability implements AbilityInterface {
    constructor(scene, config) {
        super(scene, config)
    }
    
    public trigger(player: Player, pointerPosition: Phaser.Math.Vector2): void {
        this.projectiles.fire('flame', player.id, pointerPosition)   
    }
}


export class ChargedArrow extends Ability implements AbilityInterface {
    constructor(scene, config) {
        super(scene, config)
        this.rangeDistance = this.projectiles.getDistance('chargedArrow')
    }
    
    public trigger(player: Player, pointerPosition: Phaser.Math.Vector2): void {
        const positionPlayer = player.body.center
        const rotationPlayer =  Phaser.Math.Angle.Between(
            positionPlayer.x, positionPlayer.y,
            pointerPosition.x, pointerPosition.y,
        )
        this.projectiles.fire('chargedArrow', player.id,  positionPlayer, rotationPlayer)   
    }
}



const abilitiesConfig = {
    blink: {
        name: 'blink',
        frame: 'teleport.png',
        type: AbilityTypes.Zone,
        cooldownDelay: 10,
        rangeDistance: 500,
        radiusDistance: 30,
    },
    flame: {
        name: 'flame',
        frame: 'fire-zone.png',
        type: AbilityTypes.Zone,
        cooldownDelay: 10,
        rangeDistance: 420,
        radiusDistance: 50,
    },
    rootTip: {
        name: 'rootTip',
        frame: 'root-tip.png',
        type: AbilityTypes.Zone,
        cooldownDelay: 1,
        rangeDistance: 450,
        radiusDistance: 50,
    },
    chargedArrow: {
        name: 'chargedArrow',
        frame: 'charged-arrow.png',
        type: AbilityTypes.Ray,
        cooldownDelay: 1,
    },
}

const classNameToClass = {
    'blink': Blink,
    'flame': Flame,
    'chargedArrow': ChargedArrow,
    'rootTip': RootTip,
}


export function buildAbilities(
    scene: MainScene,
): Record<string, Ability> {
    const abilities = {}
    for(const [key, config] of Object.entries(abilitiesConfig)) {
        const createInstanceFromClassName = classNameToClass[key]
        abilities[key] = new createInstanceFromClassName(scene, config)
    }
    return abilities
}

