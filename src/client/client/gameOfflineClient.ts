import { GameClient } from '~/client/client/gameClient'
import { GameChanged, GameStateSchema, PlayerModelSchema } from '~/shared/models'

export class GameOfflineClient extends GameClient {
    get id(): string {
        return 'offline'
    }

    public async init() {
        this.state = new GameStateSchema()
        this.state.players.set(
            this.id,
            new PlayerModelSchema().assign({
                ...this.game.client.playerConfig,
                id: this.id,
                x: 0,
                y: 0,
            })
        )
        
        this.onInit()
        return Promise.resolve()
    }

    public update(_gameChanged: GameChanged): void {}
}
