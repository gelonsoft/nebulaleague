import 'phaser'
import { MainScene } from '~/scenes/mainScene'
import { Config } from '@shared/config'
import {
    PlayerDirection,
    PlayerModel,
    ControlledBy,
    EffectKeys,
    EffectModel,
    PlayerChanged,
} from '@shared/models'
import { PlayerAI } from '~/ai/playerAI'
import { Weapon } from '~/entities/weapons'
import { Ability } from '~/entities/abilities'
import { HealthBar } from '~/entities/healthbar'

import { createEffectIconsContainer, refreshEffectIcons } from '~/entities/effects'

export interface PlayerMoveNextForce {
    acceleration: Phaser.Math.Vector2
    velocity: Phaser.Math.Vector2
    position: Phaser.Math.Vector2
}

export interface ActionTimeInterface {
    cooldown: number
    ready: boolean
    timerEvent?: Phaser.Time.TimerEvent | null
}

interface ActionTimesInterface {
    weaponPrimary: ActionTimeInterface
    weaponSecondary: ActionTimeInterface
    ability1: ActionTimeInterface
    ability2: ActionTimeInterface
    ability3: ActionTimeInterface
    ability4: ActionTimeInterface
    death: ActionTimeInterface
}

interface ActionsInterface {
    weaponPrimary: Weapon
    weaponSecondary: Weapon
    ability1: Ability
    ability2: Ability
    ability3: Ability
    ability4: Ability
}

export interface ActionInterface {
    draw(sourcePosition: Phaser.Math.Vector2, pointerPosition: Phaser.Math.Vector2, isLaserReady?: boolean)
    cleaDraw(): void
    trigger(player: Player, sourcePosition: Phaser.Math.Vector2, pointerPosition: Phaser.Math.Vector2): void
    rangeDistance: number
}

export class Player extends Phaser.GameObjects.Container {
    public body: Phaser.Physics.Arcade.Body
    public scene: MainScene
    public id: string
    public health: number
    public maxHealth: number
    public defaultSpeed: number
    public isParalyzed: boolean
    public isStunned: boolean
    public playerSprite: Phaser.GameObjects.Sprite
    public healthBar: HealthBar
    public effectIconsContainer: Phaser.GameObjects.Container
    public controlledBy: ControlledBy
    public controlledByAI: PlayerAI | null
    public previousDirection: PlayerDirection
    public actions: ActionsInterface
    public selectedAbilityKey: string | null
    public accelerationChange: number
    public accelerationSteady: number
    public actionTimes: ActionTimesInterface
    public effects: Set<EffectModel>
    public burningTime: Phaser.Time.TimerEvent | null
    public deathCooldownDelay: number
    public playerModel: PlayerModel

    constructor(scene: MainScene, playerModel: PlayerModel) {
        super(scene)
        this.scene = scene
        this.playerModel = playerModel
        this.previousDirection = { x: 0, y: 0 }
        this.id = playerModel.id
        this.x = playerModel.x
        this.y = playerModel.y
        this.maxHealth = Config.player.defaultHealth
        this.health = this.maxHealth
        this.defaultSpeed = Config.player.defaultSpeed
        this.isParalyzed = false
        this.isStunned = false
        this.controlledBy = playerModel.controlledBy
        this.deathCooldownDelay = 10

        this.initPlayer()
        this.initHealthbar()
        this.initEffectsContainer()
        this.setSize(Config.player.size, Config.player.size)
        this.attachPhysics()
        this.scene.add.existing(this)
        this.controlledByAI = null

        this.actionTimes = {
            weaponPrimary: { cooldown: 0, ready: true },
            weaponSecondary: { cooldown: 0, ready: true },
            ability1: { cooldown: 0, ready: true },
            ability2: { cooldown: 0, ready: true },
            ability3: { cooldown: 0, ready: true },
            ability4: { cooldown: 0, ready: true },
            death: { cooldown: 0, ready: true },
        }

        this.actions = {
            weaponPrimary: this.scene.weapons[playerModel.weaponPrimaryKey],
            weaponSecondary: this.scene.weapons[playerModel.weaponSecondaryKey],
            ability1: this.scene.abilities[playerModel.abilityKey1],
            ability2: this.scene.abilities[playerModel.abilityKey2],
            ability3: this.scene.abilities[playerModel.abilityKey3],
            ability4: this.scene.abilities[playerModel.abilityKey4],
        }
        this.selectedAbilityKey = null
        this.effects = new Set()
        this.burningTime = null

        if (this.scene.game.debug) {
            window[`${this.id}`] = this
        }
    }

    public initPlayer(): void {
        this.playerSprite = this.scene.add
            .sprite(0, 0, 'atlas', 'playerShip1_blue.png')
            .setDisplayOrigin(0.5, 0.5)
            .setOrigin(0.5, 0.5)
            .setDisplaySize(Config.player.size, Config.player.size)
            .setSize(Config.player.size, Config.player.size)
        this.add(this.playerSprite)
    }

    public initHealthbar(): void {
        this.healthBar = new HealthBar(this.scene, 0, 0, 120, 12, 0, this.maxHealth)
        this.healthBar.refresh(this.health)
    }

    public initEffectsContainer(): void {
        this.effectIconsContainer = createEffectIconsContainer(this.scene, 4, 32, 0, -4, 26, 0)
    }

    private attachPhysics(): void {
        this.scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
        this.accelerationChange = Config.player.accelerationChange
        this.accelerationSteady = Config.player.accelerationSteady
        this.body.setCircle(Config.player.size / 2)
        this.body.setAllowDrag(true)
        this.body.setDrag(Config.player.drag, Config.player.drag)
        this.body.setMaxSpeed(Config.player.defaultSpeed)
        this.body.immovable = true
    }

    public getAllNextMove(): Array<PlayerMoveNextForce> {
        const directions = [
            [0, 0],
            [1, 0],
            [1, -1],
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
            [1, 1],
        ]
        return directions.map(([x, y]) => {
            return this.getNextMove({ x: x, y: y })
        })
    }

    public getNextMove(playerDirection: PlayerDirection): PlayerMoveNextForce {
        const isXChange = this.previousDirection.x !== playerDirection.x
        const isYChange = this.previousDirection.y !== playerDirection.y
        const newAccelerationSpeedX = isXChange ? this.accelerationSteady : this.accelerationChange
        const newAccelerationSpeedY = isYChange ? this.accelerationSteady : this.accelerationChange
        const newAcceleration = new Phaser.Math.Vector2(playerDirection.x, playerDirection.y)
            .normalize()
            .multiply(new Phaser.Math.Vector2(newAccelerationSpeedX, newAccelerationSpeedY))

        const newVelocity = this.body.velocity.clone()
        if (isXChange) {
            newVelocity.x = 0
        }
        if (isYChange) {
            newVelocity.y = 0
        }
        const newPosition = this.body.position.clone().add(
            newVelocity
                .clone()
                .add(newAcceleration)
                .scale(this.scene.game.loop.delta / 1000)
        )

        return {
            acceleration: newAcceleration,
            velocity: newVelocity,
            position: newPosition,
        }
    }

    public move(playerDirection: PlayerDirection): void {
        if (!this.isParalyzed) {
            const playerMoveNextForce = this.getNextMove(playerDirection)
            this.body.acceleration = playerMoveNextForce.acceleration
            this.body.velocity = playerMoveNextForce.velocity
        } else {
            const playerMoveNextForce = this.getNextMove({ x: 0, y: 0 })
            this.body.acceleration = playerMoveNextForce.acceleration
            this.body.velocity = playerMoveNextForce.velocity
        }
        this.previousDirection = playerDirection
    }

    public rotateFromPointer(pointerRotation: number): void {
        this.rotation = pointerRotation + Math.PI / 2
    }

    public draw(): void {
        if (this.selectedAbilityKey) {
            const selectedAbily = this.actions[this.selectedAbilityKey]
            selectedAbily.draw(this, this.scene.pointerPositionVector)
        } else {
            this.actions.weaponPrimary.draw(
                this.getPrimaryWeaponPosition(),
                this.scene.pointerPositionVector,
                this.actionTimes.weaponPrimary.ready
            )
            this.actions.weaponSecondary.draw(
                this.getSecondaryWeaponPosition(),
                this.scene.pointerPositionVector,
                this.actionTimes.weaponSecondary.ready
            )
        }
    }

    public action(selectedWeaponKey: string, pointerPosition: Phaser.Math.Vector2): void {
        if (this.selectedAbilityKey) {
            this.castSelectedAbility(pointerPosition)
        } else {
            this.fire(selectedWeaponKey, pointerPosition)
        }
    }

    public fire(selectedWeaponKey: string, targetFirePosition: Phaser.Math.Vector2): void {
        const weapon = this.actions[selectedWeaponKey]
        const weaponTime = this.actionTimes[selectedWeaponKey]
        const sourceFirePosition =
            selectedWeaponKey === 'weaponPrimary'
                ? this.getPrimaryWeaponPosition()
                : this.getSecondaryWeaponPosition()

        if (weaponTime.ready) {
            weaponTime.ready = false
            weapon.trigger(this, sourceFirePosition, targetFirePosition)
            weaponTime.cooldown = weapon.cooldownDelay

            weaponTime.timerEvent = this.scene.time.addEvent({
                delay: 0.1 * 1000,
                callback: () => {
                    weaponTime.cooldown -= 0.1
                    this.scene.syncWeaponCooldown(this, selectedWeaponKey, weaponTime)
                },
                callbackScope: this,
                loop: true,
            })

            this.scene.time.addEvent({
                delay: weapon.cooldownDelay * 1000,
                callback: () => {
                    weaponTime.ready = true
                    weaponTime.cooldown = 0
                    weaponTime.timerEvent.remove(false)
                    weaponTime.timerEvent = null
                },
                callbackScope: this,
            })
        }
    }

    public castAbility(selectedAbilityKey: string, targetAbilityPosition: Phaser.Math.Vector2): void {
        const ability = this.actions[selectedAbilityKey]
        const actionTime = this.actionTimes[selectedAbilityKey]
        const sourceAbilityPosition = this.body.center

        if (actionTime.ready) {
            actionTime.ready = false
            ability.trigger(this, sourceAbilityPosition, targetAbilityPosition)
            actionTime.cooldown = ability.cooldownDelay

            actionTime.timerEvent = this.scene.time.addEvent({
                delay: 0.1 * 1000,
                callback: () => {
                    actionTime.cooldown -= 0.1
                    this.scene.syncAbilitiesCooldown(this, selectedAbilityKey, actionTime)
                },
                callbackScope: this,
                loop: true,
            })

            this.scene.time.addEvent({
                delay: ability.cooldownDelay * 1000,
                callback: () => {
                    actionTime.ready = true
                    actionTime.cooldown = 0
                    actionTime.timerEvent.remove(false)
                    actionTime.timerEvent = null
                },
                callbackScope: this,
            })
        }
    }

    public castSelectedAbility(pointerPosition: Phaser.Math.Vector2) {
        this.castAbility(this.selectedAbilityKey, pointerPosition)
        this.scene.syncSelectedAbility(this, this.selectedAbilityKey, false)
        this.scene.syncSelectedWeapon(this, true)
        this.actions[this.selectedAbilityKey].clearDraw()
        this.selectedAbilityKey = null
        this.scene.input.setDefaultCursor('url(assets/cursors/cursor.cur), pointer')
    }

    public selectAbility(key) {
        if (this.actionTimes[key].cooldown === 0) {
            if (this.selectedAbilityKey === key) {
                this.scene.syncSelectedAbility(this, this.selectedAbilityKey, false)
                this.scene.syncSelectedWeapon(this, true)
                this.actions[this.selectedAbilityKey].clearDraw()
                this.selectedAbilityKey = null
                this.scene.input.setDefaultCursor('url(assets/cursors/cursor.cur), pointer')
            } else {
                if (this.selectedAbilityKey) {
                    this.scene.syncSelectedAbility(this, this.selectedAbilityKey, false)
                    this.actions[this.selectedAbilityKey].clearDraw()
                }
                this.selectedAbilityKey = key
                this.scene.syncSelectedAbility(this, this.selectedAbilityKey, true)
                this.scene.syncSelectedWeapon(this, false)
                this.actions.weaponPrimary.laserGraphics.clear()
                this.actions.weaponSecondary.laserGraphics.clear()
                this.scene.input.setDefaultCursor('url(assets/cursors/SC2-cursor.cur), pointer')
            }
        }
    }

    public getPrimaryWeaponPosition(): Phaser.Math.Vector2 {
        const positionCenter = new Phaser.Math.Vector2(
            this.body.x + this.displayWidth / 2,
            this.body.y + this.displayHeight / 2
        )
        const offset = Phaser.Math.Vector2.ONE.clone()
            .setToPolar(this.rotation - Math.PI / 2 - Math.PI / 2)
            .scale(this.displayWidth * 0.5)
        return positionCenter.clone().add(offset)
    }

    public getSecondaryWeaponPosition(): Phaser.Math.Vector2 {
        const positionCenter = new Phaser.Math.Vector2(
            this.body.x + this.displayWidth / 2,
            this.body.y + this.displayHeight / 2
        )
        const offset = Phaser.Math.Vector2.ONE.clone()
            .setToPolar(this.rotation - Math.PI / 2 + Math.PI / 2)
            .scale(this.displayWidth * 0.5)
        return positionCenter.clone().add(offset)
    }

    public addEffects(recieveEffects: Array<EffectModel>): void {
        for (const effect of recieveEffects) {
            const appliedEffect = Object.assign(effect)
            this.effects.add(appliedEffect)
            this.handleEffectCreated(appliedEffect)
            this.scene.time.addEvent({
                delay: effect.duration * 1000,
                callback: () => {
                    this.effects.delete(appliedEffect)
                    this.handleEffectRemoved(appliedEffect)
                },
            })
        }
    }

    public handleEffectCreated(effect: EffectModel) {
        const value = effect.value
        switch (effect.name) {
            case EffectKeys.Slow:
            case EffectKeys.Fast:
                this.body.maxSpeed = this.body.maxSpeed * value
                break
            case EffectKeys.Paralyze:
                this.isParalyzed = true
                break
            case EffectKeys.Stun:
                this.isStunned = true
                break
            case EffectKeys.Burn:
                if (!this.burningTime) {
                    this.burningTime = this.scene.time.addEvent({
                        delay: effect.tick * 1000,
                        callback: () => {
                            this.health -= value
                        },
                        callbackScope: this,
                        loop: true,
                    })
                }
                break
        }
        this.scene.syncEffects(this)
        refreshEffectIcons(this.effects, this.effectIconsContainer)
    }

    public handleEffectRemoved(effect) {
        const value = effect.value
        switch (effect.name) {
            case EffectKeys.Slow:
            case EffectKeys.Fast:
                this.body.maxSpeed = this.body.maxSpeed / value
                break
            case EffectKeys.Paralyze:
                this.isParalyzed = false
                break
            case EffectKeys.Stun:
                this.isStunned = true
                break
            case EffectKeys.Burn:
                if (this.burningTime) {
                    this.burningTime.remove(false)
                    this.burningTime = null
                }
                break
        }
        this.scene.syncEffects(this)
        refreshEffectIcons(this.effects, this.effectIconsContainer)
    }

    public hit(damage: number, recieveEffects?: Array<EffectModel>) {
        this.health -= damage
        if (recieveEffects) {
            this.addEffects(recieveEffects)
        }
        this.scene.tweens.add({
            targets: this,
            alpha: { from: 0.3, to: 1 },
            duration: 0.6 * 1000,
            ease: 'Power2',
            completeDelay: 0.6 * 1000,
        })
        this.scene.syncHealth(this)
        this.healthBar.refresh(this.health)
    }

    public handleDeath() {
        if (this.health <= 0 && this.active) {
            this.body.setEnable(false)
            this.setActive(false)
            this.setVisible(false)
            this.visible = false
            this.healthBar.setVisible(false)
            this.effectIconsContainer.setVisible(false)

            this.health = this.maxHealth
            this.scene.syncHealth(this)
            this.healthBar.refresh(this.health)
            for (const actionTime of Object.values(this.actionTimes)) {
                actionTime.cooldown = 0
            }

            this.scene.startDeathTransition(this)

            this.actionTimes.death.cooldown = this.deathCooldownDelay
            this.actionTimes.death.timerEvent = this.scene.time.addEvent({
                delay: 1 * 1000,
                callback: () => {
                    this.actionTimes.death.cooldown -= 1
                    this.scene.syncDeathTextCooldown(this, this.actionTimes.death.cooldown)
                },
                callbackScope: this,
                loop: true,
            })

            this.scene.time.addEvent({
                delay: this.deathCooldownDelay * 1000,
                callback: () => {
                    this.actionTimes.death.cooldown = 0
                    this.actionTimes.death.timerEvent.remove(false)
                    this.actionTimes.death.timerEvent = null
                    if (!this.active) {
                        this.reset(this.scene.players)
                        this.scene.stopDeathTransition(this)
                    }
                },
                callbackScope: this,
            })
        }
    }

    public update() {
        this.healthBar.x = this.body.center.x - this.healthBar.width / 2
        this.healthBar.y = this.body.top - this.healthBar.height - 6
        this.effectIconsContainer.x = this.body.center.x - this.healthBar.width / 2
        this.effectIconsContainer.y = this.body.top - this.healthBar.height - 36
        this.handleDeath()
    }

    public reset(otherPlayers: Phaser.Physics.Arcade.Group): void {
        let overlaping = true
        let x = 0
        let y = 0

        while (overlaping) {
            overlaping = false
            const circle = new Phaser.Geom.Circle(x, y, Config.player.size / 2)
            x = Phaser.Math.Between(0, this.scene.physics.world.bounds.width)
            y = Phaser.Math.Between(0, this.scene.physics.world.bounds.height)

            otherPlayers.getChildren().forEach((player: Player) => {
                if (circle.contains(player.x, player.y)) {
                    overlaping = true
                }
            })
        }
        this.body.setEnable(true)
        this.body.reset(x, y)
        this.setActive(true)
        this.setVisible(true)
        this.healthBar.setVisible(true)
        this.effectIconsContainer.setVisible(false)
    }

    public getChanged(): PlayerChanged {
        return {
            x: this.body.center.x,
            y: this.body.center.y,
            rotation: this.rotation,
            health: this.health,
        }
    }
}
