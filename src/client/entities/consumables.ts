import { GameScene } from '~/client/scenes/gameScene'
import { Player } from '~/client/entities/player'
import { Config } from '~/shared/config'

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

    public spawn(scene: GameScene): Array<Consumable> {
        const consumables: Array<Consumable> = []

        for (const key of this.entries) {
            const x = Phaser.Math.Between(
                Config.consumable.width / 2,
                Config.world.width - Config.world.width / 2
            )
            const y = Phaser.Math.Between(
                Config.consumable.width / 2,
                Config.world.height - Config.world.width / 2
            )

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
        this.setDisplaySize(Config.consumable.width, Config.consumable.height)
    }

    public action(player: Player): void {}

    public randomPosition(): void {
        this.x = Phaser.Math.Between(
            Config.consumable.width / 2,
            Config.world.width - Config.consumable.width / 2
        )
        this.y = Phaser.Math.Between(
            Config.consumable.width / 2,
            Config.world.width - Config.consumable.width / 2
        )
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

    public action(player: Player): void {
        player.health = Phaser.Math.Clamp(this.health + player.health, 0, player.maxHealth)
    }
}
