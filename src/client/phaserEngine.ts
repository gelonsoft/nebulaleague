import 'process'
import { MainScene } from "./scenes/mainScene"
import { HudScene } from "./scenes/hudScene"
import { BootScene } from "./scenes/bootScene"
import { DebugScene } from './scenes/debugScene'
import { MenuScene } from './scenes/menuScene'
import * as io from 'socket.io-client'


const isDebug = process.env.DEBUG === 'true' || false
export class MyGame extends Phaser.Game {
    public debug: boolean
    constructor(GameConfig?: Phaser.Types.Core.GameConfig) {
        super(GameConfig)
        this.debug = isDebug
    }
}

io.connect()

export class PhaserSpaceGame {
    private game: MyGame
    constructor() {
        const scenes = [BootScene, MenuScene, MainScene, HudScene, DebugScene]
        this.game = new MyGame({
            type: Phaser.CANVAS,
            title: 'nebulaleague',
            scale: {
                width: window.innerWidth * window.devicePixelRatio,
                height: window.innerHeight * window.devicePixelRatio,
                mode: Phaser.Scale.NONE,
                parent: "nebulaleague",
            },
            parent: 'nebulaleague',
            dom: {
                createContainer: true
            },
            backgroundColor: 0x444400,
            audio: {
                noAudio: true
            },
            banner: isDebug,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { x: 0, y: 0 },
                    debug: isDebug,
                }
            },
            // physics: {
            //     default: 'matter',
            //     matter: {
            //         enableSleeping: true,
            //         gravity: {
            //             y: 0
            //         },
            //         debug: {
            //             showBody: true,
            //             showStaticBody: true
            //         }
            //     }
            // },
            scene: scenes,
        })

        this.game.scene.start('bootScene')


        window['a'] = this.game

    }
}
