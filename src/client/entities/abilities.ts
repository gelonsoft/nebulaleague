import { MainScene } from '../scenes/mainScene'
import { Player } from '../player'


export interface  AbilityConfig {
    name: string
    frame: string
    cooldownDelay: number
}

export interface  BlinkConfig extends AbilityConfig {
    distance: number
}


export interface  AbilityInterface extends AbilityConfig {
    draw(player: Player): void
    trigger(player: Player): void
}



export class Ability implements AbilityInterface  {
    public scene: MainScene
    public name: string
    public frame: string
    public cooldownDelay: number
    public ready: boolean
    public readyTimerEvent: Phaser.Time.TimerEvent | null
    
    constructor(scene: MainScene, config: AbilityConfig) {
        this.scene = scene
        this.name = config.name
        this.frame = config.frame
        this.cooldownDelay = config.cooldownDelay
    }
    draw(_player: Player): void {
        throw new Error("Method not implemented.")
    }
    trigger(_player: Player): void {
        throw new Error("Method not implemented.")
    }
}


export class Blink extends Ability implements AbilityInterface {
    public distance: number
    constructor(scene, config) {
        super(scene, config)
        this.distance = config.distance
        
    }

    trigger(player: Player): void {
        const blinkVector = Phaser.Math.Vector2.ONE
            .clone()
            .setToPolar(player.rotation - Math.PI / 2)
            .scale(this.distance)
        const blinkPosition = new Phaser.Math.Vector2(player.x, player.y)
            .add(blinkVector)
        player.body.x = blinkPosition.x
        player.body.y = blinkPosition.y
    }

    draw(player: Player): void {
        console.log('hello')
    }
}


const abilitiesConfig = {
    blink: {
        name: 'blink',
        frame: 'bolt_gold.png',
        cooldownDelay: 10,
        distance: 500,
    }
}

const classNameToClass = {
    'blink': Blink
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

