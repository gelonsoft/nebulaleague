import { MainScene } from '../scenes/mainScene'
import { Player } from '../player'
import { Projectiles } from './projectiles'


export interface  AbilityConfig {
    name: string
    frame: string
    cooldownDelay: number
    rangeDistance?: number
    radiusDistance?: number
    rangeDistanceColor?: number
    radiusDistanceColor?: number
}


export interface  AbilityInterface extends AbilityConfig {
    draw(player: Player): void
    trigger(player: Player): void
    clearDraw(): void
}



export class Ability implements AbilityInterface  {
    public scene: MainScene
    public projectiles: Projectiles
    public name: string
    public frame: string
    public cooldownDelay: number
    public rangeDistance?: number
    public radiusDistance?: number
    public rangeDistanceColor?: number
    public radiusDistanceColor?: number
    public rangeGraphics?: Phaser.GameObjects.Graphics
    public radiusGraphics?: Phaser.GameObjects.Graphics
    
    
    constructor(scene: MainScene, config: AbilityConfig) {
        this.scene = scene
        this.projectiles = this.scene.projectiles
        this.name = config.name
        this.frame = config.frame
        this.cooldownDelay = config.cooldownDelay
        this.rangeDistance = config.rangeDistance
        this.radiusDistance = config.radiusDistance
        this.rangeDistanceColor = config.rangeDistanceColor || 0xffffff
        this.radiusDistanceColor = config.radiusDistanceColor || 0xffffff
    }
    draw(player: Player): void {
        if (this.rangeGraphics) {
            this.rangeGraphics.clear()
            this.rangeGraphics.fillStyle(this.rangeDistanceColor, 0.2)
            this.rangeGraphics.fillCircle(player.body.center.x, player.body.center.y, this.rangeDistance)
            this.rangeGraphics.lineStyle(2, this.rangeDistanceColor, 0.2)
            this.rangeGraphics.strokeCircle(player.body.center.x, player.body.center.y, this.rangeDistance)
        }

        if (this.radiusGraphics) {
            const pointer = this.scene.input.activePointer
            const transformedPoint = this.scene.cameras.main.getWorldPoint(pointer.x, pointer.y)
            
            this.radiusGraphics.clear()
            this.radiusGraphics.fillStyle(this.rangeDistanceColor, 0.2)
            this.radiusGraphics.fillCircle(transformedPoint.x, transformedPoint.y, this.radiusDistance)
            this.radiusGraphics.lineStyle(2, this.rangeDistanceColor, 0.2)
            this.radiusGraphics.strokeCircle(transformedPoint.x, transformedPoint.y, this.radiusDistance)
        }
    }
    
    clearDraw(): void {
        if (this.rangeGraphics) {
            this.rangeGraphics.clear()
        }
        if (this.radiusGraphics) {
            this.radiusGraphics.clear()
        }
    }
    
    trigger(_player: Player): void {
        throw new Error("Method not implemented.")
    }
}


export class Blink extends Ability implements AbilityInterface {
    constructor(scene, config) {
        super(scene, config)
        this.rangeGraphics = this.scene.add.graphics()
    }

    trigger(player: Player): void {
        const blinkVector = Phaser.Math.Vector2.ONE
            .clone()
            .setToPolar(player.rotation - Math.PI / 2)
            .scale(this.rangeDistance)
        const blinkPosition = new Phaser.Math.Vector2(player.x, player.y)
            .add(blinkVector)
        player.body.x = blinkPosition.x
        player.body.y = blinkPosition.y
    }
}



export class Flame extends Ability implements AbilityInterface {
    constructor(scene, config) {
        super(scene, config)
        this.rangeGraphics = this.scene.add.graphics()
        this.radiusGraphics = this.scene.add.graphics()
    }

    trigger(player: Player): void {
        const pointer = this.scene.input.activePointer
        const transformedPoint = this.scene.cameras.main.getWorldPoint(pointer.x, pointer.y)
        this.projectiles.fire('flame', transformedPoint)
    }
}



const abilitiesConfig = {
    blink: {
        name: 'blink',
        frame: 'teleport.png',
        cooldownDelay: 10,
        rangeDistance: 500,
    },
    flame: {
        name: 'flame',
        frame: 'fire-zone.png',
        cooldownDelay: 10,
        rangeDistance: 500,
        radiusDistance: 50,
    }
}

const classNameToClass = {
    'blink': Blink,
    'flame': Flame,
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

