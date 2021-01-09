import '@geckos.io/phaser-on-nodejs'
import { GameScene } from '~/server/games/scenes/gameScene'
import { GameStateSchema } from '~/shared/models/schemas/gameSchemas'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.HEADLESS,
    parent: 'phaser-game',
    width: 1280,
    height: 720,
    banner: false,
    // @ts-ignore
    audio: false,
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0,
            },
        },
    },
    scene: [GameScene],
}

export class Game extends Phaser.Game {
    public state: GameStateSchema
    constructor(state: GameStateSchema) {
        super(config)
        this.state = state
    }

    public get gameScene(): GameScene {
        return this.scene.getScene('gameScene') as GameScene
    }

    public get dt() {
        return this.loop.delta / 1000
    }
}
