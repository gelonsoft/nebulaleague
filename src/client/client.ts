import * as io from 'socket.io-client'
import { MyGame } from "./phaserEngine"
import { PlayerSelectionScene } from './scenes/playerSelectionScene'
import { LobyScene } from './scenes/lobyScene'
import { MainScene } from './scenes/mainScene'
import { PlayerModel, ProjectileModel, PlayerMovement, LobyState } from '../shared/models'
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
        this.isProtagonistReady = false
        this.isOtherPlayersReady = false
        this.listenEvents()
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
    
    public emitPlayerSelectionStart():void {
        this.socket.emit(PlayerSelectionEvent.start)
    }
    

    public emitGameStart(playerModel: PlayerModel) {
        window.localStorage.setItem('playerConfig', JSON.stringify(playerModel))
        this.socket.emit(GameEvent.start, playerModel)
    }

    public emitGameFire(projectileModel: ProjectileModel) {
        this.socket.emit(GameEvent.fire , projectileModel)
    }

    public emitGameMove(playerMovement: PlayerMovement) {
        this.socket.emit(GameEvent.move, playerMovement)
    }

    public launchGameIfReady(): void{
        if(this.isGameReady) {
            this.game.events.emit(ClientEvent.gameReady, {
                player: this.player,
                players: this.players,
            })
        }
    }
    
    
    public listenEvents(): void {
        this.socket.on(LobyEvent.init, () => {
            console.log('recieve loby init')
        })

        this.socket.on(LobyEvent.start, (lobyState: LobyState) => {
            this.lobyState = lobyState
            this.game.events.emit(ClientEvent.lobyReady, this.lobyState)
        })
        

        this.socket.on(LobyEvent.end, () => {
            console.log('recieve loby end')
        })
        

        
        this.socket.on(GameEvent.protagonist, (playerModel: PlayerModel) => {
            this.player = playerModel
            this.players.push(this.player)
            this.isProtagonistReady = true
            this.launchGameIfReady()
        })

        this.socket.on(GameEvent.otherPlayers, (playersModel: PlayerModel[]) => {
            this.players.concat(playersModel)
            this.isOtherPlayersReady = true
            this.launchGameIfReady()
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
