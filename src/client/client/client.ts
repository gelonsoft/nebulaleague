import { MyGame } from '~/client/index'
import { PlayerSelectionScene } from '~/client/scenes/playerSelectionScene'
import { LobbyScene } from '~/client/scenes/lobbyScene'
import { GameFfaScene, GameScene, GameTrainingScene } from '~/client/scenes/gameScene'
import { GameState, LobbyState, PlayerConfig, PlayerSelectionState, SceneGameKey, User } from '~/shared/models'
import { Config } from '~/shared/config'
import { HudScene } from '~/client/scenes/hudScene'

export abstract class Client {
    public game: MyGame
    public mainScene: GameScene
    public playerSelectionScene: PlayerSelectionScene
    public lobbyScene: LobbyScene
    public lobyUser: User
    public playerConfig: PlayerConfig
    public playerSelectionState: PlayerSelectionState
    public gameState: GameState
    public lobbyState: LobbyState
    public gameFfaScene: GameFfaScene
    public gameTrainingScene: GameTrainingScene
    public hudScene: HudScene

    constructor(game: MyGame) {
        this.game = game
        this.lobbyScene = this.game.scene.getScene(Config.scenes.loby.key) as LobbyScene
        this.playerSelectionScene = this.game.scene.getScene(
            Config.scenes.playerSelection.key
        ) as PlayerSelectionScene
        this.gameFfaScene = this.game.scene.getScene(Config.scenes.gameFfa.key) as GameFfaScene
        this.gameTrainingScene = this.game.scene.getScene(Config.scenes.gameTraining.key) as GameTrainingScene
        this.hudScene = this.game.scene.getScene(Config.scenes.hud.key) as HudScene
        this.playerSelectionState = Config.defaultPlayerSelectionState
        this.lobyUser = Config.defaultUser
        this.playerConfig = Config.defaultPlayerConfig
        this.gameState = Config.defaultGameState
    }



    public get gameKey(): SceneGameKey {
        return Config.modeToGameKey[this.lobyUser.gameMode]
    }

    public get gameScene(): GameScene {
        return this.game.scene.getScene(this.gameKey) as GameScene
    }

    
    public abstract get id(): string
    public emitLobyInit() {}
    public emitLobyEnd(): void {}
    public abstract emitLobyStart(user: User): void 
    // public emitPlayerSelectionInit(): Promise<PlayerSelectionState> {
    //     return Promise.resolve(this.playerSelectionState)
    // }
    public emitPlayerSelectionInit(): void {}
    
    public emitPlayerSelectionEnd(): void {}
    public abstract emitPlayerSelectionStart(playerConfig: PlayerConfig): void
    public emitGameInit(): void {}
    public emitGameJoined(): void {}
    public emitGameRefresh(): void {}
    public emitGameUpdated(): void {}

}
