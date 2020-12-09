import { Schema, type, MapSchema } from '@colyseus/schema'
import {
    AbilityName,
    ControlledBy,
    WeaponName,
    PlayerConfig,
    PlayerSelectionState,
} from '~/shared/models'

export class PlayerConfigSchema extends Schema implements PlayerConfig {
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
}

export class PlayerSelectionStateSchema extends Schema implements PlayerSelectionState {
    @type({ map: PlayerConfigSchema })
    players = new MapSchema<PlayerConfigSchema>()
}
