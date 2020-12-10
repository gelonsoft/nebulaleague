import { Schema, type, MapSchema } from '@colyseus/schema'

import {
    AbilityName,
    ControlledBy,
    WeaponName,
    PlayerModel,
    ProjectileModel,
    ProjectileTemplate,
    CollidingBehaviour,
    EffectModel,
    ProjectileDrawingPrimitiveModel,
    ProjectileDrawingSpriteModel,
    ProjectileName,
    ProjectileDrawingBaseModel,
    GameState,
} from '~/shared/models'

export class PlayerModelSchema extends Schema implements PlayerModel {
    @type('string')
    name: string

    @type('string')
    controlledBy: ControlledBy

    @type('string')
    weaponPrimaryKey: WeaponName

    @type('string')
    weaponSecondaryKey: WeaponName

    @type('string')
    abilityKey1: AbilityName

    @type('string')
    abilityKey2: AbilityName

    @type('string')
    abilityKey3: AbilityName

    @type('string')
    abilityKey4: AbilityName

    @type('boolean')
    ready = false

    @type('string')
    id: string

    @type('number')
    x: number

    @type('number')
    y: number

    @type('number')
    rotation: number
    
    @type('number')
    health: number
}


export class ProjectileDrawingBaseModelSchema extends Schema implements ProjectileDrawingBaseModel {
    @type('string')
    style: string
    
    @type('string')
    frame: string
    
    @type('number')
    radius: number
    
    @type('number')
    fillColor: number
    
    @type('number')
    strokeColor: number
        
    @type('number')
    fillAlpha: number
    
    @type('number')
    strokeAlpha: number
}


export class ProjectileTemplateSchema extends Schema implements ProjectileTemplate {
    @type('string')
    name: ProjectileName
    
    @type('number')
    damage: number
    
    @type('number')
    lifespan: number
    
    @type('number')
    radius: number
    
    @type('number')
    speed?: number | undefined
    
    @type('number')
    effects?: EffectModel[] | undefined
    
    @type('number')
    tickAfter?: number | undefined
    
    @type('number')
    triggerAfter?: number | undefined
    
    @type('string')
    collidingBehaviour: CollidingBehaviour

    @type(ProjectileDrawingBaseModelSchema)
    drawing: ProjectileDrawingSpriteModel | ProjectileDrawingPrimitiveModel
}


export class ProjectileModelSchema extends Schema implements ProjectileModel {
    @type(ProjectileTemplateSchema)
    projectileTemplate: ProjectileTemplate

    @type('number')
    x: number
    
    @type('number')
    y: number
}


export class GameStateSchema extends Schema implements GameState {
    @type({ map: PlayerModelSchema })
    players = new MapSchema<PlayerModel>()

    @type({ map: ProjectileModelSchema })
    projectiles = new MapSchema<ProjectileModel>()
}
