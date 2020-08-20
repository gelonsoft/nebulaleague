import * as express from "express"
import * as path from "path"
import * as socketIO from "socket.io"
require('dotenv-flow').config()


const app = express()
app.set('port', process.env.PORT || 3000)
app.set('debug', process.env.DEBUG || false)

const http = require("http").Server(app)
const io = socketIO(http)
if (app.get('debug')) {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const hotMiddleware = require('webpack-hot-middleware')
    const config = require(path.resolve('./webpack.dev.config.js'))
    config.entry.app.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(config)
    

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        serverSideRender: true,

    }))
    app.use(hotMiddleware(compiler))
}

app.use(express.static(path.resolve("./public")))

app.get("/", (req: any, res: any) => {
    res.sendFile(path.resolve("./public/index.html"))
})

io.on("connection", function(socket: any) {
    console.log("Client connected!")
})

http.listen(app.get('port'), function() {
    console.log(`Server running at http://127.0.0.1:${app.get('port')}`)
})
