import { MainScene } from '../scenes/mainScene'
import { Player } from '../player'
import {
    WORLD_WIDTH,
    WORLD_HEIGHT,
    CONSUMABLE_WIDTH,
    CONSUMABLE_HEIGHT,
} from '../config'

export interface ConsumableInterface {
    action: (player: Player) => void
}

export class RandomItem {
    public entries: Array<string>
    
    constructor() {
        this.entries = []
    }

    public add(name: string, weight: number): RandomItem {
        this.entries = this.entries.concat(Array(weight).fill(name))
        return this
    }

    public roll(): string {
        const index = Phaser.Math.Between(0, this.entries.length - 1)
        return this.entries[index]
    }

    public spawn(scene: MainScene): Array<Consumable> {
        const consumables: Array<Consumable> = []

        for (const key of this.entries) {
            const x = Phaser.Math.Between(CONSUMABLE_WIDTH / 2, WORLD_WIDTH - CONSUMABLE_WIDTH / 2)
            const y = Phaser.Math.Between(CONSUMABLE_WIDTH / 2, WORLD_HEIGHT - CONSUMABLE_WIDTH / 2)
            
            if (key === 'pill') {
                consumables.push(new PillConsumable(scene, x, y))
            }
        }
        return consumables
    }
}





export class Consumable extends Phaser.GameObjects.Sprite implements ConsumableInterface {
    public body: Phaser.Physics.Arcade.Body
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.setDisplaySize(CONSUMABLE_WIDTH, CONSUMABLE_HEIGHT)
    }
    
    public action(player: Player): void {
    }
    
    public randomPosition(): void {
        this.x = Phaser.Math.Between(CONSUMABLE_WIDTH / 2, WORLD_WIDTH - CONSUMABLE_WIDTH / 2)
        this.y = Phaser.Math.Between(CONSUMABLE_WIDTH / 2, WORLD_WIDTH - CONSUMABLE_WIDTH / 2)
        this.body.x = this.x - this.displayWidth / 2
        this.body.y = this.y - this.displayHeight / 2        
    }
}


export class PillConsumable extends Consumable {
    public health: number

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'atlas', 'pill_yellow.png')
        this.health = 500
        this.name = 'pill'
    }

    public action (player: Player): void {
        player.health = Phaser.Math.Clamp(
            this.health + player.health,
            0,
            player.maxHealth
        )
    }
}
