import { Config } from "~/shared/config"
import { GameScene } from "./GameScene"


export class GameTrainingScene extends GameScene {
    constructor() {
        super(Config.scenes.gameTraining.key)
    }
}

