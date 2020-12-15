import { Client } from '.'
import {
    User,
    LobbyState,
    UserSchema,
    LobbyStateSchema,
} from '~/shared/models'

import * as Colyseus from 'colyseus.js'

export class LobbyClient {
    public room: Colyseus.Room<LobbyStateSchema>
    public state: LobbyState
    public client: Client

    constructor(client: Client) {
        this.client = client
    }

    get id(): string {
        return this.room.sessionId
    }

    public async init() {
        this.room = await this.client.colyseus.joinOrCreate('lobyRoom', {})

        this.room.onStateChange.once((state: LobbyState) => {
            this.state = state
        })

        this.room.state.users.onAdd = (user: UserSchema, userId: string) => {
            user.onChange = (changes) => {
                changes.forEach((change) => {
                    if (userId === this.room.sessionId) {
                        if (change.field === 'ready' && change.value === true) {
                            this.client.user = user
                            this.room.leave()
                            void this.client.playerSelectionClient.init()
                        }
                    }
                })
            }
        }

        this.room.state.users.onRemove = (_user, _key) => {}
        this.room.onMessage('*', (_message: LobbyState) => {})
    }

    public start(user: User): void {
        this.room.send('userReady', user)
    }
}
