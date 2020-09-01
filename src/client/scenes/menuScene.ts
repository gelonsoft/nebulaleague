import { MyGame } from "../phaserEngine"
import { htmlToElement } from '../ui/utils'

export class MenuScene extends Phaser.Scene {
    public game: MyGame
    public playerName: string

    constructor() {
        super({
            key: "menuScene"
        })
        this.playerName = ''
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
            .setPosition(this.scale.width / 2, this.scale.height / 2)

        element.getChildByID('playerNameInput').addEventListener('keyup', (event: any) => {
            this.playerName = event.currentTarget.value
        }, true)
        element.addListener('click')
        element.addListener('keypress')
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
        this.scene.get('mainScene').input.keyboard.enabled = true
        // this.scene.get('mainScene').input.keyboard.preventDefault = true
        
        this.scene.get('mainScene').scene.restart()
        this.scene.get('hudScene').scene.restart()
        if (this.game.debug) {
            this.scene.get('debugScene').scene.restart(this.game.scene.getScene('mainScene'))
        }
        this.scene.sleep()
    }
}
