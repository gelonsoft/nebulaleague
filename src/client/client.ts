import * as io from 'socket.io-client'
import { MyGame } from "./phaserEngine"
import { PlayerSelectionScene } from './scenes/playerSelectionScene'
import { MenuScene } from './scenes/menuScene'
import { MainScene } from './scenes/mainScene'
import { PlayerModel, ProjectileModel, PlayerMovement } from '../shared/models'
import { GameEvent } from '../shared/events.model'
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
    public menuScene: MenuScene
    public player: PlayerModel
    public players: PlayerModel[]
    public isProtagonistReady: boolean
    public isOtherPlayersReady: boolean
    
    constructor(game: MyGame) {
        this.game = game
        this.socket = io.connect()
        this.mainScene = this.game.scene.getScene('mainScene') as MainScene
        this.menuScene = this.game.scene.getScene('menuScene') as MenuScene
        this.playerSelectionScene = this.game.scene.getScene('playerSelectionScene') as PlayerSelectionScene
        this.player = null
        this.players = []
        this.isProtagonistReady = false
        this.isOtherPlayersReady = false
        this.listenEvents()
    }


    public emitGameStart(playerConfig: PlayerConfig) {
        window.localStorage.setItem('playerConfig', JSON.stringify(playerConfig))
        this.socket.emit(GameEvent.start, playerConfig)
    }

    public emitGameFire(projectileModel: ProjectileModel) {
        this.socket.emit(GameEvent.fire , projectileModel)
    }

    public emitGameMove(playerMovement: PlayerMovement) {
        this.socket.emit(GameEvent.move, playerMovement)
    }

    get isGameReady(): boolean {
        return this.isProtagonistReady && this.isOtherPlayersReady
    }

    public launchGameIfReady(): void{
        if(this.isGameReady) {
            this.game.events.emit('gameReady', {
                player: this.player,
                players: this.players,
            })
        }
    }
    
    
    public listenEvents(): void {
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
            this.game.events.emit(GameEvent.joined, playerModel)
        })
        
        this.socket.on(GameEvent.quit, (playerId: string) => {
            this.players = this.players.filter((playerModel: PlayerModel) => playerModel.id !== playerId)
            this.game.events.emit(GameEvent.quit, playerId)
        })

        this.socket.on(GameEvent.move, (playerMovement: PlayerMovement) => {
            this.players.forEach((player: PlayerModel) => {
                if(player.id === playerMovement.id) {
                    player.x = playerMovement.x
                    player.y = playerMovement.y
                    player.rotation = playerMovement.rotation
                }
            })
            this.game.events.emit(GameEvent.move, playerMovement)
        })

        this.socket.on(GameEvent.fire, (projectileModel: ProjectileModel) => {
            this.game.events.emit(GameEvent.fire, projectileModel)
        })
    }
    
    
}
