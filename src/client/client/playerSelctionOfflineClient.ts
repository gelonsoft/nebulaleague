import { PlayerSelectionClient } from '~/client/client/playerSelectionClient'
import { PlayerSelectionState, PlayerConfig } from '~/shared/models'

export class PlayerSelectionOfflineClient extends PlayerSelectionClient {
    public state: PlayerSelectionState


    get id(): string {
        return 'offline'
    }

    public async init(): Promise<unknown>{
        this.onInit()
        return Promise.resolve()
    }

    public start(playerConfig: PlayerConfig): void {
        this.onStart(playerConfig)
    }
}
