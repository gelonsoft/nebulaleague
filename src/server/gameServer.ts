import { Socket } from "socket.io"
import { v4 as uuidv4 } from 'uuid'

import {
    DomainSocket,
    PlayerModel,
    PlayerChanged,
    ProjectileModel,
    GameState,
    LobyState,
    PlayerSelectionState,
}
from "../shared/models"

import {
    ServerEvent,
    GameEvent,
    LobyEvent,
    PlayerSelectionEvent,
} from "../shared/events"


export class GameServer {
    public io: SocketIO.Server
    public lobyState: Map<string, LobyState>
    public playerSelectionState: Map<string, PlayerSelectionState>
    public gameState: Map<string, GameState>
    public clientRooms: Map<string, string>
    
    constructor(io: SocketIO.Server) {
        this.io = io
        this.lobyState = new Map()
        this.gameState = new Map()
        this.playerSelectionState = new Map()
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
        this.addLobyListener(socket)
        this.addPlayerSelectionListener(socket)
        this.addGameEventListener(socket)
    }


    public addLobyListener(socket: DomainSocket): void {
        socket.on(
            LobyEvent.init,
            () => {
                socket.join('loby')
                this.clientRooms.set(socket.id, 'loby')
                this.io.to('loby').emit(LobyEvent.init)
            }
        )

        socket.on(
            LobyEvent.start,
            (lobyState: LobyState) => {
                this.lobyState.set(socket.id, lobyState)
                socket.emit(LobyEvent.start, lobyState)
            }
        )
        
        socket.on(
            LobyEvent.end,
            () => {
                this.io.to('loby').emit(LobyEvent.end)
                socket.leave('loby')
                this.clientRooms.delete(socket.id)
            }
        )
    }
    


    public addPlayerSelectionListener(socket: DomainSocket): void {
        socket.on(
            PlayerSelectionEvent.init,
            () => {
                socket.emit(PlayerSelectionEvent.init)
            }
        )

        socket.on(
            PlayerSelectionEvent.start,
            (playerSelectionState: PlayerSelectionState) => {
                this.playerSelectionState.set(socket.id, playerSelectionState)
                socket.emit(PlayerSelectionEvent.start, playerSelectionState)
            }
        )
        
        socket.on(
            PlayerSelectionEvent.end, 
            () => {
                this.clientRooms.delete(socket.id)
            }
        )
    }

    public addGameEventListener(socket: DomainSocket): void {
        socket.on(
            GameEvent.start,
            (playerSelectionState: PlayerSelectionState) => {
                socket.emit(GameEvent.otherPlayers, this.getAllPlayers())
                this.createPlayer(socket, playerSelectionState.player)
                socket.emit(GameEvent.protagonist, socket.player)
                socket.broadcast.emit(GameEvent.joined, socket.player)
            }
        )

        socket.on(GameEvent.end, () => {
            if (socket.player) {
                socket.broadcast.emit(GameEvent.quit, socket.player.id)
            }
        })

        socket.on(GameEvent.fire, (projectile: ProjectileModel) => {
            this.io.emit(GameEvent.fire, projectile)
        }) 

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
    

    public newGameRoom(
        socket: Socket,
        gameMode: string
    ): void {
        
    }

    public startGameRoom(socket: Socket, gameMode: string): void {
        
        
        
    }

    public associateGameRoom(): void {
        
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
