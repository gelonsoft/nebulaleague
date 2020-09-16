import { Socket } from "socket.io"
import { v4 as uuidv4 } from 'uuid'


import {
    GameState,
    LobyState,
    PlayerSelectionState,
    PlayerAction,
    User,
    PlayerConfig,
    GameStateUpdated,
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
        socket.on(LobyEvent.init, () => this.handleLobyInit(socket))
        socket.on(LobyEvent.start, (user: User) => this.handleLobyStart(socket, user))
        socket.on(LobyEvent.end, () => this.handleLobyEnd(socket))

        socket.on(PlayerSelectionEvent.init, (user: User) => this.handlePlayerSelectionInit(socket, user))
        socket.on(PlayerSelectionEvent.start, (player: PlayerConfig) => this.handlePlayerSelectionStart(socket, player))
        socket.on(PlayerSelectionEvent.end, () => this.handlePlayerSelectionEnd(socket))


        socket.on(GameEvent.init, (playerSelection: PlayerSelectionState) => this.handleGameInit(socket, playerSelection))
        socket.on(GameEvent.end, () => this.handleGameEnd(socket))
        socket.on(GameEvent.joined, () => this.handleGameJoined(socket))
        socket.on(GameEvent.refreshServer, () => this.handleGameRefresh(socket))
        socket.on(GameEvent.updated, (gameState: GameStateUpdated) => this.handleGameUpdate(socket, gameState))
        socket.on(GameEvent.quit, () => this.handleGameQuit(socket))

        socket.on(ServerEvent.disconnected, () => this.handleDisconnect(socket))
    }


    public handleDisconnect(socket: Socket): void {
        const room = this.clientToRoom.get(socket.id)
        const isFromLoby = this.roomToLobyState.has(room)
        const isFromPlayerSelection = this.roomToPlayerSelectionState.has(room)
        const isFromGame = this.roomToGameState.has(room)
        if (isFromLoby) {
            this.handleLobyEnd(socket)
        } else if (isFromPlayerSelection) {
            this.handlePlayerSelectionEnd(socket)
        } else if (isFromGame) {
            this.handleGameQuit(socket)
            this.handleGameEnd(socket)
        }
    }

    public handleLobyInit(socket) {
        socket.join(this.lobyName)
        this.clientToRoom.set(socket.id, this.lobyName)
        const lobyState = this.roomToLobyState.get(this.clientToRoom.get(socket.id))
        lobyState.users.set(socket.id, {
            name: 'anonymous',
            gameMode: 'ffa',
        })
        this.io.to(this.lobyName).emit(LobyEvent.init)
    }

    public handleLobyStart(socket, user: User) {
        const lobyState = this.roomToLobyState.get(this.clientToRoom.get(socket.id))
        const lobyUser = lobyState.users.get(socket.id)
        const selectedRoom = this.startPlayerSelectionRoom(socket, user)
        Object.assign(lobyUser, {
            name: user.name,
            gameMode: user.gameMode,
            playerSelectionRoom: selectedRoom,
        })
        socket.emit(LobyEvent.start, lobyUser)
    }

    public handleLobyEnd(socket) {
        const lobyState = this.roomToLobyState.get(this.clientToRoom.get(socket.id))
        lobyState.users.delete(socket.id)
        this.io.to(this.lobyName).emit(LobyEvent.end)
        socket.leave(this.lobyName)
        this.clientToRoom.delete(socket.id)
    }


    public handlePlayerSelectionInit(socket, user: User) {
        const playerSelectionState = this.roomToPlayerSelectionState.get(user.playerSelectionRoom)
        socket.join(user.playerSelectionRoom)
        this.clientToRoom.set(socket.id, user.playerSelectionRoom)
        playerSelectionState.players.push({ ...Config.defaultPlayerModel, id: socket.id })
        this.io.to(this.clientToRoom.get(socket.id)).emit(PlayerSelectionEvent.init)
    }

    public handlePlayerSelectionStart(socket, playerConfig: PlayerConfig) {
        const playerSelectionState = this.roomToPlayerSelectionState.get(this.clientToRoom.get(socket.id))
        const playerModel = playerSelectionState.players.find((player) => player.id === socket.id)
        Object.assign(playerModel, playerConfig)
        playerSelectionState.gameRoom = this.startGameRoom(socket, playerSelectionState)
        socket.emit(PlayerSelectionEvent.start, playerSelectionState)
    }

    public handlePlayerSelectionEnd(socket) {
        this.io.to(this.clientToRoom.get(socket.id)).emit(PlayerSelectionEvent.end)
        this.leavePlayerSelectionRoom(socket)
        socket.leave(this.clientToRoom.get(socket.id))
        this.clientToRoom.delete(socket.id)
    }


    public handleGameInit(socket: Socket, playerSelectionState: PlayerSelectionState) {
        const gameState = this.roomToGameState.get(playerSelectionState.gameRoom)
        socket.join(playerSelectionState.gameRoom)
        this.clientToRoom.set(socket.id, playerSelectionState.gameRoom)
        gameState.players.push(...playerSelectionState.players)
        if (!gameState.hostId) {
            gameState.hostId = gameState.players[0].id
        } 
        socket.emit(GameEvent.init, gameState)
    }

    public handleGameRefresh(socket: Socket) {
        const hostId = this.roomToGameState.get(this.clientToRoom.get(socket.id)).hostId
        console.log(hostId)
        socket.to(hostId).emit(GameEvent.refreshServer)
    }

    public handleGameUpdate(socket, gameStateUpdated: GameStateUpdated) {
        const gameState = this.roomToGameState.get(this.clientToRoom.get(socket.id))
        Object.assign(gameState, gameStateUpdated)
        socket.to(this.clientToRoom.get(socket.id)).emit(GameEvent.updated, gameState)
    }

    public handleGameJoined(socket) {
        const gameState = this.roomToGameState.get(this.clientToRoom.get(socket.id))
        const newPlayer = gameState.players.find((player) => player.id === socket.id)
        socket.to(this.clientToRoom.get(socket.id)).emit(GameEvent.joined, newPlayer)
        // socket.to(this.clientToRoom.get(socket.id)).emit(GameEvent.refreshServerFromHost)
        
        // socket.emit(GameEvent.updated, gameState)
    }

    public handleGameQuit(socket) {
        const gameState = this.roomToGameState.get(this.clientToRoom.get(socket.id))
        const quitPlayerIndex = gameState.players.findIndex((player) => player.id === socket.id)
        const quitPlayer = gameState.players[quitPlayerIndex]
        gameState.players.splice(quitPlayerIndex, 1)
        if (quitPlayer.id === gameState.hostId && gameState.players.length > 0) {
            gameState.hostId = gameState.players[0].id
            socket.to(this.clientToRoom.get(socket.id)).emit(GameEvent.newHost, gameState.hostId)
        }
        socket.to(this.clientToRoom.get(socket.id)).emit(GameEvent.quit, quitPlayer)
    }

    public handleGameEnd(socket) {
        socket.to(this.clientToRoom.get(socket.id)).emit(GameEvent.end)
        this.leaveGameRoom(socket)
        socket.leave(this.clientToRoom.get(socket.id))
        this.clientToRoom.delete(socket.id)
    }



    public newGameRoom(playerSelectionState: PlayerSelectionState): string {
        const roomName = uuidv4()
        this.roomToGameState.set(roomName, {
            gameMode: playerSelectionState.gameMode,
            players: [],
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
        let choosenRoom: string | null = null
        if (playerSelectionState.gameMode === 'ffa') {
            for (const [roomName, gameState] of this.roomToGameState.entries()) {
                if (gameState.gameMode === 'ffa' && gameState.players.length < 10) {
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
        let choosenRoom: string | null = null
        if (lobyUser.gameMode === 'ffa') {
            choosenRoom = this.newPlayerSelectionRoom(lobyUser)
        }
        return choosenRoom
    }


    public leavePlayerSelectionRoom(socket: Socket) {
        const selectionRoom = this.clientToRoom.get(socket.id)
        this.roomToPlayerSelectionState.delete(selectionRoom)
    }

    public leaveGameRoom(socket: Socket) {
        const gameRoom = this.clientToRoom.get(socket.id)
        const gameState = this.roomToGameState.get(gameRoom)

        if (gameState.players.length === 0) {
            this.roomToGameState.delete(gameRoom)
        }
    }


    public randomInt(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low) + low)
    }

    public debugRoom(socket, room, depth = 1) {
        const isFromLoby = this.roomToLobyState.has(room)
        const isFromPlayerSelection = this.roomToPlayerSelectionState.has(room)
        const isFromGame = this.roomToGameState.has(room)

        console.dir({
            room,
            isFromLoby,
            isFromPlayerSelection,
            isFromGame,
            roomToLobyState: this.roomToLobyState,
            roomToPlayerSelectionState: this.roomToPlayerSelectionState,
            roomToGameState: this.roomToGameState,
        }, { depth: depth })
    }
}
