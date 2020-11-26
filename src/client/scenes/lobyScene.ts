import { MyGame } from '~/client/index'
import { Client } from '~/client/client'
import { Event as MyEvent } from '~/shared/events'

export class LobyScene extends Phaser.Scene {
    public game: MyGame
    public client: Client
    public background: Phaser.GameObjects.Image
    public menuHTML: Phaser.GameObjects.DOMElement
    constructor() {
        super({
            key: 'lobyScene',
        })
    }

    init(): void {
        window.addEventListener(
            'resize',
            () => {
                this.menuHTML.setPosition(this.scale.width / 2, this.scale.height / 2)
            },
            false
        )

        this.client = this.game.registry.get('client') as Client
        this.client.emitLobyInit()
        this.game.events.on(MyEvent.lobyStart, () => {
            this.scene.start('playerSelectionScene')
            this.client.emitLobyEnd()
        })

        if (this.game.debug) {
            // this.client.emitLobyStart({
            //     name: 'defaultName',
            //     gameMode: 'ffa',
            // })
        }
    }

    createBackground() {
        this.background = this.add
            .image(0, 0, 'backgroundGalaxy1')
            .setDisplaySize(this.scale.width, this.scale.height)
            .setOrigin(0)
            .setAlpha(0.5)
    }

    createMenu() {
        this.menuHTML = this.add
            .dom(0, 0)
            .createFromCache('mainMenuHTML')
            .setPosition(this.scale.width / 2, this.scale.height / 2)

        this.menuHTML.getChildByID('playButton').addEventListener('click', (event: Event) => {
            const payerName = (this.menuHTML.getChildByID('playerNameInput') as HTMLInputElement).value
            this.client.emitLobyStart({
                name: payerName,
                gameMode: 'ffa',
            })
        })
    }

    create(): void {
        this.createBackground()
        this.createMenu()
    }
}
