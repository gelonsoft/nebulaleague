import { Socket } from "socket.io"
import { v4 as uuidv4 } from 'uuid'

import {
    DomainSocket,
    PlayerModel,
    CoordinatesModel,
    PlayerChanged,
}
from "../shared/models"

import {
    ServerEvent,
    GameEvent,
    PlayerEvent,
} from "../shared/events.model"



export class GameServer {
    private io: SocketIO.Server
    private gameHasStarted = false

    constructor(io: SocketIO.Server) {
        this.io = io
        this.socketEvents()
    }


    private socketEvents(): void {
        this.io.on(ServerEvent.connected, (socket: DomainSocket) => {
            this.attachListeners(socket)
        })
    }

    private attachListeners(socket: DomainSocket): void {
        this.addSignOnListener(socket)
        this.addMovementListener(socket)
        this.addSignOutListener(socket)
    }


    private gameInitialised(socket: DomainSocket): void {
        if (!this.gameHasStarted) {
            this.gameHasStarted = true
        }
    }

    private addSignOutListener(socket: DomainSocket): void {
        socket.on(ServerEvent.disconnected, () => {
            if (socket.player) {
                socket.broadcast.emit(PlayerEvent.quit, socket.player.id)
            }
        })
    }

    private addSignOnListener(socket: DomainSocket): void {
        socket.on(
            GameEvent.authentication,
            (player: PlayerModel) => {
                socket.emit(PlayerEvent.players, this.getAllPlayers())
                this.createPlayer(socket, player)
                socket.emit(PlayerEvent.protagonist, socket.player)
                socket.broadcast.emit(PlayerEvent.joined, socket.player)
                this.gameInitialised(socket)
            }
        )
    }


    private addMovementListener(socket: DomainSocket): void {
        socket.on(PlayerEvent.coordinates, (playerChanged: PlayerChanged) => {
            socket.player = {
                ...socket.player,
                x: playerChanged.x,
                y: playerChanged.y,
                rotation: playerChanged.rotation,
            }
            socket.broadcast.emit(PlayerEvent.coordinates, socket.player)
        })
    }
    
    private createPlayer(
        socket: DomainSocket,
        player: PlayerModel,
    ): void {
        socket.player = {
            name: player.name,
            id: uuidv4(),
            // x: player.x,
            // y: player.y,
            x: this.randomInt(0, 500),
            y: this.randomInt(0, 500),
            
            abilityKey1: player.abilityKey1,
            abilityKey2: player.abilityKey2,
            abilityKey3: player.abilityKey3,
            abilityKey4: player.abilityKey4,
            controlledBy: 0,
            weaponPrimaryKey: player.weaponPrimaryKey,
            weaponSecondaryKey: player.weaponSecondaryKey,
        }
    }

    private getAllPlayers(): Array<PlayerModel> {
        return Object.keys(this.io.sockets.connected).reduce((acc, socketID) => {
            const player = (this.io.sockets.connected[socketID] as DomainSocket).player
            if (player) {
                acc.push(player)
            }
            return acc
        }, [])
    }

    private randomInt(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low) + low)
    }
}
