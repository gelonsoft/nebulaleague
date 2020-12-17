import { Client, GameClient } from '.'
import { Config } from '~/shared/config'
import { GameChanged, GameState } from '~/shared/models'


export class GameOfflineClient extends GameClient {
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

    }
    
    public update(gameChanged: GameChanged): void {
        
    }    
}
