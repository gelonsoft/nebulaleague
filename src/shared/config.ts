import { PlayerConfig, ControlledBy, PlayerModel } from './models'


export class Config {
    public static readonly defaultPlayerConfig: PlayerConfig = {
        name: 'anonymous',
        weaponPrimaryKey: 'uncertainity',
        weaponSecondaryKey: 'uncertainity',
        abilityKey1: 'uncertainity',
        abilityKey2: 'uncertainity',
        abilityKey3: 'uncertainity',
        abilityKey4: 'uncertainity',
    }

    public static readonly defaultPlayerModel: PlayerModel = {
        id: '0',
        name: 'anonymous',
        x: 0,
        y: 0,
        rotation: 0,
        controlledBy: ControlledBy.MainPlayer,
        selectedAbilityKey: null,
        weaponPrimaryKey: 'uncertainity',
        weaponSecondaryKey: 'uncertainity',
        abilityKey1: 'uncertainity',
        abilityKey2: 'uncertainity',
        abilityKey3: 'uncertainity',
        abilityKey4: 'uncertainity',
    }
}
