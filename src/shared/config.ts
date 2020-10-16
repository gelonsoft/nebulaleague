import {
    EffectKeys,
    ControlledBy,
    AbilityAction,
    AbilityDrawingStyle,
    WeaponName,
    WeaponModel,
    AbilityName,
    AbilityModel,
    PlayerConfig,
    PlayerModel,
    ProjectileName,
    ProjectileModel,
    ProjectileTemplate,
} from './models'


export class Config {
    private static readonly playerDefaultModel: PlayerModel = {
        name: 'anonymous',
        id: '0',
        x: 0,
        y: 0,
        rotation: 0,
        controlledBy: ControlledBy.MainPlayer,
        selectedAbilityKey: null,
    }
    
    private static readonly playerDefaultConfig: PlayerConfig = {
        name: 'anonymous',
    }
    
    
    public static readonly player = {
        size: 52,
        accelerationSteady: 5000,
        accelerationChange: 1000,
        drag: 400,
        defaultSpeed: 400,
        defaultHealth: 1000,
        toOtherDamage: 100,
        defaultConfig: Config.playerDefaultConfig,
        defaultModel: Config.playerDefaultModel
    }

    public static readonly world = {
        width: 8000,
        height: 8000,
        paralaxScrollFactor: 0.04,
        maxPlayer: 10,
    }

    public static readonly healthBar = {
        colorBackground: 0xffffff,
        colorLow: 0xff0000,
        colorMedium: 0xffa500,
        colorHigh: 0x00ff00,
    }

    public static readonly hud = {
        height: 60,
        padding: 4,
        paddingInner: 2,
        background: 0x1313a8,
        backgroundItem: 0x000000,
        slotColorSelected: 0x3366e5,
        slotColorUnselected: 0x5577d5,
    }

    public static readonly consumable = {
        width: 30,
        height: 30,
    }

    public static readonly effect = {
        toFrameName: {
            slowed: 'snail.png',
            fastenned: 'running-shoe.png',
            paralyzed: 'stone-block.png',
            stunned: 'brain-freeze.png',
            burned: 'flame.png',
            freezed: 'frozen-block.png',
        }
    }

    public static readonly weapons: Record<WeaponName, WeaponModel> = {
        pistol: {
            name: 'pistol',
            frame: 'pistol-gun.png',
            cooldownDelay: 0.7,
            projectileKey: 'pistolBullet',
            laser: {
                color: 0xff5252,
                width: 3,
                alpha: 0.9,
            }
        },
        ak47: {
            name: 'ak47',
            frame: 'ak47.png',
            cooldownDelay: 0.5,
            projectileKey: 'ak47Bullet',
            laser: {
                color: 0x00f8f8,
                width: 3,
                alpha: 0.9,
            }
        },
        p90: {
            name: 'p90',
            frame: 'p90.png',
            cooldownDelay: 0.2,
            projectileKey: 'p90Bullet',
            laser: {
                color: 0x00ff00,
                width: 3,
                alpha: 0.9,
            }
        },
        revolver: {
            name: 'revolver',
            frame: 'revolver.png',
            cooldownDelay: 0.2,
            projectileKey: 'revolverBullet',
            laser: {
                color: 0x00ff00,
                width: 3,
                alpha: 0.9,
            }
        },
        thompson: {
            name: 'thompson',
            frame: 'thompson-m1928.png',
            cooldownDelay: 5,
            projectileKey: 'thompsonBullet',
            laser: {
                color: 0x0000ff,
                width: 3,
                alpha: 0.9,
            }
        }
    }

    public static readonly abilities: Record<AbilityName, AbilityModel> = {
        blink: {
            name: 'blink',
            frame: 'teleport.png',
            action: AbilityAction.Blink,
            drawingStyle: AbilityDrawingStyle.Zone,
            cooldownDelay: 10,
            rangeDistance: 500,
            radiusDistance: 30,
            triggerAfter: 0.05,
        },
        flame: {
            name: 'flame',
            frame: 'fire-zone.png',
            action: AbilityAction.Projectile,
            projectileKey: 'flameProjectile',
            drawingStyle: AbilityDrawingStyle.Zone,
            cooldownDelay: 20,
            rangeDistance: 420,
            radiusDistance: 60,
        },
        rootTip: {
            name: 'rootTip',
            frame: 'root-tip.png',
            projectileKey: 'rootTipProjectile',
            action: AbilityAction.Projectile,
            drawingStyle: AbilityDrawingStyle.Zone,
            cooldownDelay: 15,
            rangeDistance: 450,
            radiusDistance: 60,
        },
        chargedArrow: {
            name: 'chargedArrow',
            frame: 'charged-arrow.png',
            action: AbilityAction.ProjectileWithRotation,
            projectileKey: 'chargedArrowProjectile',
            drawingStyle: AbilityDrawingStyle.Ray,
            cooldownDelay: 10,
        },
        frozenWave: {
            name: 'frozenWave',
            frame: 'frozen-body.png',
            action: AbilityAction.Projectile,
            projectileKey: 'frozenWaveProjectile',
            drawingStyle: AbilityDrawingStyle.Zone,
            cooldownDelay: 5,
            radiusDistanceAlpha: 0.4,
            radiusDistance: 320,
        },
        psychicWave: {
            name: 'psychicWave',
            frame: 'psychic-waves.png',
            action: AbilityAction.Projectile,
            projectileKey: 'psychicWaveProjectile',
            drawingStyle: AbilityDrawingStyle.Zone,
            cooldownDelay: 10,
            radiusDistanceAlpha: 0.4,
            radiusDistance: 230,
        },
        lightningWave: {
            name: 'lightningWave',
            frame: 'lightning-shout.png',
            action: AbilityAction.Projectile,
            projectileKey: 'lightningWaveProjectile',
            drawingStyle: AbilityDrawingStyle.Zone,
            cooldownDelay: 8,
            radiusDistanceAlpha: 0.4,
            radiusDistance: 260,
        },
        fireWave: {
            name: 'fireWave',
            frame: 'fire-wave.png',
            action: AbilityAction.Projectile,
            projectileKey: 'fireWaveProjectile',
            drawingStyle: AbilityDrawingStyle.Zone,
            cooldownDelay: 3,
            radiusDistanceAlpha: 0.4,
            radiusDistance: 240,
        },
    }

    public static readonly projectiles: Record<ProjectileName, ProjectileTemplate> = {
        pistolBullet: {
            name: 'pistolBullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 80,
            speed: 1400,
            lifespan: 0.4,
            radius: 14,
        },
        ak47Bullet: {
            name: 'ak47Bullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 70,
            speed: 1200,
            lifespan: 0.45,
            radius: 14,
        },
        p90Bullet: {
            name: 'p90Bullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 40,
            speed: 1500,
            lifespan: 0.3,
            radius: 14,
        },
        revolverBullet: {
            name: 'revolverBullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 450,
            speed: 100,
            lifespan: 10,
            radius: 16,
        },
        thompsonBullet: {
            name: 'thompsonBullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 200,
            speed: 1700,
            lifespan: 0.45,
            radius: 18,
        },
        chargedArrowProjectile: {
            name: 'chargedArrowProjectile',
            className: 'Bullet',
            frame: 'charged_arrow_bullet.png',
            damage: 80,
            speed: 1200,
            lifespan: 0.5,
            radius: 25,
            effects: [{
                name: EffectKeys.Slow,
                value: 0.8,
                duration: 2,
            }]
        },
        flameProjectile: {
            name: 'flameProjectile',
            className: 'BlockWithTick',
            radius: 50,
            lifespan: 1,
            damage: 25,
            tick: 0.15,
            fillColor: 0xaa0000,
            strokeColor: 0xff0000,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
            effects: [{
                name: EffectKeys.Burn,
                value: 10,
                duration: 3,
                tick: 0.5,
            }]
        },
        rootTipProjectile: {
            name: 'rootTipProjectile',
            className: 'BlockWithDelay',
            radius: 60,
            damage: 30,
            lifespan: 0.6,
            triggerAfter: 0.4,
            fillColor: 0x00aa00,
            strokeColor: 0x00ff00,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
            effects: [{
                name: EffectKeys.Paralyze,
                value: 0.8,
                duration: 3,
            }]
        },
        frozenWaveProjectile: {
            name: 'frozenWaveProjectile',
            className: 'BlockWithDelay',
            radius: 320,
            damage: 10,
            lifespan: 0.6,
            triggerAfter: 0.2,
            fillColor: 0x00aaff,
            strokeColor: 0x00aaff,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
            effects: [{
                name: EffectKeys.Freeze,
                value: 0.8,
                duration: 4,
            }]
        },
        psychicWaveProjectile: {
            name: 'psychicWaveProjectile',
            className: 'BlockWithDelay',
            radius: 230,
            damage: 0,
            lifespan: 0.6,
            triggerAfter: 0.2,
            fillColor: 0x800080,
            strokeColor: 0xa000a0,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
            effects: [{
                name: EffectKeys.Stun,
                value: 0.8,
                duration: 1.5,
            }]
        },
        lightningWaveProjectile: {
            name: 'lightningWaveProjectile',
            className: 'BlockWithDelay',
            radius: 260,
            damage: 10,
            lifespan: 0.6,
            triggerAfter: 0.2,
            fillColor: 0xfdd023,
            strokeColor: 0xfee034,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
            effects: [{
                name: EffectKeys.Paralyze,
                value: 0.8,
                duration: 2.5,
            }]
        },
        fireWaveProjectile: {
            name: 'fireWaveProjectile',
            className: 'BlockWithDelay',
            radius: 240,
            damage: 30,
            lifespan: 0.6,
            triggerAfter: 0.2,
            fillColor: 0xe25822,
            strokeColor: 0xe37a33,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
            effects: [{
                name: EffectKeys.Burn,
                value: 10,
                duration: 1,
                tick: 0.5,
            }]
        }
    }
}
