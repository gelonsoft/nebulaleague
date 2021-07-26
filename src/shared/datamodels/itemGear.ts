import {BattleStats} from "~/shared/datamodels/heroTemplate";

export type ItemGear = {
    id: number,
    battleStatData: BattleStats,
    craftRecipe: {gear?: Record<string,number>, scroll?: Record<string,number>, gold: number} | null,
    enchantMultiplier: number,
    color: number,
    fragmentMergeCost: { fragmentCount: number,gold: number } | null,
    fragmentBuyCost:  {gold: number} | null,
    fragmentSellCost: {gold: number} | null,
    buyCost: {gold: number},
    buySpecialCost: number| null,
    fragmentSpecialCost: number | null,
    sellCost: {gold: number},
    enchantValue: number,
    fragmentEnchantValue: number,
    teamLevel: number,
    heroLevel: number,
    assetAtlas: number,
    assetTexture: string,
    obtainType: string | null
}