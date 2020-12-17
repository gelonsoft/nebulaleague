import { Client, PlayerSelectionClient } from '.'
import {
    PlayerSelectionStateSchema,
    PlayerSelectionState,
    PlayerConfig,
    PlayerConfigSchema,
} from '~/shared/models'

import * as Colyseus from 'colyseus.js'
import { Config } from '~/shared/config'

export class PlayerSelectionOnlineClient extends PlayerSelectionClient {
    public room: Colyseus.Room<PlayerSelectionStateSchema>
    public state: PlayerSelectionState
    public client: Client

    constructor(client: Client) {
        super(client)
        this.state = Config.defaultPlayerSelectionState
    }

    get id(): string {
        return this.room.sessionId
    }

    public async init() {
        this.room = await this.client.colyseus.joinOrCreate('playerSelectionRoom', {
            gameMode: this.client.gameMode,
            player: this.client.playerConfig,
        })
        this.room.onStateChange.once((state: PlayerSelectionState) => {
            this.state = state
            this.client.lobbyScene.scene.start(Config.scenes.playerSelection.key)
        })

        this.room.state.players.onAdd = (playerConfig: PlayerConfigSchema, playerId: string) => {
            playerConfig.onChange = (changes) => {
                changes.forEach((change) => {
                    if (playerId === this.room.sessionId) {
                        if (change.field === 'ready' && change.value === true) {
                            this.room.leave()
                            this.client.initGame(playerConfig)
                        }
                    }
                })
            }
        }
    }

    public start(playerConfig: PlayerConfig): void {
        super.start(playerConfig)
        this.room.send('playerReady', playerConfig)
    }
}
