import { GameClient } from '~/client/client/gameClient'
import { GameChanged } from '~/shared/models'

export class GameOfflineClient extends GameClient {
    get id(): string {
        return 'offline'
    }

    public async init() {
        this.onInit()
        return Promise.resolve()
    }

    public update(_gameChanged: GameChanged): void {}
}
