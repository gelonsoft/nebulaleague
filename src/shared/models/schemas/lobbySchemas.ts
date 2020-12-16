import { Schema, type, MapSchema } from '@colyseus/schema'
import { GameMode, User, LobbyState } from '~/shared/models'


export class UserSchema extends Schema implements User  {
    @type('string')
    name: string

    @type('string')
    gameMode: GameMode

    @type('string')
    gameRoom: string

    @type('boolean')
    ready: boolean

    @type('boolean')
    offline: boolean
}

export class LobbyStateSchema extends Schema implements LobbyState {
    @type({ map: UserSchema })
    users = new MapSchema<User>()
}
