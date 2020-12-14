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
import { GameMode, SceneGameKey } from '~/shared/models'

export class Client {
    public game: MyGame
    public mainScene: GameScene
    public playerSelectionScene: PlayerSelectionScene
    public lobbyScene: LobbyScene
    public gameFfaScene: GameFfaScene
    public gameTrainingScene: GameTrainingScene
    public hudScene: HudScene
    public colyseus: Colyseus.Client
    public lobbyClient: LobbyClient
    public playerSelectionClient: PlayerSelectionClient
    public gameClient: GameClient
    
    constructor(game: MyGame) {
        this.game = game
        const host = window.document.location.host.replace(/:.*/, '')
        this.colyseus = new Colyseus.Client(
            location.protocol.replace('http', 'ws') +
                '//' +
                host +
                (window.document.location.port ? ':' + window.document.location.port : '')
        )
        this.lobbyScene = this.game.scene.getScene(Config.scenes.loby.key) as LobbyScene
        this.playerSelectionScene = this.game.scene.getScene(
            Config.scenes.playerSelection.key
        ) as PlayerSelectionScene
        this.gameFfaScene = this.game.scene.getScene(Config.scenes.gameFfa.key) as GameFfaScene
        this.gameTrainingScene = this.game.scene.getScene(Config.scenes.gameTraining.key) as GameTrainingScene
        this.hudScene = this.game.scene.getScene(Config.scenes.hud.key) as HudScene
        this.lobbyClient = new LobbyClient(this)
        this.playerSelectionClient = new PlayerSelectionClient(this)
        this.gameClient = new GameOnlineClient(this)
        this.hudScene = this.game.scene.getScene(Config.scenes.hud.key) as HudScene
        this.lobbyClient = new LobbyClient(this)
        this.playerSelectionClient = new PlayerSelectionClient(this)
        this.gameClient = new GameOnlineClient(this)
    }

    public get gameKey(): SceneGameKey {
        return Config.modeToGameKey[this.gameMode]
    }

    public get gameScene(): GameScene {
        return this.game.scene.getScene(this.gameKey) as GameScene
    }

    public get gameMode(): GameMode {
        return this.lobbyClient.state.users.get(this.lobbyClient.id).gameMode
    }

    
}
