import * as Matter from 'matter'
import { Config } from '~/shared/config'
import { Event } from '~/shared/events'
import {
    ProjectileChanged,
    ProjectileName,
    ProjectileTemplate,
    ProjectileDrawingSpriteModel,
    ProjectileDrawingPrimitiveModel,
    ProjectileModel,
    Vector,
} from '~/shared/models'
import { GameScene } from '~/client/scenes/gameScene'
import { Player } from '~/client/entities/player'


export class Projectile extends Phaser.Physics.Matter.Sprite implements ProjectileModel {
    public scene: GameScene
    public body: Matter.BodyType
    public fromPlayerId = 'uknown'
    public hittedPlayerIds: Set<string>
    public tickAfter: number
    public tickTimer: number
    public readonly projectileTemplate: ProjectileTemplate
    public group: ProjectileName

    public constructor(scene: GameScene, name: string, projectileTemplate: ProjectileTemplate) {
        super(scene.matter.world, 0, 0, Config.textureKeys.projectiles, projectileTemplate.drawing.frame)

        this.scene = scene
        this.name = name
        this.projectileTemplate = projectileTemplate
        this.init()
        this.initPhysics()
        this.deactivate()
    }

    public init() {
        this.hittedPlayerIds = new Set()
        this.group = this.projectileTemplate.name
        this.tickAfter = this.projectileTemplate.tickAfter || Config.projectile.defaultTickAfter
        this.tickTimer = 0
        this.setDisplaySize(this.projectileTemplate.radius * 2, this.projectileTemplate.radius * 2)
    }

    public initPhysics() {
        this.setBody({
            type: 'circle',
            radius: this.projectileTemplate.radius,
        })
        this.body.label = this.name
        this.setFriction(0)
        this.setFrictionAir(0)
        this.setFrictionStatic(0)
        this.setCollisionGroup(Config.matter.group.bullet)
        this.setCollidesWith(Config.matter.group.player)
        this.setSensor(true)
    }

    public fire(initialPosition: Phaser.Math.Vector2, initialRotation: number): void {
        if (this.projectileTemplate.triggerAfter) {
            this.scene.tweens.add({
                targets: this,
                alpha: { from: 0.2, to: 1 },
                duration: this.projectileTemplate.triggerAfter * 1000,
                ease: 'Cubic.easeIn',
                onStart: (_tween, _targets, _gameObject) => {
                    this.activate(initialPosition)
                },
                onComplete: (_tween, _targets, _gameObject) => {
                    this.deactivate()
                },
            })
        } else {
            this.activate(initialPosition)
        }

        if (this.projectileTemplate.speed) {
            const ux = Math.cos(initialRotation)
            const uy = Math.sin(initialRotation)
            this.setRotation(initialRotation + Math.PI / 2)
            this.setVelocity(
                ux * this.projectileTemplate.speed * this.scene.game.dt,
                uy * this.projectileTemplate.speed * this.scene.game.dt
            )
        }

        this.scene.time.addEvent({
            delay: this.projectileTemplate.lifespan * 1000,
            callback: () => this.deactivate(),
            callbackScope: this,
        })
        this.scene.game.events.emit(Event.ProjectileFired, this)
    }

    public actionOnCollision(hittedPlayer: Player): void {
        switch (this.projectileTemplate.collidingBehaviour) {
            case 'kill':
                hittedPlayer.hit(this.projectileTemplate.damage, this.projectileTemplate.effects)
                this.deactivate()
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

    public activate(position: Vector): void {
        this.tickTimer = this.tickAfter
        this.setPosition(position.x, position.y)
        this.setActive(true)
        this.setVisible(true)
        this.world.add(this.body)
    }

    public deactivate(): void {
        this.setActive(false)
        this.setVisible(false)
        this.world.remove(this.body)
    }

    public setFromPlayerId(fromPlayerId: string): void {
        this.fromPlayerId = fromPlayerId
    }

    public getChanged(): ProjectileChanged {
        return {
            x: this.x,
            y: this.y,
        }
    }
}
