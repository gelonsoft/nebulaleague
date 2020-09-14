import { Socket } from "socket.io"

export enum ControlledBy {
    MainPlayer,
    AIPlayer,
}

export interface CoordinatesModel {
    x: number
    y: number
}

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
    id: string
    x?: number
    y?: number
    rotation?: number
}


export interface PlayerDirection {
    x: number
    y: number
}


export interface PlayerAction {
    id?: string
    direction?: PlayerDirection,
    rotation?: number,
    selectAbility?: string,
    action?: string,
}



export interface PlayerMovement {
    id: string
    x: number
    y: number
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
    key: string
    fromPlayerId: string
    x: number
    y: number
    rotation?: number
}


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
    players: Array<PlayerModel>
    gameRoom?: string
}

export interface GameState {
    gameMode: string
    players: Array<PlayerModel>
    hostId?: string
}
