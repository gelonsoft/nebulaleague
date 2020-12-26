import { Client, Room } from 'colyseus'
import { GameMode, PlayerConfig } from '~/shared/models'

import {
    PlayerSelectionStateSchema,
    PlayerConfigSchema,
} from '~/shared/models/schemas/playerSelectionSchemas'

type Option = {
    gameMode: GameMode
    player: PlayerConfig
}

export class PlayerSelectionRoom extends Room<PlayerSelectionStateSchema> {
    state: PlayerSelectionStateSchema

    async onCreate(option: Option) {
        await this.setMetadata({ gameMode: option.gameMode })
        if (option.gameMode === 'ffa') {
            this.maxClients = 1
        } else if (option.gameMode === 'training') {
            this.maxClients = 10
        }

        this.onMessage('playerReady', (client: Client, playerOption: PlayerConfig) => {
            const player = this.state.players.get(client.sessionId)
            Object.assign(player, playerOption)
        })

        this.setState(new PlayerSelectionStateSchema())
    }

    onJoin(client: Client, option: Option) {
        this.state.players.set(client.sessionId, new PlayerConfigSchema().assign(option.player))
    }

    onLeave(client: Client) {
        this.state.players.delete(client.sessionId)
    }
}
