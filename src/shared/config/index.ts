import {
    ControlledBy,
    WeaponName,
    WeaponModel,
    AbilityName,
    AbilityModel,
    PlayerConfig,
    PlayerModel,
    ProjectileName,
    ProjectileTemplate,
    GameMode,
    SceneGameKey,
} from '../models'
import weaponsConfig from './weaponsConfig'
import projectilesConfig from './projectilesConfig'
import abilitiesConfig from './abilitiesConfig'
import { ClientMode } from '~/shared/models'

type Debug = {
    lobyTo: GameMode | undefined
    playerSelectionSkip: boolean
    defaultClient: ClientMode
}



export class Config {
    public static readonly debug: Debug = {
        lobyTo: undefined,
        playerSelectionSkip: false,
        defaultClient: 'colyseus'
    }
    
    public static readonly scenes = {
        boot: {
            key: 'bootScene',
            cameraBackgroundColor: 0x000000,
            progressBarColor: 0x88e453,
            loadingBarColor: 0xffffff,
        },
        death: {
            key: 'deathScene',
        },
        debug: {
            key: 'debugScene',
        },
        hud: {
            key: 'hudScene',
        },
        loby: {
            key: 'lobyScene',
        },
        mainMenu: {
            key: 'mainMenuScene',
        },
        playerSelection: {
            key: 'playerSelectionScene',
        },
        game: {
            
        },
        gameTraining: {
            key: 'gameTrainingScene' as SceneGameKey,
        },
        gameFfa: {
            key: 'gameFfaScene' as SceneGameKey,
        }
    }

    public static readonly modeToGameKey: Record<GameMode, SceneGameKey> = {
        training: Config.scenes.gameTraining.key,
        ffa: Config.scenes.gameFfa.key,
    }

    
    public static readonly playerDefaultModel: PlayerModel = {
        name: 'anonymous',
        id: '0',
        x: 0,
        y: 0,
        rotation: 0,
        controlledBy: ControlledBy.Human,
        weaponPrimaryKey: 'pistol',
        weaponSecondaryKey: 'ak47',
        abilityKey1: 'psychicWave',
        abilityKey2: 'psychicWave',
        abilityKey3: 'psychicWave',
        abilityKey4: 'psychicWave',
    }

    private static readonly playerDefaultConfig: PlayerConfig = {
        name: 'anonymous',
        weaponPrimaryKey: 'pistol',
        weaponSecondaryKey: 'ak47',
        abilityKey1: 'psychicWave',
        abilityKey2: 'psychicWave',
        abilityKey3: 'psychicWave',
        abilityKey4: 'psychicWave',
    }

    public static readonly player = {
        size: 52,
        accelerationSteady: 5000,
        accelerationChange: 1000,
        drag: 400,
        defaultSpeed: 400,
        defaultHealth: 1000,
        toOtherDamage: 100,
        defaultConfig: Config.playerDefaultConfig,
        defaultModel: Config.playerDefaultModel,
    }

    public static readonly world = {
        width: 8000,
        height: 8000,
        paralaxScrollFactor: 0.04,
        maxPlayer: 10,
    }

    public static readonly healthBar = {
        colorBackground: 0xffffff,
        colorLow: 0xff0000,
        colorMedium: 0xffa500,
        colorHigh: 0x00ff00,
    }

    public static readonly hud = {
        height: 60,
        padding: 4,
        paddingInner: 2,
        background: 0x1313a8,
        backgroundItem: 0x000000,
        slotColorSelected: 0x3366e5,
        slotColorUnselected: 0x5577d5,
    }

    public static readonly consumable = {
        width: 30,
        height: 30,
    }

    public static readonly projectile = {
        defaultTickAfter: 0.2,
    }

    public static readonly effect = {
        toFrameName: {
            slowed: 'snail.png',
            fastenned: 'running-shoe.png',
            paralyzed: 'stone-block.png',
            stunned: 'brain-freeze.png',
            burned: 'flame.png',
            freezed: 'frozen-block.png',
        },
    }

    public static readonly weapons: Record<WeaponName, WeaponModel> = weaponsConfig
    public static readonly abilities: Record<AbilityName, AbilityModel> = abilitiesConfig
    public static readonly projectiles: Record<ProjectileName, ProjectileTemplate> = projectilesConfig
}
