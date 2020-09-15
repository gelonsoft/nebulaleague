import * as io from 'socket.io-client'
import { MyGame } from "./phaserEngine"
import { PlayerSelectionScene } from './scenes/playerSelectionScene'
import { LobyScene } from './scenes/lobyScene'
import { MainScene } from './scenes/mainScene'
import {
    PlayerModel,
    PlayerConfig,
    GameState,
    PlayerAction,
    User,
    PlayerSelectionState,
    GameStateUpdated,
} from '../shared/models'
import { GameEvent, LobyEvent, PlayerSelectionEvent } from '../shared/events'
import { Event as ClientEvent }  from './events'
import { Player } from './player'

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
    public lobyUser: User
    public playerSelectionState: PlayerSelectionState
    public gameState: GameState
    public isHost: boolean
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
        this.lobyUser = null
        this.playerSelectionState = null
        this.gameState = null
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
        this.socket.emit(LobyEvent.init)
    }
    
    public emitLobyEnd(): void {
        this.socket.emit(LobyEvent.end)
    }

    public emitLobyStart(user: User): void {
        this.socket.emit(LobyEvent.start, user)
    }

    public emitPlayerSelectionInit(): void {
        this.socket.emit(PlayerSelectionEvent.init, this.lobyUser)
    }

    public emitPlayerSelectionEnd(): void {
        this.socket.emit(PlayerSelectionEvent.end)
    }
    
    public emitPlayerSelectionStart(playerConfig: PlayerConfig): void {
        window.localStorage.setItem('playerConfig', JSON.stringify({
            weaponPrimaryKey: playerConfig.weaponPrimaryKey,
            weaponSecondaryKey: playerConfig.weaponSecondaryKey,
            abilityKey1: playerConfig.abilityKey1,
            abilityKey2: playerConfig.abilityKey2,
            abilityKey3: playerConfig.abilityKey3,
            abilityKey4: playerConfig.abilityKey4,
        }))
        this.socket.emit(PlayerSelectionEvent.start, playerConfig)
    }
    

    public emitGameInit() {
        this.socket.emit(GameEvent.init, this.playerSelectionState)
    }
    
    public emitGameJoined() {
        this.socket.emit(GameEvent.joined)
    }

    public emitGameAction(actions: PlayerAction) {
        this.socket.emit(GameEvent.action, actions)
    }

    public emitGameRefresh() {
        this.socket.emit(GameEvent.refreshServer)
    }

    public emitGameUpdated(gameUpdated: GameStateUpdated) {
        this.socket.emit(GameEvent.updated, gameUpdated)
    }

    
    public attachListeners(): void {
        this.addLobyListener()
        this.addPlayerSelectionListener()
        this.addGameListener()
    }


    public addLobyListener(): void {
        this.socket.on(LobyEvent.start, (user: User) => {
            this.lobyUser = user
            this.game.events.emit(ClientEvent.lobyStart, this.lobyUser)
        })
    }

    public addPlayerSelectionListener(): void {
        this.socket.on(PlayerSelectionEvent.start, (playerSelectionState: PlayerSelectionState) => {
            this.playerSelectionState = playerSelectionState
            this.game.events.emit(ClientEvent.playerSelectionStart)
        })
    }

    public addGameListener(): void {
        this.socket.on(GameEvent.init, (gameState: GameState) => {
            this.gameState = gameState
            this.isHost = gameState.hostId === this.id
            if(!this.isHost) {
                this.emitGameRefresh()
            } else {
                this.game.events.emit(ClientEvent.gameReady)
            }
        })

        this.socket.on(GameEvent.updated, (updatedGamestate: GameState) => {
            console.log({
                gameState: this.gameState,
                updatedGamestate: updatedGamestate,
            })
            
            this.gameState = updatedGamestate
            this.game.events.emit(ClientEvent.gameReady)
        })

        this.socket.on(GameEvent.refreshServer, () => {
            const updatedPlayers =
                this.mainScene.players.children.getArray().map((player: Player) => {
                    return player.getUpdatedModel()
                })
            const gameStateUpdated = {
                players: updatedPlayers
            }
            this.emitGameUpdated(gameStateUpdated)
        })
        

        this.socket.on(GameEvent.joined, (playerReceive: PlayerModel) => {
            this.game.events.emit(ClientEvent.playerJoined, playerReceive)
        })

        this.socket.on(GameEvent.newHost, (hostId: string) => {
            if(this.id === hostId) {
                this.isHost = true
            }
        })
        
        this.socket.on(GameEvent.quit, (playerReceive: PlayerModel) => {
            this.game.events.emit(ClientEvent.playerQuit, playerReceive.id)
        })

        this.socket.on(GameEvent.action, (action: PlayerAction) => {
            this.game.events.emit(ClientEvent.playerAction, action)
        })
    }
}
