import { Client, LobbyRoom as ColyseusLobbyRoom } from 'colyseus'
//import { LobbyOptions } from
import { LobbyStateSchema, UserSchema } from '~/shared/models/schemas/lobbySchemas'
import { User } from '~/shared/models'
import {LobbyOptions} from "@colyseus/core/build/rooms/LobbyRoom";

export class LobbyRoom extends ColyseusLobbyRoom {
    state: LobbyStateSchema

    async onCreate() {
        await super.onCreate({})
        this.onMessage('userReady', (client: Client, userOption: User) => {
            const user = this.state.users.get(client.sessionId)
            Object.assign(user, userOption)
        })

        this.setState(new LobbyStateSchema())
    }

    onJoin(client: Client, userOption: User & LobbyOptions) {
        super.onJoin(client, userOption)
        this.state.users.set(client.sessionId, new UserSchema().assign(userOption))
    }

    onLeave(client: Client) {
        super.onLeave(client)
    }
}
