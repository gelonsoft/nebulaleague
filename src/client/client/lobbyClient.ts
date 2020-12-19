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
    public onInit: () => void
    public onStart: (user: User) => void
    

    constructor(
        client: Client,
        onInit: () => void,
        onStart: (user: User) => void
    ) {
        this.client = client
        this.onInit = onInit
        this.onStart = onStart
    }

    get id(): string {
        return this.room.sessionId
    }

    public async init() {
        this.room = await this.client.colyseus.joinOrCreate('lobyRoom', {})

        this.room.onStateChange.once((state: LobbyState) => {
            this.state = state
            this.onInit()
        })

        this.room.state.users.onAdd = (user: UserSchema, userId: string) => {
            user.onChange = (changes) => {
                changes.forEach((change) => {
                    if (userId === this.room.sessionId) {
                        if (change.field === 'ready' && change.value === true) {
                            this.room.leave()
                            this.onStart(user)
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
