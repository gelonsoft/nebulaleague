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
    PlayerEvent,
    ProjectileEvent,
} from "../shared/events.model"



export class GameServer {
    private io: SocketIO.Server
    private gameHasStarted = false
    private projectiles: Map<string, ProjectileModel>

    constructor(io: SocketIO.Server) {
        this.io = io
        this.socketEvents()
        this.projectiles = new Map()
    }


    private socketEvents(): void {
        this.io.on(ServerEvent.connected, (socket: DomainSocket) => {
            this.attachListeners(socket)
        })
    }

    private attachListeners(socket: DomainSocket): void {
        this.addSignOnListener(socket)
        this.addSignOutListener(socket)
        this.addMovementListener(socket)
        this.addProjectileCreateListener(socket)
        this.addProjectileDestroyListener(socket)
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

    private addProjectileCreateListener(socket: DomainSocket): void {
        socket.on(
            ProjectileEvent.fire,
            (projectile: ProjectileModel) => {
                this.io.emit(ProjectileEvent.fire, projectile)
            }
        )
    }


    private addProjectileDestroyListener(socket: DomainSocket): void {
        socket.on(
            ProjectileEvent.kill,
            (projectile: ProjectileModel) => {
                // this.projectiles.delete(projectile.name)
                socket.broadcast.emit(ProjectileEvent.kill, projectile)
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
