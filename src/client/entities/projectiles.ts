import { Config } from '~/shared/config'
import { ProjectileName, ProjectileTemplate } from '~/shared/models'
import { GameScene } from '~/client/scenes/gameScene'
import { Projectile } from '~/client/entities/projectile'

export class Projectiles extends Phaser.Physics.Arcade.Group {
    public projectiles: Phaser.Physics.Arcade.Group
    public projectileByIds: Map<string, Projectile>
    public scene: GameScene
    constructor(scene: GameScene) {
        super(scene.physics.world, scene, [], {
            enable: false,
            active: false,
            visible: false,
            classType: Projectile,
        })
        this.scene = scene
        this.projectileByIds = new Map<ProjectileName, Projectile>()

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
        const indexes = [...Array(length).keys()]
        indexes.forEach((index) => {
            const projectileName = `${projectileTemplate.name}-${index}`
            const projectile = new Projectile(this.scene, projectileName, projectileTemplate)
            this.add(projectile)
            projectile.body.enable = false
        })
    }

    public fire(
        projectileGroup: ProjectileName,
        fromPlayerId: string,
        position: Phaser.Math.Vector2,
        rotation?: number
    ): void {
        const projectile: Projectile = this.getChildren().find((projectile: Projectile) => {
            return projectile.active === false && projectile.group === projectileGroup
        }) as Projectile
        projectile.setFromPlayerId(fromPlayerId)
        projectile.fire(position, rotation || 0)
    }
}

export function getProjectileTimeToReachTarget(fromProjectile: ProjectileName, targetDistance: number) {
    const projectileConfig = Config.projectiles[fromProjectile]
    if (Config.projectiles[fromProjectile].speed) {
        return targetDistance / projectileConfig.speed!
    } else {
        return 0
    }
}

export function  getProjectileDistance(fromProjectile: ProjectileName): number {
    const projectileConfig = Config.projectiles[fromProjectile]
    if (projectileConfig.speed) {
        return projectileConfig.speed * projectileConfig.lifespan
    } else {
        return 0
    }
}

export function buildProjectiles(scene: GameScene): Projectiles {
    return new Projectiles(scene)
}
