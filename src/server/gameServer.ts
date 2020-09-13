import { Socket } from "socket.io"
import { v4 as uuidv4 } from 'uuid'


import {
    GameState,
    LobyState,
    PlayerSelectionState,
    ControlledBy,
    PlayerAction,
    User,
    PlayerConfig,
}
from "../shared/models"


import { Config } from "../shared/config"

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
            const isFromGame = this.roomToGameState.has(room)
            console.dir({
                room,
                isFromLoby,
                isFromPlayerSelection,
                isFromGame,
                roomToPlayerSelectionState: this.roomToPlayerSelectionState,
                roomToGameState: this.roomToGameState,
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
            const selectedRoom = this.startPlayerSelectionRoom(socket, user)
            
            Object.assign(lobyUser, {
                name: user.name,
                gameMode: user.gameMode,
                playerSelectionRoom: selectedRoom,
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
            const playerSelectionState = this.roomToPlayerSelectionState.get(user.playerSelectionRoom)
            socket.join(user.playerSelectionRoom)
            this.clientToRoom.set(socket.id, user.playerSelectionRoom)
            playerSelectionState.players.push({...Config.defaultPlayerModel, id: socket.id})
            this.io.to(this.clientToRoom.get(socket.id)).emit(PlayerSelectionEvent.init)
        })

        socket.on(PlayerSelectionEvent.start, (playerConfig: PlayerConfig) => {
            const playerSelectionState = this.roomToPlayerSelectionState.get(this.clientToRoom.get(socket.id))
            const playerModel = playerSelectionState.players.find((player) => player.id === socket.id)
            Object.assign(playerModel, playerConfig)
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
            gameState.players.push(...playerSelectionState.players)
            socket.emit(GameEvent.init, gameState)
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
    

    public newGameRoom(playerSelectionState: PlayerSelectionState): string {
        const roomName = uuidv4()
        this.roomToGameState.set(roomName, {
            gameMode: playerSelectionState.gameMode,
            players: []
        })
        return roomName
    }

    public newPlayerSelectionRoom(lobyUser: User): string {
        const roomName = uuidv4()
        this.roomToPlayerSelectionState.set(roomName, {
            gameMode: lobyUser.gameMode,
            players: [],
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
                choosenRoom = this.newGameRoom(playerSelectionState)
            }
        }
        return choosenRoom
    }

    
    public startPlayerSelectionRoom(socket: Socket, lobyUser: User): string {
        let choosenRoom:string | null = null
        if(lobyUser.gameMode === 'ffa') {
            choosenRoom = this.newPlayerSelectionRoom(lobyUser)
        }
        return choosenRoom
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
