import 'phaser'
import 'process'
import { MainScene } from "./scenes/mainScene"
import { HudScene } from "./scenes/hudScene"
import { BootScene } from "./scenes/bootScene"
import { DebugScene } from './scenes/debugScene'
import { MenuScene } from './scenes/menuScene'

const isDebug = process.env.debug === 'true' || false


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
        const scenes = [BootScene, MenuScene, MainScene, HudScene, DebugScene]
        this.game = new MyGame({
            // type: Phaser.AUTO,
            type: Phaser.CANVAS,
            title: 'spacefighter',
            scale: {
                width: window.innerWidth * window.devicePixelRatio,
                height: window.innerHeight * window.devicePixelRatio,
                mode: Phaser.Scale.NONE,
                parent: "spacefighter",
            },
            parent: 'spacefighter',
            dom: {
                createContainer: true
            },
            backgroundColor: 0x444400,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { x: 0, y: 0 },
                    debug: true
                }
            },
            scene: scenes,
        })

        this.game.scene.start('bootScene')


        window['a'] = this.game

    }
}
