import 'phaser'
import { MainScene } from './scenes/mainScene'
import { PlayerModel } from '../shared/models'
import {
    PLAYER_ACCELERATION_CHANGE,
    PLAYER_ACCELERATION_STEADY,
    PLAYER_DRAG,
    PLAYER_MAX_VELOCITY,
    PLAYER_MAX_HEALTH,
    PLAYER_SIZE,
} from './config'
import { Weapon } from './entities/weapons'
import { AbilityInterface } from './entities/abilities'


export enum SelectedWeapon {
    Primary,
    Secondary,
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

interface AbilitiesInterface {
    ability1: AbilityInterface
    ability2: AbilityInterface
    ability3: AbilityInterface
    ability4: AbilityInterface
}


export class Player extends Phaser.GameObjects.Container {
    public body: Phaser.Physics.Arcade.Body
    public id: string
    public health: number
    public maxHealth: number
    public scene: MainScene
    public playerSprite: Phaser.GameObjects.Sprite
    public playerState: Map<string, boolean | number>
    public weaponPrimary: Weapon
    public weaponSecondary: Weapon
    public abilities: AbilitiesInterface
    public selectedAbilityKey: string | null
    public accelerationChange: number
    public accelerationSteady: number
    public previousDirection: PlayerDirection
    public actionTimes: ActionTimesInterface


    constructor(scene: MainScene, playerConfig: PlayerModel) {
        super(scene)
        this.scene = scene
        this.playerState = new Map()
        this.initPlayer(playerConfig)
        this.scene.add.existing(this)


        this.actionTimes = {
            weaponPrimary: { cooldown: 0, ready: true },
            weaponSecondary: { cooldown: 0, ready: true },
            ability1: { cooldown: 0, ready: true },
            ability2: { cooldown: 0, ready: true },
            ability3: { cooldown: 0, ready: true },
            ability4: { cooldown: 0, ready: true },
        }

        this.weaponPrimary = this.scene.weapons[playerConfig.weaponPrimaryKey]
        this.weaponSecondary = this.scene.weapons[playerConfig.weaponSecondaryKey]

        this.abilities = {
            ability1: this.scene.abilities[playerConfig.abilityKey1],
            ability2: this.scene.abilities[playerConfig.abilityKey2],
            ability3: this.scene.abilities[playerConfig.abilityKey3],
            ability4: this.scene.abilities[playerConfig.abilityKey4],
        }
        this.selectedAbilityKey = null
    }


    public initPlayer(playerConfig: PlayerModel): void {
        this.id = playerConfig.id
        this.x = playerConfig.x
        this.y = playerConfig.y
        this.maxHealth = PLAYER_MAX_HEALTH
        this.health = this.maxHealth
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

        const body = this.body as Phaser.Physics.Arcade.Body
        body.setCircle(PLAYER_SIZE / 2)
        body.setAllowDrag(true)
        body.setDrag(PLAYER_DRAG, PLAYER_DRAG)
        body.setMaxSpeed(PLAYER_MAX_VELOCITY)
        body.immovable = true
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
        const body = this.body as Phaser.Physics.Arcade.Body

        const playerMoveNextForce = this.getNextMove(playerDirection)
        body.acceleration = playerMoveNextForce.acceleration
        body.velocity = playerMoveNextForce.velocity
        this.previousDirection = playerDirection
    }


    public draw(): void {
        if (this.selectedAbilityKey) {
            const selectedAbily = this.abilities[this.selectedAbilityKey] as AbilityInterface
            selectedAbily.draw(this)
        } else {
            this.weaponPrimary.draw(
                this.getPrimaryWeaponPosition(),
                this.actionTimes.weaponPrimary.ready
            )
            this.weaponSecondary.draw(
                this.getSecondaryWeaponPosition(),
                this.actionTimes.weaponSecondary.ready
            )
        }
    }

    public action(weaponSelected?: SelectedWeapon): void {
        if (this.selectedAbilityKey) {
            this.triggerSelectedAbility()
        } else {
            this.fire(weaponSelected)
        }
    }


    public fire(weaponSelected?: SelectedWeapon): void {
        weaponSelected = weaponSelected || SelectedWeapon.Primary
        const weapon = weaponSelected === SelectedWeapon.Primary ?
            this.weaponPrimary : this.weaponSecondary
        const weaponTime = weaponSelected === SelectedWeapon.Primary ?
            this.actionTimes.weaponPrimary : this.actionTimes.weaponSecondary
        const positionFire = weaponSelected === SelectedWeapon.Primary ?
            this.getPrimaryWeaponPosition() : this.getSecondaryWeaponPosition()
        if (weaponTime.ready) {
            weaponTime.ready = false
            weapon.fire(positionFire)
            weaponTime.cooldown = weapon.shotInterval

            weaponTime.timerEvent = this.scene.time.addEvent({
                delay: 0.1 * 1000,
                callback: () => {
                    weaponTime.cooldown -= 0.1
                    this.scene.syncWeaponCooldown(this, weaponSelected, weaponTime)
                },
                callbackScope: this,
                loop: true,
            })

            this.scene.time.addEvent({
                delay: weapon.shotInterval * 1000,
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

    public triggerAbility(selectedAbilityKey: string) {
        const ability = this.abilities[selectedAbilityKey]
        const actionTime = this.actionTimes[selectedAbilityKey]

        if (actionTime.ready) {
            actionTime.ready = false
            ability.trigger(this)
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

    public triggerSelectedAbility() {
        this.triggerAbility(this.selectedAbilityKey)
        this.scene.syncSelectedAbility(this, this.selectedAbilityKey, false)
        this.scene.syncSelectedWeapon(this, true)
        this.abilities[this.selectedAbilityKey].clearDraw()
        this.selectedAbilityKey = null
    }


    public selectAbility(key) {
        if (this.actionTimes[key].cooldown === 0) {
            if (this.selectedAbilityKey === key) {
                this.scene.syncSelectedAbility(this, this.selectedAbilityKey, false)
                this.scene.syncSelectedWeapon(this, true)
                this.abilities[this.selectedAbilityKey].clearDraw()
                this.selectedAbilityKey = null
            } else {
                if (this.selectedAbilityKey) {
                    this.scene.syncSelectedAbility(this, this.selectedAbilityKey, false)
                    this.abilities[this.selectedAbilityKey].clearDraw()
                }
                this.selectedAbilityKey = key
                this.scene.syncSelectedAbility(this, this.selectedAbilityKey, true)
                this.scene.syncSelectedWeapon(this, false)
                this.weaponPrimary.laser.clear()
                this.weaponSecondary.laser.clear()
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
            .scale(this.displayWidth * 0.45)
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
            .scale(this.displayWidth * 0.45)
        return positionCenter.clone().add(offset)
    }

    public reset(): void {
        const x = Phaser.Math.Between(0, this.scene.physics.world.bounds.width)
        const y = Phaser.Math.Between(0, this.scene.physics.world.bounds.height)
        this.setPosition(x, y)
        this.health = this.maxHealth
    }
}
