// @ts-nocheck
import 'module-alias/register'
import * as http from 'http'
import * as express from 'express'
import * as path from 'path'
import * as DotenFlow from 'dotenv-flow'
import { Server } from "colyseus"
import { monitor } from "@colyseus/monitor"
import { LobbyRoom } from '~/server/gameServer/lobbyRoom'
import { PlayerSelectionRoom } from '~/server/gameServer/playerSelectionRoom'
import { GameRoom } from '~/server/gameServer/gameRoom'

import settingWebpackFormServer from './settingWebpackFormServer'
DotenFlow.config()

const app = express()

app.set('port', process.env.PORT || 3000)
app.set('debug', process.env.DEBUG == 'true' || false)

const httpServer = http.createServer(app)
const server = new Server({
    server: httpServer,
    express: app
})

if (app.get('debug')) {
    app.use("/colyseus", monitor())
    settingWebpackFormServer(app)
}

app.use('/assets', express.static(path.resolve('./public/assets')))
app.use('/js', express.static(path.resolve('./public/js')))
app.use('/css', express.static(path.resolve('./public/css')))

app.get('/', (_req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve('./public/index.html'))
})

server.define('loby', LobbyRoom)
server.define('playerSelection', PlayerSelectionRoom)
server.define('game', GameRoom)
void server.listen(app.get('port'))
console.info(`Server running at http://127.0.0.1:${app.get('port')}`)

