
export type MainStat  = "strength" | "agility" | "intelligence"

export type HeroTemplateColorData =  {
    battleStatData?: BattleStats,
    items: number[]
}


export type HeroTemplateColor = Record<string,HeroTemplateColorData>

export type HeroTemplateStarsData = {
    battleStatData: BattleStats
}

export type HeroTemplateStars = Record<string, HeroTemplateStarsData>

export type HeroRoles = "front" | "back" | "middle"

export type HeroTemplate = {
    id: number,
    perk: number[] | null,
    role: HeroRoles | null,
    roleExtended: string[] | null,
    characterType: string | null,
    silhouette: string | null,
    scale: number | null,
    type: string | null,
    runes: number[] | null,
    artifacts: number[] | null,
    battleOrder: number,
    mainStat: MainStat,
    baseStats: BattleStats | [],
    color: HeroTemplateColor
    stars: HeroTemplateStars,
    asset: string,
    iconAssetAtlas: number,
    iconAssetTexture: string,
    fragmentSpecialCost: number | null,
    fragmentSellCost: {gold: number} | null,
    fragmentBuyCost: {starmoney: string} | null,
    obtainType: string | null,
    epicArtAsset: string | null,
    skill: number[] | Record<string,number>,
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
        anticrit?: number,
        antidodge?: number,
        strength?: number
}

