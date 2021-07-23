import {
    HeroRanks,
    HeroRoles
} from "~/shared/models/base";

import {HeroItemId} from "~/shared/models/heroItems";

export enum HeroTemplateId  {
    zood,
    wand,
    lara,
    reen
}

export type MainStat  = "strength" | "agility" | "intelligence"

export enum HeroColorId {
    gray,
    green,
    blue,
    purple,
    yellow,
}

export enum SkillId {

}

export type HeroTemplate = {
    heroId: HeroTemplateId,
    perk: number[],
    role: HeroRoles,
    battleOrder: number,
    mainStat: MainStat,
    baseStats: BattleStats,
    color: Map<HeroColorId,{items: [HeroItemId],battlestats?: BattleStats}>
    stars: [BattleStats],
    fragmentSpecialCost: number,
    fragmentSellCost: {gold: number},
    skill: [SkillId],
    icon: string,
    model: string,
}

export type HeroAbilityName =
    | 'attack1'
    | 'heal1'
    | 'power1'
    | 'magicProtection'

export type HeroAbilityModel = {
    name: HeroAbilityName,
    description: string,
    time: number,
    basicPower: number
}


export type BattleStats = {
        agility?: number,
        armor?: number,
        armorPenetration?: number,
        dodge?: number,
        hp?: number,
        intelligence?: number,
        lifesteal?: number,
        magicPenetration?: number,
        magicPower?: number,
        magicResist?: number,
        physicalAttack?: number,
        physicalCritChance?: number,
        strength?: number
}

