import 'process'
import 'phaser'
import './main.scss'

import { GameScene, GameFfaScene, GameTrainingScene } from '~/client/scenes/gameScene'
import { HudScene } from '~/client/scenes/hudScene'
import { BootScene } from '~/client/scenes/bootScene'
import { DebugScene } from '~/client/scenes/debugScene'
import { LobbyScene } from '~/client/scenes/lobbyScene'
import { MainMenuScene } from '~/client/scenes/mainMenuScene'
import { DeathScene } from '~/client/scenes/deathScene'
import { PlayerSelectionScene } from '~/client/scenes/playerSelectionScene'
import { Config } from '~/shared/config'
import { Client } from './client'

type Scenes = {
    boot: BootScene
    death: DeathScene
    debug: DebugScene
    hud: HudScene
    loby: LobbyScene
    mainMenu: MainMenuScene
    playerSelection: PlayerSelectionScene
    game: GameScene
    gameTraining: GameTrainingScene
    gameFfa: GameFfaScene
}

const isDebug = process.env.DEBUG === 'true' || false
export class MyGame extends Phaser.Game {
    public debug: boolean
    public client: Client
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
            GameTrainingScene,
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
            backgroundColor: 0x444400,
            audio: {
                noAudio: true,
            },
            banner: Config.debug.displayBanner,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { x: 0, y: 0 },
                    debug: Config.debug.displayBody,
                },
            },
            scene: scenes,
        })

        this.debug = isDebug

        window.addEventListener('resize', () => {
            this.scale.resize(window.innerWidth, window.innerHeight)
        })

    }

    start() {
        super.start()
        this.client = new Client(this)
    }
    
}


new MyGame()
