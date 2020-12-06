import { Schema, type, MapSchema } from '@colyseus/schema'
import { Room } from 'colyseus'
import { AbilityName, ControlledBy, WeaponName, PlayerModel, PlayerSelectionState, GameMode } from '~/shared/models'

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



type Option = {
    gameMode: GameMode
}

export class PlayerSelectionRoom extends Room<PlayerSelectionStateSchema> {
    state: PlayerSelectionStateSchema
    
    async onCreate(option: Option) {
        await this.setMetadata({gameMode: option.gameMode})
        if (option.gameMode === "ffa") {
            this.maxClients = 1
        } else if(option.gameMode === "training") {
            this.maxClients = 10
        }
        this.setState(new PlayerSelectionStateSchema())
    }
}
