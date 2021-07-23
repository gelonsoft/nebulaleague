import * as Colyseus from 'colyseus.js'
import { MyGame } from '~/client/games/myGame'
import { Config } from '~/shared/config'
import {MainPlayerConfig, PlayerConfig, User} from '~/shared/models'
import { LobbyClient } from '~/client/client/lobbyClient'
import { PlayerSelectionClient } from '~/client/client/playerSelectionClient'
import { PlayerSelectionOnlineClient } from '~/client/client/playerSelectionOnlineClient'
import { PlayerSelectionOfflineClient } from '~/client/client/playerSelctionOfflineClient'
import { GameClient } from '~/client/client/gameClient'
import { GameOnlineClient } from '~/client/client/gameOnlineClient'
import { GameOfflineClient } from '~/client/client/gameOfflineClient'
import {MainGameClient} from "~/client/client/mainGameClient";

export class Client {
    public game: MyGame
    public colyseus: Colyseus.Client
    public lobbyClient: LobbyClient
    public playerSelectionClient: PlayerSelectionClient
    public gameClient: GameClient
    public mainGameClient: MainGameClient
    public user: User
    public mainPlayerConfig: MainPlayerConfig
    public playerConfig: PlayerConfig

    constructor(game: MyGame) {
        this.game = game
        const host = window.document.location.host.replace(/:.*/, '')
        this.colyseus = new Colyseus.Client(
            location.protocol.replace('http', 'ws') +
                '//' +
                host +
                //(window.document.location.port ? ':' + window.document.location.port : '')
                (window.document.location.port ? ':' + (window.document.location.port=="8080"?3000:window.document.location.port) : '')
        )

        this.user = Config.defaultUser
        this.mainPlayerConfig =  (JSON.parse(window.localStorage.getItem('mainPlayerConfig')!) as MainPlayerConfig) ||  ({login: null, token: null})
        this.playerConfig =
            (JSON.parse(window.localStorage.getItem('playerConfig')!) as PlayerConfig) ||
            Config.defaultPlayerConfig
        this.playerConfig.ready = false
    }

    public async initMainClientByToken(): Promise<boolean> {
        const token = this.mainPlayerConfig.token
        if (token) {
            return this.mainGameClient.tryInitByToken(token)
        } else {
            return Promise.resolve(false)
        }
    }



    public initLogin() {

    }

    public initMainClient() {
        const onInit = () => {
            if (this.mainGameClient.state.player.token) {
                this.mainPlayerConfig.token=this.mainGameClient.state.player.token
                window.localStorage.setItem('mainPlayerConfig', JSON.stringify(this.mainPlayerConfig))
            }
            this.game.scenes.startLoby()
        }

        const onStart = (user: User) => {
            this.user = user
            this.initPlayerSelection()
        }
        this.mainGameClient = new MainGameClient(this.game, onInit)
    }

    public initLobby() {
        const onInit = () => {
            this.game.scenes.startLoby()
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
