import { MyGame } from '~/client/index'
import { PlayerSelectionScene } from '~/client/scenes/playerSelectionScene'
import { LobyScene } from '~/client/scenes/lobyScene'

import {
    PlayerConfig,
    GameState,
    User,
    PlayerSelectionState,
    ControlledBy,
} from '~/shared/models'
import { ClientEvent, Event } from '~/shared/events'
import { GameTrainingScene, GameFfaScene, GameScene } from '~/client/scenes/gameScene'
import { Config } from '~/shared/config'

export class Client {
    public game: MyGame
    public playerSelectionScene: PlayerSelectionScene
    public lobyScene: LobyScene
    public gameFfaScene: GameFfaScene
    public gameTrainingScene: GameTrainingScene
    public lobyUser: User
    public playerConfig: PlayerConfig
    public playerSelectionState: PlayerSelectionState
    public gameState: GameState
    public isHost: boolean
    public isGameInit: boolean
    public isGameJoined: boolean

    constructor(game: MyGame) {
        this.game = game
        this.lobyScene = this.game.scene.getScene('lobyScene') as LobyScene
        this.playerSelectionScene = this.game.scene.getScene('playerSelectionScene') as PlayerSelectionScene
        this.gameFfaScene = this.game.scene.getScene('gameFfaScene') as GameFfaScene
        this.gameTrainingScene = this.game.scene.getScene('GameTrainingScene') as GameTrainingScene
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
        this.playerSelectionScene.scene.start()
        this.lobyScene.scene.sleep()
    }

    public emitPlayerSelectionInit(): void {
        console.log('emitPlayerSelectionInit')
    }

    public emitPlayerSelectionEnd(): void {
        console.log('emitPlayerSelectionEnd')
    }

    public emitPlayerSelectionStart(playerConfig: PlayerConfig): void {
        this.playerConfig = playerConfig
        this.gameState = {
            players: {
                offline: {
                    id: this.id,
                    x: 0,
                    y: 0,
                    rotation: 0,
                    controlledBy: ControlledBy.MainPlayer,
                    ...this.playerConfig                    
                }
            },
            projectiles: {},
            gameMode: this.lobyUser.gameMode || 'training',
            hostId: 'hello'
        }
        
        window.localStorage.setItem(
            'playerConfig',
            JSON.stringify({
                weaponPrimaryKey: playerConfig.weaponPrimaryKey,
                weaponSecondaryKey: playerConfig.weaponSecondaryKey,
                abilityKey1: playerConfig.abilityKey1,
                abilityKey2: playerConfig.abilityKey2,
                abilityKey3: playerConfig.abilityKey3,
                abilityKey4: playerConfig.abilityKey4,
            })
        )
        this.gameScene.scene.restart()
        this.playerSelectionScene.scene.sleep()
    }

    public get gameScene(): GameScene {
        const gameKey = Config.modeToGameKey[this.gameState.gameMode]
        return this.game.scene.getScene(gameKey) as GameScene
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
