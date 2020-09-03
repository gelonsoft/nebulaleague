import { MyGame } from "../phaserEngine"
import { weaponsConfig } from '../entities/weapons'
import { abilitiesConfig } from '../entities/abilities'

const SLOT_WIDTH = 30
const SLOT_HEIGHT = 30
// const SLOT_BACKGROUND_COLOR = 0x1313a8
const SLOT_BACKGROUND_COLOR = 0x1313a8


enum ItemType {
    Weapon,
    Ability,
}

interface Item {
    key: string
    frame: string
    type: ItemType
}

class SlotBaseContainer extends Phaser.GameObjects.Container {
    public scene: Phaser.Scene
    public item: Item
    public graphic: Phaser.GameObjects.Graphics
    public image: Phaser.GameObjects.Image
    public size: number
    public innerSize: number
    public padding: number

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        item: Item,
        size: number,
        padding: number,
    ) {
        super(scene, x, y)
        this.scene = scene
        this.scene.add.existing(this)
        this.item = item
        this.size = size
        this.padding = padding
        this.innerSize = this.size - this.padding

        
        this.graphic = new Phaser.GameObjects.Graphics(scene)
        this.image = new Phaser.GameObjects.Image(
            scene,
            0,
            0,
            'atlas',
            this.item.frame,
        )
        this.add([this.graphic, this.image])
        this.setSize(this.size, this.size)
        this.create()
    }

    public create() {
        this.graphic.fillStyle(0x000000)
        this.graphic.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        this.graphic.lineStyle(2, 0xbbbbbb)
        this.graphic.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
        this.image.setDisplaySize(this.innerSize, this.innerSize)
        this.image.setTintFill(0xbbbbbb)
    }
}


class SlotContainer extends SlotBaseContainer {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        item: Item,
        size: number,
        padding: number,
    ) {
        super(scene, x, y, item, size, padding)
        this.setInteractive({cursor: 'pointer'})
        this.scene.input.setDraggable(this)

        this.on('pointerover', () =>  {
            this.graphic.clear()
            this.graphic.fillStyle(0x000000)
            this.graphic.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
            this.graphic.lineStyle(2, 0xffffff)
            this.graphic.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
            this.image.setTintFill(0xffffff)
        })

        this.on('pointerout', () => {
            this.graphic.clear()
            this.graphic.fillStyle(0x000000)
            this.graphic.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
            this.graphic.lineStyle(2, 0xbbbbbb)
            this.graphic.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
            this.image.setTintFill(0xbbbbbb)
        })
    }

    public create() {
        super.create()
    }
}



class SelectedSlotContainer extends SlotBaseContainer {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        item: Item,
        size: number,
        padding: number,
    ) {
        super(scene, x, y, item, size, padding)
        this.setInteractive({cursor: 'pointer'})
        this.scene.input.setDraggable(this)
    }

    public create() {
        super.create()
    }
}


export function createSlotsContainer(
    scene: Phaser.Scene,
    itemsConfig: Record<string, any>,
    itemType: ItemType,
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
            { key: config.name, frame: config.frame, type: itemType },
            size,
            padding,
        )
        slotsContainer.add(slotContainer)
    })
    scene.add.existing(slotsContainer)
    return slotsContainer
}





export class PlayerSelectionScene extends Phaser.Scene {
    public game: MyGame
    public background: Phaser.GameObjects.Image
    public gameContainer: Phaser.GameObjects.Container
    public gameContainerWidth: number
    public gameContainerHeight: number
    constructor() {
        super({
            key: "playerSelectionScene"
        })
    }
    

    init(): void {
        window.addEventListener('resize', () => {
            const gameContainerX = this.scale.width / 2 - this.gameContainerWidth / 2 + 40 / 2
            const gameContainerY = this.scale.height / 2 - this.gameContainerHeight / 2 + 40 / 2
            
            this.gameContainer.setPosition(
                gameContainerX,
                gameContainerY,
            )
        }, false)
        
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX
            gameObject.y = dragY
        })
    }

    createBackground() {
        this.background = this.add.image(0, 0, 'backgroundGalaxy5')
            .setOrigin(0)
            .setAlpha(1)
    }


    create(): void {
        this.createBackground()
        const slotSize = 40
        const slotPadding = 4
        const slotOffsetBetween = 14
        const slotColumnCount = 8
        const abilitiesMarginTop = 100
        const abilitiesMarginLeft = 80

        this.gameContainerWidth = (slotSize + slotOffsetBetween) * slotColumnCount + abilitiesMarginLeft
        this.gameContainerHeight = (slotSize + slotOffsetBetween) * 6 + abilitiesMarginTop
        const gameContainerX = this.scale.width / 2 - this.gameContainerWidth / 2 + slotSize / 2
        const gameContainerY = this.scale.height / 2 - this.gameContainerHeight / 2 + slotSize / 2
        

        const weaponContainerWidth = slotColumnCount * (slotSize + slotOffsetBetween)
        const weaponContainerHeight =
            (Object.values(weaponsConfig).length / slotColumnCount) * (slotSize + slotOffsetBetween)

        const weaponsContainer = createSlotsContainer(
            this,
            weaponsConfig,
            ItemType.Weapon,
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
            ItemType.Ability,
            slotSize,
            slotPadding,
            slotOffsetBetween,
            slotColumnCount,
        )
            .setPosition(0, weaponContainerHeight + abilitiesMarginTop)
        
        const slotContainer = this.add.container(
            abilitiesMarginLeft, 0,
            [
                weaponsContainer,
                abilitiesContainer
            ]
        )


        const weaponPrimaryContainer = new SelectedSlotContainer(
            this, 0, 0,
            { key: 'uncertainity', frame: 'uncertainty.png', type: ItemType.Weapon},
            slotSize, slotPadding, 
        )
        const weaponSecondaryContainer = new SelectedSlotContainer(
            this, 0, slotSize + slotOffsetBetween,
            { key: 'uncertainity', frame: 'uncertainty.png', type: ItemType.Weapon},
            slotSize, slotPadding, 
        )
        const ability1Container = new SelectedSlotContainer(
            this, 0, (weaponContainerHeight + abilitiesMarginTop) + 0 * (slotSize + slotOffsetBetween),
            { key: 'uncertainity', frame: 'uncertainty.png', type: ItemType.Ability},
            slotSize, slotPadding, 
        )
        const ability2Container = new SelectedSlotContainer(
            this, 0, (weaponContainerHeight + abilitiesMarginTop) + 1 * (slotSize + slotOffsetBetween),
            { key: 'uncertainity', frame: 'uncertainty.png', type: ItemType.Ability},
            slotSize, slotPadding, 
        )
        const ability3Container = new SelectedSlotContainer(
            this, 0, (weaponContainerHeight + abilitiesMarginTop) + 2 * (slotSize + slotOffsetBetween),
            { key: 'uncertainity', frame: 'uncertainty.png', type: ItemType.Ability},
            slotSize, slotPadding, 
        )
        const ability4Container = new SelectedSlotContainer(
            this, 0, (weaponContainerHeight + abilitiesMarginTop) + 3 * (slotSize + slotOffsetBetween),
            { key: 'uncertainity', frame: 'uncertainty.png', type: ItemType.Ability},
            slotSize, slotPadding, 
        )
        

        const selectedSlotContainer = this.add.container(
            0, 0,
            [
                weaponPrimaryContainer,
                weaponSecondaryContainer,
                ability1Container,
                ability2Container,
                ability3Container,
                ability4Container,
            ]
        )

        
        this.gameContainer = this.add.container(
            0, 0,
            [
                selectedSlotContainer,
                slotContainer,
            ]
        )
            .setSize(this.gameContainerWidth, this.gameContainerHeight)
            .setPosition(gameContainerX, gameContainerY)


        
    }


}
