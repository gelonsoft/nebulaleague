import { Schema, type, MapSchema } from '@colyseus/schema'
import { Room } from 'colyseus'
import { AbilityName, ControlledBy, WeaponName } from '~/shared/models'


class PlayerModel extends Schema {
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


class PlayerSelectionState extends Schema {
    @type('string')
    gameMode: string
    
    @type('string')
    gameRoom: string

    @type({map: PlayerModel})
    players = new MapSchema<PlayerModel>()
}

export class PlayerSelectionRoom extends Room<PlayerSelectionState> {
    onCreate(_options: unknown) {
        this.setState(new PlayerSelectionState())
    }
}
