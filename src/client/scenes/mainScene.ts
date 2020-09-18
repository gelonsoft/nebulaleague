import { updatedDiff } from 'deep-object-diff'
import { Config } from '@shared/config'
import {
    PlayerModel,
    PlayerAction,
    PlayerConfig,
    Position,
    PlayerChanged,
    GameStateUpdated,
} from '@shared/models'
import { Event } from '@shared/events'
import { MyGame } from '~/index'
import { Client } from '~/client'
import { PlayerAI } from '~/ai/playerAI'
import { Player, ActionTimeInterface, } from '~/entities/player'
import { MainControl, PlayerControl } from '~/controls'
import { Consumable, RandomItem } from '~/entities/consumables'
import { Projectiles, ProjectileInterface } from '~/entities/projectiles'
import { Weapon, buildWeapons } from '~/entities/weapons'
import { buildAbilities, Ability } from '~/entities/abilities'


export class MainScene extends Phaser.Scene {
    public game: MyGame
    public client: Client
    public player: Player
    public players: Phaser.Physics.Arcade.Group
    public playersAI: Array<PlayerAI>
    public consumables: Phaser.Physics.Arcade.StaticGroup
    public projectiles: Projectiles
    public weapons: Record<string, Weapon>
    public abilities: Record<string, Ability>
    public randomTable: RandomItem
    public mainControl: MainControl
    public playerControl: PlayerControl
    public isDebug: boolean
    public freeCamera: boolean
    public mainCameraZoom: number
    public backgroundImage: Phaser.GameObjects.Image
    public playerConfig: PlayerConfig
    public socket: SocketIOClient.Socket
    public playerChanged: PlayerChanged | null
    public playerBefore: PlayerChanged | null
    public playerAfter: PlayerChanged | null

    constructor() {
        super({
            key: "mainScene"
        })
    }

    public init(): void {
        window.addEventListener('resize', () => {
            this.backgroundImage.setDisplaySize(
                this.cameras.main.displayWidth + Config.world.width * Config.world.paralaxScrollFactor,
                this.cameras.main.displayHeight + Config.world.height * Config.world.paralaxScrollFactor,
            )
        }, false)
        this.client = this.game.registry.get('client')

        this.randomTable = new RandomItem()
        this.randomTable
            .add('pill', 20)
        this.input.setDefaultCursor('url(assets/cursors/cursor.cur), pointer')
        this.registerEvent()

        if (this.game.debug) {
            // this.scene.run('debugScene', this)
            window['p'] = this.player
            window['m'] = this
        }

    }

    public create(): void {
        this.projectiles = new Projectiles(this)
        this.weapons = buildWeapons(this)
        this.abilities = buildAbilities(this)
        this.playersAI = []
        this.players = this.physics.add.group({
            collideWorldBounds: true,
            classType: Player,
        }).addMultiple(Object.values(this.client.gameState.players).map((playerModel) => {
            return new Player(this, playerModel)
        }))
        this.player = this.players.children.getArray()
            .find((player: Player) => player.id === this.client.id) as Player

        this.settingCamera()
        this.createBackground()
        this.playerControl = new PlayerControl(this, this.player)
        this.mainControl = new MainControl(this)
    }


    public settingCamera(): void {
        this.mainCameraZoom = 0.5
        this.freeCamera = false
        this.cameras.main.setZoom(this.mainCameraZoom)
        this.cameras.main.setBounds(0, 0, Config.world.width, Config.world.height)
        this.physics.world.setBounds(
            0, 0,
            Config.world.width,
            Config.world.height - Config.hud.height - Config.player.size / 2)
        this.cameras.main.startFollow(this.player, true)
    }


    public createBackground(): void {
        this.backgroundImage = this.add.image(0, 0, 'backgroundGalaxy3')
            .setScrollFactor(Config.world.paralaxScrollFactor, Config.world.paralaxScrollFactor)
            .setDisplaySize(
                this.cameras.main.displayWidth + Config.world.width * Config.world.paralaxScrollFactor,
                this.cameras.main.displayHeight + Config.world.height * Config.world.paralaxScrollFactor,
            )
            .setOrigin(0.23, 0.23)
            .setAlpha(0.7)
            .setDepth(-1)
    }


    public createConsumables(): void {
        this.consumables = this.physics.add.staticGroup()
        this.consumables.addMultiple(this.randomTable.spawn(this))
    }


    public registerEvent(): void {
        this.game.events.on(Event.playerJoined, (playerModel: PlayerModel) => {
            const otherPlayer = new Player(this, playerModel)
            this.players.add(otherPlayer)
        })

        this.game.events.on(Event.playerQuit, (playerId: string) => {
            this.players.getChildren().forEach((player: Player) => {
                if (playerId === player.id) {
                    player.destroy()
                }
            })
        })

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
                    playerAction.pointerPosition.x, playerAction.pointerPosition.y
                )
                this.player.action(playerAction.action, pointerVector)
            }
        })
    }


    public syncHealth(player: Player): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.playerHealthChanged)
        }
    }

    public syncAbilitiesCooldown(player: Player, selectedAbilityKey: string, actionTime: ActionTimeInterface): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.abilitiesCooldownChanged, selectedAbilityKey, actionTime)
        }
    }

    public syncSelectedAbility(player: Player, selectedAbilityKey: string, selected: boolean): void {
        if (player.id === this.player.id) {
            this.events.emit(Event.abilitiesSelectedChanged, selectedAbilityKey, selected)
        }
    }

    public syncWeaponCooldown(player: Player, selectedWeaponKey: string, actionTime: ActionTimeInterface): void {
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
                callback: () => this.playerControl.active = true,
                callbackScope: this
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
            y: pointerFromWorld.y
        }
    }


    public handlePlayerPlayerCollide(player1: Player, player2: Player): void {
        player2.body.velocity.scale(-1)
        player2.hit(Config.player.toOtherDamage)
    }

    public handleEnemyProjectileCollide(
        hittedPlayer: Player,
        projectile: Phaser.GameObjects.Sprite & ProjectileInterface)
        : void {
        if (hittedPlayer.id !== projectile.fromPlayerId) {
            projectile.actionOnCollision(hittedPlayer)
        }
    }

    public handlePlayerConsumableOverlap(
        consumable: Phaser.GameObjects.Sprite & Consumable,
        player: Player,
    ): void {
        consumable.action(player)
        consumable.randomPosition()
        switch (consumable.name) {
            case 'pill':
                this.syncHealth(player)
                this.player.healthBar.refresh(this.player.health)
                break
        }
    }

    public playersAIUpdate(): void {
        for (const playerAI of this.playersAI) {
            playerAI.update()
        }
    }

    public getDiffGameState(): GameStateUpdated {
        const playerChanged = updatedDiff(this.playerBefore, this.playerAfter)
        const updateGameState: GameStateUpdated = {}
        if (Object.keys(playerChanged).length > 0) {
            updateGameState.players = {
                [this.player.id]: playerChanged
            }
        }
        return updateGameState
    }
    
    public update(time: number, delta: number): void {
        this.playerAfter = this.player.getChanged()
        this.mainControl.update()
        this.playerControl.update()

        // this.playersAIUpdate()

        // collide with other players
        this.physics.overlap(
            this.players,
            this.players,
            this.handlePlayerPlayerCollide,
            null,
            this
        )

        // collide with projectiles
        this.physics.overlap(
            this.players,
            this.projectiles.getAll(),
            this.handleEnemyProjectileCollide,
            null,
            this
        )

        // draw weapon and skills
        if (this.player.active) {
            this.player.draw()
        }

        // update players
        this.players.getChildren()
            .filter((player: Player) => player.active)
            .forEach((player: Player) => {
                player.update()
            })
        

        this.client.emitGameUpdated(this.getDiffGameState())
        this.playerBefore = this.playerAfter
    }
}
