"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerEvent = exports.GameEvent = void 0;
class GameEvent {
}
exports.GameEvent = GameEvent;
GameEvent.start = "game:start";
GameEvent.end = "game:over";
GameEvent.quit = "game:quit";
GameEvent.joined = "game:joined";
GameEvent.protagonist = "game:protagonist";
GameEvent.otherPlayers = "game:otherPlayers";
GameEvent.move = "game:move";
GameEvent.hit = "game:hit";
GameEvent.fire = "game:fire";
class ServerEvent {
}
exports.ServerEvent = ServerEvent;
ServerEvent.connected = "connection";
ServerEvent.disconnected = "disconnect";
//# sourceMappingURL=events.model.js.map