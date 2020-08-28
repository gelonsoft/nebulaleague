import { Player, ActionTimeInterface, SelectedWeapon } from '../player'
import { MainControl, PlayerControl } from '../controls'
import { Consumable, RandomItem } from '../entities/consumables'
import { Projectiles, ProjectileInterface } from '../entities/projectiles'
import {
    WORLD_WIDTH,
    WORLD_HEIGHT,
    PLAYER_TO_PLAYER_DAMAGE,
    PLAYER_SIZE,
    MAX_PLAYER,
    HUD_HEIGHT,
    PARALAX_SCROLL_FACTOR,

} from '../config'
import { PlayerAI } from '../ai'
import { MyGame } from '../phaserEngine'
import { playersAIConfig }  from '../playersAI'
import { Weapon, buildWeapons } from '../entities/weapons'
import { buildAbilities, Ability } from '../entities/abilities'


export class MainScene extends Phaser.Scene {
    public game: MyGame
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

    constructor() {
        super({
            key: "mainScene"
        })

    }

    public init(): void {
        if (this.game.debug) {
            window['m'] = this
        }

        window.addEventListener('resize', () => {
            this.game.scale.resize(window.innerWidth, window.innerHeight)
        })
        this.mainCameraZoom = 0.6
        this.playersAI = []
        this.players = this.physics.add.group({
            collideWorldBounds: true,
            classType: Player,
        })
        this.freeCamera = false
        this.randomTable = new RandomItem()
        this.randomTable
            .add('pill', 20)
        this.input.setDefaultCursor('url(assets/cursors/cursor.cur), pointer')
    }


    
    public settingCamera(): void {
        this.cameras.main.setZoom(this.mainCameraZoom)
        this.cameras.main.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT )
        this.physics.world.setBounds(0, 0, WORLD_WIDTH , WORLD_HEIGHT - HUD_HEIGHT - this.player.displayHeight / 2)
        this.cameras.main.startFollow(this.player, true)
    }



    public createBackground() :void {
        this.add.image(
            this.cameras.main.width - this.cameras.main.displayWidth,
            this.cameras.main.height - this.cameras.main.displayHeight,
            'backgroundGalaxy3'
        )
            .setScrollFactor(PARALAX_SCROLL_FACTOR, PARALAX_SCROLL_FACTOR)
            .setOrigin(0, 0)
            .setDisplaySize(
                this.cameras.main.displayWidth * 1 / this.mainCameraZoom + WORLD_WIDTH * PARALAX_SCROLL_FACTOR,
                this.cameras.main.displayHeight * 1 / this.mainCameraZoom + WORLD_HEIGHT * PARALAX_SCROLL_FACTOR,
            )
            .setAlpha(0.4)
    }
    

    public createConsumables() :void {
        this.consumables = this.physics.add.staticGroup()
        this.consumables.addMultiple(this.randomTable.spawn(this))
    }


    public createProjectiles() :void {
        this.projectiles = new Projectiles(this)
    }

    public createWeapons() :void {
        this.weapons = buildWeapons(this)
    }

    public createAbilities() :void {
        this.abilities = buildAbilities(this)
    }
    

    public createPlayers(): void {
        // should recieve something in parametres to choosee between mainPlayer Otherplayers and AIPlayiers
        const mainPlayerConfig = {
            id: 'mainPlayer',
            x: 0,
            y: 0,
            weaponPrimaryKey: 'pistol',
            weaponSecondaryKey: 'thompson',
            abilityKey1: 'blink',
            abilityKey2: 'chargedArrow',
            abilityKey3: 'rootTip',
            abilityKey4: 'flame',
        }
        this.createPlayer(mainPlayerConfig, 'mainPlayer')

        // create ai players
        let index = 0
        while (this.players.getLength() < MAX_PLAYER) {
            const playerAIConfig = playersAIConfig[index]
            const x = Phaser.Math.Between(PLAYER_SIZE / 2, WORLD_WIDTH - PLAYER_SIZE / 2)
            const y = Phaser.Math.Between(PLAYER_SIZE / 2, WORLD_HEIGHT - PLAYER_SIZE / 2)
            
            const circle = new Phaser.Geom.Circle(x, y, PLAYER_SIZE / 2)
            let overlaping = false
            this.players.getChildren().forEach((player: Player) => {
                if (circle.contains(player.x, player.y )) {
                    overlaping = true
                }
            })
            
            if(!overlaping) {
                const playerConfig = {
                    id: playerAIConfig.id,
                    x: x,
                    y: y,
                    weaponPrimaryKey: playerAIConfig.weaponPrimaryKey,
                    weaponSecondaryKey: playerAIConfig.weaponSecondaryKey,
                    abilityKey1: playerAIConfig.abilityKey1,
                    abilityKey2: playerAIConfig.abilityKey2,
                    abilityKey3: playerAIConfig.abilityKey3,
                    abilityKey4: playerAIConfig.abilityKey4,
                }
                this.createPlayer(playerConfig, 'aiPlayer', playerAIConfig)
                index += 1
            }
        }
        const pt: Player = this.players.getChildren()[1] as Player
        pt.x = 500
        pt.y = 500
    }
    

    public createPlayer(playerConfig, associateBehavior: string, playerConfigAI?: any): void {
        const newPlayer = new Player(this, playerConfig)
        if (associateBehavior === 'mainPlayer') {
            this.player = newPlayer
            this.players.add(newPlayer)
            window['p'] = newPlayer
        }
        else if (associateBehavior === 'otherPlayer') {
            this.players.add(newPlayer)
        }
        else if (associateBehavior === 'aiPlayer') {
            const playersChildren = this.players.getChildren() as Player[]
            
            this.players.add(newPlayer)
            const playerAI = new PlayerAI(
                this,
                newPlayer,
                playersChildren.filter((player) => player.id !== newPlayer.id),
                playerConfigAI
            )
            this.playersAI.push(playerAI)
        }
    }

    
    
    public create(): void {
        this.createConsumables()
        this.createProjectiles()
        this.createWeapons()
        this.createAbilities()
        this.createPlayers()
        this.settingCamera()
        this.createBackground()
        this.playerControl = new PlayerControl(this, this.player)
        this.mainControl = new MainControl(this)

        if (this.game.debug) {
            window['m'] = this
        }
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

    public syncWeaponCooldown(player: Player, selectedWeapon: SelectedWeapon, actionTime: ActionTimeInterface): void {
        if (player.id === this.player.id) {
            this.events.emit("weaponsCooldownChanged", selectedWeapon, actionTime)
        }
    }

    public syncSelectedWeapon(player: Player, selected: boolean): void {
        if (player.id === this.player.id) {
            this.events.emit('weaponSelectedChanged',  selected)
        }
    }
    
    get pointerPosition(): Phaser.Math.Vector2 {
        const pointer = this.input.activePointer
        return this.cameras.main.getWorldPoint(pointer.x, pointer.y)
    }
    
    public handlePlayerPlayerCollide(player1: Player , player2: Player): void {
        player1.health -= PLAYER_TO_PLAYER_DAMAGE
        player2.health -= PLAYER_TO_PLAYER_DAMAGE
        this.syncHealth(player1)
        this.syncHealth(player2)
    }

    public handleEnemyProjectileCollide(
        hittedPlayer: Player,
        projectile: Phaser.GameObjects.Sprite & ProjectileInterface)
    : void {
        if (hittedPlayer.id !== projectile.fromPlayerId) {
            projectile.actionOnCollision(hittedPlayer)
            this.syncHealth(hittedPlayer)
        }
    }

    public handlePlayerConsumableOverlap(
        consumable: Phaser.GameObjects.Sprite & Consumable,
        player: Player,
    ): void {
        consumable.action(player)
        consumable.randomPosition()
        switch(consumable.name) {
            case 'pill':
                this.syncHealth(player)
                break
        }
    }

    public playersAIUpdate(delta: number): void {
        for(const playerAI of this.playersAI) {
            // playerAI.update(delta)
        }
    }
    
    public update(time: number, delta: number): void {
        this.mainControl.update()
        this.playerControl.update()
        this.playersAIUpdate(delta)
        
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
        
        // collide with consumables
        this.physics.overlap(
            this.consumables,
            this.players,
            this.handlePlayerConsumableOverlap,
            null,
            this
        )
        
        // draw weapon and skills        
        this.player.draw()
        
        // update players
        this.players.getChildren().forEach((player: Player) => {
            player.update(delta)
        })
    }

}
