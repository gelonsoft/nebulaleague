import * as Colyseus from 'colyseus.js'
import { MyGame } from '~/client/index'
import { PlayerSelectionScene } from '~/client/scenes/playerSelectionScene'
import { LobbyScene } from '~/client/scenes/lobbyScene'
import { GameFfaScene, GameScene, GameTrainingScene } from '~/client/scenes/gameScene'
import { Config } from '~/shared/config'
import { HudScene } from '~/client/scenes/hudScene'
import { LobbyClient } from '~/client/client/lobbyClient'
import { PlayerSelectionClient } from '~/client/client/playerSelectionClient'
import { GameClient } from '~/client/client/gameClient'
import { GameOnlineClient } from '~/client/client/gameOnlineClient'
import { GameMode, PlayerConfig, PlayerConfigSchema, SceneGameKey, User, UserSchema } from '~/shared/models'
import { PlayerSelectionOfflineClient } from './PlayerSelctionOfflineClient'
import { PlayerSelectionOnlineClient } from './PlayerSelectionOnlineClient'
import { GameOfflineClient } from './gameOfflineClient'
import { BootScene } from '../scenes/bootScene'

export class Client {
    public game: MyGame
    public mainScene: GameScene
    public playerSelectionScene: PlayerSelectionScene
    public lobbyScene: LobbyScene
    public gameFfaScene: GameFfaScene
    public gameTrainingScene: GameTrainingScene
    public bootScene: BootScene
    public hudScene: HudScene
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
        this.lobbyScene = this.game.scene.getScene(Config.scenes.lobby.key) as LobbyScene
        this.playerSelectionScene = this.game.scene.getScene(
            Config.scenes.playerSelection.key
        ) as PlayerSelectionScene
        this.gameFfaScene = this.game.scene.getScene(Config.scenes.gameFfa.key) as GameFfaScene
        this.gameTrainingScene = this.game.scene.getScene(Config.scenes.gameTraining.key) as GameTrainingScene
        this.hudScene = this.game.scene.getScene(Config.scenes.hud.key) as HudScene
        this.bootScene = this.game.scene.getScene(Config.scenes.boot.key) as BootScene
        this.gameClient = new GameOnlineClient(this)
        this.user = Config.defaultUser
        this.playerConfig = JSON.parse(window.localStorage.getItem('playerConfig')!) as PlayerConfig ||
            Config.defaultPlayerConfig
    }

    public get gameKey(): SceneGameKey {
        return Config.modeToGameKey[this.gameMode]
    }

    public get gameScene(): GameScene {
        return this.game.scene.getScene(this.gameKey) as GameScene
    }

    public get gameMode(): GameMode {
        return this.user.gameMode
    }


    public initLobby() {
        const onInit = () => {
            this.bootScene.scene.start(Config.scenes.lobby.key)
        }

        const onStart = (user: User) => {
            this.user = user
            this.initPlayerSelection()
        }

        this.lobbyClient = new LobbyClient(this, onInit, onStart)
        void this.lobbyClient.init()
    }

    
    public initPlayerSelection() {
        const onInit = () =>
            this.lobbyScene.scene.start(Config.scenes.playerSelection.key)

        const onStart = (playerConfig: PlayerConfig) => {
            this.playerConfig = playerConfig
            window.localStorage.setItem('playerConfig', JSON.stringify(playerConfig))
            this.initGame()
        }
        
        this.playerSelectionClient = this.user.offline
            ? new PlayerSelectionOfflineClient(this, onInit, onStart)
            : new PlayerSelectionOnlineClient(this, onInit, onStart)
        void this.playerSelectionClient.init()
    }

    public initGame() {
        this.gameClient = this.user.offline ? new GameOfflineClient(this) : new GameOnlineClient(this)
        void this.gameClient.init()
    }
}

export { LobbyClient, PlayerSelectionClient, GameClient }
