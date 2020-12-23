import { Config } from '~/shared/config'
import { Event } from '~/shared/events'
import {
    ProjectileChanged,
    ProjectileName,
    ProjectileTemplate,
    ProjectileDrawingSpriteModel,
    ProjectileDrawingPrimitiveModel,
    ProjectileModel,
} from '~/shared/models'
import { GameScene } from '~/client/scenes/gameScene'
import { Player } from '~/client/entities/player'

type ProjectileDrawing = ProjectileDrawingSprite | ProjectileDrawingPrimitive

export class Projectile extends Phaser.Physics.Matter.Sprite implements ProjectileModel {
    public scene: GameScene
    public name: string
    public fromPlayerId = 'uknown'
    public hittedPlayerIds: Set<string>
    public tickAfter: number
    public tickTimer: number
    public readonly projectileTemplate: ProjectileTemplate
    public drawing: ProjectileDrawing
    public body: Phaser.Physics.Arcade.Body
    public group: ProjectileName

    public constructor(scene: GameScene, name: string, projectileTemplate: ProjectileTemplate) {
        super(
            scene.matter.world,
            0,
            0,
            Config.textureKeys.projectiles,
            projectileTemplate.drawing.frame,
        )

        this.scene = scene
        this.name = name
        this.hittedPlayerIds = new Set()
        this.projectileTemplate = projectileTemplate
        this.group = projectileTemplate.name
        this.tickAfter = projectileTemplate.tickAfter || Config.projectile.defaultTickAfter
        this.tickTimer = 0
        
        this.setDisplaySize(projectileTemplate.radius * 2, projectileTemplate.radius * 2)
        this.setBody({
            type: 'circle',
            radius: projectileTemplate.radius,
        })
        this.deactivate()
    }


    public fire(initialPosition: Phaser.Math.Vector2, initialRotation: number): void {
        if (this.projectileTemplate.triggerAfter) {
            this.scene.tweens.add({
                targets: this,
                alpha: { from: 0.2, to: 1 },
                duration: this.projectileTemplate.triggerAfter * 1000,
                ease: 'Cubic.easeIn',
                onStart: (_tween, _targets, _gameObject) => {
                    this.setPosition(initialPosition.x, initialPosition.y)
                    this.activate()
                },
                onComplete: (_tween, _targets, _gameObject) => {
                    this.deactivate()
                },
            })
        } else {
            this.setPosition(initialPosition.x, initialPosition.y)
            this.activate()
        }

        if (this.projectileTemplate.speed) {
            const ux = Math.cos(initialRotation)
            const uy = Math.sin(initialRotation)
            this.setRotation(initialRotation + Math.PI / 2)
            this.setVelocity(
                ux * this.projectileTemplate.speed * this.scene.game.dt,
                uy * this.projectileTemplate.speed * this.scene.game.dt,
            )
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
        this.world.add(this.body)
        this.setFriction(0)
        this.setFrictionAir(0)
        this.setFrictionStatic(0)
        this.setSensor(true)
    }

    public deactivate(): void {
        this.setActive(false)
        this.setVisible(false)
        this.world.remove(this.body)
        // this.setPosition(200, 200)
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

class ProjectileDrawingSprite extends Phaser.GameObjects.Sprite {
    public constructor(scene: GameScene, ProjectileDrawingSprite: ProjectileDrawingSpriteModel) {
        super(scene, 0, 0, ProjectileDrawingSprite.texture, ProjectileDrawingSprite.frame)
        this.setSize(ProjectileDrawingSprite.radius * 2, ProjectileDrawingSprite.radius * 2)
        this.setDisplaySize(ProjectileDrawingSprite.radius * 2, ProjectileDrawingSprite.radius * 2)
    }
}

class ProjectileDrawingPrimitive extends Phaser.GameObjects.Graphics {
    public constructor(scene: GameScene, ProjectileDrawingPrimitive: ProjectileDrawingPrimitiveModel) {
        super(scene)
        this.fillStyle(ProjectileDrawingPrimitive.fillColor, ProjectileDrawingPrimitive.fillAlpha)
        this.fillCircle(0, 0, ProjectileDrawingPrimitive.radius)
        this.lineStyle(2, ProjectileDrawingPrimitive.strokeColor, ProjectileDrawingPrimitive.strokeAlpha)
        this.strokeCircle(0, 0, ProjectileDrawingPrimitive.radius)
    }
}
