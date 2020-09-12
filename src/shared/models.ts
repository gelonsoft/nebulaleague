import { Socket } from "socket.io";

export interface CoordinatesModel {
    x: number
    y: number
}

export interface PlayerModel {
    id: string
    name: string
    x: number
    y: number
    controlledBy: number
    weaponPrimaryKey: string
    weaponSecondaryKey: string
    abilityKey1: string
    abilityKey2: string
    abilityKey3: string
    abilityKey4: string
    rotation?: number
}


export interface PlayerConfig {
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


export interface DomainSocket extends Socket {
    player: PlayerModel
}

export interface LobyState {
    name: string
    gameMode: string
    playerSelectionRoom?: string
}

export interface PlayerSelectionState {
    gameMode: string
    player: PlayerModel
    gameRoom?: string
}

export interface GameState {
    gameMode: string
    players: Array<PlayerModel>
    // player: PlayerModel
}
