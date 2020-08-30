import 'phaser'
import { MainScene } from './scenes/mainScene'
import { PlayerModel } from '../shared/models'
import {
    PLAYER_ACCELERATION_CHANGE,
    PLAYER_ACCELERATION_STEADY,
    PLAYER_DRAG,
    PLAYER_DEFAULT_VELOCITY,
    PLAYER_DEFAULT_HEALTH,
    PLAYER_SIZE,
} from './config'
import { Weapon } from './entities/weapons'
import { Ability } from './entities/abilities'
import { PlayerAI } from './ai'


export enum EffectKeys {
    ChangeMaxSpeed = 'changeMaxSpeed',
    Paralyze = 'paralyze',
    Stun = 'stun',
    Burn = 'burn',
}

export interface EffectInterface {
    name: string
    value: number
    duration: number
    tick?: number
}

export interface PlayerDirection {
    x: number
    y: number
}

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
    draw(sourcePosition: Phaser.Math.Vector2,
         pointerPosition: Phaser.Math.Vector2,
         isLaserReady?: boolean): void,
    cleaDraw(): void,
    trigger(player: Player,
            sourcePosition: Phaser.Math.Vector2,
            pointerPosition: Phaser.Math.Vector2): void
    rangeDistance: number
}


export class Player extends Phaser.GameObjects.Container {
    public body: Phaser.Physics.Arcade.Body
    public id: string
    public health: number
    public maxHealth: number
    public scene: MainScene
    public playerSprite: Phaser.GameObjects.Sprite
    public playerState: Map<string, boolean | number>
    public controlledByAI: PlayerAI | null
    public previousDirection: PlayerDirection
    public actions: ActionsInterface
    public selectedAbilityKey: string | null
    public accelerationChange: number
    public accelerationSteady: number
    public actionTimes: ActionTimesInterface
    public effects: Set<EffectInterface>
    public isParalyzed: boolean
    public isStunned: boolean
    public burningTime: Phaser.Time.TimerEvent | null

    constructor(scene: MainScene, playerConfig: PlayerModel) {
        super(scene)
        this.scene = scene
        this.playerState = new Map()
        this.initPlayer(playerConfig)
        this.scene.add.existing(this)
        this.controlledByAI = null


        this.actionTimes = {
            weaponPrimary: { cooldown: 0, ready: true },
            weaponSecondary: { cooldown: 0, ready: true },
            ability1: { cooldown: 0, ready: true },
            ability2: { cooldown: 0, ready: true },
            ability3: { cooldown: 0, ready: true },
            ability4: { cooldown: 0, ready: true },
        }

        this.actions = {
            weaponPrimary: this.scene.weapons[playerConfig.weaponPrimaryKey],
            weaponSecondary: this.scene.weapons[playerConfig.weaponSecondaryKey],
            ability1: this.scene.abilities[playerConfig.abilityKey1],
            ability2: this.scene.abilities[playerConfig.abilityKey2],
            ability3: this.scene.abilities[playerConfig.abilityKey3],
            ability4: this.scene.abilities[playerConfig.abilityKey4],
        }
        this.selectedAbilityKey = null
        this.effects = new Set()
        this.isParalyzed = false
        this.isStunned = false
        this.burningTime = null

        if (this.scene.game.debug) {
            window[`${this.id}`] = this
        }
    }


    public initPlayer(playerConfig: PlayerModel): void {
        this.id = playerConfig.id
        this.x = playerConfig.x
        this.y = playerConfig.y
        this.maxHealth = PLAYER_DEFAULT_HEALTH
        this.health = PLAYER_DEFAULT_HEALTH
        this.previousDirection = { x: 0, y: 0 }

        this.playerSprite = this.scene.add.sprite(
            0,
            0,
            'atlas',
            'playerShip1_blue.png',
        )
            .setDisplayOrigin(0.5, 0.5)
            .setOrigin(0.5, 0.5)
            .setDisplaySize(PLAYER_SIZE, PLAYER_SIZE)
            .setSize(PLAYER_SIZE, PLAYER_SIZE)


        this.add(this.playerSprite)
        this.setSize(PLAYER_SIZE, PLAYER_SIZE)
        this.attachPhysics()
    }

    private attachPhysics(): void {
        this.scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
        this.accelerationChange = PLAYER_ACCELERATION_CHANGE
        this.accelerationSteady = PLAYER_ACCELERATION_STEADY
        this.body.setCircle(PLAYER_SIZE / 2)
        this.body.setAllowDrag(true)
        this.body.setDrag(PLAYER_DRAG, PLAYER_DRAG)
        this.body.setMaxSpeed(PLAYER_DEFAULT_VELOCITY)
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
        const body = this.body as Phaser.Physics.Arcade.Body
        const isXChange = this.previousDirection.x !== playerDirection.x
        const isYChange = this.previousDirection.y !== playerDirection.y
        const newAccelerationSpeedX = isXChange ? this.accelerationSteady : this.accelerationChange
        const newAccelerationSpeedY = isYChange ? this.accelerationSteady : this.accelerationChange
        const newAcceleration = new Phaser.Math.Vector2(playerDirection.x, playerDirection.y)
            .normalize()
            .multiply(new Phaser.Math.Vector2(newAccelerationSpeedX, newAccelerationSpeedY))

        const newVelocity = body.velocity.clone()
        if (isXChange) {
            newVelocity.x = 0
        }
        if (isYChange) {
            newVelocity.y = 0
        }
        const newPosition =
            body.position.clone()
                .add(newVelocity.clone()
                .add(newAcceleration)
                .scale(this.scene.game.loop.delta / 1000))

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
            this.previousDirection = playerDirection
        }
    }


    public draw(): void {
        if (this.selectedAbilityKey) {
            const selectedAbily = this.actions[this.selectedAbilityKey]
            selectedAbily.draw(this, this.scene.pointerPosition)
        } else {
            this.actions.weaponPrimary.draw(
                this.getPrimaryWeaponPosition(),
                this.scene.pointerPosition,
                this.actionTimes.weaponPrimary.ready
            )
            this.actions.weaponSecondary.draw(
                this.getSecondaryWeaponPosition(),
                this.scene.pointerPosition,
                this.actionTimes.weaponSecondary.ready
            )
        }
    }

    public action(selectedWeaponKey: string): void {
        if (this.selectedAbilityKey) {
            this.castSelectedAbility(this.scene.pointerPosition)
        } else {
            this.fire(selectedWeaponKey, this.scene.pointerPosition)
        }
    }


    public fire(selectedWeaponKey: string, targetFirePosition: Phaser.Math.Vector2): void {
        const weapon = this.actions[selectedWeaponKey]
        const weaponTime = this.actionTimes[selectedWeaponKey]
        const sourceFirePosition = selectedWeaponKey === 'weaponPrimary' ?
            this.getPrimaryWeaponPosition() : this.getSecondaryWeaponPosition()


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

        
        const isInRange = ability.isInRangeToTrigger(this.body.center, targetAbilityPosition)
        
        if (actionTime.ready && isInRange) {
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
    }


    public selectAbility(key) {
        if (this.actionTimes[key].cooldown === 0) {
            if (this.selectedAbilityKey === key) {
                this.scene.syncSelectedAbility(this, this.selectedAbilityKey, false)
                this.scene.syncSelectedWeapon(this, true)
                this.actions[this.selectedAbilityKey].clearDraw()
                this.selectedAbilityKey = null
            } else {
                if (this.selectedAbilityKey) {
                    this.scene.syncSelectedAbility(this, this.selectedAbilityKey, false)
                    this.actions[this.selectedAbilityKey].clearDraw()
                }
                this.selectedAbilityKey = key
                this.scene.syncSelectedAbility(this, this.selectedAbilityKey, true)
                this.scene.syncSelectedWeapon(this, false)
                this.actions.weaponPrimary.laser.clear()
                this.actions.weaponSecondary.laser.clear()
            }
        }
    }

    public getPrimaryWeaponPosition(): Phaser.Math.Vector2 {
        const positionCenter = new Phaser.Math.Vector2(
            this.body.x + this.displayWidth / 2,
            this.body.y + this.displayWidth / 2
        )
        const offset = Phaser.Math.Vector2.ONE
            .clone()
            .setToPolar(this.rotation - Math.PI / 2 - Math.PI / 2)
            .scale(this.displayWidth * 0.5)
        return positionCenter.clone().add(offset)
    }


    public getSecondaryWeaponPosition(): Phaser.Math.Vector2 {
        const positionCenter = new Phaser.Math.Vector2(
            this.body.x + this.displayWidth / 2,
            this.body.y + this.displayWidth / 2
        )
        const offset = Phaser.Math.Vector2.ONE
            .clone()
            .setToPolar(this.rotation - Math.PI / 2 + Math.PI / 2)
            .scale(this.displayWidth * 0.46)
        return positionCenter.clone().add(offset)
    }


    public addEffects(recieveEffects: Array<EffectInterface>): void {
        for (const effect of recieveEffects) {
            const appliedEffect = Object.assign(effect)
            this.effects.add(appliedEffect)
            this.handleEffectCreated(appliedEffect)
            this.scene.time.addEvent({
                delay: effect.duration * 1000,
                callback: () => {
                    this.handleEffectRemoved(appliedEffect)
                    this.effects.delete(appliedEffect)
                }
            })
        }
    }

    public handleEffectCreated (effect: EffectInterface) {
        const value = effect.value
        switch(effect.name) {
            case EffectKeys.ChangeMaxSpeed:
                this.body.maxSpeed = this.body.maxSpeed * value
                break
            case EffectKeys.Paralyze:
                this.isParalyzed = true
                break
            case EffectKeys.Burn:
                if(!this.burningTime) {
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
    }

    public handleEffectRemoved(effect) {
        const value = effect.value
        switch(effect.name) {
            case EffectKeys.ChangeMaxSpeed:
                this.body.maxSpeed = this.body.maxSpeed / value
                break
            case EffectKeys.Paralyze:
                this.isParalyzed = false
                break
            case EffectKeys.Burn:
                if (this.burningTime) {
                    this.burningTime.remove(false)
                    this.burningTime = null
                }
                break
        }
    }

    public hit(damage:number, recieveEffects: Array<EffectInterface>) {
        this.health -= damage
        this.addEffects(recieveEffects)
        this.scene.tweens.add({
            targets: this,
            alpha: { from: 0.4, to: 1 },
            duration: 0.5 * 1000,
            ease: 'Power2',
            completeDelay: 0.5 * 1000,
        });
        
    }
    
    public update(delta: number) {
        if (this.health <= 0) {
            this.reset()
            this.scene.events.emit("healthChanged")
        }
    }

    
    public reset(): void {
        const x = Phaser.Math.Between(0, this.scene.physics.world.bounds.width)
        const y = Phaser.Math.Between(0, this.scene.physics.world.bounds.height)
        this.setPosition(x, y)
        this.health = this.maxHealth
    }
}
