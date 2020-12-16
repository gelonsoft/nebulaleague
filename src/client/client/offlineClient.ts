import { Client, GameClient } from '.'
import { Config } from '~/shared/config'
import { GameChanged, GameState, GameStateSchema, PlayerChanged, PlayerModelSchema } from '~/shared/models'


export class GameOnlineClient extends GameClient {
    public state: GameState
    public client: Client
    
    constructor(client: Client) {
        super(client)
        this.state = Config.defaultGameState
    }

    get id(): string {
        return 'offline'
    }
    
    public async init() {
        
        return Promise.resolve()
    }
    
    public update(gameChanged: GameChanged): void {
        console.log('update')
    }    
}
