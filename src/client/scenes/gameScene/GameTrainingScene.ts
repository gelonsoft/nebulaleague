import { PlayerAI } from "~/client/ai/playerAI"
import { Player } from "~/client/entities/player"
import { Config } from "~/shared/config"
import { ControlledBy } from "~/shared/models"
import { GameScene } from "./GameScene"
import { playersAIConfig }  from '~/client/ai/playerConfigAI'


export class GameTrainingScene extends GameScene {
    public playersAI: Array<PlayerAI>
    constructor() {
        super(Config.scenes.gameTraining.key)
    }

    public init():void {
        super.init()
        this.playersAI = []
    }

    public create():void {
        super.create()

        const players = this.players.getChildren() as Player[]
        let indexAI = 0
        for (const player of players) {
            if (player.controlledBy === ControlledBy.AI) {
                const playerAI = new PlayerAI(
                    this,
                    player,
                    players.filter((otherPlayer) => otherPlayer.id !== player.id),
                    playersAIConfig[indexAI]
                )
                playersAIConfig
                this.playersAI.push(playerAI)
                indexAI++
            }
        }
    }

    public update(): void {
        super.update()
        for(const playerAI of this.playersAI) {
            playerAI.update()
        } 
    }

}

