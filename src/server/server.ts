import * as express from "express"
import * as path from "path"
import * as socketIO from "socket.io"
require('dotenv-flow').config()
const webpackDevMiddleware = require('webpack-dev-middleware')



const app = express()
app.set('port', process.env.PORT || 3000)
app.set('debug', process.env.DEBUG || false)

const http = require("http").Server(app)
const io = socketIO(http)

if (app.get('debug')) {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const config = require(path.resolve('./webpack.dev.config.js'))
    const compiler = webpack(config)
    

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    }))
}

app.use(express.static(path.resolve("./public")))

app.get("/", (req: any, res: any) => {
    res.sendFile(path.resolve("./public/index.html"))
})

io.on("connection", function(socket: any) {
    console.log("Client connected!")
})

http.listen(app.get('port'), function() {
    console.log(`listening on ${app.get('port')}`)
})
