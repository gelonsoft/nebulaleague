export interface PlayerModel {
    id: string
    // uuid?: string
    // ammo: number
    // name: string
    x: number
    y: number
    weaponPrimaryKey: string
    weaponSecondaryKey: string
    abilityKey1: string
    abilityKey2: string
    abilityKey3: string
    abilityKey4: string
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

