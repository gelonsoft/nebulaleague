import { DebugScene } from '~/client/scenes/debugScene'
import { GameScene } from '../scenes/gameScene'


export class DebugController {
    public scene: DebugScene
    public keys: Record<string, Phaser.Input.Keyboard.Key>
    public cameraControls: Phaser.Cameras.Controls.SmoothedKeyControl
    public isFreeCamera: boolean
    public isPaused: boolean
    constructor(scene: DebugScene) {
        this.scene = scene
        this.keys = {
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
        const toggleCameraDown = Phaser.Input.Keyboard.JustDown(this.keys.toggleCamera)
        const togglePauseDown = Phaser.Input.Keyboard.JustDown(this.keys.pause)
        const toggleHelpMenuDown = Phaser.Input.Keyboard.JustDown(this.keys.toggleHelpMenu)
        const slowGameDown = Phaser.Input.Keyboard.JustDown(this.keys.slowGame)
        const speedGameDown = Phaser.Input.Keyboard.JustDown(this.keys.speedGame)
        const resetGameSpeedDown = Phaser.Input.Keyboard.JustDown(this.keys.resetGame)
        const fullscreen = Phaser.Input.Keyboard.JustDown(this.keys.fullscreen)

        if (toggleCameraDown) {
            if (this.isFreeCamera) {
                this.scene.mainScene.cameras.main.stopFollow()
            } else {
                this.scene.mainScene.cameras.main.startFollow(this.scene.mainScene.player, true)
            }
            this.isFreeCamera = !this.isFreeCamera
        }

        if (togglePauseDown) {
            if (this.isPaused) {
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
            if (this.scene.scale.isFullscreen) {
                this.scene.scale.stopFullscreen()
            } else {
                this.scene.scale.startFullscreen()
            }
        }
    }
}

export function settingCameraControl(scene: GameScene): Phaser.Cameras.Controls.SmoothedKeyControl {
    const cursors = scene.input.keyboard.createCursorKeys()
    const controlConfig = {
        camera: scene.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        zoomIn: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        zoomOut: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N),
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0,
    }
    return new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig)
}
