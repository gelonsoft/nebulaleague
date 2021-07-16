import {
    BootScene,
    DeathScene,
    DebugScene,
    GameFfaScene, HeroStatScene,
    HudScene,
    LobbyScene,
    MainMenuScene,
    PlayerSelectionScene
} from '~/client/scenes'


import { Config } from '~/shared/config'
import { Client } from '~/client/client'
import { GameMode, SceneGameKey } from '~/shared/models'
import { ScenesController } from '~/client/games/scenesController'


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
            HeroStatScene
        ]

        super({
            type: Phaser.WEBGL,
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
            backgroundColor: 0xf0f0f0,
            audio: {
                noAudio: true,
            },
            banner: Config.debug.displayBanner,
            physics: {
                default: 'matter',
                matter: {
                    gravity: { x: 0, y: 0 },
                    debug: {
                        showBody: true,
                        showStaticBody: true,
                        showCollisions: true
                    }
                },
            },
            scene: scenes,
        })
    }

    public get dt () {
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
