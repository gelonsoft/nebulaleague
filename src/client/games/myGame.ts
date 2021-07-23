import {
    BootScene,
    DeathScene,
    DebugScene,
    GameFfaScene, HeroStatScene,
    HudScene,
    LobbyScene, LoginScene,
    MainMenuScene,
    PlayerSelectionScene
} from '~/client/scenes'


import {Config} from '~/shared/config'
import {Client} from '~/client/client'
import {GameMode, SceneGameKey} from '~/shared/models'
import {ScenesController} from '~/client/games/scenesController'
import RexUIPlugin from "phaser3-rex-plugins/templates/ui/ui-plugin.js";
// @ts-ignore
import TextTypingPlugin from "phaser3-rex-plugins/plugins/texttyping-plugin.js";
// @ts-ignore
import TextEditPlugin from 'phaser3-rex-plugins/plugins/textedit-plugin.js';
// @ts-ignore
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin.js';


export class MyGame extends Phaser.Game {
    public client: Client
    public scenes: ScenesController

    constructor() {
        const scenes = [
            BootScene,
            LobbyScene,
            HudScene,
            DebugScene,
            MainMenuScene,
            DeathScene,
            PlayerSelectionScene,
            GameFfaScene,
            HeroStatScene,
            LoginScene
        ]

        super({
            type: Phaser.WEBGL,
            title: 'nebulaleague',
            width: 1024,
            height: 768,
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
            backgroundColor: 0xf0f0f0,
            audio: {
                noAudio: true,
            },
            banner: Config.debug.displayBanner,
            physics: {
                default: 'matter',
                matter: {
                    gravity: {x: 0, y: 0},
                    debug: {
                        showBody: true,
                        showStaticBody: true,
                        showCollisions: true
                    }
                },
            },
            plugins: {
                global: [{
                    key: 'rexInputTextPlugin',
                    plugin: InputTextPlugin,
                    start: true
                },
                    {
                        key: 'rexTextTyping',
                        plugin: TextTypingPlugin,
                        start: true
                    },
                    {
                        key: 'rexTextEdit',
                        plugin: TextEditPlugin,
                        start: true
                    }],
                scene: [{
                    key: 'rexUI',
                    plugin: RexUIPlugin,
                    mapping: 'rexUI'
                }
                    // ...
                ]
            },
            scene: scenes,
        })
    }

    public get dt() {
        return this.loop.delta / 1000
    }

    public get currentGameKey(): SceneGameKey {
        return Config.modeToGameKey[this.currentGameMode]
    }

    public get currentGameMode(): GameMode {
        return this.client.user.gameMode
    }


    start() {
        super.start()
        this.client = new Client(this)
        this.scenes = new ScenesController(this)

        window.addEventListener('resize', () => {
            this.scale.resize(window.innerWidth, window.innerHeight)
        })
    }
}
