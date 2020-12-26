import { MyGame } from '~/client/games/myGame'
import { Client } from '~/client/client'
import { GameModeButton } from '~/client/ui/buttons'
import { GameMode } from '~/shared/models'
import { Config } from '~/shared/config'

export class LobbyScene extends Phaser.Scene {
    public game: MyGame
    public background: Phaser.GameObjects.Image
    public gameModeContainer: Phaser.GameObjects.Container
    public ffaBotButton: GameModeButton
    public ffaButton: GameModeButton

    constructor() {
        super({
            key: Config.scenes.lobby.key,
        })
    }

    init() {
        // window.addEventListener(
        //     'resize',
        //     () => {
        //         this.menuHTML.setPosition(this.scale.width / 2, this.scale.height / 2)
        //     },
        //     false
        // )
    }

    createBackground() {
        this.background = this.add
            .image(0, 0, 'backgroundGalaxy1')
            .setDisplaySize(this.scale.width, this.scale.height)
            .setOrigin(0)
            .setAlpha(0.5)
    }

    start(mode: GameMode, offline=false) {
        this.game.client.lobbyClient.start({
            name: 'anonymous',
            gameMode: mode,
            ready: true,
            offline: offline,
        })
    }

    createModeButtonContainer() {
        const offestWidth = 30
        const buttonWidth = GameModeButton.contaierWidth + offestWidth
        const buttonHeight = GameModeButton.contaierHeight

        this.ffaButton = new GameModeButton(
            this,
            buttonWidth,
            0,
            'organigram.png',
            'FFA',
            (_pointer: Phaser.Input.Pointer) => this.start('ffa')
        )
        // this.ffaBotButton = new GameModeButton(
        //     this,
        //     0,
        //     0,
        //     'gamepad.png',
        //     'FFA Bot ',
        //     (_pointer: Phaser.Input.Pointer) => this.start('ffa', true)
        // )

        this.gameModeContainer = this.add
            .container(0, 0, [this.ffaButton])
            .setSize(buttonWidth * 2, buttonHeight)
            .setPosition(this.scale.width / 2 - (buttonWidth * 2) / 2, this.scale.height / 2 - 200)
    }


    create(): void {
        this.createBackground()
        this.createModeButtonContainer()
    }
}
