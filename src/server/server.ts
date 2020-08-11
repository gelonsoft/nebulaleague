import * as express from "express"
import * as path from "path"
import * as socketIO from "socket.io"
require('dotenv-flow').config()



const app = express()
app.set('port', process.env.PORT || 3000)

const http = require("http").Server(app)
const io = socketIO(http)


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
