import { MyGame } from '~/client/index'
import { Client } from '.'

import { PlayerModel, GameState, User, ControlledBy } from '~/shared/models'
import { Config } from '~/shared/config'

const playersAI = {
    playerAI1: { ...Config.defaultPlayerModel, x: 100 * 10, y: 100 * 7, controlledBy: 'ai' as ControlledBy },
    playerAI2: { ...Config.defaultPlayerModel, x: 100 * 12, y: 100 * 3, controlledBy: 'ai' as ControlledBy },
    playerAI3: { ...Config.defaultPlayerModel, x: 100 * 13, y: 100 * 19, controlledBy: 'ai' as ControlledBy },
    playerAI4: { ...Config.defaultPlayerModel, x: 100 * 14, y: 100 * 11, controlledBy: 'ai' as ControlledBy },
    playerAI5: { ...Config.defaultPlayerModel, x: 100 * 15, y: 100 * 4, controlledBy: 'ai' as ControlledBy },
    playerAI6: { ...Config.defaultPlayerModel, x: 100 * 18, y: 100 * 5, controlledBy: 'ai' as ControlledBy },
    playerAI7: { ...Config.defaultPlayerModel, x: 100 * 19, y: 100 * 2, controlledBy: 'ai' as ControlledBy },
    playerAI8: { ...Config.defaultPlayerModel, x: 100 * 11, y: 100 * 9, controlledBy: 'ai' as ControlledBy },
    playerAI9: { ...Config.defaultPlayerModel, x: 100 * 20, y: 100 * 12, controlledBy: 'ai' as ControlledBy },
}

export class OfflineClient extends Client {
    public lobyUser: User
    public gameState: GameState
    public isHost: boolean
    public isGameInit: boolean
    public isGameJoined: boolean

    constructor(game: MyGame) {
        super(game)
        // this.gameState.players = playersAI
    }

    get id(): string {
        return 'offline'
    }

    public emitLobyStart(user: User): void {
        this.lobyUser = user
        this.lobbyScene.scene.start(Config.scenes.playerSelection.key)
    }

    public emitPlayerSelectionStart(playerConfig: PlayerModel): void {
        this.playerConfig = playerConfig
        window.localStorage.setItem('playerConfig', JSON.stringify(playerConfig))
        // this.gameState.players[this.id] = {
        //     ...playerConfig,
        //     id: this.id,
        //     x: 0,
        //     y: 0,
        //     rotation: 0,
        //     controlledBy: 'human',
        // }
        this.playerSelectionScene.scene.start(this.gameKey)
        this.gameScene.scene.launch(Config.scenes.hud.key).sendToBack()
    }
}
