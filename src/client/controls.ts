import { MainScene } from './scenes/mainScene'
import { Player, PlayerDirection } from './player'
import { DebugScene } from './scenes/debugScene'


export class MainControl {
    public scene: MainScene
    public controls: any
    public isDebugSceneActive: boolean
    constructor (scene: MainScene) {
        this.scene = scene
        this.controls = {
            toggleDebugScene: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L),
            toggleMenu: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC),
        }
        this.isDebugSceneActive = true
    }
    
    public update(): void {
        const toggleDebugScene = this.scene.input.keyboard.checkDown(this.controls.toggleDebugScene, 200)
        const toggleHelpMenuDown  = this.scene.input.keyboard.checkDown(this.controls.toggleMenu, 200)
        
        if (this.scene.game.debug && toggleDebugScene && this.isDebugSceneActive) {
            this.scene.scene.pause('debugScene')
            this.isDebugSceneActive = false
        } else if (this.scene.game.debug && toggleDebugScene && !this.isDebugSceneActive) {
            this.scene.scene.resume('debugScene')
            this.isDebugSceneActive = true
        }

        if (toggleHelpMenuDown) {
            if(this.scene.scene.isActive('mainMenuScene')) {
                this.scene.scene.sleep('mainMenuScene')
            } else {
                this.scene.scene.launch('mainMenuScene')
            }
        }
    }
}


export class PlayerControl {
    public scene: MainScene
    public controls: any
    public player: Player
    public prevMoveLeft: boolean
    public prevMoveRight: boolean
    public prevMoveUp: boolean
    public prevMoveDown: boolean
    public canLeftTrigger: boolean
    public canRightTrigger: boolean
    public active: boolean
    
    constructor(scene: MainScene, player: Player) {
        this.player = player
        this.scene = scene
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
            skill1: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE),
            skill2: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO),
            skill3: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE),
            skill4: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR),
        }
    }

    public handleMovement(): void {
        const left = ( this.controls.moveLeftQwerty.isDown ||
            this.controls.moveLeftAzerty.isDown ) ? -1: 0
        const right = (this.controls.moveRightDvorak.isDown ||
            this.controls.moveRightQwerty.isDown ) ? 1: 0
        const up = (this.controls.moveUpDvorak.isDown ||
            this.controls.moveUpQwerty.isDown ||
            this.controls.moveUpAzerty.isDown ) ? -1: 0
        const down = (this.controls.moveDownDvorak.isDown ||
            this.controls.moveDownQwerty.isDown ) ? 1: 0


        const playerDirection: PlayerDirection = {
            x: left + right,
            y: up + down,
        }
        this.player.move(playerDirection)
        
    }

    public handleSwitchWeapon(): void {
        const skill1 = this.scene.input.keyboard.checkDown(this.controls.skill1, 200)
        const skill2 = this.scene.input.keyboard.checkDown(this.controls.skill2, 200)
        const skill3 = this.scene.input.keyboard.checkDown(this.controls.skill3, 200)
        const skill4 = this.scene.input.keyboard.checkDown(this.controls.skill4, 200)

        if (skill1) {
            this.player.selectAbility('ability1')
        }
        else if (skill2) {
            this.player.selectAbility('ability2')
        }
        else if (skill3) {
            this.player.selectAbility('ability3')
        }
        else if (skill4) {
            this.player.selectAbility('ability4')
        }
    }
    
    public handleMouse(): void {
        const pointer = this.scene.input.activePointer
        const angleToPointer = Phaser.Math.Angle.Between(
            this.player.body.center.x, this.player.body.center.y,
            this.scene.pointerPosition.x, this.scene.pointerPosition.y
        ) 
        
        this.player.rotation = angleToPointer + Math.PI / 2

        if (this.canLeftTrigger) {
            if (pointer.leftButtonDown()) {
                this.player.action('weaponPrimary')
                this.canLeftTrigger = false
            }    
        }

        if (this.canRightTrigger) {
            if (pointer.rightButtonDown()) {
                this.player.action('weaponSecondary')
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
            this.handleKeyboard()
            this.handleMouse()
        }
    }
}


export class DebugControl {
    public scene: DebugScene
    public controls: any
    public cameraControls: any
    public isFreeCamera: boolean
    public isPaused: boolean
    constructor (scene: DebugScene) {
        this.scene = scene
        this.controls = {
            toggleHelpMenu: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R),
            toggleCamera: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T),
            pause: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P),
            slowGame: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS),
            speedGame: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PLUS),
            resetGame: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C),
            fullscreen: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F),
        }
        this.cameraControls = settingCameraControl(this.scene.mainScene)
    }

    public update(delta: number): void {
        const toggleCameraDown = this.scene.input.keyboard.checkDown(this.controls.toggleCamera, 200)
        const togglePauseDown  = this.scene.input.keyboard.checkDown(this.controls.pause, 200)
        const toggleHelpMenuDown  = this.scene.input.keyboard.checkDown(this.controls.toggleHelpMenu, 200)
        const slowGameDown = this.scene.input.keyboard.checkDown(this.controls.slowGame, 200)
        const speedGameDown  = this.scene.input.keyboard.checkDown(this.controls.speedGame, 200)
        const resetGameSpeedDown  = this.scene.input.keyboard.checkDown(this.controls.resetGame, 200)
        const fullscreen = this.scene.input.keyboard.checkDown(this.controls.fullscreen, 200)
        
        if (toggleCameraDown) {
            if(this.isFreeCamera) {
                this.scene.mainScene.cameras.main.stopFollow()
            } else {
                this.scene.mainScene.cameras.main.startFollow(this.scene.mainScene.player, true)
            }
            this.isFreeCamera = !this.isFreeCamera
        }

        if (togglePauseDown) {
            if(this.isPaused) {
				this.scene.resumeScene()
			} else {
                this.scene.pauseScene()
			}
            this.isPaused = !this.isPaused
        }
        
        if (slowGameDown) {
            this.scene.slowDownGame()
        }

        if (speedGameDown) {
            this.scene.speedUpGame()
        }
        
        if (resetGameSpeedDown) {
            this.scene.resetGameSpeed()
        }
        
        if (toggleHelpMenuDown) {
            this.scene.toggleHelpMenu()
        }

        this.cameraControls.update(delta)

        if (fullscreen) {
            if(this.scene.scale.isFullscreen) {
                this.scene.scale.stopFullscreen()
            } else {
                this.scene.scale.startFullscreen()
            }
        }
    }
}



export function settingCameraControl(game: MainScene): Phaser.Cameras.Controls.SmoothedKeyControl {
    const cursors = game.input.keyboard.createCursorKeys()
    const controlConfig = {
        camera: game.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        zoomIn: game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        zoomOut: game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N),
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    }
    return new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig)
}
