import { Socket } from "socket.io";

export interface CoordinatesModel {
    x: number
    y: number
}

export interface PlayerModel {
    id: string
    name: string
    controlledBy: number
    weaponPrimaryKey: string
    weaponSecondaryKey: string
    abilityKey1: string
    abilityKey2: string
    abilityKey3: string
    abilityKey4: string
    x: number
    y: number
    rotation?: number
    
}


export interface PlayerChanged {
    id: number
    x?: number
    y?: number
    rotation?: number
}


export interface LaserModel {
    width: number
    color: number
    alpha: number
}

export interface WeaponModel {
    name: string
    frame: string
    shotInterval: number
    projectileKey: string
    laserConfig: LaserModel
}


export interface ProjectileModel {
    name: string
    frame: string
    speed: number
    damage: number
    lifespan: number
    effects?: Array<any>
    radius: number
}


export interface BlockModel {
    name: string
    radius: number
    lifespan: number
    damage: number
    effects?: Array<any>
    fillColor?: number
    strokeColor?: number
    fillAlpha?: number
    strokeAlpha?: number
}

export interface BlockModelMultiple extends BlockModel {
    tick?: number
    triggerAfter?: number
}


export interface DomainSocket extends Socket {
    player: PlayerModel
}
