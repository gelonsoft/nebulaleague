"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEvent = exports.ServerEvent = exports.GameEvent = void 0;
class GameEvent {
}
exports.GameEvent = GameEvent;
GameEvent.authentication = "authentication:successful";
GameEvent.drop = "drop";
class ServerEvent {
}
exports.ServerEvent = ServerEvent;
ServerEvent.connected = "connection";
ServerEvent.disconnected = "disconnect";
class PlayerEvent {
}
exports.PlayerEvent = PlayerEvent;
PlayerEvent.joined = "player:joined";
PlayerEvent.protagonist = "player:protagonist";
PlayerEvent.players = "players:collection";
PlayerEvent.quit = "player:left";
PlayerEvent.pickup = "player:pickup";
PlayerEvent.hit = "player:hit";
PlayerEvent.coordinates = "player:coordinates";
//# sourceMappingURL=events.model.js.map