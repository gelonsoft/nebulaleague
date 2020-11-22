import { isEmpty } from 'lodash'
import * as io from 'socket.io-client'
import { MyGame } from '~/client/index'
import { PlayerSelectionScene } from '~/client/scenes/playerSelectionScene'
import { LobyScene } from '~/client/scenes/lobyScene'
import { MainScene } from '~/client/scenes/mainScene'

import {
    PlayerModel,
    PlayerConfig,
    GameState,
    PlayerAction,
    User,
    PlayerSelectionState,
    GameStateChanged,
} from '~/shared/models'
import { ClientEvent, ServerEvent, Event } from '~/shared/events'

export class Client {
    public socket: SocketIOClient.Socket
    public game: MyGame
    public mainScene: MainScene
    public playerSelectionScene: PlayerSelectionScene
    public lobyScene: LobyScene
    public players: PlayerModel[]
    public lobyUser: User
    public playerSelectionState: PlayerSelectionState
    public gameState: GameState
    public gameStateChangedReceived: GameStateChanged
    public gameStateUpdatedCurrent: GameStateChanged
    public isHost: boolean
    public isGameInit: boolean
    public isGameJoined: boolean

    constructor(game: MyGame) {
        this.game = game
        this.socket = io.connect()
        this.mainScene = this.game.scene.getScene('mainScene') as MainScene
        this.lobyScene = this.game.scene.getScene('lobyScene') as LobyScene
        this.playerSelectionScene = this.game.scene.getScene('playerSelectionScene') as PlayerSelectionScene
        this.players = []
        this.gameStateChangedReceived = {}
        this.gameStateUpdatedCurrent = {}
        this.isHost = false
        this.isGameInit = false
        this.isGameJoined = false
        this.attachListeners()
    }

    get id(): string {
        return this.socket.id
    }

    get isGameReady(): boolean {
        return this.isGameInit && this.isGameJoined
    }

    public emitLobyInit(): void {
        this.socket.emit(ServerEvent.lobyInit)
    }

    public emitLobyEnd(): void {
        this.socket.emit(ServerEvent.lobyEnd)
    }

    public emitLobyStart(user: User): void {
        this.socket.emit(ServerEvent.lobyStart, user)
    }

    public emitPlayerSelectionInit(): void {
        this.socket.emit(ServerEvent.playerSelectionInit, this.lobyUser)
    }

    public emitPlayerSelectionEnd(): void {
        this.socket.emit(ServerEvent.playerSelectionEnd)
    }

    public emitPlayerSelectionStart(playerConfig: PlayerConfig): void {
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
        this.socket.emit(ServerEvent.playerSelectionStart, playerConfig)
    }

    public emitGameInit() {
        this.socket.emit(ServerEvent.gameInit, this.playerSelectionState)
    }

    public emitGameJoined() {
        this.socket.emit(ServerEvent.gameJoined)
    }

    public emitGameRefresh() {
        this.socket.emit(ServerEvent.gameRefreshServer)
    }

    public emitGameUpdated() {
        if (!isEmpty(this.gameStateUpdatedCurrent)) {
            this.socket.emit(ServerEvent.gameUpdated, this.gameStateUpdatedCurrent)
        }
    }

    public attachListeners(): void {
        this.addLobyListener()
        this.addPlayerSelectionListener()
        this.addGameListener()
    }

    public addLobyListener(): void {
        this.socket.on(ClientEvent.lobyStart, (user: User) => {
            this.lobyUser = user
            this.game.events.emit(Event.lobyStart, this.lobyUser)
        })
    }

    public addPlayerSelectionListener(): void {
        this.socket.on(ClientEvent.playerSelectionStart, (playerSelectionState: PlayerSelectionState) => {
            this.playerSelectionState = playerSelectionState
            this.game.events.emit(Event.playerSelectionStart)
        })
    }

    public addGameListener(): void {
        this.socket.on(ClientEvent.gameInit, (gameState: GameState) => {
            this.gameState = gameState
            this.isHost = gameState.hostId === this.id
            this.game.events.emit(Event.gameReady)
        })

        this.socket.on(ClientEvent.gameUpdated, (gameState: GameStateChanged) => {
            this.gameStateChangedReceived = gameState
            this.game.events.emit(Event.gameUpdated)
        })

        this.socket.on(ClientEvent.gameJoined, (playerReceive: PlayerModel) => {
            this.game.events.emit(Event.playerJoined, playerReceive)
        })

        this.socket.on(ClientEvent.gameNewHost, (hostId: string) => {
            if (this.id === hostId) {
                this.isHost = true
            }
        })

        this.socket.on(ClientEvent.gameQuit, (playerReceive: PlayerModel) => {
            this.game.events.emit(Event.playerQuit, playerReceive.id)
        })

        this.socket.on(ClientEvent.gameAction, (action: PlayerAction) => {
            this.game.events.emit(Event.playerAction, action)
        })
    }
}
