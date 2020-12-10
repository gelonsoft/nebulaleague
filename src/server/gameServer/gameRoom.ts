import { Client, Room } from 'colyseus'

import {
    PlayerChanged,
    PlayerConfig,
    
} from '~/shared/models'


import { GameStateSchema, PlayerModelSchema } from '~/shared/models/schemas/gameSchemas'


type Option = {
    playerConfig: PlayerConfig
}

export class GameRoom extends Room<GameStateSchema> {
    state: GameStateSchema

    onCreate(_option: Option) {
        this.setState(new GameStateSchema())

        this.onMessage("playerChanged", (client, playerChanged: PlayerChanged) => {
            Object.assign(this.state.players.get(client.sessionId), playerChanged)
        })
        
    }

    onJoin(client: Client, option: Option) {
        this.state.players.set(
            client.sessionId,
            new PlayerModelSchema().assign({
                id: client.sessionId,
                x: 0,
                y: 0,
                ...option.playerConfig,
            })
        )
    }

    onLeave(client: Client) {
        this.state.players.delete(client.sessionId);
    }
}
