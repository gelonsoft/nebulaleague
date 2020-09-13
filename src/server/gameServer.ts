import { Socket } from "socket.io"
import { v4 as uuidv4 } from 'uuid'


import {
    GameState,
    LobyState,
    PlayerSelectionState,
    ControlledBy,
    PlayerAction,
    User,
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
    public lobyName: string
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
        this.initMainLoby()
        this.socketEvents()
    }

    public initMainLoby() {
        this.lobyName = 'loby'
        this.roomToLobyState.set(this.lobyName, {
            users: new Map()
        })
    }

    public socketEvents(): void {
        this.io.on(ServerEvent.connected, (socket: Socket) => {
            this.attachListeners(socket)
        })
    }


    public attachListeners(socket: Socket): void {
        this.addLobyListener(socket)
        this.addPlayerSelectionListener(socket)
        this.addGameListener(socket)
        this.addDisconnectListener(socket)
    }


    public addDisconnectListener(socket: Socket): void {
        socket.on(ServerEvent.disconnected, () => {
            const room = this.clientToRoom.get(socket.id)
            const isFromLoby = this.roomToLobyState.has(room)
            const isFromPlayerSelection = this.roomToPlayerSelectionState.has(room)
            const isFromGame = this.roomToPlayerSelectionState.has(room)
            console.log({
                room,
                isFromLoby,
                isFromPlayerSelection,
                isFromGame,
            })
        })

    }

    public addLobyListener(socket: Socket): void {
        socket.on(LobyEvent.init, () => {
            socket.join(this.lobyName)
            this.clientToRoom.set(socket.id, this.lobyName)
            const lobyState = this.roomToLobyState.get(this.clientToRoom.get(socket.id))
            lobyState.users.set(socket.id, {
                name: 'anonymous',
                gameMode: 'ffa',
            })
            this.io.to(this.lobyName).emit(LobyEvent.init)
        })

        socket.on(LobyEvent.start, (user: User) => {
            const lobyState = this.roomToLobyState.get(this.clientToRoom.get(socket.id))
            const lobyUser = lobyState.users.get(socket.id)
            Object.assign(lobyUser, {
                name: user.name,
                gameMode: user.gameMode,
                playerSelectionRoom: uuidv4(),
            })
            socket.emit(LobyEvent.start, lobyUser)
        })
        
        socket.on(LobyEvent.end, () => {
            const lobyState = this.roomToLobyState.get(this.clientToRoom.get(socket.id))
            lobyState.users.delete(socket.id)
            this.io.to(this.lobyName).emit(LobyEvent.end)
            socket.leave(this.lobyName)
            this.clientToRoom.delete(socket.id)
        })
    }

    public addPlayerSelectionListener(socket: Socket): void {
        socket.on(PlayerSelectionEvent.init, (user: User) => {
            socket.join(user.playerSelectionRoom)
            this.clientToRoom.set(socket.id, user.playerSelectionRoom)
            this.io.to(this.clientToRoom.get(socket.id)).emit(PlayerSelectionEvent.init)
        })

        socket.on(PlayerSelectionEvent.start, (playerSelectionState: PlayerSelectionState) => {
            playerSelectionState.gameRoom = this.startGameRoom(socket, playerSelectionState)
            socket.emit(PlayerSelectionEvent.start, playerSelectionState)
        })
        
        socket.on(PlayerSelectionEvent.end, () => {
            this.io.to(this.clientToRoom.get(socket.id)).emit(PlayerSelectionEvent.end)
            socket.leave(this.clientToRoom.get(socket.id))
            this.clientToRoom.delete(socket.id)
        })
    }

    public addGameListener(socket: Socket): void {
        socket.on(GameEvent.init, (playerSelectionState: PlayerSelectionState) => {
            const gameState = this.roomToGameState.get(playerSelectionState.gameRoom)
            socket.join(playerSelectionState.gameRoom)
            this.clientToRoom.set(socket.id, playerSelectionState.gameRoom)
            gameState.players.push({
                ...playerSelectionState.player,
                id: socket.id,
                selectedAbilityKey: null,
                x: 0,
                y: 0,
                rotation: 0,
                controlledBy: ControlledBy.MainPlayer
            })
            socket.emit(GameEvent.init, gameState)
            // this.debugRoom()
        })

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

        socket.on(GameEvent.action, (actions: PlayerAction) => {
            this.io.to(this.clientToRoom.get(socket.id)).emit(GameEvent.action, actions)
        })
    }
    

    public newGameRoom(socket: Socket, playerSelectionState: PlayerSelectionState): string {
        const roomName = uuidv4()
        this.roomToGameState.set(roomName, {
            gameMode: playerSelectionState.gameMode,
            players: []
        })
        return roomName
    }

    public startGameRoom(socket: Socket, playerSelectionState: PlayerSelectionState): string {
        let choosenRoom:string | null = null
        if(playerSelectionState.gameMode === 'ffa') {
            for (const [roomName, gameState] of this.roomToGameState.entries()) {
                if(gameState.gameMode === 'ffa' && gameState.players.length < 10) {
                    choosenRoom = roomName
                    break
                }
            }
            if (!choosenRoom) {
                choosenRoom = this.newGameRoom(socket, playerSelectionState)
            }
        }
        return choosenRoom
    }

    public associatePlayerToGameRoom(): void {
        
    }


    public randomInt(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low) + low)
    }

    public debugRoom() {
        console.dir({
            roomToLobyState: this.roomToLobyState,
            roomToPlayerSelectionState: JSON.stringify(this.roomToPlayerSelectionState),
            roomToGameState: this.roomToGameState,
        }, {depth: null})
        
    }
}
