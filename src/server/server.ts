// @ts-nocheck 
import 'module-alias/register'
import * as http from 'http'
import * as express from 'express'
import * as path from 'path'
import * as socketIO from 'socket.io'
import * as DotenFlow from 'dotenv-flow'

import settingWebpackFormServer from './settingWebpackFormServer'
import { GameServer } from './gameServer'
DotenFlow.config()


const app = express()
app.set('port', process.env.PORT || 3000)
app.set('debug', process.env.DEBUG == 'true' || false)

const httpServer = new http.Server(app)


if (app.get('debug')) {
    settingWebpackFormServer(app)
}

app.use('/assets', express.static(path.resolve('./public/assets')))
app.use('/js', express.static(path.resolve('./public/js')))
app.use('/css', express.static(path.resolve('./public/css')))

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve('./public/index.html'))
})

const io = socketIO(httpServer)
new GameServer(io)
httpServer.listen(app.get('port'), () => {
    console.info(`Server running at http://127.0.0.1:${app.get('port')}`)
})
