import * as io from 'socket.io-client'
import { MyGame } from "./phaserEngine"
import { PlayerSelectionScene } from './scenes/playerSelectionScene'
import { LobyScene } from './scenes/lobyScene'
import { MainScene } from './scenes/mainScene'
import { PlayerModel, ProjectileModel, PlayerMovement, LobyState, PlayerSelectionState, GameState } from '../shared/models'
import { GameEvent, LobyEvent, PlayerSelectionEvent } from '../shared/events'
import { Event as ClientEvent }  from './events'
import { PlayerConfig } from './player'

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
    public isProtagonistReady: boolean
    public isOtherPlayersReady: boolean
    
    
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
        this.isProtagonistReady = false
        this.isOtherPlayersReady = false
        this.attachListeners()
    }


    get isGameReady(): boolean {
        return this.isProtagonistReady && this.isOtherPlayersReady
    }


    public emitLobyInit(): void {
        this.socket.emit(LobyEvent.init)
    }
    
    public emitLobyEnd(): void {
        this.socket.emit(LobyEvent.end)
    }

    public emitLobyStart(lobyState: LobyState):void {
        this.socket.emit(LobyEvent.start, lobyState)
    }


    public emitPlayerSelectionInit():void {
        this.socket.emit(PlayerSelectionEvent.init)
    }

    public emitPlayerSelectionEnd():void {
        this.socket.emit(PlayerSelectionEvent.end)
    }
    
    public emitPlayerSelectionStart(playerSelectionState: PlayerSelectionState):void {
        this.socket.emit(PlayerSelectionEvent.start, playerSelectionState)
    }
    

    public emitGameStart(playerSelectionState: PlayerSelectionState) {
        this.socket.emit(GameEvent.start, playerSelectionState)
    }

    public emitGameFire(projectileModel: ProjectileModel) {
        this.socket.emit(GameEvent.fire , projectileModel)
    }

    public emitGameMove(playerMovement: PlayerMovement) {
        this.socket.emit(GameEvent.move, playerMovement)
    }

    public launchGameWhenReady(): void{
        if(this.isGameReady) {
            this.gameState = {
                gameMode: this.lobyState.gameMode,
                players: this.players,
                player: this.player,
            }
            this.game.events.emit(ClientEvent.gameReady)
        }
    }
    

    
    public attachListeners(): void {
        this.addLobyListener()
        this.addPlayerSelectionListener()
        this.addGameListener()
    }


    public addLobyListener(): void {
        this.socket.on(LobyEvent.init, () => {
            console.log('recieve loby init')
        })

        this.socket.on(LobyEvent.start, (lobyState: LobyState) => {
            this.lobyState = lobyState
            this.game.events.emit(ClientEvent.lobyStart, this.lobyState)
        })
        
        this.socket.on(LobyEvent.end, () => {
            console.log('recieve loby end')
        })
    }

    public addPlayerSelectionListener(): void {
        this.socket.on(PlayerSelectionEvent.init, () => {
            console.log('recieve playerSelectionInit')
        })

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
        
        this.socket.on(PlayerSelectionEvent.end, () => {
            console.log('recieve playerSelectionEnd')
        })
    }

    public addGameListener(): void {
        this.socket.on(GameEvent.protagonist, (playerModel: PlayerModel) => {
            this.player = playerModel
            this.players.push(this.player)
            this.isProtagonistReady = true
            this.launchGameWhenReady()
        })

        this.socket.on(GameEvent.otherPlayers, (playersModel: PlayerModel[]) => {
            this.players.concat(playersModel)
            this.isOtherPlayersReady = true
            this.launchGameWhenReady()
        })

        this.socket.on(GameEvent.joined, (playerModel: PlayerModel) => {
            this.players.push(playerModel)
            this.game.events.emit(ClientEvent.playerJoined, playerModel)
        })
        
        this.socket.on(GameEvent.quit, (playerId: string) => {
            this.players = this.players.filter((playerModel: PlayerModel) => playerModel.id !== playerId)
            this.game.events.emit(ClientEvent.playerQuit, playerId)
        })

        this.socket.on(GameEvent.move, (playerMovement: PlayerMovement) => {
            this.players.forEach((player: PlayerModel) => {
                if(player.id === playerMovement.id) {
                    player.x = playerMovement.x
                    player.y = playerMovement.y
                    player.rotation = playerMovement.rotation
                }
            })
            this.game.events.emit(ClientEvent.playerMove, playerMovement)
        })

        this.socket.on(GameEvent.fire, (projectileModel: ProjectileModel) => {
            this.game.events.emit(ClientEvent.playerFire, projectileModel)
        })        
    }
}
