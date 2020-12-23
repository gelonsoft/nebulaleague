const isDebug = process.env.DEBUG === 'true' || false

import { MapSchema } from '@colyseus/schema'
import {
    AbilityName,
    AbilityModel,
    ProjectileName,
    ProjectileTemplate,
    PlayerConfig,
    PlayerModel,
    GameMode,
    GameState,
    SceneGameKey,
    WeaponName,
    WeaponModel,
    PlayerSelectionState,
    ProjectileModel,
    User,
} from '~/shared/models'
import weaponsConfig from '~/shared/config/weaponsConfig'
import projectilesConfig from '~/shared/config/projectilesConfig'
import abilitiesConfig from '~/shared/config/abilitiesConfig'

type Debug = {
    lobyTo: GameMode | null
    debugMode: boolean
    playerSelectionSkip: boolean
    displayBanner: boolean
    displayBody: boolean

}

const debugConfig: Debug = {
    debugMode: true,
    lobyTo: null,
    playerSelectionSkip: false,
    displayBanner: true,
    displayBody: true,
}

const prodConfig: Debug = {
    debugMode: false ,
    lobyTo: null,
    playerSelectionSkip: false,
    displayBanner: false,
    displayBody: false,
}


export class Config {
    public static readonly debug: Debug = isDebug ? debugConfig : prodConfig

    public static matter = {
        group: {
            player: 0x00000001,
            bullet: 0x00000010
        }
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
        lobby: {
            key: 'lobbyScene',
        },
        mainMenu: {
            key: 'mainMenuScene',
        },
        playerSelection: {
            key: 'playerSelectionScene',
        },
        game: {
            kep: 'gameScene'
        },
        gameTraining: {
            key: 'gameTrainingScene' as SceneGameKey,
        },
        gameFfa: {
            key: 'gameFfaScene' as SceneGameKey,
        },
    }

    public static readonly textureKeys = {
        ships: 'ships',
        projectiles: 'projectiles',
        icons: 'icons',
    }

    public static readonly cursors = {
        crossair: 'url(assets/cursors/cursor.cur), pointer',
        skill: 'url(assets/cursors/SC2-cursor.cur), pointer',
    }

    public static readonly modeToGameKey: Record<GameMode, SceneGameKey> = {
        training: Config.scenes.gameTraining.key,
        ffa: Config.scenes.gameFfa.key,
    }

    public static readonly defaultUser: User = {
        gameMode: 'ffa',
        name: 'anonymous',
        ready: false,
        offline: false,
    }

    public static readonly defaultPlayerConfig: PlayerConfig = {
        controlledBy: 'ai',
        weaponPrimaryKey: 'pistol',
        weaponSecondaryKey: 'ak47',
        abilityKey1: 'psychicWave',
        abilityKey2: 'psychicWave',
        abilityKey3: 'psychicWave',
        abilityKey4: 'psychicWave',
        ready: false,
    }

    public static readonly defaultPlayerModel: PlayerModel = {
        ...Config.defaultPlayerConfig,
        id: '',
        x: 0,
        y: 0,
        rotation: 0,
        health: 0
    }

    public static readonly defaultPlayerSelectionState: PlayerSelectionState = {
        players: new MapSchema<PlayerConfig>(),
    }

    public static readonly defaultGameState: GameState = {
        players: new MapSchema<PlayerModel>(),
        projectiles: new MapSchema<ProjectileModel>(),
    }

    public static readonly player = {
        size: 52,
        accelerationSteady: 5000,
        accelerationChange: 1000,
        defaultSpeed: 400,
        defaultHealth: 1000,
        toOtherDamage: 100,
        defaultConfig: Config.defaultPlayerConfig,
        defaultModel: Config.defaultPlayerModel,
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
