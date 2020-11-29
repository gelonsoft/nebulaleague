import {
    AbilityName,
    AbilityModel,
    AbilityAction,
    AbilityDrawingStyle,
} from '../models'


const abilitiesConfig: Record<AbilityName, AbilityModel> = {
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
        action: AbilityAction.ProjectileFromPointer,
        projectileKey: 'flameProjectile',
        drawingStyle: AbilityDrawingStyle.Zone,
        cooldownDelay: 1,
        rangeDistance: 420,
        radiusDistance: 60,
    },
    rootTip: {
        name: 'rootTip',
        frame: 'root-tip.png',
        projectileKey: 'rootTipProjectile',
        action: AbilityAction.ProjectileFromPointer,
        drawingStyle: AbilityDrawingStyle.Zone,
        cooldownDelay: 15,
        rangeDistance: 450,
        radiusDistance: 60,
    },
    chargedArrow: {
        name: 'chargedArrow',
        frame: 'charged-arrow.png',
        action: AbilityAction.ProjectileFromPlayer,
        projectileKey: 'chargedArrowProjectile',
        drawingStyle: AbilityDrawingStyle.Ray,
        cooldownDelay: 10,
    },
    frozenWave: {
        name: 'frozenWave',
        frame: 'frozen-body.png',
        action: AbilityAction.ProjectileFromPlayer,
        projectileKey: 'frozenWaveProjectile',
        drawingStyle: AbilityDrawingStyle.Zone,
        cooldownDelay: 5,
        radiusDistanceAlpha: 0.4,
        radiusDistance: 320,
    },
    psychicWave: {
        name: 'psychicWave',
        frame: 'psychic-waves.png',
        action: AbilityAction.ProjectileFromPlayer,
        projectileKey: 'psychicWaveProjectile',
        drawingStyle: AbilityDrawingStyle.Zone,
        cooldownDelay: 10,
        radiusDistanceAlpha: 0.4,
        radiusDistance: 230,
    },
    lightningWave: {
        name: 'lightningWave',
        frame: 'lightning-shout.png',
        action: AbilityAction.ProjectileFromPlayer,
        projectileKey: 'lightningWaveProjectile',
        drawingStyle: AbilityDrawingStyle.Zone,
        cooldownDelay: 8,
        radiusDistanceAlpha: 0.4,
        radiusDistance: 260,
    },
    fireWave: {
        name: 'fireWave',
        frame: 'fire-wave.png',
        action: AbilityAction.ProjectileFromPlayer,
        projectileKey: 'fireWaveProjectile',
        drawingStyle: AbilityDrawingStyle.Zone,
        cooldownDelay: 3,
        radiusDistanceAlpha: 0.4,
        radiusDistance: 240,
    },
}


export default abilitiesConfig

