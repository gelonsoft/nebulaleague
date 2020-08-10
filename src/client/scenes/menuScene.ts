import { MyGame } from "../phaserEngine"
import { htmlToElement } from '../ui/utils'

export class MenuScene extends Phaser.Scene {
    public game: MyGame


    constructor() {
        super({
            key: "menuScene"
        })
    }


    init(): void {
        if (this.game.debug) {
            window['menu'] = this
        }
    }

    createBackground() {
        this.add.image(0, 0, 'backgroundGalaxy1')
            .setDisplaySize(
                this.scale.width,
                this.scale.height,
            )
            .setOrigin(0)
            .setAlpha(0.5)
    }

    createMenu() {
        const element = this.add.dom(0, 0).createFromCache('mainMenuHTML')
            // .setOrigin(0., 0)
            .setPosition(this.scale.width / 2, this.scale.height / 2)

        // element.setPerspective(800);
        element.addListener('click')
        element.on('click', event => {
            if (event.target.name === 'playButton') {
                this.startMainScene()
            }
        })
    }
    
    create(): void {
        this.createBackground()
        this.createMenu()
    }

    startMainScene() {
        this.scene.start('mainScene')
        this.scene.start('hudScene')
        if (this.game.debug) {
            this.scene.start('debugScene',this.game.scene.getScene('mainScene'))            
        }        
    }
}
