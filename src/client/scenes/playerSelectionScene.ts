import { MyGame } from "../phaserEngine"
import { weaponsConfig } from '../entities/weapons'
import { abilitiesConfig } from '../entities/abilities'

const SLOT_WIDTH = 30
const SLOT_HEIGHT = 30
// const SLOT_BACKGROUND_COLOR = 0x1313a8
const SLOT_BACKGROUND_COLOR = 0x1313a8


class SlotContainer extends Phaser.GameObjects.Container {
    public scene: Phaser.Scene
    public graphic: Phaser.GameObjects.Graphics
    public image: Phaser.GameObjects.Image
    public size: number
    public innerSize: number
    public padding: number
    public innerPadding: number

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        size: number,
        padding: number,
        frame: string
    ) {
        super(scene, x, y)
        this.scene = scene
        this.scene.add.existing(this)
        this.size = size
        this.padding = padding
        this.innerPadding = this.padding / 2
        this.innerSize = this.size - this.padding
        

        this.graphic = new Phaser.GameObjects.Graphics(scene)
        this.image = new Phaser.GameObjects.Image(
            scene,
            this.innerPadding,
            this.innerPadding,
            'atlas',
            frame,
        )
        this.add([this.graphic, this.image])
        this.create()
    }

    public create() {
        this.graphic.fillStyle(0x000000)
        this.graphic.fillRect(0, 0, this.size, this.size)
        // this.graphic.lineStyle(2, 0x000000)
        this.graphic.lineStyle(2, 0xffffff)
        this.graphic.strokeRect(0, 0, this.size, this.size)
        this.image.setDisplaySize(this.innerSize, this.innerSize)
        this.image.setTintFill(0xffffff)
        this.image.setDisplayOrigin(0, 0)
    }
}


export function createSlotsContainer(
    scene: Phaser.Scene,
    itemsConfig: Record<string, any>,
    size: number,
    padding: number,
    offsetBetween: number,
    columnCount: number
): Phaser.GameObjects.Container {
    const slotsContainer = new Phaser.GameObjects.Container(scene, 0, 0)

    Object.values(itemsConfig).forEach((config, index) => {
        const row = index % columnCount
        const column = Math.floor(index / columnCount)
        
        const slotContainer = new SlotContainer(
            scene,
            row * (size + offsetBetween),
            column * (size + offsetBetween),
            size,
            padding,
            config.frame
        )
        slotsContainer.add(slotContainer)
    })
    scene.add.existing(slotsContainer)
    return slotsContainer
}





export class PlayerSelectionScene extends Phaser.Scene {
    public game: MyGame
    public background: Phaser.GameObjects.Image
    constructor() {
        super({
            key: "playerSelectionScene"
        })
    }


    init(): void {
        
    }

    createBackground() {
        this.background = this.add.image(0, 0, 'backgroundGalaxy5')
            .setOrigin(0)
            .setAlpha(1)
    }


    create(): void {
        this.createBackground()


        // const t = new SlotContainer(this, 0, 0, SLOT_WIDTH, SLOT_HEIGHT, 4, 'teleport.png')

        const slotSize = 40
        const slotPadding = 4
        const slotOffsetBetween = 14
        const slotColumnCount = 8
        

        const weaponContainerWidth = slotColumnCount * (slotSize + slotOffsetBetween)
        const weaponContainerHeight =
            (Object.values(weaponsConfig).length / slotColumnCount) * (slotSize + slotOffsetBetween)

        const weaponsContainer = createSlotsContainer(
            this,
            weaponsConfig,
            slotSize,
            slotPadding,
            slotOffsetBetween,
            slotColumnCount,
        )
            .setPosition(0, 0)
            .setSize(weaponContainerWidth, weaponContainerHeight)
        const abilitiesContainer = createSlotsContainer(
            this,
            abilitiesConfig,
            slotSize,
            slotPadding,
            slotOffsetBetween,
            slotColumnCount,
        )
            .setPosition(0, weaponContainerHeight + 100)
        this.add.container(
            0,
            0,
            [
                weaponsContainer,
                abilitiesContainer
            ]
        )
            .setPosition(200, 200)
        
        
    }


}
