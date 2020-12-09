import { Client, LobbyRoom as ColyseusLobbyRoom } from 'colyseus'
import { LobbyOptions } from 'colyseus/lib/rooms/LobbyRoom'
import { LobbyStateSchema, UserSchema } from '~/shared/models/schemas/lobbySchemas'
import { User } from '~/shared/models'

export class LobbyRoom extends ColyseusLobbyRoom {
    state: LobbyStateSchema

    async onCreate() {
        console.log('on create loby')
        await super.onCreate({})
        this.onMessage('userReady', (client: Client, userOption: User) => {
            const user = this.state.users.get(client.sessionId)
            Object.assign(user, userOption)
        })

        this.setState(new LobbyStateSchema())
    }

    onJoin(client: Client, userOption: User & LobbyOptions) {
        console.log('on join loby')
        super.onJoin(client, userOption)
        this.state.users.set(client.sessionId, new UserSchema().assign(userOption))
    }

    onLeave(client: Client) {
        super.onLeave(client)
    }
}
