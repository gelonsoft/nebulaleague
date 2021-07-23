import * as _ from 'lodash'
import { Vector, SceneGameKey, PlayerAction, PlayerChanged } from '~/shared/models'
import { Config } from '~/shared/config'
import { MyGame } from '~/client/games/myGame'
import { buildProjectiles, Projectiles } from '~/client/entities/projectiles'
import { Projectile } from '~/client/entities/projectile'
import { buildWeapons, Weapon } from '~/client/entities/weapons'
import { Ability, buildAbilities } from '~/client/entities/abilities'
import { Event } from '~/shared/events'
import { MainController, PlayerController } from '~/client/controllers'
import { Player } from '~/client/entities/player'

export class GameScene extends Phaser.Scene {
    public game: MyGame
    public player: Player
    public players: Phaser.GameObjects.Group
    public projectiles: Projectiles
    public mainControl: MainController
    public playerControl: PlayerController
    public mainCameraZoom: number
    public backgroundImageKey: string
    public backgroundImage: Phaser.GameObjects.Image

    constructor(gameKey: SceneGameKey) {
        super({
            key: gameKey,
        })
    }

    public init(): void {
        window.addEventListener(
            'resize',
            () => {
                this.backgroundImage.setDisplaySize(
                    this.cameras.main.displayWidth + Config.world.width * Config.world.paralaxScrollFactor,
                    this.cameras.main.displayHeight + Config.world.height * Config.world.paralaxScrollFactor
                )
            },
            false
        )

        this.input.setDefaultCursor('url(assets/cursors/cursor.cur), pointer')
        this.registerEvent()
    }

    public create(): void {
        this.projectiles = buildProjectiles(this)
        this.settingCamera()
        this.createBackground()

        const existingPlayers = Array.from(this.game.client.gameClient.oldState.players.values()).map(
            (playerModel) => {
                return new Player(this, playerModel)
            }
        )
        this.players = this.add.group({ classType: Player }).addMultiple(existingPlayers)

        this.player = this.players
            .getChildren()
            .find((player: Player) => player.id === this.game.client.gameClient.id) as Player


        this.playerControl = new PlayerController(this, this.player)
        this.mainControl = new MainController(this)
        this.cameras.main.startFollow(this.player, true)
    }

    public createBackground(): void {
        this.backgroundImage = this.add
            .image(0, 0, this.backgroundImageKey)
            .setScrollFactor(Config.world.paralaxScrollFactor, Config.world.paralaxScrollFactor)
            .setDisplaySize(
                this.cameras.main.displayWidth + Config.world.width * Config.world.paralaxScrollFactor,
                this.cameras.main.displayHeight + Config.world.height * Config.world.paralaxScrollFactor
            )
            .setOrigin(0.23, 0.23)
            .setAlpha(0.9)
            .setDepth(-1)
    }

    public startDeathTransition(player: Player): void {
        if (player.id === this.player.id) {
            this.cameras.main.flash(1 * 1000, 125, 125, 125)
            this.cameras.main.setAlpha(0.7)

            this.playerControl.active = false
            this.scene.run('deathScene', this)
        }
    }

    public stopDeathTransition(player: Player): void {
        if (player.id === this.player.id) {
            this.scene.sleep('deathScene')
            this.cameras.main.flash(1 * 1000, 125, 125, 125)
            this.cameras.main.setAlpha(1)
            this.time.addEvent({
                delay: 0.2 * 1000,
                callback: () => (this.playerControl.active = true),
                callbackScope: this,
            })
        }
    }

    get pointerPositionVector(): Phaser.Math.Vector2 {
        const pointer = this.input.activePointer
        return this.cameras.main.getWorldPoint(pointer.x, pointer.y)
    }

    get pointerPosition(): Vector {
        const pointer = this.input.activePointer
        const pointerFromWorld = this.cameras.main.getWorldPoint(pointer.x, pointer.y)
        return {
            x: pointerFromWorld.x,
            y: pointerFromWorld.y,
        }
    }

    public settingCamera(): void {
        this.mainCameraZoom = 0.5
        this.cameras.main.setZoom(this.mainCameraZoom)
        this.cameras.main.setBounds(0, 0, Config.world.width, Config.world.height)
        this.matter.world.setBounds(
            0,
            0,
            Config.world.width,
            Config.world.height - Config.hud.height - Config.player.size / 2
        )
    }

    public registerEvent(): void {
        this.game.events.on(Event.playerAction, (playerAction: PlayerAction) => {
            this.game.client.gameClient.inputUpdate(playerAction)
        })
    }

    public update(): void {
        this.playerControl.update()
    }
}
