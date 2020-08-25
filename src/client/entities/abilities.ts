import { MainScene } from '../scenes/mainScene'
import { Player } from '../player'


export interface  AbilityConfig {
    name: string
    frame: string
    cooldownDelay: number
    rangeDistance?: number
    areaDistance?: number
    rangeDistanceColor?: number
    areaDistanceColor?: number
}


export interface  AbilityInterface extends AbilityConfig {
    draw(player: Player): void
    trigger(player: Player): void
    clearDraw(): void
}



export class Ability implements AbilityInterface  {
    public scene: MainScene
    public name: string
    public frame: string
    public cooldownDelay: number
    public rangeDistance?: number
    public areaDistance?: number
    public rangeDistanceColor?: number
    public areaDistanceColor?: number
    public rangeGraphics?: Phaser.GameObjects.Graphics
    public areaGraphics?: Phaser.GameObjects.Graphics
    
    
    constructor(scene: MainScene, config: AbilityConfig) {
        this.scene = scene
        this.name = config.name
        this.frame = config.frame
        this.cooldownDelay = config.cooldownDelay
        this.rangeDistance = config.rangeDistance
        this.areaDistance = config.areaDistance
        this.rangeDistanceColor = config.rangeDistanceColor || 0xffffff
        this.areaDistanceColor = config.areaDistanceColor || 0xffffff
    }
    draw(player: Player): void {
        if (this.rangeGraphics) {
            this.rangeGraphics.clear()
            this.rangeGraphics.fillStyle(this.rangeDistanceColor, 0.2)
            this.rangeGraphics.fillCircle(player.body.center.x, player.body.center.y, this.rangeDistance)
            this.rangeGraphics.lineStyle(2, this.rangeDistanceColor, 0.2)
            this.rangeGraphics.strokeCircle(player.body.center.x, player.body.center.y, this.rangeDistance)
        }

        if (this.areaGraphics) {
            const pointer = this.scene.input.activePointer
            const transformedPoint = this.scene.cameras.main.getWorldPoint(pointer.x, pointer.y)
            
            this.areaGraphics.clear()
            this.areaGraphics.fillStyle(this.rangeDistanceColor, 0.4)
            this.areaGraphics.fillCircle(transformedPoint.x, transformedPoint.y, this.areaDistance)
            this.areaGraphics.lineStyle(2, this.rangeDistanceColor, 0.4)
            this.areaGraphics.strokeCircle(transformedPoint.x, transformedPoint.y, this.areaDistance)
        }
    }
    
    clearDraw(): void {
        if (this.rangeGraphics) {
            this.rangeGraphics.clear()
        }
        if (this.areaGraphics) {
            this.areaGraphics.clear()
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



export class FireZone extends Ability implements AbilityInterface {
    constructor(scene, config) {
        super(scene, config)
        this.rangeGraphics = this.scene.add.graphics()
        this.areaGraphics = this.scene.add.graphics()
    }

    trigger(player: Player): void {
        console.log('trigger')
    }
}



const abilitiesConfig = {
    blink: {
        name: 'blink',
        frame: 'teleport.png',
        cooldownDelay: 10,
        rangeDistance: 500,
    },
    fireZone: {
        name: 'fireZone',
        frame: 'fire-zone.png',
        cooldownDelay: 10,
        rangeDistance: 500,
        areaDistance: 30,
    }
}

const classNameToClass = {
    'blink': Blink,
    'fireZone': FireZone,
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

