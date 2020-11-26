
type GameModeButtonState = 'focus' | 'active' | 'hover'

export class GameModeButton extends Phaser.GameObjects.Container {
    public scene: Phaser.Scene
    public frame: string
    public image: Phaser.GameObjects.Image
    public text: Phaser.GameObjects.Text

    private upAlpha: number
    private downAlpha: number
    private overAlpha: number
    

    constructor(scene: Phaser.Scene, x: number, y: number, frame: string, text: string) {
        super(scene, x, y)
        this.scene = scene
        this.scene.add.existing(this)
        this.image = new Phaser.GameObjects.Image(scene, 0, 0, 'atlas', frame)
        this.text = new Phaser.GameObjects.Text(scene, 0, 0, text, {})

        this.setSize(96 + 32 + 8, 96 + 32 + 8)
        this.image.setDisplaySize(96, 96)
        this.image.setOrigin(0, 0)
        // this.text.setDisplaySize(32, 32)
        this.text.setPosition(96 / 2, 96 + 8)
        this.text.setOrigin(0.5, 0.5)
        this.add([this.image, this.text])

        this.upAlpha = 1
        this.downAlpha = 0.7
        this.overAlpha = 0.5

        this.image.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, this.handleUp, this)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, this.handleOut, this)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, this.handleDown, this)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, this.handleOver, this)
    }



    private handleUp(pointer: Phaser.Input.Pointer) {
        this.handleOver(pointer)
    }

    private handleOut(pointer: Phaser.Input.Pointer) {
        console.log('hello')
        this.setAlpha(this.upAlpha)
    }

    private handleDown(pointer: Phaser.Input.Pointer) {
        console.log('hello')
        this.setAlpha(this.downAlpha)
    }

    private handleOver(pointer: Phaser.Input.Pointer) {
        this.setAlpha(this.overAlpha)
    }
}
