import * as Phaser from 'phaser'
import { Player } from '~/server/games/entities/player'
import { Game } from '~/server/games/game'

export class GameScene extends Phaser.Scene {
    public game: Game
    public player: Player
    public players: Phaser.GameObjects.Group

    constructor() {
        super({ key: 'gameScene' })
    }

    public init() {}

    public create() {
        this.players = this.add.group({ classType: Player })
    }

    public update() {
        this.players.getChildren().forEach((player: Player) => {
            const playerSchema = this.game.state.players.get(player.id)
            if (playerSchema) {
                playerSchema.x = player.x
                playerSchema.y = player.y
            }
        })
    }

    public playerById(id: string): Player {
        return this.players.getChildren().find((player: Player) => player.id === id) as Player
    }
}
