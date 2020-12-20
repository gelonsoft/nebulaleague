import { MyGame } from '~/client/games/myGame'
import { Config } from '~/shared/config'

export class MainMenuScene extends Phaser.Scene {
    public game: MyGame
    public menuHTML: Phaser.GameObjects.DOMElement

    constructor() {
        super({ key: Config.scenes.mainMenu.key })
    }

    create() {
        this.menuHTML = this.add
            .dom(0, 0)
            .createFromCache('mainMenuSceneHTML')
            .setOrigin(0.5, 0)
            .setPosition(this.scale.width / 2, 100)
            .setAlpha(0.8)

        this.menuHTML
            .getChildByID('resumeButton')
            .addEventListener('click', (event: Event) => this.scene.sleep('mainMenuScene'))

        this.menuHTML.getChildByID('exitButton').addEventListener('click', (event: Event) => {
            this.scene.stop('mainScene')
            this.scene.stop('hudScene')
            this.scene.stop('playerSelectionScene')
            this.scene.stop()
            if (Config.debug.debugMode) {
                this.scene.sleep('debugScene')
            }
            this.scene.start('menuScene')
        })
    }
}
