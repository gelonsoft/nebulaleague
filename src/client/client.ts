import * as io from 'socket.io-client'
import { MyGame } from "~/phaserEngine"
import { PlayerSelectionScene } from '~/scenes/playerSelectionScene'
import { LobyScene } from '~/scenes/lobyScene'
import { MainScene } from '~/scenes/mainScene'
import { Player } from '~/player'

import {
    PlayerModel,
    PlayerConfig,
    GameState,
    PlayerAction,
    User,
    PlayerSelectionState,
    GameStateUpdated,
} from '@shared/models'
import { ClientEvent, ServerEvent, Event }  from '@shared/events'


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
        window.localStorage.setItem('playerConfig', JSON.stringify({
            weaponPrimaryKey: playerConfig.weaponPrimaryKey,
            weaponSecondaryKey: playerConfig.weaponSecondaryKey,
            abilityKey1: playerConfig.abilityKey1,
            abilityKey2: playerConfig.abilityKey2,
            abilityKey3: playerConfig.abilityKey3,
            abilityKey4: playerConfig.abilityKey4,
        }))
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

    public emitGameUpdated(gameUpdated: GameStateUpdated) {
        this.socket.emit(ServerEvent.gameUpdated, gameUpdated)
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
            if(!this.isHost) {
                this.emitGameRefresh()
            } else {
                this.game.events.emit(Event.gameReady)
            }
        })

        this.socket.on(ClientEvent.gameUpdated, (updatedGamestate: GameState) => {
            console.log({
                gameState: this.gameState,
                updatedGamestate: updatedGamestate,
            })
            
            this.gameState = updatedGamestate
            this.game.events.emit(Event.gameReady)
        })

        this.socket.on(ClientEvent.gameRefreshServer, () => {
            const updatedPlayers =
                this.mainScene.players.children.getArray().map((player: Player) => {
                    return player.getUpdatedModel()
                })
            const gameStateUpdated = {
                players: updatedPlayers
            }
            this.emitGameUpdated(gameStateUpdated)
        })
        

        this.socket.on(ClientEvent.gameJoined, (playerReceive: PlayerModel) => {
            this.game.events.emit(Event.playerJoined, playerReceive)
        })

        this.socket.on(ClientEvent.gameNewHost, (hostId: string) => {
            if(this.id === hostId) {
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
