import { Socket } from "socket.io"
import { v4 as uuidv4 } from 'uuid'

import {
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
    public roomToLobyState: Map<string, LobyState>
    public roomToPlayerSelectionState: Map<string, PlayerSelectionState>
    public roomToGameState: Map<string, GameState>
    public clientToRoom: Map<string, string>
    
    constructor(io: SocketIO.Server) {
        this.io = io
        this.roomToLobyState = new Map()
        this.roomToGameState = new Map()
        this.roomToPlayerSelectionState = new Map()
        this.clientToRoom = new Map()
        this.socketEvents()
    }


    public socketEvents(): void {
        this.io.on(ServerEvent.connected, (socket: Socket) => {
            this.attachListeners(socket)
        })

        this.io.on(ServerEvent.disconnected, (socket: Socket) => {
            
        })
    }


    public attachListeners(socket: Socket): void {
        this.addLobyListener(socket)
        this.addPlayerSelectionListener(socket)
        this.addGameListener(socket)
    }


    public addLobyListener(socket: Socket): void {
        socket.on(
            LobyEvent.init,
            () => {
                socket.join('loby')
                this.clientToRoom.set(socket.id, 'loby')
                this.io.to('loby').emit(LobyEvent.init)
            }
        )

        socket.on(
            LobyEvent.start,
            (lobyState: LobyState) => {
                lobyState.playerSelectionRoom = uuidv4()
                socket.emit(LobyEvent.start, lobyState)
            }
        )
        
        socket.on(
            LobyEvent.end,
            () => {
                this.io.to('loby').emit(LobyEvent.end)
                socket.leave('loby')
                this.clientToRoom.delete(socket.id)
            }
        )
    }
    


    public addPlayerSelectionListener(socket: Socket): void {
        socket.on(PlayerSelectionEvent.init,
            (lobyState: LobyState) => {
                socket.join(lobyState.playerSelectionRoom)
                this.clientToRoom.set(socket.id, lobyState.playerSelectionRoom)
                this.io.to(this.clientToRoom.get(socket.id)).emit(PlayerSelectionEvent.init)
            }
        )

        socket.on(
            PlayerSelectionEvent.start,
            (playerSelectionState: PlayerSelectionState) => {
                playerSelectionState.gameRoom = this.startGameRoom(socket, playerSelectionState)
                socket.emit(PlayerSelectionEvent.start, playerSelectionState)
            }
        )
        
        socket.on(
            PlayerSelectionEvent.end, 
            () => {
                this.io.to(this.clientToRoom.get(socket.id)).emit(LobyEvent.end)
                socket.leave(this.clientToRoom.get(socket.id))
                this.clientToRoom.delete(socket.id)
            }
        )
    }

    public addGameListener(socket: Socket): void {
        socket.on(
            GameEvent.init,
            (playerSelectionState: PlayerSelectionState) => {
                const gameState = this.roomToGameState.get(playerSelectionState.gameRoom)
                socket.join(playerSelectionState.gameRoom)
                this.clientToRoom.set(socket.id, playerSelectionState.gameRoom)
                gameState.players.push(playerSelectionState.player)
                socket.emit(GameEvent.init, gameState)
            }
        )

        socket.on(GameEvent.end, () => {
            socket.to(this.clientToRoom.get(socket.id)).emit(GameEvent.end)
            socket.leave(this.clientToRoom.get(socket.id))
            this.clientToRoom.delete(socket.id)
        })

        
        socket.on(GameEvent.joined, () => {
            const gameState = this.roomToGameState.get(this.clientToRoom.get(socket.id))
            const newPlayer = gameState.players.find((player) => player.id === socket.id)
            socket.to(this.clientToRoom.get(socket.id)).emit(GameEvent.joined, newPlayer)
        })

        socket.on(GameEvent.quit, () => {
            const gameState = this.roomToGameState.get(this.clientToRoom.get(socket.id))
            const quitPlayer = gameState.players.find((player) => player.id === socket.id)
            socket.to(this.clientToRoom.get(socket.id)).emit(GameEvent.quit, quitPlayer)
        })
        
        socket.on(GameEvent.fire, (projectile: ProjectileModel) => {
            this.io.to(this.clientToRoom.get(socket.id)).emit(GameEvent.fire, projectile)
        }) 

        socket.on(GameEvent.move, (playerChanged: PlayerChanged) => {
            const gameState = this.roomToGameState.get(this.clientToRoom.get(socket.id))
            const currentPlayer = gameState.players.find((player) => player.id === socket.id)
            Object.assign(currentPlayer, {
                x: playerChanged.x,
                y: playerChanged.y,
                rotation: playerChanged.rotation,
            })
            socket.broadcast.emit(GameEvent.move, currentPlayer)
        })
    }
    

    public newGameRoom(socket: Socket): string {
        const { gameMode } = this.roomToLobyState.get(socket.id)
        const roomName = uuidv4()
        this.roomToGameState.set(roomName, {
            gameMode: gameMode,
            players: []
        })
        return roomName
    }

    public startGameRoom(socket: Socket, playerSelectionState: PlayerSelectionState): string {
        let choosenRoom:string | null = null
        if(playerSelectionState.gameMode === 'ffa') {
            for (const [roomName, gameState] of Object.entries(this.roomToGameState)) {
                if(gameState.gameMode === 'ffa' && gameState.players.length < 10) {
                    choosenRoom = roomName
                    break
                }
            }
            if (!choosenRoom) {
                choosenRoom = this.newGameRoom(socket)
            }
        }
        return choosenRoom
    }

    public associatePlayerToGameRoom(): void {
        
    }


    public randomInt(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low) + low)
    }
}
