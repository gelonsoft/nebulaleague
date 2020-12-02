import { MyGame } from '~/client/index'
import { Client } from '.'

import {
    PlayerConfig,
    GameState,
    User,
    ControlledBy,
} from '~/shared/models'
import { Config } from '~/shared/config'


const otherPlayers = {
    playerAI1: { ...Config.playerDefaultModel, x: 100 * 10, y: 100 * 7, controlledBy: ControlledBy.AI },
    playerAI2: { ...Config.playerDefaultModel, x: 100 * 12, y: 100 * 3, controlledBy: ControlledBy.AI },
    playerAI3: { ...Config.playerDefaultModel, x: 100 * 13, y: 100 * 19, controlledBy: ControlledBy.AI },
    playerAI4: { ...Config.playerDefaultModel, x: 100 * 14, y: 100 * 11, controlledBy: ControlledBy.AI },
    playerAI5: { ...Config.playerDefaultModel, x: 100 * 15, y: 100 * 4, controlledBy: ControlledBy.AI },
    playerAI6: { ...Config.playerDefaultModel, x: 100 * 18, y: 100 * 5, controlledBy: ControlledBy.AI },
    playerAI7: { ...Config.playerDefaultModel, x: 100 * 19, y: 100 * 2, controlledBy: ControlledBy.AI },
    playerAI8: { ...Config.playerDefaultModel, x: 100 * 11, y: 100 * 9, controlledBy: ControlledBy.AI },
    playerAI9: { ...Config.playerDefaultModel, x: 100 * 20, y: 100 * 12, controlledBy: ControlledBy.AI },
}



export class OfflineClient extends Client {
    public lobyUser: User
    public gameState: GameState
    public isHost: boolean
    public isGameInit: boolean
    public isGameJoined: boolean

    constructor(game: MyGame) {
        super(game)
    }

    get id(): string {
        return 'offline'
    }


    public emitLobyStart(user: User): void {
        this.lobyUser = user
        this.lobyScene.scene.start(Config.scenes.playerSelection.key)
    }

    public emitPlayerSelectionStart(playerConfig: PlayerConfig): void {
        this.gameState = {
            players: {
                offline: {
                    id: this.id,
                    x: 0,
                    y: 0,
                    rotation: 0,
                    controlledBy: ControlledBy.Human,
                    ...playerConfig,
                },
                ...otherPlayers
            },
            projectiles: {},
            gameMode: this.lobyUser.gameMode || 'training',
            hostId: 'hello',
        }

        window.localStorage.setItem('playerConfig', JSON.stringify(playerConfig))
        this.playerSelectionScene.scene.start(this.gameKey)
        this.gameScene.scene.launch(Config.scenes.hud.key).sendToBack()
    }
}
