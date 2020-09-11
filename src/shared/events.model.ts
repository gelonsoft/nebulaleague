export class GameEvent {
    public static readonly start = "game:start"
    public static readonly end = "game:over"
    public static readonly quit = "game:quit"
    public static readonly joined = "game:joined"
    public static readonly protagonist = "game:protagonist"
    public static readonly otherPlayers = "game:otherPlayers"
    public static readonly move = "game:move"
    public static readonly hit = "game:hit"
    public static readonly fire = "game:fire"
}


export class ServerEvent {
    public static readonly connected: string = "connection"
    public static readonly disconnected: string = "disconnect"
}
