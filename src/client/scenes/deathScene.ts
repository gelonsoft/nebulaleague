import { Event } from "@shared/events"
import { MyGame } from "~/phaserEngine"
import { MainScene } from "~/scenes/mainScene"
import { Player } from "~/player"



class TextContainer extends Phaser.GameObjects.Container {
    public scene: Phaser.Scene
    public cooldown: number
    public textCooldown: Phaser.GameObjects.Text

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)
        this.scene = scene
        this.scene.add.existing(this)
        this.textCooldown = new Phaser.GameObjects.Text(scene, 0, 0, '', {
            fontSize: '80px'
        })
        this.add([this.textCooldown])
        this.create()
    }

    public create() {
        this.textCooldown.setOrigin(0.5, 0.5)
        this.setPosition(this.scene.scale.width / 2, this.scene.scale.height / 8)
    }

    public refresh() {
        this.textCooldown.setText(`${Math.round(this.cooldown * 10) / 10}`)
    }
}



export class DeathScene extends Phaser.Scene {
    public game: MyGame
    public mainScene: MainScene
    public followedPlayer: Player
    public textContainer: TextContainer
    public canResetAfterDelay: number
    public canResetAfterElapsed: number
    
    constructor() {
        super({key: "deathScene"})
    }


    public init(mainScene): void {
        this.mainScene = mainScene
        this.canResetAfterDelay = 1
        this.canResetAfterElapsed = 0
        
        this.events.on('wake', () => {
            this.followRandomPlayer()
            this.canResetAfterElapsed = 0
        })

        this.events.on('sleep', () => {
            this.stopFollowing()
        })
    }

    public create() {
        this.followRandomPlayer()
        this.mainScene.events.on(Event.effectsChanged, this.updateDeathCooldown, this)
        this.textContainer = new TextContainer(this, 0, 0)
    }

    public followRandomPlayer() {
        const players = this.mainScene.players.getChildren()
            .filter((player: Player) => player.active)
        const randomIndex = Phaser.Math.RND.integerInRange(0, players.length - 1)
        this.followedPlayer = players[randomIndex]  as Player
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
            this.mainScene.player.reset(this.mainScene.players)
            this.mainScene.stopDeathTransition(this.mainScene.player)
        }
    }
    
    public update(): void {
        this.canResetAfterElapsed +=  this.game.loop.delta / 1000
        if (this.canResetAfterElapsed >= this.canResetAfterDelay) {
            this.handleMouse()
        }
        if (!this.followedPlayer?.active) {
            this.followRandomPlayer()
        }
    }

    private updateDeathCooldown(cooldown: number) {
        this.textContainer.cooldown = cooldown
        this.textContainer.refresh()
    }
}
