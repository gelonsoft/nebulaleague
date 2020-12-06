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

export class LobbySchema extends Schema {
    @type({ map: UserSchema })
    users = new MapSchema<User>()
}

export class LobbyStateRoom extends ColyseusLobbyRoom {
    state: LobbySchema
    
    async onCreate(_userOption: User) {
        await super.onCreate({})
        this.onMessage('userReady', (client: Client, userOption: User) => {
            const user = this.state.users.get(client.sessionId)
            Object.assign(user, userOption)
        })

        this.setState(new LobbySchema())
    }

    onJoin(client: Client, userOption: User & LobbyOptions) {
        super.onJoin(client, userOption)
        this.state.users.set(client.sessionId, new UserSchema().assign(userOption))
    }

    onLeave(client: Client) {
        console.log('call on leave')
        super.onLeave(client)
    }
}
