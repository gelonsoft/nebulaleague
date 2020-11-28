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
import { GameDemoScene, GameFfaScene } from './scenes/gameScene'

export class Client {
    public game: MyGame
    public playerSelectionScene: PlayerSelectionScene
    public lobyScene: LobyScene
    public gameFfaScene: GameFfaScene
    public gameDemoScene: GameDemoScene
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
        this.gameDemoScene = this.game.scene.getScene('gameDemoScene') as GameDemoScene
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
            gameMode: this.lobyUser.gameMode || 'default',
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
        if(this.lobyUser.gameMode === 'ffa') {
            this.gameDemoScene.scene.restart()
        } else if (this.lobyUser.gameMode === 'demo') {
            this.gameFfaScene.scene.restart()
        }

        this.playerSelectionScene.scene.sleep()
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
