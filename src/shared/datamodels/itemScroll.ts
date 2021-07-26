import {MapSchema} from "@colyseus/schema";
import {BattleStats} from "~/shared/datamodels/heroTemplate";



export type ItemScroll = {
    id: number,
    assetAtlas: number,
    assetTexture: string,
    color: number,
    fragmentMergeCost: { fragmentCount: number,gold: number } | null,
    sellCost: {gold: number},
    buyCost: {gold: number} | null,
    buySpecialCost: number| null,
    fragmentSpecialCost: number | null,
    fragmentSellCost: {gold: number} | null,
    fragmentBuyCost:  {gold: number} | null,
    enchantValue: number,
    fragmentEnchantValue: number,
    heroLevel: number | null,
    teamLevel: number,
    obtainType: string | null
//    battleStatData: BattleStats,
//    craftRecipe: {gear?: Record<string,number>, scroll?: Record<string,number>, gold: number} | null,
}