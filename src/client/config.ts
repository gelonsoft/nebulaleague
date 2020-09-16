import {
    EffectKeys
} from '../shared/models'

export class Config {
    public static readonly player = {
        size: 52,
        accelerationSteady: 5000,
        accelerationChange: 1000,
        drag: 400,
        defaultSpeed: 400,
        defaultHealth: 1000,
        toOtherDamage: 100,
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
        slotColorUnselected: 0x5577d5 ,
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

    public static readonly projectile = {
        pistolBullet: {
            key: 'pistolBullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 80,
            speed: 1400,
            lifespan: 0.4,
            radius: 14,
        },
        ak47Bullet: {
            key: 'ak47Bullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 70,
            speed: 1200,
            lifespan: 0.45,
            radius: 14,
        },
        p90Bullet: {
            key: 'p90Bullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 40,
            speed: 1500,
            lifespan: 0.3,
            radius: 14,
        },
        revolverBullet: {
            key: 'revolverBullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 450,
            speed: 100,
            lifespan: 10,
            radius: 16,
        },
        thompsonBullet: {
            key: 'thompsonBullet',
            className: 'Bullet',
            frame: 'beams-purple1.png',
            damage: 200,
            speed: 1700,
            lifespan: 0.45,
            radius: 18,
        },
        chargedArrowProjectile: {
            key: 'chargedArrowProjectile',
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
            key: 'flameProjectile',
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
            key: 'rootTipProjectile',
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
            key: 'frozenWaveProjectile',
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
            key: 'psychicWaveProjectile',
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
            key: 'lightningWaveProjectile',
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
            key: 'fireWaveProjectile',
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
