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

    init() {}

    create() {
        this.players = this.add.group({ classType: Player })
    }

    update() {}
}
