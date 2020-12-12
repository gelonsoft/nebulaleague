import 'phaser'
import { Config } from '~/shared/config'
import { EffectModel } from '~/shared/models'

export class EffectIconContainer extends Phaser.GameObjects.Container {
    public scene: Phaser.Scene
    public graphic: Phaser.GameObjects.Graphics
    public image: Phaser.GameObjects.Image
    public width: number
    public height: number
    public innerWidth: number
    public innerHeight: number
    public padding: number
    public innerPadding: number

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        width: number,
        height: number,
        padding: number,
        frame: string
    ) {
        super(scene, x, y)
        this.scene = scene
        this.scene.add.existing(this)
        this.width = width
        this.height = height
        this.padding = padding
        this.innerPadding = this.padding / 2
        this.innerWidth = this.width - this.padding
        this.innerHeight = this.height - this.padding
        this.graphic = new Phaser.GameObjects.Graphics(scene)
        this.image = new Phaser.GameObjects.Image(
            scene,
            this.innerPadding,
            this.innerPadding,
            Config.textureKeys.icons,
            frame
        )
        this.add([this.graphic, this.image])
        this.create()
    }

    public create() {
        this.image.setDisplaySize(this.innerWidth, this.innerHeight)
        this.image.setDisplayOrigin(0, 0)
        this.image.setTint(0xffffff)
        this.image.setAlpha(0.7)
        this.setAlpha(0)
    }

    public refresh(frame: string) {
        this.image.setFrame(frame)
        this.setAlpha(1)
    }
}

export function createEffectIconsContainer(
    scene: Phaser.Scene,
    length: number,
    offsetBetween: number,
    offsetLeft: number,
    offsetTop: number,
    size: number,
    padding: number
): Phaser.GameObjects.Container {
    const effectIconsContainer = new Phaser.GameObjects.Container(scene, 0, 0)
    Array.from(Array(length).keys()).forEach((index) => {
        const effect = new EffectIconContainer(
            scene,
            offsetBetween * index + offsetLeft,
            offsetTop,
            size,
            size,
            padding,
            'flame.png'
        )
        effectIconsContainer.add(effect)
    })
    scene.add.existing(effectIconsContainer)
    return effectIconsContainer
}

export function refreshEffectIcons(
    effects: Set<EffectModel>,
    effectIconsContainer: Phaser.GameObjects.Container
) {
    const effectIcons = effectIconsContainer.getAll()
    effectIcons.forEach((obj: EffectIconContainer) => {
        obj.setAlpha(0)
    })

    let index = 0
    for (const effect of effects) {
        const frameName = Config.effect.toFrameName[effect.name]
        const obj = effectIcons[index] as EffectIconContainer
        obj.refresh(frameName)
        index += 1
    }
}
