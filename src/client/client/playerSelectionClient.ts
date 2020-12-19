import { Client } from '.'
import {
    PlayerSelectionState,
    PlayerConfig,
} from '~/shared/models'
import { Config } from '~/shared/config'


export abstract class PlayerSelectionClient {
    public client: Client
    public state: PlayerSelectionState
    public onInit: () => void
    public onStart: (playerConfig: PlayerConfig) => void

    constructor(
        client: Client,
        onInit: () => void,
        onStart: (playerConfig: PlayerConfig) => void
    ) {
        this.client = client
        this.onInit = onInit
        this.onStart = onStart
        this.state = Config.defaultPlayerSelectionState
    }

    get id(): string {
        return 'unknown'
    }

    public abstract async init(): Promise<unknown>
    public abstract start(playerConfig: PlayerConfig): void 
}
