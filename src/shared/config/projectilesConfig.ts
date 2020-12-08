import {
    EffectKeys,
    ProjectileName,
    ProjectileTemplate,
} from '../models'


const projectilesConfig: Record<ProjectileName, ProjectileTemplate> = {
    pistolBullet: {
        name: 'pistolBullet',
        damage: 80,
        speed: 1400,
        lifespan: 0.4,
        radius: 5,
        collidingBehaviour: 'kill',
        drawing: {
            style: 'sprite',
            radius: 5,
            frame: 'beams-blue1.png',
        },
    },
    ak47Bullet: {
        name: 'ak47Bullet',
        damage: 70,
        speed: 1200,
        lifespan: 0.45,
        radius: 5,
        collidingBehaviour: 'kill',
        drawing: {
            style: 'sprite',
            radius: 5,
            frame: 'beam-yellow1.png',
        },
    },
    p90Bullet: {
        name: 'p90Bullet',
        damage: 40,
        speed: 1500,
        lifespan: 0.3,
        radius: 7,
        collidingBehaviour: 'kill',
        drawing: {
            style: 'sprite',
            radius: 7,
            frame: 'beams-purple1.png',
        },
    },
    revolverBullet: {
        name: 'revolverBullet',
        damage: 450,
        speed: 100,
        lifespan: 10,
        radius: 8,
        collidingBehaviour: 'kill',
        drawing: {
            style: 'sprite',
            radius: 8,
            frame: 'beams-purple1.png',
        },
    },
    thompsonBullet: {
        name: 'thompsonBullet',
        damage: 200,
        speed: 1700,
        lifespan: 0.45,
        radius: 9,
        collidingBehaviour: 'kill',
        drawing: {
            style: 'sprite',
            radius: 9,
            frame: 'beams-purple1.png',
        },
    },
    chargedArrowProjectile: {
        name: 'chargedArrowProjectile',
        damage: 80,
        speed: 1200,
        lifespan: 0.5,
        radius: 12,
        collidingBehaviour: 'kill',
        drawing: {
            style: 'sprite',
            radius: 12,
            frame: 'charged_arrow_bullet.png',
        },
        effects: [
            {
                name: EffectKeys.Slow,
                value: 0.8,
                duration: 2,
            },
        ],
    },
    flameProjectile: {
        name: 'flameProjectile',
        radius: 50,
        lifespan: 1,
        damage: 25,
        tickAfter: 0.15,
        collidingBehaviour: 'multiple',
        drawing: {
            style: 'primitive',
            radius: 50,
            fillColor: 0xaa0000,
            strokeColor: 0x880000,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
        },
        effects: [
            {
                name: EffectKeys.Burn,
                value: 10,
                duration: 3,
                tick: 0.5,
            },
        ],
    },
    rootTipProjectile: {
        name: 'rootTipProjectile',
        radius: 60,
        damage: 30,
        lifespan: 1.5,
        triggerAfter: 0.4,
        collidingBehaviour: 'single',
        drawing: {
            style: 'primitive',
            radius: 60,
            fillColor: 0x00aa00,
            strokeColor: 0x00ff00,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
        },
        effects: [
            {
                name: EffectKeys.Paralyze,
                value: 0.8,
                duration: 3,
            },
        ],
    },
    frozenWaveProjectile: {
        name: 'frozenWaveProjectile',
        radius: 320,
        damage: 10,
        lifespan: 0.6,
        triggerAfter: 0.2,
        collidingBehaviour: 'single',
        drawing: {
            style: 'primitive',
            radius: 320,
            fillColor: 0x00aaff,
            strokeColor: 0x00aaff,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
        },
        effects: [
            {
                name: EffectKeys.Freeze,
                value: 0.8,
                duration: 4,
            },
        ],
    },
    psychicWaveProjectile: {
        name: 'psychicWaveProjectile',
        radius: 230,
        damage: 0,
        lifespan: 0.6,
        triggerAfter: 0.2,
        collidingBehaviour: 'single',
        drawing: {
            style: 'primitive',
            radius: 230,
            fillColor: 0x800080,
            strokeColor: 0xa000a0,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
        },
        effects: [
            {
                name: EffectKeys.Stun,
                value: 0.8,
                duration: 1.5,
            },
        ],
    },
    lightningWaveProjectile: {
        name: 'lightningWaveProjectile',
        radius: 260,
        damage: 10,
        lifespan: 0.6,
        triggerAfter: 0.2,
        collidingBehaviour: 'single',
        drawing: {
            style: 'primitive',
            radius: 260,
            fillColor: 0xfdd023,
            strokeColor: 0xfee034,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
        },
        effects: [
            {
                name: EffectKeys.Paralyze,
                value: 0.8,
                duration: 2.5,
            },
        ],
    },
    fireWaveProjectile: {
        name: 'fireWaveProjectile',
        radius: 240,
        damage: 30,
        lifespan: 0.6,
        triggerAfter: 0.2,
        collidingBehaviour: 'single',
        drawing: {
            style: 'primitive',
            radius: 240,
            fillColor: 0xe25822,
            strokeColor: 0xe37a33,
            fillAlpha: 0.6,
            strokeAlpha: 0.8,
        },
        effects: [
            {
                name: EffectKeys.Burn,
                value: 10,
                duration: 1,
                tick: 0.5,
            },
        ],
    },
}


export default  projectilesConfig


