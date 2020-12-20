import {
    PlayerSelectionState,
    PlayerConfig,
} from '~/shared/models'
import { Config } from '~/shared/config'
import { MyGame } from '~/client/games/myGame'


export abstract class PlayerSelectionClient {
    public game: MyGame
    public state: PlayerSelectionState
    public onInit: () => void
    public onStart: (playerConfig: PlayerConfig) => void

    constructor(
        game: MyGame,
        onInit: () => void,
        onStart: (playerConfig: PlayerConfig) => void
    ) {
        this.game = game
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
