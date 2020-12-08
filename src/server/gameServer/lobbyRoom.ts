import { Schema, type, MapSchema } from '@colyseus/schema'
import { Client, LobbyRoom as ColyseusLobbyRoom } from 'colyseus'
import { LobbyOptions } from 'colyseus/lib/rooms/LobbyRoom'
import { GameMode, User } from '~/shared/models'


export class UserSchema extends Schema implements User  {
    @type('string')
    name: string

    @type('string')
    gameMode: GameMode

    @type('boolean')
    ready: boolean
}

export class LobbyStateSchema extends Schema {
    @type({ map: UserSchema })
    users = new MapSchema<User>()
}

export class LobbyRoom extends ColyseusLobbyRoom {
    state: LobbyStateSchema
    
    async onCreate(_userOption: User) {
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
