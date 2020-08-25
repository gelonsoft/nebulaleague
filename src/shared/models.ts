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
    damage: number
    shotInterval: number
    projectileKey: string
    laserConfig: LaserModel
}


export interface AbilitYModel {
    name: string
    frame: string
    damage: number
    cooldownDelay: number
    cooldown: number
}


export interface ProjectileModel {
    name: string
    frame: string
    speed: number
    damage: number
    lifespan: number
    width: number
    height: number
}
