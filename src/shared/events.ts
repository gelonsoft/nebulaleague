export class ServerEvent {
    public static readonly connected = "connection"
    public static readonly disconnected = "disconnect"
}

export class LobyEvent {
    public static readonly init = "loby:init"
    public static readonly end = "loby:end"
    public static readonly start = "loby:start"
}

export class PlayerSelectionEvent {
    public static readonly init = "playerSelection:init"
    public static readonly end = "playerSelection:end"
    public static readonly start = "playerSelection:start"
}

export class GameEvent {
    public static readonly init = "game:init"
    public static readonly end = "game:over"
    public static readonly start = "game:start"
    public static readonly quit = "game:quit"
    public static readonly joined = "game:joined"
    public static readonly protagonist = "game:protagonist"
    public static readonly otherPlayers = "game:otherPlayers"
    public static readonly move = "game:move"
    public static readonly hit = "game:hit"
    public static readonly fire = "game:fire"
}
