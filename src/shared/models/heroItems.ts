import {
    AbilityAction,
    AbilityDrawingStyle,
    AbilityName,
    HeroRanks,
    HeroRoles,
    ProjectileName
} from "~/shared/models/base";
import {MapSchema} from "@colyseus/schema";

export enum HeroItemId  {
  /*  Renri,
    Rohirrilros,
    Tadril,
    Winglia,
    Danlor,
    Dae,
    Azloran,
    Thasdir,
    Anamoth,
    Rielthir,
    Drathor,
    Eadoral,
    Xawen,
    Edhelwen,
    Amda,
    Rilthalion,
    Shimner,
    Lgaladh,
    Haltar,
    Gnor,
    Doril,
    Hadren,
    Alea,
    Amror,
    Liadel,
    Kithcaror,
    Rod,
    Dehdhel,
    Feran,
    Disran,
    Mielior,
    Ronddath,
    Arphor,
    Laldral,
    Thelfin,
    Dalwing,
    Tafind,
    Maiha,
    Ransael,
    Aran,
    Gramda,
*/
}

export type HeroItem = {
    itemId: HeroItemId,
    name: string,
    minLevel: number,
    icon: string,
    canCraft: boolean,
    itemRecipe?: ItemRecipe
}

export type ItemRecord = {
    itemId: HeroItemId,
    count: number
}

export type ItemRecipe = {
    items: MapSchema<ItemRecord>
}