import * as io from 'socket.io-client'
import { MyGame } from "./phaserEngine"
import { PlayerSelectionScene } from './scenes/playerSelectionScene'
import { LobyScene } from './scenes/lobyScene'
import { MainScene } from './scenes/mainScene'
import { PlayerModel, ProjectileModel, PlayerDirection, LobyState, PlayerSelectionState, GameState, PlayerMovement } from '../shared/models'
import { GameEvent, LobyEvent, PlayerSelectionEvent } from '../shared/events'
import { Event as ClientEvent }  from './events'

export interface GameInitConfig {
    player: PlayerModel
    players: PlayerModel[]
}

export class Client {
    public socket: SocketIOClient.Socket
    public game: MyGame
    public mainScene: MainScene
    public playerSelectionScene: PlayerSelectionScene
    public lobyScene: LobyScene
    public player: PlayerModel
    public players: PlayerModel[]
    public lobyState: LobyState
    public playerSelectionState: PlayerSelectionState
    public gameState: GameState
    public isGameInit: boolean
    public isGameJoined: boolean
    
    
    constructor(game: MyGame) {
        this.game = game
        this.socket = io.connect()
        this.mainScene = this.game.scene.getScene('mainScene') as MainScene
        this.lobyScene = this.game.scene.getScene('lobyScene') as LobyScene
        this.playerSelectionScene = this.game.scene.getScene('playerSelectionScene') as PlayerSelectionScene
        this.player = null
        this.players = []
        this.lobyState = null
        this.playerSelectionState = null
        this.gameState = null
        this.isGameInit = false
        this.isGameJoined = false
        this.attachListeners()
    }


    get isGameReady(): boolean {
        return this.isGameInit && this.isGameJoined
    }


    public emitLobyInit(): void {
        this.socket.emit(LobyEvent.init)
    }
    
    public emitLobyEnd(): void {
        this.socket.emit(LobyEvent.end)
    }

    public emitLobyStart(lobyState: LobyState): void {
        this.socket.emit(LobyEvent.start, lobyState)
    }


    public emitPlayerSelectionInit(): void {
        this.socket.emit(PlayerSelectionEvent.init, this.lobyState)
    }

    public emitPlayerSelectionEnd(): void {
        this.socket.emit(PlayerSelectionEvent.end)
    }
    
    public emitPlayerSelectionStart(playerSelectionState: PlayerSelectionState): void {
        this.socket.emit(PlayerSelectionEvent.start, playerSelectionState)
    }
    

    public emitGameInit() {
        this.socket.emit(GameEvent.init, this.playerSelectionState)
    }
    
    public emitGameJoined() {
        this.socket.emit(GameEvent.joined)
    }

    public emitGameMove(playerDirection: PlayerDirection) {
        this.socket.emit(GameEvent.move, playerDirection)
    }
    
    public emitGameFire(projectileModel: ProjectileModel) {
        this.socket.emit(GameEvent.fire , projectileModel)
    }

    
    get id(): string {
        return this.socket.id
    }

    
    public attachListeners(): void {
        this.addLobyListener()
        this.addPlayerSelectionListener()
        this.addGameListener()
    }


    public addLobyListener(): void {
        this.socket.on(LobyEvent.start, (lobyState: LobyState) => {
            this.lobyState = lobyState
            this.game.events.emit(ClientEvent.lobyStart, this.lobyState)
        })
    }

    public addPlayerSelectionListener(): void {
        this.socket.on(PlayerSelectionEvent.start, (playerSelectionState: PlayerSelectionState) => {
            this.playerSelectionState = playerSelectionState
            window.localStorage.setItem('playerConfig', JSON.stringify({
                weaponPrimaryKey: this.playerSelectionState.player.weaponPrimaryKey,
                weaponSecondaryKey: this.playerSelectionState.player.weaponSecondaryKey,
                abilityKey1: this.playerSelectionState.player.abilityKey1,
                abilityKey2: this.playerSelectionState.player.abilityKey2,
                abilityKey3: this.playerSelectionState.player.abilityKey3,
                abilityKey4: this.playerSelectionState.player.abilityKey4,
            }))
            this.game.events.emit(ClientEvent.playerSelectionStart)
        })
    }

    public addGameListener(): void {
        this.socket.on(GameEvent.init, (gameState: GameState) => {
            this.gameState = gameState
            this.game.events.emit(ClientEvent.gameReady)
        })

        this.socket.on(GameEvent.joined, (playerReceive: PlayerModel) => {
            this.gameState.players.push(playerReceive)
            this.game.events.emit(ClientEvent.playerJoined, playerReceive)
        })
        
        this.socket.on(GameEvent.quit, (playerReceive: PlayerModel) => {
            this.gameState.players =
                this.gameState.players.filter((player: PlayerModel) => playerReceive.id !== player.id)
            this.game.events.emit(ClientEvent.playerQuit, playerReceive.id)
        })

        this.socket.on(GameEvent.move, (playerMovement: PlayerMovement) => {
            this.game.events.emit(ClientEvent.playerMove, playerMovement)
        })

        this.socket.on(GameEvent.fire, (projectileReceive: ProjectileModel) => {
            this.game.events.emit(ClientEvent.playerFire, projectileReceive)
        }) 
    }
}
