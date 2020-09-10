import * as io from 'socket.io-client'
import { MyGame } from "./phaserEngine"
import { PlayerSelectionScene } from './scenes/playerSelectionScene'
import { MenuScene } from './scenes/menuScene'
import { MainScene } from './scenes/mainScene'
import { PlayerModel, ProjectileModel, PlayerMovement } from '../shared/models'
import { GameEvent, ProjectileEvent, PlayerEvent } from '../shared/events.model'
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


    public emitAuthenticate(playerConfig: PlayerConfig) {
        window.localStorage.setItem('playerConfig', JSON.stringify(playerConfig))
        this.socket.emit(GameEvent.authentication, playerConfig)
    }

    public emitProjectileFire(projectileModel: ProjectileModel) {
        this.socket.emit(ProjectileEvent.fire , projectileModel)
    }

    public emitPlayerMove(playerMovement: PlayerMovement) {
        this.socket.emit(PlayerEvent.coordinates, playerMovement)
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
        this.socket.on(PlayerEvent.protagonist, (playerModel: PlayerModel) => {
            this.player = playerModel
            this.players.push(this.player)
            this.isProtagonistReady = true
            this.launchGameIfReady()
        })

        this.socket.on(PlayerEvent.players, (playersModel: PlayerModel[]) => {
            this.players.concat(playersModel)
            this.isOtherPlayersReady = true
            this.launchGameIfReady()
        })

        this.socket.on(PlayerEvent.joined, (playerModel: PlayerModel) => {
            this.players.push(playerModel)
            this.game.events.emit(PlayerEvent.joined, playerModel)
        })
        
        this.socket.on(PlayerEvent.quit, (playerId: string) => {
            this.players = this.players.filter((playerModel: PlayerModel) => playerModel.id !== playerId)
            this.game.events.emit(PlayerEvent.quit, playerId)
        })

        this.socket.on(PlayerEvent.coordinates, (playerMovement: PlayerMovement) => {
            this.players.forEach((player: PlayerModel) => {
                if(player.id === playerMovement.id) {
                    player.x = playerMovement.x
                    player.y = playerMovement.y
                    player.rotation = playerMovement.rotation
                }
            })
            this.game.events.emit(PlayerEvent.coordinates, playerMovement)
        })

        this.socket.on(ProjectileEvent.fire, (projectileModel: ProjectileModel) => {
            this.game.events.emit(ProjectileEvent.fire, projectileModel)
        })
    }
    
    
}
