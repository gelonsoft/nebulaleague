import * as express from "express"
import * as path from "path"
import * as socketIO from "socket.io"
import { Socket } from "socket.io"
import { v4 as uuidv4 } from 'uuid'

require('dotenv-flow').config()


import {
    PlayerModel,
    CoordinatesModel,
    DomainSocket,
    PlayerChanged,
}
from "../shared/models"

import {
    ServerEvent,
    GameEvent,
    PlayerEvent,
} from "../shared/events.model"


const app = express()
app.set('port', process.env.PORT || 3000)
app.set('debug', process.env.DEBUG == 'true' || false)



const http = require("http").Server(app)
const io = socketIO(http)

if (app.get('debug')) {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const hotMiddleware = require('webpack-hot-middleware')
    const config = require(path.resolve('./webpack.dev.config.js'))
    config.entry.app.unshift('webpack-hot-middleware/client?reload=true&timeout=1000')
    config.plugins.push(new webpack.HotModuleReplacementPlugin())

    const compiler = webpack(config)
    

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        serverSideRender: true,

    }))
    app.use(hotMiddleware(compiler))
}

app.use('/assets', express.static(path.resolve("./public/assets")))
app.use('/js', express.static(path.resolve("./public/js")))
app.use('/css', express.static(path.resolve("./public/css")))


app.get("/", (req: any, res: any) => {
    res.sendFile(path.resolve("./public/index.html"))
})


class GameServer {
    private gameHasStarted = false

    constructor() {
        this.socketEvents()
    }

    public connect(port: number): void {
        http.listen(port, () => {
            console.log(`Server running at http://127.0.0.1:${app.get('port')}`)
        })
    }

    private socketEvents(): void {
        io.on(ServerEvent.connected, (socket: DomainSocket) => {
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
            // socket.player.x = playerChanged.x
            // socket.player.y = playerChanged.y
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
        return Object.keys(io.sockets.connected).reduce((acc, socketID) => {
            const player = (io.sockets.connected[socketID] as DomainSocket).player
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

const gameSession = new GameServer()


gameSession.connect(app.get('port'))


// http.listen(app.get('port'), function() {
//     console.log(`Server running at http://127.0.0.1:${app.get('port')}`)
// })
