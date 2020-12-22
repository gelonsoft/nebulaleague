import { GameScene } from '~/client/scenes/gameScene'
import { PlayerAction, Vector } from '~/shared/models'
import { Player } from '~/client/entities/player'
import { Event } from '~/shared/events'

type controlKeys =
    | 'moveRightDvorak'
    | 'moveUpDvorak'
    | 'moveDownDvorak'
    | 'moveLeftQwerty'
    | 'moveRightQwerty'
    | 'moveUpQwerty'
    | 'moveDownQwerty'
    | 'moveLeftAzerty'
    | 'moveUpAzerty'
    | 'ability1'
    | 'ability2'
    | 'ability3'
    | 'ability4'


export class PlayerController {
    public scene: GameScene
    public controls: Record<controlKeys, Phaser.Input.Keyboard.Key>
    public action: PlayerAction
    public player: Player
    public prevMoveLeft: boolean
    public prevMoveRight: boolean
    public prevMoveUp: boolean
    public prevMoveDown: boolean
    public canLeftTrigger: boolean
    public canRightTrigger: boolean
    public active: boolean
    public previousDirection: Vector
    public currentDirection: Vector
    public previousMouseRotation: number
    public currentMouseRotation: number

    constructor(scene: GameScene, player: Player) {
        this.scene = scene
        this.player = player
        this.previousDirection = { x: 0, y: 0 }
        this.currentDirection = { x: 0, y: 0 }
        this.previousMouseRotation = 0
        this.currentMouseRotation = 0
        this.canLeftTrigger = true
        this.canRightTrigger = true
        this.active = true
        this.controls = {
            moveRightDvorak: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            moveUpDvorak: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA),
            moveDownDvorak: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O),
            moveLeftQwerty: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            moveRightQwerty: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            moveUpQwerty: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            moveDownQwerty: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            moveLeftAzerty: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            moveUpAzerty: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z),
            ability1: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE),
            ability2: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO),
            ability3: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE),
            ability4: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR),
        }
    }

    public handleMovement(): void {
        const left = this.controls.moveLeftQwerty.isDown || this.controls.moveLeftAzerty.isDown ? -1 : 0
        const right = this.controls.moveRightDvorak.isDown || this.controls.moveRightQwerty.isDown ? 1 : 0
        const up =
            this.controls.moveUpDvorak.isDown ||
            this.controls.moveUpQwerty.isDown ||
            this.controls.moveUpAzerty.isDown
                ? -1
                : 0
        const down = this.controls.moveDownDvorak.isDown || this.controls.moveDownQwerty.isDown ? 1 : 0

        this.previousDirection = this.currentDirection
        const playerDirection: Vector = {
            x: left + right,
            y: up + down,
        }
        this.currentDirection = playerDirection

        if (
            this.currentDirection.x !== this.previousDirection.x ||
            this.currentDirection.y !== this.previousDirection.y
        ) {
            this.action.direction = this.currentDirection
        }
    }

    public handleSwitchWeapon(): void {
        const ability1 = Phaser.Input.Keyboard.JustDown(this.controls.ability1)
        const ability2 = Phaser.Input.Keyboard.JustDown(this.controls.ability2)
        const ability3 = Phaser.Input.Keyboard.JustDown(this.controls.ability3)
        const ability4 = Phaser.Input.Keyboard.JustDown(this.controls.ability4)
        

        if (ability1) {
            this.action.selectAbility = 'ability1'
        } else if (ability2) {
            this.action.selectAbility = 'ability2'
        } else if (ability3) {
            this.action.selectAbility = 'ability3'
        } else if (ability4) {
            this.action.selectAbility = 'ability4'
        }
    }

    public handleMouse(): void {
        const pointer = this.scene.input.activePointer
        const pointerRotation = Phaser.Math.Angle.Between(
            this.player.x,
            this.player.y,
            this.scene.pointerPosition.x,
            this.scene.pointerPosition.y
        )

        this.currentMouseRotation = pointerRotation
        if (
            this.currentMouseRotation <= this.previousMouseRotation - Math.PI / 180 ||
            this.currentMouseRotation >= this.previousMouseRotation + Math.PI / 180
        ) {
            this.action.rotation = this.currentMouseRotation
            this.previousMouseRotation = this.currentMouseRotation
        }

        if (this.canLeftTrigger) {
            if (pointer.leftButtonDown()) {
                this.action.pointerPosition = this.scene.pointerPosition
                this.action.action = 'weaponPrimary'
                this.canLeftTrigger = false
            }
        }

        if (this.canRightTrigger) {
            if (pointer.rightButtonDown()) {
                this.action.pointerPosition = this.scene.pointerPosition
                this.action.action = 'weaponSecondary'
                this.canRightTrigger = false
            }
        }

        if (pointer.leftButtonReleased()) {
            this.canLeftTrigger = true
        }
        if (pointer.rightButtonReleased()) {
            this.canRightTrigger = true
        }
    }

    public toggleActive(): void {
        this.active = !this.active
    }

    public handleKeyboard(): void {
        this.handleMovement()
        this.handleSwitchWeapon()
    }

    public update(): void {
        if (this.active) {
            this.action = {}
            this.handleKeyboard()
            this.handleMouse()
            this.scene.game.events.emit(Event.playerAction, this.action)
        }
    }
}
