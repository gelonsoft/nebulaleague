import { Client } from '.'
import {
    PlayerSelectionState,
    PlayerConfig,
} from '~/shared/models'


export abstract class PlayerSelectionClient {
    public client: Client
    public state: PlayerSelectionState

    constructor(client: Client) {
        this.client = client
    }

    get id(): string {
        return 'unknown'
    }

    public abstract async init(): Promise<unknown>
    public start(playerConfig: PlayerConfig) {
        window.localStorage.setItem('playerConfig', JSON.stringify(playerConfig))
    } 
}
