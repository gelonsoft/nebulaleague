import { Schema, type, MapSchema } from '@colyseus/schema'
import { Client, LobbyRoom as ColyseusLobbyRoom } from 'colyseus'
import { LobbyOptions } from 'colyseus/lib/rooms/LobbyRoom'
import { GameMode } from '~/shared/models'

type Options = {
    name: string
    gameMode: GameMode
}

export class User extends Schema {
    @type('string')
    name: string

    @type('string')
    gameMode: GameMode

    constructor(options: Options) {
        super()
        this.name = options.name
        this.gameMode = options.gameMode
    }
}

export class LobbyState extends Schema {
    @type({ map: User })
    users = new MapSchema<User>()
}

export class LobbyRoom extends ColyseusLobbyRoom {
    state: LobbyState
    
    async onCreate(options: Options) {
        await super.onCreate(options)
        // console.log(options)
        this.onMessage('updateUser', (client: Client, options: Options) => {
            const user = this.state.users.get(client.sessionId)
            Object.assign(user, options)
        })

        this.setState(new LobbyState())
    }

    onJoin(client: Client, options: Options & LobbyOptions) {
        super.onJoin(client, options)
        this.state.users.set(client.sessionId, new User(options))
        // console.log(options)
        // console.log(this.state.users)
    }

    onLeave(client: Client) {
        super.onLeave(client)
    }
}
