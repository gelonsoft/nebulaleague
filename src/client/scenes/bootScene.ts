import { MyGame } from '~/client/games/myGame'
import { Config } from '~/shared/config'

export class BootScene extends Phaser.Scene {
    public game: MyGame
    private loadingBar: Phaser.GameObjects.Graphics
    private progressBar: Phaser.GameObjects.Graphics

    constructor() {
        super({ key: Config.scenes.boot.key })
    }

    init(): void {
        this.game.canvas.oncontextmenu = function (e) {
            e.preventDefault()
        }
    }

    preload(): void {
        this.cameras.main.setBackgroundColor(Config.scenes.boot.cameraBackgroundColor)
        this.createLoadingGraphics()

        this.load.on(
            'progress',
            (value: number) => {
                this.progressBar.clear()
                this.progressBar.fillStyle(Config.scenes.boot.progressBarColor, 1)
                this.progressBar.fillRect(
                    this.cameras.main.width / 4,
                    this.cameras.main.height / 2 - 16,
                    (this.cameras.main.width / 2) * value,
                    16
                )
            },
            this
        )

        // delete bar graphics, when loading complete
        this.load.on(
            'complete',
            () => {
                this.progressBar.destroy()
                this.loadingBar.destroy()
                this.game.client.initLobby()
            },
            this
        )

        // load templates
        this.load.html('mainMenuHTML', 'assets/html/mainMenu.html')
        this.load.html('mainMenuSceneHTML', 'assets/html/mainMenuScene.html')
        this.load.html('heroStatHTML', 'assets/html/heroStat.html')

        // load our package
        this.load.pack('preload', 'assets/pack.json', 'preload')

        if (Config.debug.debugMode) {
            this.load.html('debugMenuHTML', 'assets/html/debugMenu.html')
        }
    }


    private createLoadingGraphics(): void {
        this.loadingBar = this.add.graphics()
        this.loadingBar.fillStyle(Config.scenes.boot.loadingBarColor, 1)
        this.loadingBar.fillRect(
            this.cameras.main.width / 4 - 2,
            this.cameras.main.height / 2 - 18,
            this.cameras.main.width / 2 + 4,
            20
        )
        this.progressBar = this.add.graphics()
    }
}
