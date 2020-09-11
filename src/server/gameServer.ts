import { Socket } from "socket.io"
import { v4 as uuidv4 } from 'uuid'

import {
    DomainSocket,
    PlayerModel,
    PlayerChanged,
    ProjectileModel,
}
from "../shared/models"

import {
    ServerEvent,
    GameEvent,
} from "../shared/events.model"


export class GameServer {
    public io: SocketIO.Server
    public state: Map<string, any>
    public clientRooms: Map<string, any>
    
    constructor(io: SocketIO.Server) {
        this.io = io
        this.state = new Map()
        this.clientRooms = new Map()
        
        this.socketEvents()
    }


    public socketEvents(): void {
        this.io.on(ServerEvent.connected, (socket: DomainSocket) => {
            this.attachListeners(socket)
        })

        this.io.on(ServerEvent.disconnected, (socket: DomainSocket) => {
            
        })
    }

    public attachListeners(socket: DomainSocket): void {
        this.addSignOnListener(socket)
        this.addSignOutListener(socket)
        this.addMovementListener(socket)
        this.addProjectileCreateListener(socket)
    }


    public addSignOnListener(socket: DomainSocket): void {
        socket.on(
            GameEvent.start,
            (player: PlayerModel) => {
                socket.emit(GameEvent.otherPlayers, this.getAllPlayers())
                this.createPlayer(socket, player)
                socket.emit(GameEvent.protagonist, socket.player)
                socket.broadcast.emit(GameEvent.joined, socket.player)
            }
        )
    }

     public addSignOutListener(socket: DomainSocket): void {
        socket.on(GameEvent.end, () => {
            if (socket.player) {
                socket.broadcast.emit(GameEvent.quit, socket.player.id)
            }
        })
    }

    public addProjectileCreateListener(socket: DomainSocket): void {
        socket.on(GameEvent.fire, (projectile: ProjectileModel) => {
            this.io.emit(GameEvent.fire, projectile)
        })
    }


    public addMovementListener(socket: DomainSocket): void {
        socket.on(GameEvent.move, (playerChanged: PlayerChanged) => {
            socket.player = {
                ...socket.player,
                x: playerChanged.x,
                y: playerChanged.y,
                rotation: playerChanged.rotation,
            }
            socket.broadcast.emit(GameEvent.move, socket.player)
        })
    }
    
    public createPlayer(
        socket: DomainSocket,
        player: PlayerModel,
    ): void {
        socket.player = {
            name: player.name,
            id: uuidv4(),
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

    public getAllPlayers(): Array<PlayerModel> {
        return Object.keys(this.io.sockets.connected).reduce((acc, socketID) => {
            const player = (this.io.sockets.connected[socketID] as DomainSocket).player
            if (player) {
                acc.push(player)
            }
            return acc
        }, [])
    }
    

    public randomInt(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low) + low)
    }
}
