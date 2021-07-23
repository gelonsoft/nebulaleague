import { GameClient } from '~/client/client/gameClient'
import { GameChanged, GameStateSchema, PlayerAction, PlayerModelSchema } from '~/shared/models'

export class GameOfflineClient extends GameClient {
    get id(): string {
        return 'offline'
    }

    public async init() {
        this.oldState = new GameStateSchema()
        this.oldState.players.set(
            this.id,
            new PlayerModelSchema().assign({
                ...this.game.client.playerConfig,
                id: this.id,
                x: 200,
                y: 200,
            })
        )
        this.oldState.players.set(
            'secound',
            new PlayerModelSchema().assign({
                ...this.game.client.playerConfig,
                id: 'secound',
                x: 500,
                y: 500,
            })
        )
        
        this.onInit()
        return Promise.resolve()
    }
    
    public inputUpdate(playerAction: PlayerAction) {}
    
}
