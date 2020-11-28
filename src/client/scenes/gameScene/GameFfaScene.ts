import { GameScene } from "./GameScene"
import * as _ from 'lodash'
import { diff } from 'deep-object-diff'
import { Config } from '~/shared/config'
import {
    Position,
    PlayerModel,
    PlayerAction,
    PlayerConfig,
    PlayerChanged,
    ProjectileChanged,
    GameStateChanged,
    ActionKey,
} from '~/shared/models'
import { Event } from '~/shared/events'
import { PlayerAI } from '~/client/ai/playerAI'
import { Player, ActionTimeInterface } from '~/client/entities/player'
import { MainControl, PlayerControl } from '~/client/controls'
import { Consumable, RandomItem } from '~/client/entities/consumables'
import { Projectiles, Projectile } from '~/client/entities/projectiles'
import { Weapon, buildWeapons } from '~/client/entities/weapons'
import { buildAbilities, Ability } from '~/client/entities/abilities'



export class GameFfaScene extends GameScene {
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
    public playerPrevious: PlayerChanged
    public playerCurrent: PlayerChanged
    public projectilesPrevious: Record<string, ProjectileChanged>
    public projectilesCurrent: Record<string, ProjectileChanged>


    constructor() {
        super('gameFfaScene')
    }


    public init(): void {
        super.init()
        
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
        
        this.randomTable = new RandomItem()
        this.randomTable.add('pill', 20)
        this.input.setDefaultCursor('url(assets/cursors/cursor.cur), pointer')
        this.registerEvent()

      

        this.playerPrevious = {}
        this.playerCurrent = {}
        this.projectilesPrevious = {}
        this.projectilesCurrent = {}
    }

    public create(): void {
        super.create()
        this.playersAI = []
        this.createBackground()
    }


    public update(): void {
        this.playerCurrent = this.player.getChanged()
        for (const name of _.keys(this.projectilesCurrent)) {
            this.projectilesCurrent[name] = this.projectiles.projectileByIds.get(name)!.getChanged()
        }

        this.mainControl.update()
        this.playerControl.update()

        this.playersAIUpdate()

        // collide with other players
        this.physics.overlap(this.players, this.players, this.handlePlayerPlayerCollide)

        // collide with projectiles
        this.physics.overlap(
            this.players,
            this.projectiles.getAll(),
            this.handleEnemyProjectileCollide,
        )

        // draw weapon and skills
        if (this.player.active) {
            this.player.draw()
        }

        // update players
        this.players
            .getChildren()
            .filter((player: Player) => player.active)
            .forEach((player: Player) => {
                player.update()
            })

        this.client.gameStateUpdatedCurrent = this.getDiffGameState()
        this.client.emitGameUpdated()

        this.playerPrevious = this.playerCurrent
        this.projectilesPrevious = _.clone(this.projectilesCurrent)
    }   

    
    public createBackground(): void {
        this.backgroundImage = this.add
            .image(0, 0, 'backgroundGalaxy3')
            .setScrollFactor(Config.world.paralaxScrollFactor, Config.world.paralaxScrollFactor)
            .setDisplaySize(
                this.cameras.main.displayWidth + Config.world.width * Config.world.paralaxScrollFactor,
                this.cameras.main.displayHeight + Config.world.height * Config.world.paralaxScrollFactor
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
                    playerAction.pointerPosition!.x,
                    playerAction.pointerPosition!.y
                )
                this.player.action(playerAction.action, pointerVector)
            }
        })

        this.game.events.on(Event.ProjectileFired, (projectile: Projectile) => {
            this.projectilesCurrent[projectile.name] = projectile.getChanged()
        })

        this.game.events.on(Event.ProjectileKilled, (projectile: Projectile) => {
            delete this.projectilesCurrent[projectile.name]
        })

        this.game.events.on(Event.gameUpdated, () => {
            const gameStateReceived = this.client.gameStateChangedReceived

            if (gameStateReceived.updated !== undefined) {
                if (gameStateReceived.updated.players !== undefined) {
                    for (const [playerIdChanged, playerChanged] of Object.entries(
                        gameStateReceived.updated.players
                    )) {
                        const player = this.players
                            .getChildren()
                            .find((player: Player) => player.id === playerIdChanged)
                        Object.assign(player, playerChanged)
                    }
                }

                if (gameStateReceived.updated.projectiles !== undefined) {
                    for (const [projectileIdChanged, projectileChanged] of Object.entries(
                        gameStateReceived.updated.projectiles
                    )) {
                        const projectile = this.projectiles.getProjectile(projectileIdChanged)
                        projectile.visible = true
                        projectile.active = true
                        projectile.body.x = projectileChanged.x!
                        projectile.body.y = projectileChanged.y!
                        Object.assign(projectile, projectileChanged)
                    }
                }
            }
        })
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

    public handlePlayerConsumableOverlap(
        consumable: Phaser.GameObjects.Sprite & Consumable,
        player: Player
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

    public getDiffGameState(): GameStateChanged {
        const playerChanged = diff(this.playerPrevious, this.playerCurrent) as Record<string, PlayerChanged>
        const projectilesChanged = diff(this.projectilesPrevious, this.projectilesCurrent) as Record<
            string,
        ProjectileChanged
        >

        const isPlayersChanged = _.keys(playerChanged).length > 0
        const isProjectilesChanged = _.keys(projectilesChanged).length > 0
        const gameStatedUpdated: GameStateChanged = {}

        gameStatedUpdated.updated = {}
        gameStatedUpdated.deleted = {}

        if (isProjectilesChanged) {
            const projectilesUpdated = _.pickBy(projectilesChanged, (value) => value !== undefined)
            const projectilesDeleted = _.keys(_.pickBy(projectilesChanged, (value) => value === undefined))

            if (_.keys(projectilesUpdated).length > 0) {
                gameStatedUpdated.updated.projectiles = projectilesUpdated
            }

            if (projectilesDeleted.length > 0) {
                gameStatedUpdated.deleted.projectiles = projectilesDeleted
            }
        }

        if (isPlayersChanged) {
            gameStatedUpdated.updated.players = {
                [this.player.id]: playerChanged,
            }
        }

        if (_.isEmpty(gameStatedUpdated.updated)) {
            delete gameStatedUpdated.updated
        }
        if (_.isEmpty(gameStatedUpdated.deleted)) {
            delete gameStatedUpdated.deleted
        }

        return gameStatedUpdated
    }
    
}

