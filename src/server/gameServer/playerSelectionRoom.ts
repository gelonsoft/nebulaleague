import { Schema, type, MapSchema } from '@colyseus/schema'
import { Room } from 'colyseus'
import { AbilityName, ControlledBy, WeaponName, PlayerModel, PlayerSelectionState } from '~/shared/models'

export class PlayerModelSchema extends Schema implements PlayerModel {
    @type('string')
    id: string

    @type('string')
    name: string

    @type('number')
    x: number

    @type('number')
    y: number

    @type('number')
    rotation: number

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
}

export class PlayerSelectionStateSchema extends Schema {
    @type('string')
    gameMode = ''

    @type('string')
    gameRoom = ''

    @type({ map: PlayerSelectionStateSchema })
    players = new MapSchema<PlayerModelSchema>()
}

export class PlayerSelectionRoom extends Room<PlayerSelectionStateSchema> {
    state: PlayerSelectionStateSchema

    onCreate(playerSelectionOption: any) {
        this.setState(new PlayerSelectionStateSchema())
        
        
        
        
    }
}
