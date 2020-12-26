import { Client, Room } from 'colyseus'

import { PlayerChanged, PlayerConfig } from '~/shared/models'

import { GameStateSchema, PlayerModelSchema } from '~/shared/models/schemas/gameSchemas'
import { Game } from '~/server/games/game'

type Option = {
    playerConfig: PlayerConfig
}

export class GameRoom extends Room<GameStateSchema> {
    state: GameStateSchema
    maxClients: 1
    onCreate(_option: Option) {
        this.setState(new GameStateSchema())
        new Game(this.state)

        this.onMessage('playerChanged', (client, playerChanged: PlayerChanged) => {
            Object.assign(this.state.players.get(client.sessionId), playerChanged)
        })
    }

    onJoin(client: Client, option: Option) {
        this.state.players.set(
            client.sessionId,
            new PlayerModelSchema().assign({
                ...option.playerConfig,
               id: client.sessionId,
                x: 0,
                y: 0,
            })
        )
    }

    onLeave(client: Client) {
        this.state.players.delete(client.sessionId)
    }
}
