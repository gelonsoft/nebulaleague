import { MyGame } from '~/client/index'
import { PlayerSelectionScene } from '~/client/scenes/playerSelectionScene'
import { LobyScene } from '~/client/scenes/lobyScene'

import {
    PlayerConfig,
    GameState,
    User,
    PlayerSelectionState,
    ControlledBy,
    SceneGameKey,
} from '~/shared/models'
import { ClientEvent, Event } from '~/shared/events'
import { GameTrainingScene, GameFfaScene, GameScene } from '~/client/scenes/gameScene'
import { Config } from '~/shared/config'
import { HudScene } from '~/client/scenes/hudScene'

const otherPlayers = {
    playerAI1: Config.playerDefaultModel,
    playerAI2: Config.playerDefaultModel,
    playerAI3: Config.playerDefaultModel,
    playerAI4: Config.playerDefaultModel,
    playerAI5: Config.playerDefaultModel,
    playerAI6: Config.playerDefaultModel,
    playerAI7: Config.playerDefaultModel,
    playerAI8: Config.playerDefaultModel,
    playerAI9: Config.playerDefaultModel,
}






export class Client {
    public game: MyGame
    public playerSelectionScene: PlayerSelectionScene
    public lobyScene: LobyScene
    public gameFfaScene: GameFfaScene
    public gameTrainingScene: GameTrainingScene
    public playerSelectionState: PlayerSelectionState
    public hudScene: HudScene
    public lobyUser: User
    public gameState: GameState
    public isHost: boolean
    public isGameInit: boolean
    public isGameJoined: boolean

    constructor(game: MyGame) {
        this.game = game
        this.lobyScene = this.game.scene.getScene(Config.scenes.loby.key) as LobyScene
        this.playerSelectionScene = this.game.scene.getScene(
            Config.scenes.playerSelection.key
        ) as PlayerSelectionScene
        this.gameFfaScene = this.game.scene.getScene(Config.scenes.gameFfa.key) as GameFfaScene
        this.gameTrainingScene = this.game.scene.getScene(Config.scenes.gameTraining.key) as GameTrainingScene
        this.hudScene = this.game.scene.getScene(Config.scenes.hud.key) as HudScene
        this.isHost = false
        this.isGameInit = false
        this.isGameJoined = false
    }

    get id(): string {
        return 'offline'
    }

    get isGameReady(): boolean {
        return this.isGameInit && this.isGameJoined
    }

    public emitLobyInit(): void {
        console.log('emitLobyInit')
    }

    public emitLobyEnd(): void {
        console.log('emitLobyEnd')
    }

    public emitLobyStart(user: User): void {
        this.lobyUser = user
        this.lobyScene.scene.start(Config.scenes.playerSelection.key)
    }

    public emitPlayerSelectionInit(): void {
        console.log('emitPlayerSelectionInit')
    }

    public emitPlayerSelectionEnd(): void {
        console.log('emitPlayerSelectionEnd')
    }

    public emitPlayerSelectionStart(playerConfig: PlayerConfig): void {
        this.gameState = {
            players: {
                offline: {
                    id: this.id,
                    x: 0,
                    y: 0,
                    rotation: 0,
                    controlledBy: ControlledBy.MainPlayer,
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

    public get gameKey(): SceneGameKey {
        return Config.modeToGameKey[this.gameState.gameMode]
    }

    public get gameScene(): GameScene {
        return this.game.scene.getScene(this.gameKey) as GameScene
    }

    public emitGameInit() {
        console.log('emitGameInit')
    }

    public emitGameJoined() {
        console.log('emitGameJoined')
    }

    public emitGameRefresh() {
        console.log('emitGameRefresh')
    }
}
