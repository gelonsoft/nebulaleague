import { Config } from '~/shared/config'
import { Event } from '~/shared/events'
import { ActionKey, EffectModel, WeaponKey } from '~/shared/models'
import { MyGame } from '~/client/index'
import { Player, ActionTimeInterface } from '~/client/entities/player'
import { GameScene } from '~/client/scenes/gameScene'
import { HealthBar } from '~/client/entities/healthbar'
import { createEffectIconsContainer, refreshEffectIcons } from '~/client/entities/effects'
import { Client } from '../client'

class SlotContainer extends Phaser.GameObjects.Container {
    public scene: Phaser.Scene
    public cooldown: number
    public textCooldown: Phaser.GameObjects.Text
    public graphic: Phaser.GameObjects.Graphics
    public image: Phaser.GameObjects.Image
    public width: number
    public height: number
    public innerWidth: number
    public innerHeight: number
    public selected: boolean

    constructor(scene: Phaser.Scene, x: number, y: number, frame: string) {
        super(scene, x, y)
        this.scene = scene
        this.scene.add.existing(this)
        this.cooldown = 0
        this.selected = false
        this.width = 60
        this.height = Config.hud.height
        this.innerWidth = this.width - Config.hud.padding
        this.innerHeight = this.height - Config.hud.padding
        this.graphic = new Phaser.GameObjects.Graphics(scene)
        this.image = new Phaser.GameObjects.Image(scene, 9, 9, Config.textureKeys.icons, frame)
        this.textCooldown = new Phaser.GameObjects.Text(scene, 0, 0, '', {})
        this.add([this.graphic, this.image, this.textCooldown])
        this.create()
    }

    public create() {
        this.graphic.fillStyle(0x000000)
        this.graphic.fillRect(0, 0, this.width, this.height)
        this.graphic.fillStyle(Config.hud.slotColorUnselected)
        this.graphic.fillRect(
            Config.hud.paddingInner,
            Config.hud.paddingInner,
            this.innerWidth,
            this.innerHeight
        )
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
                this.graphic.fillStyle(Config.hud.slotColorSelected)
                this.graphic.fillRect(
                    Config.hud.paddingInner,
                    Config.hud.paddingInner,
                    this.innerWidth,
                    this.innerHeight
                )
                this.graphic.setAlpha(1)
                this.image.setAlpha(1)
            } else {
                this.graphic.fillStyle(Config.hud.slotColorUnselected)
                this.graphic.fillRect(
                    Config.hud.paddingInner,
                    Config.hud.paddingInner,
                    this.innerWidth,
                    this.innerHeight
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
    public background: Phaser.GameObjects.Graphics
    public weaponPrimaryContainer: SlotContainer
    public weaponSecondaryContainer: SlotContainer
    public abilityContainer1: SlotContainer
    public abilityContainer2: SlotContainer
    public abilityContainer3: SlotContainer
    public abilityContainer4: SlotContainer
    public actionToContainer: Record<ActionKey, SlotContainer>
    public effectIconsContainer: Phaser.GameObjects.Container
    public mainContainer: Phaser.GameObjects.Container
    public gameScene: GameScene

    constructor() {
        super({ key: Config.scenes.hud.key })
    }

    public init(): void {
        window.addEventListener(
            'resize',
            () => {
                const top = this.scale.height - Config.hud.height
                this.mainContainer.setX(0)
                this.mainContainer.setY(top)
                this.background.clear()
                this.background.fillStyle(Config.hud.background, 0.2)
                this.background.fillRect(0, 0, this.scale.width, Config.hud.height)
            },
            false
        )
    }

    create(): void {
        this.gameScene = this.game.scenes.game
        this.player = this.gameScene.player
        this.gameScene.events.on(Event.playerHealthChanged, this.updateHealth, this)
        this.gameScene.events.on(Event.actionsCollodownChanged, this.updateActionsCooldown, this)
        this.gameScene.events.on(Event.abilitiesCooldownChanged, this.updateAbilitiesCooldown, this)
        this.gameScene.events.on(Event.abilitiesSelectedChanged, this.updateAbilitiesSelected, this)
        this.gameScene.events.on(Event.weaponsCooldownChanged, this.updateWeaponCooldown, this)
        this.gameScene.events.on(Event.weaponSelectedChanged, this.updateWeaponSelected, this)
        this.gameScene.events.on(Event.effectsChanged, this.updateEffectChanged, this)

        const top = this.scale.height - Config.hud.height
        this.background = this.add.graphics()
        this.background.fillStyle(Config.hud.background, 0.2)
        this.background.fillRect(0, 0, this.scale.width, Config.hud.height)
        this.healthBar = new HealthBar(
            this,
            0,
            0,
            240,
            Config.hud.height,
            Config.hud.padding,
            this.player.maxHealth
        )
        this.weaponPrimaryContainer = new SlotContainer(this, 250, 0, this.player.actions.weaponPrimary.frame)
        this.weaponSecondaryContainer = new SlotContainer(
            this,
            310,
            0,
            this.player.actions.weaponSecondary.frame
        )
        this.abilityContainer1 = new SlotContainer(this, 380, 0, this.player.actions.ability1.frame)
        this.abilityContainer2 = new SlotContainer(this, 380 + 62, 0, this.player.actions.ability2.frame)
        this.abilityContainer3 = new SlotContainer(this, 380 + 62 * 2, 0, this.player.actions.ability3.frame)
        this.abilityContainer4 = new SlotContainer(this, 380 + 62 * 3, 0, this.player.actions.ability4.frame)
        this.actionToContainer = {
            weaponPrimary: this.weaponPrimaryContainer,
            weaponSecondary: this.weaponSecondaryContainer,
            ability1: this.abilityContainer1,
            ability2: this.abilityContainer2,
            ability3: this.abilityContainer3,
            ability4: this.abilityContainer4,
        }
        this.abilityContainer1.selected = true
        this.effectIconsContainer = createEffectIconsContainer(this, 4, 32, 2, -30, 20, 2)

        this.mainContainer = this.add.container(0, top, [
            this.background,
            this.healthBar,
            this.weaponPrimaryContainer,
            this.weaponSecondaryContainer,
            this.abilityContainer1,
            this.abilityContainer2,
            this.abilityContainer3,
            this.abilityContainer4,
            this.effectIconsContainer,
        ])
        this.updateHealth()
        this.updateWeaponSelected(true)
    }

    private updateHealth() {
        this.healthBar.refresh(this.player.health)
    }

    private updateActionsCooldown(selectedActionKey: ActionKey, actionTime: ActionTimeInterface) {
        const container = this.actionToContainer[selectedActionKey]
        container.cooldown = actionTime.cooldown
        container.refresh()
    }

    private updateAbilitiesCooldown(selectedAbilityKey: ActionKey, actionTime: ActionTimeInterface) {
        const container = this.actionToContainer[selectedAbilityKey]
        container.cooldown = actionTime.cooldown
        container.refresh()
    }

    private updateWeaponCooldown(selectedWeaponKey: WeaponKey, actionTime: ActionTimeInterface) {
        const container =
            selectedWeaponKey === 'weaponPrimary'
                ? this.weaponPrimaryContainer
                : this.weaponSecondaryContainer

        container.cooldown = actionTime.cooldown
        container.refresh()
    }

    private updateWeaponSelected(selected: boolean) {
        this.weaponPrimaryContainer.selected = selected
        this.weaponPrimaryContainer.refresh()
        this.weaponSecondaryContainer.selected = selected
        this.weaponSecondaryContainer.refresh()
    }

    private updateAbilitiesSelected(selectedAbilityKey: ActionKey, selected: boolean) {
        const container = this.actionToContainer[selectedAbilityKey]
        container.selected = selected
        container.refresh()
    }

    private updateEffectChanged(icons: Set<EffectModel>) {
        refreshEffectIcons(icons, this.effectIconsContainer)
    }

    
}
