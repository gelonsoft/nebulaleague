import {
    Position,
    ActionKey,
    SceneGameKey,
    PlayerAction,
} from '~/shared/models'
import { Config } from '~/shared/config'

import { MyGame } from '~/client/index'
import { Client } from '~/client/client'
import { buildProjectiles, Projectiles } from '~/client/entities/projectiles'
import { Projectile } from '~/client/entities/projectile'
import { buildWeapons, Weapon } from '~/client/entities/weapons'
import { Ability, buildAbilities } from '~/client/entities/abilities'
import { Event } from '~/shared/events'
import { MainControl, PlayerControl } from '~/client/controls'
import { Player, ActionTimeInterface } from '~/client/entities/player'

export class GameScene extends Phaser.Scene {
    public game: MyGame
    public player: Player
    public players: Phaser.Physics.Arcade.Group
    public client: Client
    public projectiles: Projectiles
    public weapons: Record<string, Weapon>
    public abilities: Record<string, Ability>
    public mainControl: MainControl
    public playerControl: PlayerControl
    public freeCamera: boolean
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

        
        this.client = this.game.registry.get('client') as Client
        if (this.game.debug) {
            // this.scene.run('debugScene', this)
        }
        this.backgroundImageKey = 'backgroundGalaxy3'
        this.input.setDefaultCursor('url(assets/cursors/cursor.cur), pointer')
        this.registerEvent()
        
    }

    public create(): void {
        this.projectiles = buildProjectiles(this)
        this.weapons = buildWeapons(this)
        this.abilities = buildAbilities(this)

        this.settingCamera()
        this.createBackground()

        const existingPlayers = Array.from(this.client.gameState.players.values()).map((playerModel) => {
            return new Player(this, playerModel)
        })

        this.players = this.physics.add
            .group({
                collideWorldBounds: true,
                classType: Player,
            })
            .addMultiple(
                existingPlayers
            )
        this.player = this.players
            .getChildren()
            .find((player: Player) => player.id === this.client.id) as Player
        
        this.playerControl = new PlayerControl(this, this.player)
        this.mainControl = new MainControl(this)
        this.cameras.main.startFollow(this.player, true)
    }


    public createBackground(): void {
        this.add
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
    

    public syncHealth(player: Player): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.playerHealthChanged)
        }
    }

    public syncAbilitiesCooldown(
        player: Player,
        selectedAbilityKey: string,
        actionTime: ActionTimeInterface
    ): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.abilitiesCooldownChanged, selectedAbilityKey, actionTime)
        }
    }

    public syncActionCooldwon(
        player: Player,
        selectedActionKey: ActionKey,
        actionTime: ActionTimeInterface
    ): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.actionsCollodownChanged, selectedActionKey, actionTime)
        }
    }

    public syncSelectedAbility(player: Player, selectedAbilityKey: string, selected: boolean): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.abilitiesSelectedChanged, selectedAbilityKey, selected)
        }
    }

    public syncWeaponCooldown(
        player: Player,
        selectedWeaponKey: string,
        actionTime: ActionTimeInterface
    ): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.weaponsCooldownChanged, selectedWeaponKey, actionTime)
        }
    }

    public syncSelectedWeapon(player: Player, selected: boolean): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.weaponSelectedChanged, selected)
        }
    }

    public syncEffects(player: Player): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.effectsChanged, player.effects)
        }
    }

    public syncDeathTextCooldown(player: Player, cooldown: number): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.deathCooldownChanged, cooldown)
        }
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

    
    get pointerPosition(): Position {
        const pointer = this.input.activePointer
        const pointerFromWorld = this.cameras.main.getWorldPoint(pointer.x, pointer.y)
        return {
            x: pointerFromWorld.x,
            y: pointerFromWorld.y,
        }
    }

    public settingCamera(): void {
        this.mainCameraZoom = 0.5
        this.freeCamera = false
        this.cameras.main.setZoom(this.mainCameraZoom)
        this.cameras.main.setBounds(0, 0, Config.world.width, Config.world.height)
        this.physics.world.setBounds(
            0,
            0,
            Config.world.width,
            Config.world.height - Config.hud.height - Config.player.size / 2
        )
    }

    public handlePlayerPlayerCollide(_player1: Player, player2: Player): void {
        player2.body.velocity.scale(-1)
        player2.hit(Config.player.toOtherDamage)
    }

    public handleEnemyProjectileCollide(hittedPlayer: Player, projectile: Projectile): void {
        if (hittedPlayer.id !== projectile.fromPlayerId) {
            projectile.actionOnCollision(hittedPlayer)
        }
    }


    public registerEvent(): void {
        this.game.events.on(Event.playerAction, (playerAction: PlayerAction) => {
            if (playerAction.direction) {
                this.player.move(playerAction.direction)
                
            } else {
                this.player.move(this.player.previousDirection)
            }
            
            if (playerAction.rotation) {
                this.player.rotateFromPointer(playerAction.rotation)
            }
            if (playerAction.selectAbility) {
                this.player.selectAbility(playerAction.selectAbility)
            }
            if (playerAction.action) {
                const pointerVector = new Phaser.Math.Vector2(
                    playerAction.pointerPosition!.x,
                    playerAction.pointerPosition!.y
                )
                this.player.action(playerAction.action, pointerVector)
            }
            this.client.gameSendPlayerUpdated(this.player.getChanged())
        })
    }
    
    public update(): void {
        this.mainControl.update()
        this.playerControl.update()
        console.log(this.game.loop.actualFps)
        this.physics.overlap(this.players, this.players, this.handlePlayerPlayerCollide)
        this.physics.overlap(
            this.players,
            this.projectiles,
            this.handleEnemyProjectileCollide,
        )
        
        if (this.player.active) {
            this.player.draw()
        }

        this.players
            .getChildren()
            .filter((player: Player) => player.active)
            .forEach((player: Player) => {
                player.update()
            })
    }
}
