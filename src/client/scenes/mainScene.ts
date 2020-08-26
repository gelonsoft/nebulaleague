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
        this.mainCameraZoom = 0.8
        this.playersAI = []
        this.players = this.physics.add.group({
            collideWorldBounds: true,
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
        let index = 0
        while (this.players.getLength() < MAX_PLAYER) {
            const x = Phaser.Math.Between(PLAYER_SIZE / 2, WORLD_WIDTH - PLAYER_SIZE / 2)
            const y = Phaser.Math.Between(PLAYER_SIZE / 2, WORLD_HEIGHT - PLAYER_SIZE / 2)
            
            const circle = new Phaser.Geom.Circle(x, y, PLAYER_SIZE / 2)
            let overlaping = false
            this.players.getChildren().forEach((player: Player) => {
                if (circle.contains(player.x, player.y )) {
                    overlaping = true
                }
            })
            
            const playersChildren = this.players.getChildren() as Player[]
            if(!overlaping) {
                const enemy = new Player(this, {
                    id: (index + 1).toString(),
                    x: x,
                    y: y,
                    weaponPrimaryKey: 'laserRed',
                    weaponSecondaryKey: 'laserBlue',
                    abilityKey1: 'blink',
                    abilityKey2: 'flame',
                    abilityKey3: 'blink',
                    abilityKey4: 'blink',
                })
                const enemyAI = new PlayerAI(
                    this,
                    enemy,
                    playersChildren.filter((player) => player.id !== enemy.id),
                    playersAIConfig[index]
                )

                this.players.add(enemy)
                this.playersAI.push(enemyAI)
                index += 1
            }
        }
    }
    

    public createPlayer(): void {
        this.player = new Player(this, {
            id: '0',
            x: 0,
            y: 0,
            weaponPrimaryKey: 'laserRed',
            weaponSecondaryKey: 'laserBlue',
            abilityKey1: 'blink',
            abilityKey2: 'flame',
            abilityKey3: 'blink',
            abilityKey4: 'blink',
        })
        this.registry.values.maxHealth = this.player.maxHealth
        this.registry.values.currentHealth = this.player.maxHealth
        this.events.emit("healthChanged")
        this.players.add(this.player)
    }
    
    public create(): void {
        this.createConsumables()
        this.createProjectiles()
        this.createWeapons()
        this.createAbilities()
        this.createPlayer()
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
    

    public angleToPointer(position: Phaser.Math.Vector2) {
        const pointer = this.input.activePointer
        const transformedPoint = this.cameras.main.getWorldPoint(pointer.x, pointer.y)
        return Phaser.Math.Angle.Between(position.x, position.y, transformedPoint.x, transformedPoint.y,)
    }

    public distanceToPointer(position: Phaser.Math.Vector2) {
        const pointer = this.input.activePointer
        const transformedPoint = this.cameras.main.getWorldPoint(pointer.x, pointer.y)
        return Phaser.Math.Distance.Between(position.x, position.y, transformedPoint.x, transformedPoint.y,)
    }
    

    
    public handlePlayerPlayerCollide(player1: Player , player2: Player): void {
        player1.health -= PLAYER_TO_PLAYER_DAMAGE
        player2.health -= PLAYER_TO_PLAYER_DAMAGE
        this.syncHealth(player1)
        this.syncHealth(player2)
    }


    public handleEnemyProjectileCollide(
        enemy: Player,
        projectile: Phaser.GameObjects.Sprite & ProjectileInterface)
    : void {
        if (enemy.id !== this.player.id) {
            projectile.actionOnCollision(enemy)
            this.syncHealth(enemy)
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
            playerAI.update(delta)
        }
    }
    
    public update(time: number, delta: number): void {
        this.mainControl.update()
        this.playerControl.update()
        // this.playersAIUpdate(delta)
        

        // // collide with other players
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
        
        // check if player are dead
        this.players.getChildren().forEach((player: Player) => {
            if (player.health <= 0) {
                player.reset()
                if (player.id === this.player.id) {
                    this.registry.values.currentHealth = player.health
                }
                this.events.emit("healthChanged")
            }
        })
    }

}
