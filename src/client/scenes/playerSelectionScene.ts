import { AbilityName, ActionName, PlayerConfig, WeaponName } from '~/shared/models'
import { Config } from '~/shared/config'
import { Event } from '~/shared/events'
import { Client } from '~/client/client'
import { MyGame } from '~/client/index'

const COLOR_BACKGROUND = 0x000000
const COLOR_BACKGROUND_DISABLED = 0x444444
const COLOR_UNSELECTED = 0xbbbbbb
const COLOR_SELECTED = 0xffffff
const COLOR_DISABLED = 0x888888

enum ItemType {
    Weapon,
    Ability,
}

interface Item {
    key: ActionName | 'uncertainity'
    frame: string
    type: ItemType
}

class SlotBaseContainer extends Phaser.GameObjects.Container {
    public scene: PlayerSelectionScene
    public item: Item
    public graphic: Phaser.GameObjects.Graphics
    public image: Phaser.GameObjects.Image
    public size: number
    public innerSize: number
    public padding: number
    public initialX: number
    public initialY: number

    constructor(
        scene: PlayerSelectionScene,
        x: number,
        y: number,
        item: Item,
        size: number,
        padding: number
    ) {
        super(scene, x, y)
        this.initialX = x
        this.initialY = y
        this.scene = scene
        this.scene.add.existing(this)
        this.item = item
        this.size = size
        this.padding = padding
        this.innerSize = this.size - this.padding

        this.graphic = new Phaser.GameObjects.Graphics(scene)
        this.image = new Phaser.GameObjects.Image(scene, 0, 0, 'atlas', this.item.frame).setDisplaySize(
            this.innerSize,
            this.innerSize
        )
        this.add([this.graphic, this.image])
        this.setSize(this.size, this.size)
    }

    public draw() {
        this.graphic.clear()
        this.graphic.fillStyle(COLOR_BACKGROUND)
        this.graphic.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        this.graphic.lineStyle(2, COLOR_UNSELECTED)
        this.graphic.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
        this.image.setTintFill(COLOR_UNSELECTED)
    }

    public drawFocus() {
        this.graphic.clear()
        this.graphic.fillStyle(COLOR_BACKGROUND)
        this.graphic.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        this.graphic.lineStyle(2, COLOR_SELECTED)
        this.graphic.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
        this.image.setTintFill(COLOR_SELECTED)
    }

    public drawDisable() {
        this.graphic.clear()
        this.graphic.fillStyle(COLOR_BACKGROUND_DISABLED)
        this.graphic.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        this.graphic.lineStyle(2, COLOR_DISABLED)
        this.graphic.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
        this.image.setTintFill(COLOR_DISABLED)
    }
}

class SlotContainer extends SlotBaseContainer {
    public isDisabled: boolean

    constructor(
        scene: PlayerSelectionScene,
        x: number,
        y: number,
        item: Item,
        size: number,
        padding: number,
        isDisabled?: boolean
    ) {
        super(scene, x, y, item, size, padding)
        this.isDisabled = isDisabled || false
        if (!this.isDisabled) {
            this.enable()
        } else {
            this.disable()
        }

        this.draw()

        this.on('pointerover', () => {
            if (!this.isDisabled) {
                this.drawFocus()
                this.scene.setActivePickedSlot(this)
                for (const slot of this.scene.activatedPickedSlot) {
                    slot.drawFocus()
                }
            }
        })

        this.on('pointerdown', () => {
            if (!this.isDisabled) {
                this.drawFocus()
                this.scene.setActivePickedSlot(this)
                for (const slot of this.scene.activatedPickedSlot) {
                    slot.drawFocus()
                }
            }
        })

        this.on('pointerout', () => {
            if (!this.isDisabled) {
                this.draw()
                for (const slot of this.scene.activatedPickedSlot) {
                    slot.drawDefault()
                }
            }
        })
    }

    disable() {
        this.isDisabled = true
        this.disableInteractive()
        this.scene.input.setDraggable(this, false)
        this.drawDisable()
    }

    enable() {
        this.isDisabled = false
        this.setInteractive({ cursor: 'pointer' })
        this.scene.input.setDraggable(this, true)
        this.draw()
    }
}

class SelectedSlotContainer extends SlotBaseContainer {
    public slotTarget?: SlotContainer
    constructor(
        scene: PlayerSelectionScene,
        x: number,
        y: number,
        item: Item,
        size: number,
        padding: number,
        slotTarget?: SlotContainer
    ) {
        super(scene, x, y, item, size, padding)
        this.slotTarget = slotTarget
        const zone = this.scene.add
            .zone(-this.size / 2, -this.size / 2, this.size, this.size)
            .setRectangleDropZone(this.size * 2, this.size * 2)
        this.add(zone)
        this.drawDefault()
    }

    public syncTarget(slot: SlotContainer) {
        this.item = slot.item
        this.slotTarget = slot
        this.image.setFrame(this.item.frame)
    }

    get isEmpty(): boolean {
        return this.item.key === 'uncertainity'
    }

    public handleDragOn() {
        this.drawFocus()
    }

    public drawDefault() {
        if (this.isEmpty) {
            this.drawDisable()
        } else {
            this.draw()
        }
    }

    public handleDragOff() {
        if (this.isEmpty) {
            this.drawDisable()
        } else {
            this.draw()
        }
    }
}

export function createSlotsContainer(
    scene: PlayerSelectionScene,
    itemsConfig: Record<string, any>,
    itemType: ItemType,
    size: number,
    padding: number,
    offsetBetween: number,
    columnCount: number
): [Phaser.GameObjects.Container, Record<string, SlotContainer>] {
    const slotsContainer = new Phaser.GameObjects.Container(scene, 0, 0)
    const slotActivated = {}

    Object.values(itemsConfig).forEach((config, index) => {
        const row = index % columnCount
        const column = Math.floor(index / columnCount)

        const slotContainer = new SlotContainer(
            scene,
            row * (size + offsetBetween),
            column * (size + offsetBetween),
            { key: config.name, frame: config.frame, type: itemType },
            size,
            padding
        )
        const weaponKeys = {
            weaponPrimary: scene.playerConfig.weaponPrimaryKey,
            weaponSecondary: scene.playerConfig.weaponSecondaryKey,
        }
        const abilityKeys = {
            ability1: scene.playerConfig.abilityKey1,
            ability2: scene.playerConfig.abilityKey2,
            ability3: scene.playerConfig.abilityKey3,
            ability4: scene.playerConfig.abilityKey4,
        }

        for (const [key, value] of Object.entries(weaponKeys)) {
            if (value === config.name) {
                slotActivated[key] = slotContainer
                slotContainer.disable()
            }
        }
        for (const [key, value] of Object.entries(abilityKeys)) {
            if (value === config.name) {
                slotActivated[key] = slotContainer
                slotContainer.disable()
            }
        }

        slotsContainer.add(slotContainer)
    })
    scene.add.existing(slotsContainer)
    return [slotsContainer, slotActivated]
}

export class PlayerSelectionScene extends Phaser.Scene {
    public game: MyGame
    public client: Client
    public playerConfig: PlayerConfig
    public background: Phaser.GameObjects.Image
    public slotContainer: Phaser.GameObjects.Container
    public gameContainer: Phaser.GameObjects.Container
    public playButtonDOM: Phaser.GameObjects.DOMElement
    public activatedPickedSlot: Array<SelectedSlotContainer>
    public draggedSlot: SelectedSlotContainer
    public gameContainerWidth: number
    public gameContainerHeight: number
    constructor() {
        super({
            key: 'playerSelectionScene',
        })
    }

    init(): void {
        window.addEventListener(
            'resize',
            () => {
                const gameContainerX = this.scale.width / 2 - this.gameContainerWidth / 2
                const gameContainerY = this.scale.height / 2 - this.gameContainerHeight / 2

                this.gameContainer.setPosition(gameContainerX, gameContainerY)
            },
            false
        )
        this.client = this.game.registry.get('client')
        this.client.emitPlayerSelectionInit()

        this.playerConfig = {
            ...Config.player.defaultConfig,
            ...JSON.parse(window.localStorage.getItem('playerConfig')),
            name: this.client.lobyUser.name,
        }

        this.game.events.on(Event.playerSelectionStart, () => {
            this.client.emitPlayerSelectionEnd()
            this.client.emitGameInit()
            this.client.emitGameJoined()
        })

        this.game.events.on(Event.gameReady, () => {
            // this.client.emitGameJoined()

            this.scene.get('mainScene').scene.restart()
            this.scene.get('hudScene').scene.restart()
            this.scene.sleep()
        })
        this.initDrag()

        if (this.game.debug) {
            window['playerSelectionMenu'] = this
        }
    }

    initDrag() {
        this.input.on('drag', (pointer, gameObject: SlotBaseContainer, dragX, dragY) => {
            gameObject.x = dragX
            gameObject.y = dragY
            this.setActivePickedSlot(gameObject)
            for (const slot of this.activatedPickedSlot) {
                slot.handleDragOn()
            }
        })

        this.input.on('dragend', (pointer, gameObject: SlotContainer, dropped) => {
            if (!dropped || this.draggedSlot.item.type !== gameObject.item.type) {
                gameObject.x = gameObject.input.dragStartX
                gameObject.y = gameObject.input.dragStartY
            } else {
                if (this.draggedSlot.slotTarget !== undefined) {
                    this.draggedSlot.slotTarget.enable()
                }

                gameObject.x = gameObject.initialX
                gameObject.y = gameObject.initialY
                gameObject.disable()

                this.draggedSlot.syncTarget(gameObject)
            }
            for (const slot of this.activatedPickedSlot) {
                slot.handleDragOff()
            }
            this.setReadyButton()
        })

        this.input.on('dragenter', (pointer, gameObject, dropZone: Phaser.GameObjects.Zone) => {
            this.draggedSlot = dropZone.parentContainer as SelectedSlotContainer
        })

        this.input.on('dragleave', () => {})
    }

    setActivePickedSlot(gameObject: SlotBaseContainer) {
        const [activatedSlotContainer] = this.slotContainer.list as Array<Phaser.GameObjects.Container>
        const [
            activatedWeaponSlotContainer,
            activatedAbilitySlotContainer,
        ] = activatedSlotContainer.list as Array<Phaser.GameObjects.Container>
        this.activatedPickedSlot =
            gameObject.item.type === ItemType.Weapon
                ? (activatedWeaponSlotContainer.list as Array<SelectedSlotContainer>)
                : (activatedAbilitySlotContainer.list as Array<SelectedSlotContainer>)
    }

    createBackground() {
        this.background = this.add.image(0, 0, 'backgroundGalaxy5').setOrigin(0).setAlpha(1)
    }

    createSlots(): void {
        const slotSize = 40
        const slotPadding = 4
        const slotOffsetBetween = 14
        const slotColumnCount = 8
        const slotMarginLeft = 80
        const abilitiesMarginTop = 20

        const weaponContainerHeight = Math.max(
            2 * (slotSize + slotOffsetBetween),
            (Object.values(Config.weapons).length / slotColumnCount) * (slotSize + slotOffsetBetween)
        )

        const abilitiesContainerHeight = Math.max(
            4 * (slotSize + slotOffsetBetween),
            (Object.values(Config.abilities).length / slotColumnCount) * (slotSize + slotOffsetBetween)
        )

        const slotContainerWidth = slotSize + slotOffsetBetween + slotMarginLeft + slotSize * slotColumnCount
        const slotContainerHeight = weaponContainerHeight + abilitiesContainerHeight + abilitiesMarginTop

        const [weaponsContainer, selectedWeapons] = createSlotsContainer(
            this,
            Config.weapons,
            ItemType.Weapon,
            slotSize,
            slotPadding,
            slotOffsetBetween,
            slotColumnCount
        )
        weaponsContainer.setPosition(0, 0)
        const [abilitiesContainer, selectedAbilities] = createSlotsContainer(
            this,
            Config.abilities,
            ItemType.Ability,
            slotSize,
            slotPadding,
            slotOffsetBetween,
            slotColumnCount
        )
        abilitiesContainer.setPosition(0, weaponContainerHeight + abilitiesMarginTop)
        const selectedSlots = { ...selectedWeapons, ...selectedAbilities }

        const slotContainer = this.add.container(slotMarginLeft, 0, [weaponsContainer, abilitiesContainer])

        const defaultWeponItem: Item = { key: 'uncertainity', frame: 'uncertainty.png', type: ItemType.Weapon }
        const defaultAbilityItem: Item = { key: 'uncertainity', frame: 'uncertainty.png', type: ItemType.Ability }

        const weaponPrimaryContainer = new SelectedSlotContainer(
            this,
            0,
            0,
            selectedSlots.weaponPrimary?.item || defaultWeponItem,
            slotSize,
            slotPadding,
            selectedSlots.weaponPrimary
        )
        const weaponSecondaryContainer = new SelectedSlotContainer(
            this,
            0,
            slotSize + slotOffsetBetween,
            selectedSlots.weaponSecondary?.item || defaultWeponItem,
            slotSize,
            slotPadding,
            selectedSlots.weaponSecondary
        )
        const ability1Container = new SelectedSlotContainer(
            this,
            0,
            weaponContainerHeight + abilitiesMarginTop + 0 * (slotSize + slotOffsetBetween),
            selectedSlots.ability1?.item || defaultAbilityItem,
            slotSize,
            slotPadding,
            selectedSlots.ability1
        )
        const ability2Container = new SelectedSlotContainer(
            this,
            0,
            weaponContainerHeight + abilitiesMarginTop + 1 * (slotSize + slotOffsetBetween),
            selectedSlots.ability2?.item || defaultAbilityItem,
            slotSize,
            slotPadding,
            selectedSlots.ability2
        )
        const ability3Container = new SelectedSlotContainer(
            this,
            0,
            weaponContainerHeight + abilitiesMarginTop + 2 * (slotSize + slotOffsetBetween),
            selectedSlots.ability3?.item || defaultAbilityItem,
            slotSize,
            slotPadding,
            selectedSlots.ability3
        )
        const ability4Container = new SelectedSlotContainer(
            this,
            0,
            weaponContainerHeight + abilitiesMarginTop + 3 * (slotSize + slotOffsetBetween),
            selectedSlots.ability4?.item || defaultAbilityItem,
            slotSize,
            slotPadding,
            selectedSlots.ability4
        )

        const activatedWeaponContainer = this.add.container(0, 0, [
            weaponPrimaryContainer,
            weaponSecondaryContainer,
        ])

        const activatedAbilitiesContainer = this.add.container(0, 0, [
            ability1Container,
            ability2Container,
            ability3Container,
            ability4Container,
        ])

        const activatedSlotContainer = this.add.container(0, 0, [
            activatedWeaponContainer,
            activatedAbilitiesContainer,
        ])

        this.slotContainer = this.add
            .container(0, 0, [activatedSlotContainer, slotContainer])
            .setSize(slotContainerWidth, slotContainerHeight)
    }

    createPlayButton(): void {
        const buttonTemplate = `
<button title="Drag And Drop slots" disabled class="button is-dark is-large">
  Enter The Arena
</button>
`
        this.playButtonDOM = this.add
            .dom(0, 0)
            .createFromHTML(buttonTemplate)
            .setPosition(this.slotContainer.width / 2, this.slotContainer.height + 20)

        this.playButtonDOM.addListener('click')
        this.playButtonDOM.on('click', (event) => {
            this.start()
        })
        this.setReadyButton()
    }

    setReadyButton(): void {
        const [activatedSlotContainer] = this.slotContainer.list as Array<Phaser.GameObjects.Container>
        const [
            activatedWeaponSlotContainer,
            activatedAbilitySlotContainer,
        ] = activatedSlotContainer.list as Array<Phaser.GameObjects.Container>

        const selectedWeaponCount = activatedWeaponSlotContainer.list.filter(
            (slot: SelectedSlotContainer) => slot.slotTarget
        ).length
        const selectedAbilityCount = activatedAbilitySlotContainer.list.filter(
            (slot: SelectedSlotContainer) => slot.slotTarget
        ).length

        const el: any = this.playButtonDOM.node.children[0]
        if (selectedWeaponCount + selectedAbilityCount < 6) {
            el.disabled = true
            el.title = 'Drag And Drop slots'
        } else {
            el.disabled = false
            el.title = ''
        }
    }

    create(): void {
        this.createBackground()
        this.createSlots()
        this.createPlayButton()

        this.gameContainerWidth = this.slotContainer.width
        this.gameContainerHeight = this.slotContainer.height + this.playButtonDOM.height
        const gameContainerX = this.scale.width / 2 - this.gameContainerWidth / 2
        const gameContainerY = this.scale.height / 2 - this.gameContainerHeight / 2

        this.gameContainer = this.add
            .container(0, 0, [this.slotContainer, this.playButtonDOM])
            .setSize(this.slotContainer.width, this.playButtonDOM.height + this.playButtonDOM.height)
            .setPosition(gameContainerX, gameContainerY)

        if (this.game.debug) {
            window['menu'] = this
            // this.start()
        }
    }

    start() {
        const [activatedSlotContainer] = this.slotContainer.list as Array<Phaser.GameObjects.Container>
        const [
            activatedWeaponSlotContainer,
            activatedAbilitySlotContainer,
        ] = activatedSlotContainer.list as Array<Phaser.GameObjects.Container>
        const [weapons, abilities] = [
            activatedWeaponSlotContainer.list as Array<SelectedSlotContainer>,
            activatedAbilitySlotContainer.list as Array<SelectedSlotContainer>,
        ]

        const playerConfUpdated: PlayerConfig = {
            ...this.playerConfig,
            weaponPrimaryKey: weapons[0].item.key as WeaponName,
            weaponSecondaryKey: weapons[1].item.key as WeaponName,
            abilityKey1: abilities[0].item.key as AbilityName,
            abilityKey2: abilities[1].item.key as AbilityName,
            abilityKey3: abilities[2].item.key as AbilityName,
            abilityKey4: abilities[3].item.key as AbilityName,
        }
        this.client.emitPlayerSelectionStart(playerConfUpdated)
    }
}
