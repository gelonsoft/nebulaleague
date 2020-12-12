import { Config } from "~/shared/config"

type GameModeButtonState = 'focus' | 'active' | 'hover'

const TEXT_SIZE = 48
const TEXT_PADDING_BOTTOM = 12
const IMAGE_SIZE = 128
const CONTAINER_WIDTH = IMAGE_SIZE
const CONTAINER_HEIGHT = TEXT_SIZE + IMAGE_SIZE + TEXT_PADDING_BOTTOM

export class GameModeButton extends Phaser.GameObjects.Container {
    public scene: Phaser.Scene
    public frame: string
    public image: Phaser.GameObjects.Image
    public text: Phaser.GameObjects.Text
    public onClick: (pointer: Phaser.Input.Pointer) => void
    
    private upAlpha: number
    private downAlpha: number
    private overAlpha: number
    private outAlpha: number

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        frame: string,
        text: string,
        onClick: (pointer: Phaser.Input.Pointer) => void
    ) {
        super(scene, x, y)
        this.scene = scene
        this.onClick = onClick
        this.scene.add.existing(this)
        this.image = new Phaser.GameObjects.Image(scene, 0, 0, Config.textureKeys.icons , frame)
        this.text = new Phaser.GameObjects.Text(scene, 0, 0, text, {})

        this.image.setDisplaySize(IMAGE_SIZE, IMAGE_SIZE)
        this.text.setPosition(0, IMAGE_SIZE / 2 + +TEXT_PADDING_BOTTOM)
        this.text.setOrigin(0.5, 0.5)
        this.add([this.image, this.text])
        this.setSize(CONTAINER_WIDTH, CONTAINER_HEIGHT)
        this.setDisplaySize(CONTAINER_WIDTH, CONTAINER_HEIGHT)

        this.upAlpha = 1
        this.downAlpha = 0.9
        this.overAlpha = 0.9
        this.outAlpha = 0.8
        this.setAlpha(this.outAlpha)
        this.image.setTintFill(0xff00ff, 0xffff00, 0x0000ff, 0xff0000)


        this.setInteractive({ cursor: 'pointer' })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, this.handleUp, this)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, this.handleOut, this)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, this.handleDown, this)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, this.handleOver, this)
    }

    static get contaierWidth() {
        return CONTAINER_WIDTH
    }

    static get contaierHeight() {
        return CONTAINER_HEIGHT
    }

    private handleUp(pointer: Phaser.Input.Pointer) {
        this.setAlpha(this.upAlpha)
        this.onClick(pointer)
    }

    private handleDown(pointer: Phaser.Input.Pointer) {
        this.setAlpha(this.downAlpha)
    }

    private handleOver(_pointer: Phaser.Input.Pointer) {
        this.setAlpha(this.overAlpha)
    }

    private handleOut(_pointer: Phaser.Input.Pointer) {
        this.setAlpha(this.outAlpha)
    }
}
