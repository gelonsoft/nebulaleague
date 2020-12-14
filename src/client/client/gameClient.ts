import { GameChanged, GameState } from '~/shared/models'
import { Client } from '~/client/client'

export abstract class GameClient {
    public client: Client
    public state: GameState
    
    constructor(client: Client) {
        this.client = client
    }

    public get id(): string {
        return 'unknown'
    }
    public abstract async init(): Promise<unknown>
    public abstract update(gameChanged: GameChanged): void 
}
