import 'process'
import './main.scss'

import { MainScene } from '~/client/scenes/mainScene'
import { HudScene } from '~/client/scenes/hudScene'
import { BootScene } from '~/client/scenes/bootScene'
import { DebugScene } from '~/client/scenes/debugScene'
import { LobyScene } from '~/client/scenes/lobyScene'
import { MainMenuScene } from '~/client/scenes/mainMenuScene'
import { DeathScene } from '~/client/scenes/deathScene'
import { PlayerSelectionScene } from '~/client/scenes/playerSelectionScene'

const isDebug = process.env.DEBUG === 'true' || false
export class MyGame extends Phaser.Game {
    public debug: boolean
    constructor(GameConfig?: Phaser.Types.Core.GameConfig) {
        super(GameConfig)
        this.debug = isDebug
    }
}


export class PhaserSpaceGame {
    private game: MyGame
    constructor() {
        const scenes = [
            BootScene,
            LobyScene,
            MainScene,
            HudScene,
            DebugScene,
            MainMenuScene,
            DeathScene,
            PlayerSelectionScene,
        ]
        this.game = new MyGame({
            type: Phaser.CANVAS,
            title: 'nebulaleague',
            scale: {
                width: window.innerWidth * window.devicePixelRatio,
                height: window.innerHeight * window.devicePixelRatio,
                autoCenter: Phaser.Scale.NONE,
                parent: 'nebulaleague',
            },
            parent: 'nebulaleague',
            dom: {
                createContainer: true,
            },
            backgroundColor: 0x444400,
            audio: {
                noAudio: true,
            },
            banner: isDebug,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { x: 0, y: 0 },
                    fps: 60,
                    debug: isDebug,
                },
            },
            scene: scenes,
        })

        this.game.scene.start('bootScene')
        window.addEventListener('resize', () => {
            this.game.scale.resize(window.innerWidth, window.innerHeight)
        })
    }
}

new PhaserSpaceGame()
