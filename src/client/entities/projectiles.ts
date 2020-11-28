import { Config } from '~/shared/config'
import { Event } from '~/shared/events'
import {
    ProjectileChanged,
    ProjectileName,
    ProjectileTemplate,
    ProjectileDrawingSpriteModel,
    ProjectileDrawingPrimitiveModel,
} from '~/shared/models'
import { GameScene } from '~/client/scenes/gameScene'
import { Player } from '~/client/entities/player'

type ProjectileDrawing = ProjectileDrawingSprite | ProjectileDrawingPrimitive

export class Projectile extends Phaser.GameObjects.Container {
    public scene: GameScene
    public name: string
    public fromPlayerId = 'uknown'
    public hittedPlayerIds: Set<string>
    public tickAfter: number
    public tickTimer: number
    public readonly projectileTemplate: ProjectileTemplate
    public drawing: ProjectileDrawing
    public body: Phaser.Physics.Arcade.Body

    public constructor(scene: GameScene, name: string, projectileTemplate: ProjectileTemplate) {
        super(scene)
        this.scene = scene
        this.name = name
        this.projectileTemplate = projectileTemplate
        this.tickAfter = projectileTemplate.tickAfter || Config.projectile.defaultTickAfter
        this.tickTimer = 0
        this.initPhysics()
        this.initDrawing()
        this.scene.add.existing(this)
    }

    public initPhysics() {
        this.scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
        this.body.setCircle(
            this.projectileTemplate.radius,
            -this.projectileTemplate.radius,
            -this.projectileTemplate.radius
        )
        this.deactivate()
    }

    public initDrawing(): void {
        switch (this.projectileTemplate.drawing.type) {
            case 'sprite':
                this.drawing = new ProjectileDrawingSprite(
                    this.scene,
                    (this.projectileTemplate.drawing as unknown) as ProjectileDrawingSpriteModel
                )

                break
            case 'primitive':
                this.drawing = new ProjectileDrawingPrimitive(
                    this.scene,
                    (this.projectileTemplate.drawing as unknown) as ProjectileDrawingPrimitiveModel
                )
                break
        }
        this.add(this.drawing)
    }

    public fire(initialPosition: Phaser.Math.Vector2, initialRotation: number): void {
        if (this.projectileTemplate.triggerAfter) {
            this.scene.tweens.add({
                targets: this,
                alpha: { from: 0.2, to: 1 },
                duration: this.projectileTemplate.triggerAfter * 1000,
                ease: 'Cubic.easeIn',
                onStart: (_tween, _targets, _gameObject) => {
                    this.body.setEnable(true)
                    this.body.reset(initialPosition.x, initialPosition.y)
                    this.activate()
                },
                onComplete: (_tween, _targets, _gameObject) => {
                    this.body.setEnable(false)
                },
            })
        } else {
            this.body.reset(initialPosition.x, initialPosition.y)
            this.activate()
        }

        if (this.projectileTemplate.speed) {
            const ux = Math.cos(initialRotation)
            const uy = Math.sin(initialRotation)
            this.setRotation(initialRotation + Math.PI / 2)
            this.body.velocity.x = ux * this.projectileTemplate.speed
            this.body.velocity.y = uy * this.projectileTemplate.speed
        }

        this.scene.time.addEvent({
            delay: this.projectileTemplate.lifespan * 1000,
            callback: () => this.kill(),
            callbackScope: this,
        })
        this.scene.game.events.emit(Event.ProjectileFired, this)
    }

    public actionOnCollision(hittedPlayer: Player): void {
        switch (this.projectileTemplate.collidingBehaviour) {
            case 'kill':
                hittedPlayer.hit(this.projectileTemplate.damage, this.projectileTemplate.effects)
                this.kill()
                break
            case 'single':
                if (!this.hittedPlayerIds.has(hittedPlayer.id)) {
                    hittedPlayer.hit(this.projectileTemplate.damage, this.projectileTemplate.effects)
                    this.hittedPlayerIds.add(hittedPlayer.id)
                }
                break
            case 'multiple':
                this.tickTimer += this.scene.game.loop.delta / 1000
                if (this.tickTimer >= this.tickAfter) {
                    this.tickTimer = 0
                    hittedPlayer.hit(this.projectileTemplate.damage, this.projectileTemplate.effects)
                }
                break
        }
    }

    public activate(): void {
        this.tickTimer = this.tickAfter
        this.setActive(true)
        this.setVisible(true)
        this.body.setEnable(true)
    }

    public deactivate(): void {
        this.setActive(false)
        this.setVisible(false)
        this.body.setEnable(false)
        this.body.reset(-10000, -10000)
    }

    public kill(): void {
        this.deactivate()
        this.scene.game.events.emit(Event.ProjectileKilled, this)
    }

    public setFromPlayerId(fromPlayerId: string): void {
        this.fromPlayerId = fromPlayerId
    }

    public getChanged(): ProjectileChanged {
        return {
            x: this.body.center.x,
            y: this.body.center.y,
        }
    }
}

export class ProjectileDrawingSprite extends Phaser.GameObjects.Sprite {
    public constructor(scene: GameScene, ProjectileDrawingSprite: ProjectileDrawingSpriteModel) {
        super(scene, 0, 0, 'atlas', ProjectileDrawingSprite.frame)
        this.setSize(ProjectileDrawingSprite.radius * 2, ProjectileDrawingSprite.radius * 2)
        this.setDisplaySize(ProjectileDrawingSprite.radius * 2, ProjectileDrawingSprite.radius * 2)
    }
}

export class ProjectileDrawingPrimitive extends Phaser.GameObjects.Graphics {
    public constructor(scene: GameScene, ProjectileDrawingPrimitive: ProjectileDrawingPrimitiveModel) {
        super(scene)
        this.fillStyle(ProjectileDrawingPrimitive.fillColor, ProjectileDrawingPrimitive.fillAlpha)
        this.fillCircle(0, 0, ProjectileDrawingPrimitive.radius)
        this.lineStyle(2, ProjectileDrawingPrimitive.strokeColor, ProjectileDrawingPrimitive.strokeAlpha)
        this.strokeCircle(0, 0, ProjectileDrawingPrimitive.radius)
    }
}

export class Projectiles {
    public projectiles: Map<string, Phaser.Physics.Arcade.Group>
    public projectileByIds: Map<string, Projectile>
    public scene: GameScene
    constructor(scene: GameScene) {
        this.projectiles = new Map<ProjectileName, Phaser.Physics.Arcade.Group>()
        this.projectileByIds = new Map<ProjectileName, Projectile>()
        this.scene = scene

        this.addProjectile(Config.projectiles.pistolBullet, 100)
        this.addProjectile(Config.projectiles.ak47Bullet, 100)
        this.addProjectile(Config.projectiles.p90Bullet, 100)
        this.addProjectile(Config.projectiles.revolverBullet, 100)
        this.addProjectile(Config.projectiles.thompsonBullet, 100)
        this.addProjectile(Config.projectiles.chargedArrowProjectile, 20)
        this.addProjectile(Config.projectiles.flameProjectile, 20)
        this.addProjectile(Config.projectiles.rootTipProjectile, 20)
        this.addProjectile(Config.projectiles.frozenWaveProjectile, 40)
        this.addProjectile(Config.projectiles.psychicWaveProjectile, 40)
        this.addProjectile(Config.projectiles.lightningWaveProjectile, 40)
        this.addProjectile(Config.projectiles.fireWaveProjectile, 40)
    }

    public addProjectile(projectileTemplate: ProjectileTemplate, length: number): void {
        const group = new Phaser.Physics.Arcade.Group(this.scene.physics.world, this.scene)

        const indexes = [...Array(length).keys()]
        indexes.forEach((index) => {
            const projectileName = `${projectileTemplate.name}-${index}`
            const projectile = new Projectile(this.scene, projectileName, projectileTemplate)
            group.add(projectile)
        })
        this.projectiles.set(projectileTemplate.name, group)
    }

    public static getTimeToReachTarget(fromProjectilesGroup: ProjectileName, targetDistance: number) {
        if (Config.projectiles[fromProjectilesGroup].speed) {
            return targetDistance / Config.projectiles[fromProjectilesGroup].speed!
        } else {
            return 0
        }
    }

    public static getDistance(fromProjectilesGroup: ProjectileName): number {
        const projectileConfig = Config.projectiles[fromProjectilesGroup]
        if(projectileConfig.speed) {
            return projectileConfig.speed * projectileConfig.lifespan
        } else {
            return 0
        }
    }

    public getProjectile(projectileNameModel: string): Projectile {
        const projectileNameGroup = projectileNameModel.split('-')[0]
        this.projectiles
        const projectile = this.projectiles
            .get(projectileNameGroup)!
            .getChildren()
            .find((projectile: Projectile) => projectile.name === projectileNameModel) as Projectile

        return projectile
    }

    public fire(
        fromProjectilesGroup: string,
        fromPlayerId: string,
        position: Phaser.Math.Vector2,
        rotation?: number
    ): void {
        const projectileGroup = this.projectiles.get(fromProjectilesGroup)!
        const projectile = projectileGroup.getFirstDead() as Projectile
        projectile.setFromPlayerId(fromPlayerId)
        this.projectileByIds.set(projectile.name, projectile)
        projectile.fire(position, rotation || 0)
    }

    public getAll(): Array<Phaser.Physics.Arcade.Group> {
        return Array.from(this.projectiles.values())
    }
}
