import { MyGame } from '~/client/index'
import { PlayerSelectionScene } from '~/client/scenes/playerSelectionScene'
import { LobyScene } from '~/client/scenes/lobyScene'
import { GameFfaScene, GameScene, GameTrainingScene } from '~/client/scenes/gameScene'
import { GameState, PlayerConfig, PlayerSelectionState, SceneGameKey, User } from '~/shared/models'
import { Config } from '~/shared/config'
import { HudScene } from '../scenes/hudScene'

export abstract class Client {
    public game: MyGame
    public mainScene: GameScene
    public playerSelectionScene: PlayerSelectionScene
    public lobyScene: LobyScene
    public lobyUser: User
    public playerConfig: PlayerConfig
    public playerSelectionState: PlayerSelectionState
    public gameState: GameState
    public gameFfaScene: GameFfaScene
    public gameTrainingScene: GameTrainingScene
    public hudScene: HudScene

    constructor(game: MyGame) {
        this.game = game
        this.lobyScene = this.game.scene.getScene(Config.scenes.loby.key) as LobyScene
        this.playerSelectionScene = this.game.scene.getScene(
            Config.scenes.playerSelection.key
        ) as PlayerSelectionScene
        this.gameFfaScene = this.game.scene.getScene(Config.scenes.gameFfa.key) as GameFfaScene
        this.gameTrainingScene = this.game.scene.getScene(Config.scenes.gameTraining.key) as GameTrainingScene
        this.hudScene = this.game.scene.getScene(Config.scenes.hud.key) as HudScene
        this.lobyUser = Config.userDefault
        this.playerConfig = Config.playerConfigDefault
        this.gameState = Config.gameStateDefault
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
    public emitPlayerSelectionInit() {}
    public emitPlayerSelectionEnd(): void {}
    public abstract emitPlayerSelectionStart(playerConfig: PlayerConfig): void
    public emitGameInit(): void {}
    public emitGameJoined(): void {}
    public emitGameRefresh(): void {}
    public emitGameUpdated(): void {}

}
