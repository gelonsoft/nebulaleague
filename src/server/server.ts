import * as express from "express"
import * as path from "path"
import * as socketIO from "socket.io"

const app = express()
app.set("port", process.env.PORT || 9001)

const http = require("http").Server(app)
const io = socketIO(http)


app.use(express.static(path.resolve("./public")))

app.get("/", (req: any, res: any) => {
    res.sendFile(path.resolve("./public/index.html"))
})

io.on("connection", function(socket: any) {
    console.log("Client connected!")
})

http.listen(9001, function() {
    console.log("listening on *:9001")
})
