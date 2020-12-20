import { GameScene } from '~/client/scenes/gameScene'

export class MainController {
    public scene: GameScene
    public keys: Record<string, Phaser.Input.Keyboard.Key>
    constructor(scene: GameScene) {
        this.scene = scene
        this.keys = {
            toggleMenu: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC),
        }
    }

    public update(): void {
        const toggleHelpMenuDown = Phaser.Input.Keyboard.JustDown(this.keys.toggleMenu)
        
        if (toggleHelpMenuDown) {
            if (this.scene.scene.isActive('mainMenuScene')) {
                this.scene.scene.sleep('mainMenuScene')
            } else {
                this.scene.scene.launch('mainMenuScene')
            }
        }
    }
}
