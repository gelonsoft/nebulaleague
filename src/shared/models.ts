// GENERAL INTERFACE //

import { Weapon } from "~/client/entities/weapons"

export interface Position {
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

export type WeaponNames =
    | 'pistol' 
    | 'ak47' 
    | 'p90' 
    | 'revolver' 
    | 'thompson' 

export interface PlayerModel {
    id: string
    name: string
    x: number
    y: number
    rotation: number
    controlledBy: ControlledBy
    selectedAbilityKey: string | null
    weaponPrimaryKey: string
    weaponSecondaryKey: string
    abilityKey1: string
    abilityKey2: string
    abilityKey3: string
    abilityKey4: string
}


export interface PlayerConfig {
    name: string
    weaponPrimaryKey: string
    weaponSecondaryKey: string
    abilityKey1: string
    abilityKey2: string
    abilityKey3: string
    abilityKey4: string
}

export interface PlayerChanged {
    x?: number
    y?: number
    rotation?: number
    health?: number
}


export interface PlayerDirection {
    x: number
    y: number
}


export interface PlayerAction {
    direction?: PlayerDirection,
    rotation?: number,
    selectAbility?: AbilityKey,
    action?: WeaponKey
    pointerPosition?: {
        x: number,
        y: number
    }
}

export interface PlayerMovement {
    id: string
    x: number
    y: number
    rotation?: number
}


// WEAPONS INTERFACE
export interface LaserModel {
    width: number
    color: number
    alpha: number
}

export interface WeaponModel {
    name: string
    frame: string
    cooldownDelay: number
    projectileKey: string
    laser: LaserModel
}



// ABILITIES INTERFACE
export enum AbilityDrawingStyle {
    Zone,
    Ray,
}

export enum AbilityAction {
    Blink,
    Projectile,
    ProjectileWithRotation,
}


export interface AbilityModel {
    name: string
    frame: string
    action: AbilityAction
    projectileKey?: string
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



// PROJECTILE INTERFACE
export interface ProjectileModel {
    key: string
    name: string
    speed: number
    damage: number
    lifespan: number
    radius: number
    effects?: Array<EffectModel>
    frame?: string
    fillColor?: number
    strokeColor?: number
    fillAlpha?: number
    strokeAlpha?: number
    tick?: number
    triggerAfter?: number
}


export interface ProjectileChanged {
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

export interface EffectModel {
    name: EffectKeys
    value: number
    duration: number
    tick?: number
}


// SERVER INTERFACE
export interface User {
    name?: string
    gameMode?: string
    playerSelectionRoom?: string
}

export interface LobyState {
    users: Map<string, User>
}

export interface PlayerSelectionState {
    gameMode: string
    players: Record<string, PlayerModel>
    gameRoom?: string
}

// export interface GameStateUpdated {
//     players?: Record<string, PlayerChanged>
//     projectiles?: Record<string, ProjectileChanged>
//     toDelete?: {
//         projectiles?: Array<string>
//     }
// }

export interface GameStateChanged {
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


export interface GameState {
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
