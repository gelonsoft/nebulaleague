import { Client } from '.'
import {
    User,
    LobbyState,
    UserSchema,
    LobbyStateSchema,
} from '~/shared/models'

import * as Colyseus from 'colyseus.js'
import { MyGame } from '~/client/games/myGame'

export class LobbyClient {
    public room: Colyseus.Room<LobbyStateSchema>
    public state: LobbyState
    public game: MyGame
    public onInit: () => void
    public onStart: (user: User) => void
    

    constructor(
        game: MyGame,
        onInit: () => void,
        onStart: (user: User) => void
    ) {
        this.game = game
        this.onInit = onInit
        this.onStart = onStart
    }

    get id(): string {
        return this.room.sessionId
    }

    public async init() {
        this.room = await this.game.client.colyseus.joinOrCreate('lobyRoom', {})

        this.room.onStateChange.once((state: LobbyState) => {
            this.state = state
            console.log('onStateChange')
            this.onInit()
        })

        this.room.state.users.onAdd = (user: UserSchema, userId: string) => {
            user.onChange = (changes) => {
                changes.forEach((change) => {
                    if (userId === this.room.sessionId) {
                        if (change.field === 'ready' && change.value === true) {
                            this.onStart(user)
                            this.room.leave()
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
