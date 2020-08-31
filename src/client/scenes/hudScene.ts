import { MyGame } from "../phaserEngine"
import {
    HUD_HEIGHT,
    HUD_PADDING,
    HUD_PADDING_INNER,
    HUD_SLOT_COLOR_SELECTED,
    HUD_SLOT_COLOR_UNSELECTED,
    HUD_BACKGROUND,
} from '../config'
import { Player, ActionTimeInterface } from "../player"
import { MainScene } from "./mainScene"
import { HealthBar } from '../entities/healthbar'


class SlotContainer extends Phaser.GameObjects.Container {
    public scene: HudScene
    public cooldown: number
    public textCooldown: Phaser.GameObjects.Text
    public graphic: Phaser.GameObjects.Graphics
    public image: Phaser.GameObjects.Image
    public width: number
    public height: number
    public innerWidth: number
    public innerHeight: number
    public selected: boolean


    constructor(scene: HudScene, x: number, y: number, frame: string) {
        super(scene, x, y)
        this.scene = scene
        this.cooldown = 0
        this.selected = false
        this.width = 60
        this.height = HUD_HEIGHT
        this.innerWidth = this.width - HUD_PADDING 
        this.innerHeight = this.height - HUD_PADDING
        this.graphic = new Phaser.GameObjects.Graphics(scene)
        this.image = new Phaser.GameObjects.Image(scene, 9, 9, 'atlas', frame)
        this.textCooldown = new Phaser.GameObjects.Text(scene, 0, 0, '', {})
        this.add([this.graphic, this.image, this.textCooldown])
        this.create()
    }

    public create() {
        this.graphic.fillStyle(0x000000)
        this.graphic.fillRect(0, 0, this.width, this.height)
        this.graphic.fillStyle(HUD_SLOT_COLOR_UNSELECTED)
        this.graphic.fillRect(HUD_PADDING_INNER, HUD_PADDING_INNER, this.innerWidth, this.innerHeight)
        this.image.setDisplaySize(42, 42)
        this.image.setDisplayOrigin(0, 0)
        this.graphic.setAlpha(0.4)
        this.image.setAlpha(0.4)
        this.textCooldown.setOrigin(0.5, 0.5)
        Phaser.Display.Align.In.Center(this.textCooldown, this.scene.add.zone(30, 30, 30, 30))
    }

    public refresh() {
        this.graphic.clear()
        this.graphic.fillStyle(0x000000)
        this.graphic.fillRect(0, 0, this.width, this.height)
        if (this.cooldown < 0.1) {
            if (this.selected) {
                this.graphic.fillStyle(HUD_SLOT_COLOR_SELECTED)
                this.graphic.fillRect(
                    HUD_PADDING_INNER,
                    HUD_PADDING_INNER,
                    this.innerWidth,
                    this.innerHeight,
                )
                this.graphic.setAlpha(1)
                this.image.setAlpha(1)
            } else {
                this.graphic.fillStyle(HUD_SLOT_COLOR_UNSELECTED)
                this.graphic.fillRect(
                    HUD_PADDING_INNER,
                    HUD_PADDING_INNER,
                    this.innerWidth,
                    this.innerHeight,
                )
                this.graphic.setAlpha(0.4)
                this.image.setAlpha(0.4)
            }

            this.textCooldown.setText(``)
        } else {
            this.graphic.setAlpha(0.3)
            this.image.setAlpha(0.3)
            this.textCooldown.setText(`${Math.round(this.cooldown * 10) / 10}`)
        }
    }
}


export class HudScene extends Phaser.Scene {
    public game: MyGame
    public player: Player
    public maxHealthPlayer: number
    public currentHealthPlayer: number
    public healthBar: HealthBar
    public weaponPrimaryContainer: SlotContainer
    public weaponSecondaryContainer: SlotContainer
    public abilityContainer1: SlotContainer
    public abilityContainer2: SlotContainer
    public abilityContainer3: SlotContainer
    public abilityContainer4: SlotContainer
    public abilityToContainer: Record<string, SlotContainer>
    public mainContainer: Phaser.GameObjects.Container
    public mainScene: MainScene

    constructor() {
        super({
            key: "hudScene"
        })
    }

    public init(): void {
        if (this.game.debug) {
            window['h'] = this
        }
    }


    create(): void {
        this.mainScene = this.scene.get("mainScene") as MainScene
        this.player = this.mainScene.player
        this.mainScene.events.on("healthChanged", this.updateHealth, this)
        this.mainScene.events.on('weaponsCooldownChanged', this.updateWeaponCooldown, this)
        this.mainScene.events.on('weaponSelectedChanged', this.updateWeaponSelected, this)
        this.mainScene.events.on('abilitiesCooldownChanged', this.updateAbilitiesCooldown, this)
        this.mainScene.events.on('abilitiesSelectedChanged', this.updateAbilitiesSelected, this)

        const top = this.scale.height - HUD_HEIGHT
        const background = this.add.graphics()
        background.fillStyle(HUD_BACKGROUND, 0.2)
        background.fillRect(0, 0, this.scale.width, HUD_HEIGHT)

        this.healthBar = new HealthBar(this, 0, 0, 240, HUD_HEIGHT, HUD_PADDING, this.player.maxHealth)
        this.weaponPrimaryContainer = new SlotContainer(this, 250, 0, this.player.actions.weaponPrimary.frame)
        this.weaponSecondaryContainer = new SlotContainer(this, 310, 0, this.player.actions.weaponSecondary.frame)
        this.abilityContainer1 = new SlotContainer(this, 380, 0, this.player.actions.ability1.frame)
        this.abilityContainer2 = new SlotContainer(this, 380 + 62, 0, this.player.actions.ability2.frame)
        this.abilityContainer3 = new SlotContainer(this, 380 + 62 * 2, 0, this.player.actions.ability3.frame)
        this.abilityContainer4 = new SlotContainer(this, 380 + 62 * 3, 0, this.player.actions.ability4.frame)
        this.abilityToContainer = {
            'ability1': this.abilityContainer1,
            'ability2': this.abilityContainer2,
            'ability3': this.abilityContainer3,
            'ability4': this.abilityContainer4,
        }


        this.abilityContainer1.selected = true
        this.add.existing(this.weaponPrimaryContainer)
        this.add.existing(this.weaponSecondaryContainer)
        this.add.existing(this.healthBar)
        this.add.existing(this.abilityContainer1)
        this.add.existing(this.abilityContainer2)
        this.add.existing(this.abilityContainer3)
        this.add.existing(this.abilityContainer4)


        this.mainContainer = this.add.container(
            0,
            top,
            [
                background,
                this.healthBar,
                this.weaponPrimaryContainer,
                this.weaponSecondaryContainer,
                this.abilityContainer1,
                this.abilityContainer2,
                this.abilityContainer3,
                this.abilityContainer4,
            ]
        )
        this.updateHealth()
        this.updateWeaponSelected(true)
    }


    private updateHealth() {
        this.healthBar.refresh(this.player.health)
    }

    private updateAbilitiesCooldown(selectedAbilityKey: string, actionTime: ActionTimeInterface) {
        const container = this.abilityToContainer[selectedAbilityKey]
        container.cooldown = actionTime.cooldown
        container.refresh()
    }

    private updateAbilitiesSelected(selectedAbilityKey: string, selected: boolean) {
        const container = this.abilityToContainer[selectedAbilityKey]
        container.selected = selected
        container.refresh()
    }

    private updateWeaponCooldown(selectedWeaponKey: string, actionTime: ActionTimeInterface) {
        const container = selectedWeaponKey === 'weaponPrimary' ?
            this.weaponPrimaryContainer : this.weaponSecondaryContainer

        container.cooldown = actionTime.cooldown
        container.refresh()
    }

    private updateWeaponSelected(selected: boolean) {
        this.weaponPrimaryContainer.selected = selected
        this.weaponPrimaryContainer.refresh()
        this.weaponSecondaryContainer.selected = selected
        this.weaponSecondaryContainer.refresh()
    }
}
