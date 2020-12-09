import { Client, Room } from 'colyseus'

import {
    GameStateSchema
} from '~/shared/models'


export class GameRoom extends Room<GameStateSchema> {
    state: GameStateSchema

    onCreate(option: any) {
        this.setState(new GameStateSchema())
    }

    onJoin(client: Client, option: any) {}

    onLeave(client: Client) {}
}
