import { GameScene } from "./GameScene"
import { Config } from '~/shared/config'
import {
    PlayerModel,
    PlayerChanged,
    ProjectileChanged,
} from '~/shared/models'



export class GameFfaScene extends GameScene {
    constructor() {
        super(Config.scenes.gameFfa.key)
    }

    public init(): void {
        super.init()
    }

    public create():void {
        super.create()
    }

    public update(): void {
        super.update()        
    }   
}

