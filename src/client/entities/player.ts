import * as _ from 'lodash'
import * as Matter from 'matter'
import { GameScene } from '~/client/scenes/gameScene'
import { Config } from '~/shared/config'
import {
    PlayerModel,
    ControlledBy,
    EffectKeys,
    EffectModel,
    PlayerChanged,
    WeaponKey,
    AbilityKey,
    ActionKey,
    Vector,
} from '~/shared/models'
// import { PlayerAI } from '~/client/ai/playerAI'
import { Weapon } from '~/client/entities/weapons'
import { Ability } from '~/client/entities/abilities'
import { HealthBar } from '~/client/entities/healthbar'

import { createEffectIconsContainer, refreshEffectIcons } from '~/client/entities/effects'


export interface ActionTimeInterface {
    cooldown: number
    ready: boolean
    timerEvent?: Phaser.Time.TimerEvent
}

type ActionTimesInterface = {
    weaponPrimary: ActionTimeInterface
    weaponSecondary: ActionTimeInterface
    ability1: ActionTimeInterface
    ability2: ActionTimeInterface
    ability3: ActionTimeInterface
    ability4: ActionTimeInterface
    death: ActionTimeInterface
}

interface ActionsInterface {
    weaponPrimary: Weapon
    weaponSecondary: Weapon
    ability1: Ability
    ability2: Ability
    ability3: Ability
    ability4: Ability
}

export class Player extends Phaser.GameObjects.Sprite {
    public scene: GameScene
    public id: string
    public playerModel: PlayerModel

    constructor(scene: GameScene, playerModel: PlayerModel) {        
        super(scene, playerModel.x, playerModel.y, Config.textureKeys.ships, 'spaceShips_001.png')
        this.scene = scene
        this.scene.add.existing(this)
        this.playerModel = playerModel
        this.init()
    }

    public init() {
        this.id = this.playerModel.id
        this.setDisplaySize(Config.player.size, Config.player.size)
    }

    public draw(): void {
        
    }


    public update(): void {
        
    }

}
