import { MapSchema } from '@colyseus/schema'
import { GameScene } from '~/server/games/scenes/gameScene'
import { Game } from '~/server/games/game'
export type Vector = { x: number; y: number }
export type ControlledBy = 'human' | 'ai'
export type WeaponKey = 'weaponPrimary' | 'weaponSecondary'
export type AbilityKey = 'ability1' | 'ability2' | 'ability3' | 'ability4'
export type ActionKey = WeaponKey | AbilityKey
export type WeaponName = 'pistol' | 'ak47' | 'p90' | 'revolver' | 'thompson'
export type GameMode = 'training' | 'ffa' | 'tst'

export type SceneGameKey = 'gameFfaScene' | 'gameTrainingScene' | 'heroStatScene'     | 'loginScene'

export type SceneKey =
    | SceneGameKey
    | 'bootScene'
    | 'deathScene'
    | 'debugScene'
    | 'hudScene'
    | 'lobbyScene'
    | 'mainMenuScene'
    | 'playerSelectionScene'
    | 'heroStatScene'


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

export type PlayerConfig = {
    controlledBy: ControlledBy
    weaponPrimaryKey: WeaponName
    weaponSecondaryKey: WeaponName
    abilityKey1: AbilityName
    abilityKey2: AbilityName
    abilityKey3: AbilityName
    abilityKey4: AbilityName
    ready: boolean
}

export type MainPlayerConfig = {
    login: string
    token: string
    ready: boolean
}

export type PlayerModel = PlayerConfig & {
    id: string
    x: number
    y: number
    rotation: number
    health: number
}



export type PlayerChanged = Partial<PlayerModel>
export type GameChanged = {
    player?: PlayerChanged
}

export type PlayerAction = {
    direction?: Vector
    rotation?: number
    selectAbility?: AbilityKey
    action?: WeaponKey
    pointerPosition?: {
        x: number
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
    ZoneToPointer,
    ZoneFromPlayer,
    RayFromPlayer,
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
    tickAfter?: number
    triggerAfter?: number
    collidingBehaviour: CollidingBehaviour
    drawing: ProjectileDrawingSpriteModel | ProjectileDrawingPrimitiveModel
}

export type ProjectileDrawingBaseModel = {
    style: string
    radius?: number
    frame?: string
    fillColor?: number
    strokeColor?: number
    fillAlpha?: number
    strokeAlpha?: number
}

export type ProjectileDrawingSpriteModel = ProjectileDrawingBaseModel & {
    style: 'sprite'
    radius: number
    texture: string
    frame: string
}

export type ProjectileDrawingPrimitiveModel = ProjectileDrawingBaseModel & {
    style: 'primitive'
    radius: number
    fillColor: number
    strokeColor: number
    fillAlpha: number
    strokeAlpha: number
}

export type CollidingBehaviour = 'kill' | 'single' | 'multiple'

export type ProjectileTemplate = ProjectileBase & {
    name: ProjectileName
}

export type ProjectileModel = {
    projectileTemplate: ProjectileTemplate
    x: number
    y: number
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

export enum HeroStats {
    MagicAttack,
    PhysicAttack,
    PureAttack,
    Health,
    Armor,
    MagicProtection,
    MagicPiercing,
    PhysicPiercing,
    Intelligence,
    Agility,
    Power
}

export enum HeroRoles {
    Healer = 'healer',
    Mag = 'mag',
    Tank = 'tank'
}


export enum HeroRanks {
    White= '0xCCCCCC',
    Green = '0x00FF00',
    Blue = '0x0000FF',
    Red = '0xFF0000'
}

export type EffectModel = {
    name: EffectKeys
    value: number
    duration: number
    tick?: number
}

export type User = {
    name: string
    gameMode: GameMode
    ready: boolean
    offline: boolean
    gameRoom?: string
}

export type LobbyState = {
    users: MapSchema<User>
}

export type PlayerSelectionState = {
    players: MapSchema<PlayerConfig>
}



export type GameState = {
    players: MapSchema<PlayerModel>
    projectiles: MapSchema<ProjectileModel>
}

export type GameStateServer = GameState & {
    // game: Game
}

export type MainPlayerModel = {
    playerId: number,
    playerName: string,
    playerLevel: number,
    coins: number,
    playerEnergy: number
}