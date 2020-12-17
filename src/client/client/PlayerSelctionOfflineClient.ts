import { Client, PlayerSelectionClient } from '.'
import { PlayerSelectionState, PlayerConfig } from '~/shared/models'
import { Config } from '~/shared/config'

export class PlayerSelectionOfflineClient extends PlayerSelectionClient {
    public state: PlayerSelectionState
    public client: Client

    constructor(client: Client) {
        super(client)
        this.state = Config.defaultPlayerSelectionState
    }

    get id(): string {
        return 'offline'
    }

    public async init(): Promise<unknown> {
        console.log('init')
        return Promise.resolve()
    }

    public start(playerConfig: PlayerConfig): void {
        super.start(playerConfig)
        console.log('start')
    }
}
