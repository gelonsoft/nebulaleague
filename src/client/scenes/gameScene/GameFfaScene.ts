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
        
        window.addEventListener(
            'resize',
            () => {
                this.backgroundImage.setDisplaySize(
                    this.cameras.main.displayWidth + Config.world.width * Config.world.paralaxScrollFactor,
                    this.cameras.main.displayHeight + Config.world.height * Config.world.paralaxScrollFactor
                )
            },
            false
        )

    }

    public create():void {
        super.create()
    }



    public update(): void {
        super.update()        
    }   
}

