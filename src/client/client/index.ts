import * as Colyseus from 'colyseus.js'
import { MyGame } from '~/client/index'
import { Config } from '~/shared/config'

import { PlayerConfig, User } from '~/shared/models'

import { LobbyClient } from '~/client/client/lobbyClient'
import { PlayerSelectionClient } from '~/client/client/playerSelectionClient'
import { PlayerSelectionOnlineClient } from '~/client/client/playerSelectionOnlineClient'
import { PlayerSelectionOfflineClient } from '~/client/client/playerSelctionOfflineClient'
import { GameClient } from '~/client/client/gameClient'
import { GameOnlineClient } from '~/client/client/gameOnlineClient'
import { GameOfflineClient } from '~/client/client/gameOfflineClient'

export class Client {
    public game: MyGame
    public colyseus: Colyseus.Client
    public lobbyClient: LobbyClient
    public playerSelectionClient: PlayerSelectionClient
    public gameClient: GameClient
    public user: User
    public playerConfig: PlayerConfig

    constructor(game: MyGame) {
        this.game = game
        const host = window.document.location.host.replace(/:.*/, '')
        this.colyseus = new Colyseus.Client(
            location.protocol.replace('http', 'ws') +
                '//' +
                host +
                (window.document.location.port ? ':' + window.document.location.port : '')
        )

        this.user = Config.defaultUser
        this.playerConfig =
            (JSON.parse(window.localStorage.getItem('playerConfig')!) as PlayerConfig) ||
            Config.defaultPlayerConfig
        this.playerConfig.ready = false
    }

    public initLobby() {
        const onInit = () => {
            this.game.scenes.startLoby()
            console.log('onInit')
        }

        const onStart = (user: User) => {
            this.user = user
            this.initPlayerSelection()
        }

        this.lobbyClient = new LobbyClient(this.game, onInit, onStart)
        void this.lobbyClient.init()
    }

    public initPlayerSelection() {
        const onInit = () => this.game.scenes.startPlayerSelection()

        const onStart = (playerConfig: PlayerConfig) => {
            this.playerConfig = playerConfig
            window.localStorage.setItem('playerConfig', JSON.stringify(playerConfig))
            this.initGame()
        }

        this.playerSelectionClient = this.user.offline
            ? new PlayerSelectionOfflineClient(this.game, onInit, onStart)
            : new PlayerSelectionOnlineClient(this.game, onInit, onStart)
        void this.playerSelectionClient.init()
    }

    public initGame() {
        const onInit = () => {
            this.game.scenes.startGame()
        }

        this.gameClient = this.user.offline
            ? new GameOfflineClient(this.game, onInit)
            : new GameOnlineClient(this.game, onInit)
        void this.gameClient.init()
    }
}
