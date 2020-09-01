import { MyGame } from "../phaserEngine"

export class MainMenuScene extends Phaser.Scene {
    public game: MyGame
    public menu: Phaser.GameObjects.DOMElement
    
    constructor() {
        super({key: "mainMenuScene"})
    }

    create() {
        this.menu = this.add.dom(0, 0)
            .createFromCache('mainMenuSceneHTML')
            .setOrigin(0.5, 0)
            .setPosition(this.scale.width / 2, 100)
            .setAlpha(0.8)
        
        this.menu.addListener('click')
        this.menu.on('click', event => {
            if (event.target.name === 'resumeButton') {
                this.scene.sleep('mainMenuScene')
            }
            if (event.target.name === 'exitButton') {
                this.scene.sleep('mainScene')
                this.scene.sleep('hudScene')
                if (this.game.debug) {
                    this.scene.sleep('debugScene')
                }
                this.scene.sleep()

                // this.scene.get('mainScene').input.keyboard.enabled = false
                this.scene.wake('menuScene')
            }
        })
    }
}
