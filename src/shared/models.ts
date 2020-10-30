// GENERAL INTERFACE //

import { Weapon } from "~/client/entities/weapons"

export type Position = {
    x: number
    y: number
}



// PLAYER INTERFACE //
export enum ControlledBy {
    MainPlayer,
    AIPlayer,
}


export type WeaponKey = 'weaponPrimary' | 'weaponSecondary'
export type AbilityKey = 'ability1' | 'ability2' | 'ability3' | 'ability4'
export type ActionKey = WeaponKey | AbilityKey

export type WeaponName =
    | 'pistol'
    | 'ak47'
    | 'p90'
    | 'revolver'
    | 'thompson'


export type AbilityName =
    | 'blink'
    | 'flame'
    | 'rootTip'
    | 'chargedArrow'
    | 'frozenWave'
    | 'psychicWave'
    | 'lightningWave'
    | 'fireWave'


export type ProjectileName =
    | 'pistolBullet'
    | 'ak47Bullet'
    | 'p90Bullet'
    | 'revolverBullet'
    | 'thompsonBullet'
    | 'chargedArrowProjectile'
    | 'flameProjectile'
    | 'rootTipProjectile'
    | 'frozenWaveProjectile'
    | 'psychicWaveProjectile'
    | 'lightningWaveProjectile'
    | 'fireWaveProjectile'


export type ActionName = WeaponName | AbilityName

export type PlayerModel = {
    id: string
    name: string
    x: number
    y: number
    rotation: number
    controlledBy: ControlledBy
    selectedAbilityKey: AbilityName
    weaponPrimaryKey?: WeaponName
    weaponSecondaryKey?: WeaponName
    abilityKey1?: AbilityName
    abilityKey2?: AbilityName
    abilityKey3?: AbilityName
    abilityKey4?: AbilityName
}


export type PlayerConfig = {
    name: string
    weaponPrimaryKey?: WeaponName
    weaponSecondaryKey?: WeaponName
    abilityKey1?: AbilityName
    abilityKey2?: AbilityName
    abilityKey3?: AbilityName
    abilityKey4?: AbilityName
}

export type PlayerChanged = {
    x?: number
    y?: number
    rotation?: number
    health?: number
}


export type PlayerDirection = {
    x: number
    y: number
}


export type PlayerAction = {
    direction?: PlayerDirection,
    rotation?: number,
    selectAbility?: AbilityKey,
    action?: WeaponKey
    pointerPosition?: {
        x: number,
        y: number
    }
}

export type PlayerMovement = {
    id: string
    x: number
    y: number
    rotation?: number
}


// WEAPONS INTERFACE
export type LaserModel = {
    width: number
    color: number
    alpha: number
}

export type WeaponModel = {
    name: WeaponName
    frame: string
    cooldownDelay: number
    projectileKey: ProjectileName
    laser: LaserModel
}


// ABILITIES INTERFACE
export enum AbilityDrawingStyle {
    Zone,
    Ray,
}

export enum AbilityAction {
    Blink,
    ProjectileFromPlayer,
    ProjectileFromPointer,
}


export type AbilityModel = {
    name: AbilityName
    frame: string
    action: AbilityAction
    projectileKey?: ProjectileName
    cooldownDelay: number
    rangeDistance?: number
    drawingStyle: AbilityDrawingStyle
    radiusDistance?: number
    rangeDistanceColor?: number
    triggerAfter?: number
    radiusDistanceColor?: number
    raySize?: number
    rayColor?: number
    rangeDistanceAlpha?: number
    radiusDistanceAlpha?: number
    rayDistanceAlpha?: number
}

export type ActionModel = WeaponModel | AbilityModel



// PROJECTILE INTERFACE
export type ProjectileBase = {
    name: string
    damage: number
    lifespan: number
    radius: number
    speed?: number
    effects?: Array<EffectModel>
    tick?: number
    triggerAfter?: number
    drawing: ProjectileDrawingSpriteModel | ProjectileDrawingPrimitiveModel
}

export type ProjectileDrawingSpriteModel = {
    type: 'sprite'
    radius: number
    frame: string
}


export type ProjectileDrawingPrimitiveModel = {
    type: 'primitive'
    radius: number
    fillColor: number
    strokeColor: number
    fillAlpha: number
    strokeAlpha: number
}




export type ProjectileTemplate = ProjectileBase & {
    name: ProjectileName
    className: 'Bullet' | 'BlockWithTick' | 'BlockWithDelay'
}

export type ProjectileModel = ProjectileBase & {
    fromGroup: ProjectileName

}



export type ProjectileChanged = {
    x?: number
    y?: number
    fillColor?: number
    strokeColor?: number
    fillAlpha?: number
    strokeAlpha?: number
    tick?: number
    triggerAfter?: number
}



// EFFECT INTERFACE
export enum EffectKeys {
    Slow = 'slowed',
    Fast = 'fastenned',
    Paralyze = 'paralyzed',
    Stun = 'stunned',
    Burn = 'burned',
    Freeze = 'freezed',
}

export type EffectModel = {
    name: EffectKeys
    value: number
    duration: number
    tick?: number
}


// SERVER INTERFACE
export type User = {
    name?: string
    gameMode?: string
    playerSelectionRoom?: string
}

export type LobyState = {
    users: Map<string, User>
}

export type PlayerSelectionState = {
    gameMode: string
    players: Record<string, PlayerModel>
    gameRoom?: string
}


export type GameStateChanged = {
    created?: {
        players?: Record<string, PlayerModel>
        projectiles?: Record<string, ProjectileModel>
    },
    updated?: {
        players?: Record<string, PlayerChanged>
        projectiles?: Record<string, ProjectileChanged>
    },
    deleted?: {
        players?: Array<string>
        projectiles?: Array<string>
    }
}


export type GameState = {
    gameMode: string
    hostId?: string
    players: Record<string, PlayerModel>
    projectiles: Record<string, ProjectileModel>
}

export class Test {
    foo: number
    constructor(foo: number) {
        this.foo = foo
    }
}
