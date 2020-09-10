import { Player, ActionTimeInterface, PlayerConfig } from '../player'
import { MainControl, PlayerControl } from '../controls'
import { Consumable, RandomItem } from '../entities/consumables'
import { Projectiles, ProjectileInterface } from '../entities/projectiles'
import {
    WORLD_WIDTH,
    WORLD_HEIGHT,
    PLAYER_TO_PLAYER_DAMAGE,
    PLAYER_SIZE,
    HUD_HEIGHT,
    PARALAX_SCROLL_FACTOR,

} from '../config'
import { PlayerAI } from '../ai'
import { MyGame } from '../phaserEngine'
import { playersAIConfig } from '../playersAI'
import { Weapon, buildWeapons } from '../entities/weapons'
import { buildAbilities, Ability } from '../entities/abilities'
import { PlayerEvent, ProjectileEvent } from '../../shared/events.model'
import { PlayerModel, ProjectileModel, PlayerMovement } from '../../shared/models'
import { GameInitConfig, Client } from '../client'


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

    constructor() {
        super({
            key: "mainScene"
        })
    }

    public init(): void {
        window.addEventListener('resize', () => {
            this.backgroundImage.setDisplaySize(
                this.cameras.main.displayWidth + WORLD_WIDTH * PARALAX_SCROLL_FACTOR,
                this.cameras.main.displayHeight + WORLD_HEIGHT * PARALAX_SCROLL_FACTOR,
            )
        }, false)
        this.client = this.game.registry.get('client')
       
        
        this.randomTable = new RandomItem()
        this.randomTable
            .add('pill', 20)
        this.input.setDefaultCursor('url(assets/cursors/cursor.cur), pointer')
        this.registerEvent()

        if (this.game.debug) {
            window['p'] = this.player
            window['m'] = this
        }
        
    }

    public create(gameInitConfig: GameInitConfig): void {
        this.projectiles = new Projectiles(this)
        this.weapons = buildWeapons(this)
        this.abilities = buildAbilities(this)
        this.playersAI = []
        this.players = this.physics.add.group({
            collideWorldBounds: true,
            classType: Player,
        }).addMultiple(gameInitConfig.players.map((playerModel) => {
            return new Player(this, playerModel)
        }))
        this.player = this.players.children.getArray()
            .find((player: Player) => player.id === gameInitConfig.player.id) as Player

        this.settingCamera()
        this.createBackground()
        // this.createConsumables()
        
        this.playerControl = new PlayerControl(this, this.player)
        this.mainControl = new MainControl(this)

    }
    

    public settingCamera(): void {
        this.mainCameraZoom = 0.5
        this.freeCamera = false
        this.cameras.main.setZoom(this.mainCameraZoom)
        this.cameras.main.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT)
        this.physics.world.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT - HUD_HEIGHT - PLAYER_SIZE / 2)
        this.cameras.main.startFollow(this.player, true)
    }


    public createBackground(): void {
        this.backgroundImage = this.add.image(0, 0, 'backgroundGalaxy3')
            .setScrollFactor(PARALAX_SCROLL_FACTOR, PARALAX_SCROLL_FACTOR)
            .setDisplaySize(
                this.cameras.main.displayWidth + WORLD_WIDTH * PARALAX_SCROLL_FACTOR,
                this.cameras.main.displayHeight + WORLD_HEIGHT * PARALAX_SCROLL_FACTOR,
            )
            .setOrigin(0.23, 0.23)
            .setAlpha(0.7)
            .setDepth(-1)
    }


    public createConsumables(): void {
        this.consumables = this.physics.add.staticGroup()
        this.consumables.addMultiple(this.randomTable.spawn(this))
    }


    // public createAIPlayers(): void {
    //     let index = 0
    //     while (this.players.getLength() < MAX_PLAYER) {
    //         const playerAIConfig = playersAIConfig[index]
    //         const playerConfig = {
    //             id: playerAIConfig.id,
    //             name: 'bot',
    //             controlledBy: ControlledBy.AIPlayer,
    //             x: 0,
    //             y: 0,
    //             weaponPrimaryKey: playerAIConfig.weaponPrimaryKey,
    //             weaponSecondaryKey: playerAIConfig.weaponSecondaryKey,
    //             abilityKey1: playerAIConfig.abilityKey1,
    //             abilityKey2: playerAIConfig.abilityKey2,
    //             abilityKey3: playerAIConfig.abilityKey3,
    //             abilityKey4: playerAIConfig.abilityKey4,
    //         }
    //         this.createPlayer(playerConfig, playerAIConfig)
    //         index += 1
    //     }
    //     const pt: Player = this.players.getChildren()[1] as Player
    //     pt.x = 500
    //     pt.y = 500
    // }


    // public createPlayer(playerConfig: PlayerConfig, playerConfigAI?: any): void {
    //     const newPlayer = new Player(this, playerConfig)
    //     this.players.add(newPlayer)
    //     if (playerConfig.controlledBy === ControlledBy.MainPlayer) {
    //         this.player = newPlayer
    //         this.players.add(newPlayer)
    //         window['p'] = newPlayer
    //     }
    //     else if (playerConfig.controlledBy === ControlledBy.AIPlayer) {
    //         const playersChildren = this.players.getChildren() as Player[]

    //         this.players.add(newPlayer)
    //         const playerAI = new PlayerAI(
    //             this,
    //             newPlayer,
    //             playersChildren.filter((player) => player.id !== newPlayer.id),
    //             playerConfigAI
    //         )
    //         this.playersAI.push(playerAI)
    //     }
    // }


    // public initResetPlayersPosition(): void {
    //     this.players.getChildren().forEach((player: Player) => {
    //         player.reset(this.players)
    //     })
    // }


    public registerEvent() :void {
        this.game.events.on(PlayerEvent.joined, (playerModel: PlayerModel) => {
            console.log('joined')
            const otherPlayer = new Player(this, playerModel)
            this.players.add(otherPlayer)
        })

        this.game.events.on(PlayerEvent.quit, (playerId: string) => {
            console.log('quit')
            this.players.getChildren().forEach((player: Player) => {
                if (playerId === player.id) {
                    player.destroy()
                }
            })
        })

        this.game.events.on(PlayerEvent.coordinates, (playerMovement: PlayerMovement) => {
            this.players.children.getArray().filter((player: Player) => {
                if (player.id === playerMovement.id ) {
                    player.x = playerMovement.x
                    player.y = playerMovement.y
                    player.rotation = playerMovement.rotation
                }
            })
        })

        this.game.events.on(ProjectileEvent.fire, (projectileModel: ProjectileModel) => {
            this.projectiles.fire(
                projectileModel.key,
                projectileModel.fromPlayerId,
                new Phaser.Math.Vector2(projectileModel.x, projectileModel.y),
                projectileModel.rotation
            )
        })
    }
    
    
    public syncHealth(player: Player): void {
        if (player.id === this.player.id) {
            this.events.emit("healthChanged")
        }
    }

    public syncAbilitiesCooldown(player: Player, selectedAbilityKey: string, actionTime: ActionTimeInterface): void {
        if (player.id === this.player.id) {
            this.events.emit('abilitiesCooldownChanged', selectedAbilityKey, actionTime)
        }
    }

    public syncSelectedAbility(player: Player, selectedAbilityKey: string, selected: boolean): void {
        if (player.id === this.player.id) {
            this.events.emit('abilitiesSelectedChanged', selectedAbilityKey, selected)
        }
    }

    public syncWeaponCooldown(player: Player, selectedWeaponKey: string, actionTime: ActionTimeInterface): void {
        if (player.id === this.player.id) {
            this.events.emit("weaponsCooldownChanged", selectedWeaponKey, actionTime)
        }
    }

    public syncSelectedWeapon(player: Player, selected: boolean): void {
        if (player.id === this.player.id) {
            this.events.emit('weaponSelectedChanged', selected)
        }
    }

    public syncEffects(player: Player): void {
        if (player.id === this.player.id) {
            this.events.emit('effectsChanged', player.effects)
        }
    }

    public syncDeathTextCooldown(player: Player, cooldown: number): void {
        if (player.id === this.player.id) {
            this.events.emit('deathCooldownChanged', cooldown)
        }
    }
    
    public syncProjectileFire(
        projectileKey: string,
        fromPlayerId: string,
        position: Phaser.Math.Vector2,
        rotation: number
    ): void {
        if (fromPlayerId === this.player.id) {
            this.client.emitProjectileFire({
                key: projectileKey,
                fromPlayerId: fromPlayerId,
                x: position.x,
                y: position.y,
                rotation: rotation,
            })
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

    get pointerPosition(): Phaser.Math.Vector2 {
        const pointer = this.input.activePointer
        return this.cameras.main.getWorldPoint(pointer.x, pointer.y)
    }

    public handlePlayerPlayerCollide(player1: Player, player2: Player): void {
        player2.body.velocity.scale(-1)
        player2.hit(PLAYER_TO_PLAYER_DAMAGE)
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

    public update(time: number, delta: number): void {
        if(this.player) {
            this.mainControl.update()
            this.playerControl.update()
            // this.playersAIUpdate()

            
            this.client.emitPlayerMove({
                id: this.player.id,
                x: this.player.x,
                y: this.player.y,
                rotation: this.player.rotation,
            })

            
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

            // // collide with consumables
            // this.physics.overlap(
            //     this.consumables,
            //     this.players,
            //     this.handlePlayerConsumableOverlap,
            //     null,
            //     this
            // )

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
        }            
    }
}
