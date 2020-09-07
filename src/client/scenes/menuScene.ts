import { MyGame } from "../phaserEngine"

export interface MenuSceneConfig {
    playerName: string,
}

export class MenuScene extends Phaser.Scene {
    public game: MyGame
    public playerName: string
    public background: Phaser.GameObjects.Image
    public menuHTML: Phaser.GameObjects.DOMElement
    constructor() {
        super({
            key: "menuScene"
        })
        this.playerName = ''
        
        window.addEventListener('resize', () => {
            this.menuHTML.setPosition(this.scale.width / 2, this.scale.height / 2)
        }, false)
        
    }


    init(): void {
        if (this.game.debug) {
            window['menu'] = this
            this.scene.start('playerSelectionScene', {
                playerName: 'defaultName',
            })
        }
    }

    createBackground() {
        this.background = this.add.image(0, 0, 'backgroundGalaxy1')
            .setDisplaySize(
                this.scale.width,
                this.scale.height,
            )
            .setOrigin(0)
            .setAlpha(0.5)
    }

    createMenu() {
        this.menuHTML = this.add.dom(0, 0).createFromCache('mainMenuHTML')
            .setPosition(this.scale.width / 2, this.scale.height / 2)

        this.menuHTML.getChildByID('playerNameInput').addEventListener('keyup', (event: any) => {
            this.playerName = event.currentTarget.value
        }, true)
        this.menuHTML.addListener('click')
        this.menuHTML.addListener('keypress')
        this.menuHTML.on('click', event => {
            if (event.target.name === 'playButton') {
                this.startPlayerSelectionScene()
            }
        })
    }
    
    create(): void {
        this.createBackground()
        this.createMenu()
    }

    startPlayerSelectionScene() {
        this.scene.start('playerSelectionScene', {
            name: this.playerName
        })
    }
}
