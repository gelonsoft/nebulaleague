import { PlayerSelectionClient } from '~/client/client/playerSelectionClient'
import {
    PlayerSelectionStateSchema,
    PlayerSelectionState,
    PlayerConfig,
    PlayerConfigSchema,
} from '~/shared/models'

import * as Colyseus from 'colyseus.js'

export class PlayerSelectionOnlineClient extends PlayerSelectionClient {
    public room: Colyseus.Room<PlayerSelectionStateSchema>
    public state: PlayerSelectionState


    get id(): string {
        return this.room.sessionId
    }

    public async init() {
        this.room = await this.game.client.colyseus.joinOrCreate('playerSelectionRoom', {
            gameMode: this.game.currentGameMode,
            player: this.game.client.playerConfig,
        })
        this.room.onStateChange.once((state: PlayerSelectionState) => {
            this.state = state
            this.onInit()
        })

        this.room.state.players.onAdd = (playerConfig: PlayerConfigSchema, playerId: string) => {
            playerConfig.onChange = (changes) => {
                changes.forEach((change) => {
                    if (playerId === this.room.sessionId) {
                        if (change.field === 'ready' && change.value === true) {
                            this.onStart(playerConfig)
                            this.room.leave()
                        }
                    }
                })
            }
        }
    }

    public start(playerConfig: PlayerConfig): void {
        this.room.send('playerReady', playerConfig)
    }
}
