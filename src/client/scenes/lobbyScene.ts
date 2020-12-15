import { MyGame } from '~/client/index'
import { Client } from '~/client/client'
import { GameModeButton } from '~/client/ui/buttons'
import { GameMode } from '~/shared/models'
import { Config } from '~/shared/config'

export class LobbyScene extends Phaser.Scene {
    public game: MyGame
    public client: Client
    public background: Phaser.GameObjects.Image
    public gameModeContainer: Phaser.GameObjects.Container
    public trainingButton: GameModeButton
    public ffaButton: GameModeButton

    constructor() {
        super({
            key: Config.scenes.loby.key,
        })
    }

    async init() {
        // window.addEventListener(
        //     'resize',
        //     () => {
        //         this.menuHTML.setPosition(this.scale.width / 2, this.scale.height / 2)
        //     },
        //     false
        // )
        this.client = this.registry.get('client') as Client
        await this.client.lobbyClient.init()
        if (Config.debug.lobyTo !== undefined) {
            this.start(Config.debug.lobyTo)
        }
    }

    createBackground() {
        this.background = this.add
            .image(0, 0, 'backgroundGalaxy1')
            .setDisplaySize(this.scale.width, this.scale.height)
            .setOrigin(0)
            .setAlpha(0.5)
    }

    start(mode: GameMode) {
        this.client.lobbyClient.start({
            name: 'anonymous',
            gameMode: mode,
            ready: true,
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
            'Ffa Mode',
            (_pointer: Phaser.Input.Pointer) => this.start('ffa')
        )
        this.trainingButton = new GameModeButton(
            this,
            0,
            0,
            'gamepad.png',
            'Training Mode',
            (_pointer: Phaser.Input.Pointer) => this.start('training')
        )

        this.gameModeContainer = this.add
            .container(0, 0, [this.ffaButton, this.trainingButton])
            .setSize(buttonWidth * 2, buttonHeight)
            .setPosition(this.scale.width / 2 - (buttonWidth * 2) / 2, this.scale.height / 2 - 200)
    }


    create(): void {
        this.createBackground()
        this.createModeButtonContainer()
    }
}
