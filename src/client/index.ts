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
import { GameMode, SceneGameKey } from '~/shared/models'

const isDebug = process.env.DEBUG === 'true' || false

class Scenes {
    public myGame: MyGame
    public boot: BootScene
    public lobby: LobbyScene
    public playerSelection: PlayerSelectionScene
    public hud: HudScene
    public death: DeathScene
    public mainMenu: MainMenuScene
    public debug: DebugScene

    constructor(myGame: MyGame) {
        this.myGame = myGame
        this.boot = this.myGame.scene.getScene(Config.scenes.boot.key) as BootScene
        this.lobby = this.myGame.scene.getScene(Config.scenes.lobby.key) as LobbyScene
        this.playerSelection = this.myGame.scene.getScene(
            Config.scenes.playerSelection.key
        ) as PlayerSelectionScene
        this.hud = this.myGame.scene.getScene(Config.scenes.hud.key) as HudScene
        this.death = this.myGame.scene.getScene(Config.scenes.death.key) as DeathScene
        this.mainMenu = this.myGame.scene.getScene(Config.scenes.mainMenu.key) as MainMenuScene
        this.debug = this.myGame.scene.getScene(Config.scenes.debug.key) as DebugScene
    }

    public stopAll() {
        const keys = Object.values(Config.scenes).map((sceneConfig: { key: string }) => sceneConfig.key)
        for (const key of keys) {
            this.myGame.scene.stop(key)
        }
    }

    public startLoby() {
        this.stopAll()
        this.lobby.scene.start()
    }
    

    public startPlayerSelection() {
        this.stopAll()
        this.playerSelection.scene.start()
    }
    
    public startGame() {
        this.stopAll()
        this.game.scene.start()
        this.hud.scene.start().bringToTop()
    }
    
    public get game(): GameScene {
        return this.myGame.scene.getScene(this.myGame.currentGameKey) as GameScene
    }
}

export class MyGame extends Phaser.Game {
    public debug: boolean
    public client: Client
    public scenes: Scenes

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
        this.scenes = new Scenes(this)

        window.addEventListener('resize', () => {
            this.scale.resize(window.innerWidth, window.innerHeight)
        })
    }
}

new MyGame()
