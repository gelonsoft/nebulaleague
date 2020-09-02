import { MyGame } from "../phaserEngine"
import { MainScene } from "./mainScene"
import { Player } from "../player"

export class DeathScene extends Phaser.Scene {
    public game: MyGame
    public mainScene: MainScene
    public followedPlayer: Player
    
    constructor() {
        super({key: "deathScene"})
    }


    public init(mainScene): void {
        this.mainScene = mainScene
        this.events.on('wake', () => {
            this.followRandomPlayer()
        })

        this.events.on('sleep', () => {
            this.stopFollowing()
            console.log('sleep')
        })
    }

    public create() {
        this.followRandomPlayer()
    }

    public followRandomPlayer() {
        const players = this.mainScene.players.getChildren()
            .filter((player: Player) => player.active)
        const randomIndex = Phaser.Math.RND.integerInRange(0, players.length - 1)
        this.followedPlayer = players[randomIndex]  as Player
        console.log(this.followedPlayer)
        if (players.length > 0) {
            this.mainScene.cameras.main.startFollow(this.followedPlayer, true)
        }
    }
    
    public stopFollowing() {
        this.mainScene.cameras.main.startFollow(this.mainScene.player, true)
    }

    public handleMouse(): void {
        const pointer = this.input.activePointer
        if (pointer.leftButtonDown()) {
            this.stopFollowing()
            this.mainScene.player.reset()
            this.mainScene.stopDeathTransition(this.mainScene.player)
        }
    }

    
    public update(): void {
        this.handleMouse()
        if (!this.followedPlayer.active) {
            this.followRandomPlayer()
        }
    }
}
