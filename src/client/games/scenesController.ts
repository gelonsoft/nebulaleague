import { GameScene } from '~/client/scenes/gameScene'
import { HudScene } from '~/client/scenes/hudScene'
import { BootScene } from '~/client/scenes/bootScene'
import { DebugScene } from '~/client/scenes/debugScene'
import { LobbyScene } from '~/client/scenes/lobbyScene'
import { MainMenuScene } from '~/client/scenes/mainMenuScene'
import { DeathScene } from '~/client/scenes/deathScene'
import { PlayerSelectionScene } from '~/client/scenes/playerSelectionScene'
import { Config } from '~/shared/config'
import { MyGame } from '~/client/games/myGame'
import {HeroStatScene} from "~/client/scenes/heroStatScene";
import {LoginScene} from "~/client/scenes/loginScene";


export class ScenesController {
    public myGame: MyGame
    public boot: BootScene
    public lobby: LobbyScene
    public heroStat: HeroStatScene
    public login: LoginScene
    public playerSelection: PlayerSelectionScene
    public hud: HudScene
    public death: DeathScene
    public mainMenu: MainMenuScene
    public debug: DebugScene

    constructor(myGame: MyGame) {
        this.myGame = myGame
        this.boot = this.myGame.scene.getScene(Config.scenes.boot.key) as BootScene
        this.lobby = this.myGame.scene.getScene(Config.scenes.lobby.key) as LobbyScene
        this.heroStat = this.myGame.scene.getScene(Config.scenes.heroStat.key) as HeroStatScene
        this.playerSelection = this.myGame.scene.getScene(
            Config.scenes.playerSelection.key
        ) as PlayerSelectionScene
        this.hud = this.myGame.scene.getScene(Config.scenes.hud.key) as HudScene
        this.death = this.myGame.scene.getScene(Config.scenes.death.key) as DeathScene
        this.mainMenu = this.myGame.scene.getScene(Config.scenes.mainMenu.key) as MainMenuScene
        this.debug = this.myGame.scene.getScene(Config.scenes.debug.key) as DebugScene
        this.login = this.myGame.scene.getScene(Config.scenes.login.key) as LoginScene
    }

    public stopAll() {
        const keys = Object.values(Config.scenes).map((sceneConfig: { key: string }) => sceneConfig.key)
        for (const key of keys) {
            this.myGame.scene.stop(key)
        }
    }

    public startLoby() {
        this.stopAll()
//
        //this.lobby.scene.start()
        this.heroStat.scene.start()
    }

    public startLogin() {
        this.stopAll()
        this.login.scene.start()
    }
    

    public startPlayerSelection() {
        this.stopAll()
        this.playerSelection.scene.start()
    }
    
    public startGame() {
        this.stopAll()
        this.game.scene.start()
        // this.hud.scene.start().bringToTop()
    }
    
    public get game(): GameScene {
        return this.myGame.scene.getScene(this.myGame.currentGameKey) as GameScene
    }
}
