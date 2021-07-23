import {HeroTemplateId} from "~/shared/models/hero";

export type SkillBehaviorType = 'AlchemistArmorDebuff' | 'AlchemistHealPrevent' | 'AlchemistPassive' | 'AlchemistUlt' | 'AntimageBuff' | 'AntimageDebuff'
    | 'AntimagePassive' | 'AntimageUlt' | 'ArachneJump' | 'ArbalesterAutoAttack' | 'ArbalesterRicochet' | 'ArcherConvertProjectile' | 'ArcherProjectile'
    | 'AttackSpeedTeamBuffHuntress' | 'AutoAttackCanonneer' | 'AutoAttackHuntress' | 'AutoAttackVoidElemental' | 'BoomerangAutoAttack' | 'BoomerangBacklineMode'
    | 'BoomerangUlt' | 'BossArchdemonEventStages' | 'BossBoarAttack' | 'BossBoarRun' | 'BossDemonSkill' | 'BossFiregolemMelee' | 'BossFiregolemSkill'
    | 'BossFiregolemStrike' | 'BossFishAttack' | 'BossFishPassive' | 'BossFishUlt' | 'BossForestSkill' | 'BossOrkSkill' | 'BossSeaAttack' | 'BossSeaUlt'
    | 'BossSpiderAttack' | 'BossSpiderSkill' | 'BossSpiderSpawn' | 'BossStormEyeAutoAttack' | 'BossStormSphereMain' | 'BossStormTentacleAutoAttack'
    | 'BossUndeadSkill' | 'BurstingShield' | 'CanonneerSpeedfire' | 'CentaurAttackDebuff' | 'CentaurAttackProtectionUlt' | 'CentaurLifeRune' | 'ChainBolt'
    | 'ChainedChalices' | 'ChainedChalicesOld' | 'CorvusAltar' | 'CorvusAttackBuff' | 'CorvusTeleport' | 'CorvusUlt' | 'DamageAreaInFront' | 'DamageSkillModifier'
    | 'DaredevilAutoAttack' | 'DaredevilGrenade' | 'DaredevilPassive' | 'DaredevilTaser' | 'DeerOfIceCurse' | 'DeerOfIceIceGround' | 'DeerOfIceSave' | 'DeerOfIceUlt'
    | 'DeerOfThunderChainBolt' | 'DeerOfThunderPassive' | 'DeerOfThunderProjectile' | 'DeerOfThunderStrike' | 'DeerOfThunderUlt' | 'DemonSpearAutoAttack'
    | 'DemonSpearBlind' | 'DemonSpearPercentage' | 'DemonSpearUlt' | 'DwarfClawbotStun' | 'DwarfDrillAutoAttack' | 'DwarvenBossKingAutoAttack'
    | 'DwarvenBossKingPush' | 'DwarvenBossKingSkill' | 'DwarvenBossLastAutoAttack' | 'DwarvenBossLastMain' | 'DwarvenPriestHeal' | 'DwarvenTurretProjectile'
    | 'DwarvenTurretSpawn' | 'EnergyWarlockAutoAttack' | 'EnergyWarlockDamageRetarget' | 'EnergyWarlockShield' | 'EnergyWarlockUlt' | 'FattyProjectileDot'
    | 'FattyUlt' | 'FishAutoAttack' | 'FishHeal' | 'FishTargetDamage' | 'FishUlt' | 'FloweyPoison' | 'FloweyUlt' | 'FloweyVines' | 'FurthestAoeBurnEnergy'
    | 'FurthestAoeBurnEnergyOld' | 'FuthestGhostPirateStrike' | 'GluttonMagmaBlast' | 'GluttonMagmaBlastByArea' | 'GluttonShield' | 'Hero02Charge'
    | 'Hero02LowestHpTargetAttack' | 'Hero02Ult' | 'Hero03ArmorPenetrationBonus' | 'Hero03AutoAttack' | 'Hero03Ult' | 'Hero08Grenade' | 'Hero08Passive'
    | 'Hero08Taser' | 'Hero08Ult' | 'Hero12NearestAoe' | 'Hero12Summon' | 'Hero12Ult' | 'Hero14AutoAttack' | 'Hero14Blind' | 'Hero14Turret' | 'Hero14Ult'
    | 'Hero16Buff' | 'Hero16Revenge' | 'Hero16Ult' | 'Hero24Strike' | 'Hero24ToxicCloud' | 'Hero24Ult' | 'Hero25AutoAttack' | 'Hero25Ult' | 'Hero26Punch'
    | 'Hero26Ult' | 'Hero43DayNightAttack' | 'Hero43DayNightSkill' | 'Hero43DayNightUlt' | 'Hero44PetMasterAutoAttack' | 'Hero44PetMasterSpeedUp'
    | 'Hero44PetMasterUlt' | 'Hero45Aoe' | 'Hero45AutoAttack' | 'Hero45Passive' | 'Hero45Ult' | 'Hero46AutoAttack' | 'Hero46Totem' | 'Hero46Ult'
    | 'Hero47MovementProtection' | 'Hero47StoneCage' | 'Hero47StoneSkin' | 'Hero47Ult' | 'Hero48AutoAttack' | 'Hero48CritModifier' | 'Hero48Ult'
    | 'Hero49AutoAttack' | 'Hero49PoisonPassive' | 'Hero49Ult' | 'Hero52AutoAttack' | 'Hero52GainEnergyPassive' | 'Hero52TierUlt' | 'InvasionBossEffectsImmune'
    | 'InvasionLeviathanMelee' | 'InvasionLeviathanUlt' | 'JesterRay' | 'JesterShield' | 'JesterUlt' | 'JudgeDodge' | 'JudgePassive' | 'JudgeShield'
    | 'LowestHpJumpAttack' | 'MageBomb' | 'MageBurst' | 'MageTornadoV63' | 'Melee' | 'MeleeDefaultFx' | 'MeleeKnockback' | 'MeleeSTStun' | 'MeleeWithFx'
    | 'MorriganAutoAttack' | 'MorriganBoneArmor' | 'MorriganUlt' | 'MorriganUndeadHeal' | 'NearestAoe' | 'NearestDotDebuff' | 'OctoPassive' | 'OctoShield'
    | 'OctoUlt' | 'OnDeathDamage' | 'OrionFurthestAoe' | 'PaladinDualWave' | 'PaladinHeal' | 'PaladinPassive' | 'PaladinWarriorStun' | 'PaladinWarriorUlt'
    | 'PaladinWave' | 'PassiveAllyTeamBuff' | 'PassiveSelfBuff' | 'PassiveSelfEffect' | 'Pet01Favor' | 'Pet01Skill' | 'Pet01Ult' | 'Pet02Favor' | 'Pet02Skill'
    | 'Pet02Ult' | 'Pet03Favor' | 'Pet03Skill' | 'Pet03Ult' | 'Pet04Favor' | 'Pet04Skill' | 'Pet04Ult' | 'Pet05Favor' | 'Pet05Skill' | 'Pet05Ult'
    | 'Pet06Favor' | 'Pet06Ult' | 'Pet07Favor' | 'Pet07Skill' | 'Pet07Ult' | 'PirateAutoAttack' | 'PirateAutoAttackModifier' | 'PirateBuckshot'
    | 'PiratePiercingShoot' | 'PoisonTouch' | 'PoisonerEnergyPassive' | 'PoisonerPassive' | 'PoisonerPoison' | 'PoisonerSnake' | 'Projectile'
    | 'ProjectilePassingThrough' | 'ProjectileRandomAoe' | 'ProjectileStun' | 'ProjectileWithWeapon' | 'PveEffectWithParams' | 'PveModifier' | 'Ray'
    | 'SandPhantomAutoAttack' | 'SandPhantomCloninig' | 'SandPhantomUlt' | 'ScorpioBorrowing' | 'ScorpioUlt' | 'SelfEffect' | 'SelfEffectUpdate'
    | 'ShamanChainBomb' | 'ShamanHeal' | 'ShamanPassive' | 'Spawn' | 'SpearmanAllyLinkSpeedBoost' | 'StealHpToTeammate' | 'SunPriestDefenders'
    | 'SunPriestFlamingSphere' | 'SunPriestUlt' | 'SunSupportAoe' | 'SunSupportHealOne' | 'SunSupportPassive' | 'TailedBurst' | 'TailedPassive'
    | 'TailedSphere' | 'TelekinesisThrow' | 'TitanEarthMeleeUlt' | 'TitanEarthRangeProjectile' | 'TitanEarthRangeUlt' | 'TitanEarthSpecialAttack'
    | 'TitanEarthSpecialUlt' | 'TitanEarthUltraSkill' | 'TitanEarthUltraUlt' | 'TitanFireAutoAttack' | 'TitanFireMeleeUlt' | 'TitanFireRangeUlt'
    | 'TitanFireSpecialUlt' | 'TitanFireUltraSkill' | 'TitanFireUltraUlt' | 'TitanProjectile' | 'TitanWaterAutoAttack' | 'TitanWaterMeleeUlt'
    | 'TitanWaterRangeProjectile' | 'TitanWaterRangeUlt' | 'TitanWaterSpecialUlt' | 'TitanWaterUltraSkill' | 'TitanWaterUltraUlt' | 'TutorialMissionHero'
    | 'UltAbaddon' | 'UltAbaddonOld' | 'UltArachne' | 'UltArbalester' | 'UltArcherJump' | 'UltCanonneer' | 'UltDaredevil' | 'UltDreamDevourer'
    | 'UltDreamDevourerShort' | 'UltGlutton' | 'UltHuntress' | 'UltJudge' | 'UltKnight' | 'UltMage' | 'UltMageV63' | 'UltOrion' | 'UltPaladin'
    | 'UltPirate' | 'UltPoisoner' | 'UltShaman' | 'UltSolar' | 'UltSpearman' | 'UltSpellStealer' | 'UltSunSupport' | 'UltTailed' | 'UnchainedStrike'
    | 'ValueSkillModifier' | 'ValueSkillModifierWithArea' | 'ValueSkillsModifier' | 'VampireAura' | 'VampireHeal' | 'VampireUlt' | 'VampireWave'
    | 'WinterBirdAttack' | 'WinterBirdBlizzard' | 'WinterConvertProjectile' | 'WinterHeadChanneling' | 'WinterShamanBossAttack' | 'WinterShamanBossBlizzard'
    | 'WinterShamanBossFreeze' | 'WinterValikirieMeleeWithFxIfNotClose' | 'WinterValkyrieBlock' | 'corrupted.Hero7002Ult' | 'corrupted.Hero7013Ult'
    | 'corrupted.Hero7015Ult' | 'corrupted.Hero7024ToxicCloud'

export type SkillBehaviorDoBase = 'PA' | 'MP' | 'HP' | 'FP' | 'STR' | '1021'
export type SkillBehaviorDoType = '% attack buff'| '% for absorb'| '% hp to sacrifice'| '% of boss hp'| '% of boss pa'| '% of damage to return'
    | '% of heal'| '%'| '%buff'| '%dmg'| '+ hp'| '-magicResist'| 'MD calculate %'| 'PA buff'| 'PAMP'| 'activation %'| 'antidodge +'| 'any'
    | 'armor debuff'| 'armor'| 'armorDecrease'| 'attack buff'| 'bonusDamage'| 'boost'| 'ce dmg multiplier'| 'ce duration %'| 'chance x2'
    | 'chance x4'| 'crystal hp'| 'damage +%'| 'damage bonus'| 'damageAbsorb'| 'debuf'| 'debuff'| 'dodge +'| 'dot % from current  hp'| 'dot'
    | 'duration +%'| 'duration'| 'effectOnReturn'| 'energy %'| 'energy decrease from aa'| 'energy per attack %'| 'energy per hit %'| 'flat crit +'
    | 'freeze multiplier'| 'fullDodgePercent'| 'heal %'| 'heal cap --'| 'heal over time'| 'heal per second'| 'heal per tick'| 'heal prevent'| 'heal'
    | 'health limit %'| 'health'| 'host heroId'| 'hp percent'| 'hp'| 'int steal'| 'knockback'| 'levelDecrease'| 'levelMultiplier'| 'life steal %'
    | 'lifesteal buff'| 'magic cd-%'| 'magic'| 'magicPower'| 'magicResist'| 'max damage %'| 'max heal'| 'max health'| 'minDodgePercent'| 'minHp %'
    | 'mitigation %'| 'mp buff'| 'multiplier'| 'noStunDamageReduce%'| 'num stacks'| 'pa buff'| 'pa debuf %'| 'percent'| 'percentIncrease'| 'physical'
    | 'physicalCritChance +'| 'physicalCritChance'| 'possession  hp'| 'primeStatDecrease'| 'reflect %'| 'resist buff %'| 'retarget %'| 'ricochetDamage %'
    | 'self % dmg'| 'self shield'| 'shield hp'| 'shield'| 'shieldCap'| 'shieldPart'| 'speed %'| 'speed buff %'| 'speed'| 'stat decrease'
    | 'stat'| 'stunDamageIncrease%'| 'target % dmg'| 'target hp %'| 'tooltip only'| 'vamp heal %'| 'x%'| 'x2 % chance'| 'x4 % chance'

export type SkillBehaviorEffect = "tee" | 'Blindness'| 'DamageReflectPercent'| 'DwarfGolemPassive'| 'FattyPassive'| 'Hero25Dodge'| 'Immune'| 'Levitation(0.12)'| 'Levitation(0.15)'| 'Stun'| 'agility'| 'armor'| 'blindness'| 'convert'| 'e'| 'earth'| 'elite'| 'fire'| 'freeze(0.5)'| 'knockback(110,0.15)'| 'knockback(150,0.2)'| 'knockback(200,0.2)'| 'knockback(45,0.15)'| 'knockback(50,0.15)'| 'lifesteal'| 'magicResist'| 'possession'| 'shield'| 'silence'| 'speed'| 'strength'| 'stun'| 't'| 'water'

export type SkillBehaviorParamType = 'absorbPercent'| 'areaOffset'| 'arrowHitRange'| 'counterattackCooldown'| 'damageHpPercentToTrigger'
    | 'damageMultiplier'| 'damageMultiplierPerHit'| 'delay'| 'doLayFishOnEarth'| 'elfHealMultiplier'| 'energyConvertMultiplier'| 'engineerMultiplier'
    | 'flightTime'| 'fullApplyTime'| 'fxOffset'| 'healCooldown'| 'healDelay'| 'hpLeftLimit'| 'hpPercentThreshold'| 'increaseRate'| 'maxMultiplier'
    | 'maxPow'| 'maxStacks'| 'minApplyTime'| 'skeletonConfig'| 'stackable'| 'statName'| 'ticksDelay'| 'tier'| 'tiers'| 'undeadPowerAdd'| 'velocity'
    | 'visualHpLeftGlowLimit'

export type SkillBehaviorDo = {
    base?: SkillBehaviorDoBase,
    type?: SkillBehaviorDoType,
    K?: number,
    scale?: number,
    c?: number
}

export type SkillBehaviorProjectile = {
    speed?: number,
    x?: number,
    y?: number
}



export type SkillBehaviorParams = {
    name: SkillBehaviorParamType,
    value?: string,
    scale?: number,
    y?: string
}

export type SkillBehavior = {
    animationDelay?: number,
    area?: number,
    behavior: SkillBehaviorType,
    cooldown?: number,
    duration?: number,
    hitrate?: number,
    hits?: number,
    params: SkillBehaviorParams[],
    prime?: SkillBehaviorDo,
    secondary?: SkillBehaviorDo,
    range?: number,
    effect?: SkillBehaviorEffect,
    projectile?: SkillBehaviorProjectile,
    cooldownInitial?: number

}

export type Skill = {
    id: number,
    hero: HeroTemplateId,
    power: number,
    tier: number,
    behavior: SkillBehavior,
    icon: string,
    disabled: number,


}