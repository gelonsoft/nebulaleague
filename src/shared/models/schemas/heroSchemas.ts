import { Schema, type, MapSchema, ArraySchema } from '@colyseus/schema'
import {
     HeroItemId,
    HeroRanks,
    HeroTemplate,
} from "~/shared/models";

/*
export class HeroSchema extends Schema implements Hero {
    @type('number')
    agility: number;
    @type('number')
    armor: number;
    @type('number')
    health: number;
    @type('number')
    id: number;
    @type('number')
    intelligence: number;
    @type('boolean')
    isItemPlaced1: boolean;
    @type('boolean')
    isItemPlaced2: boolean;
    @type('boolean')
    isItemPlaced3: boolean;
    @type('boolean')
    isItemPlaced4: boolean;
    @type('boolean')
    isItemPlaced5: boolean;
    @type('boolean')
    isItemPlaced6: boolean;
    @type('number')
    magicAttack: number;
    @type('number')
    magicPiercing: number;
    @type('number')
    magicProtection: number;
    @type('string')
    name: string;
    @type('number')
    physicAttack: number;
    @type('number')
    physicPiercing: number;
    @type('number')
    power: number;
    @type('number')
    pureAttack: number;
    @type('string')
    rank: HeroRanks;
    @type('number')
    stars: number;
    @type('number')
    abilityLevel1: number;
    @type('number')
    abilityLevel2: number;
    @type('number')
    abilityLevel3: number;
    @type('number')
    abilityLevel4: number;
    @type('string')
    heroTemplate: HeroTemplate;
}*/
/*
export class HeroRanksItemsSchema extends Schema implements HeroRanksItems {
    @type('number')
    item1: HeroItemId;
    @type('number')
    item2: HeroItemId;
    @type('number')
    item3: HeroItemId;
    @type('number')
    item4: HeroItemId;
    @type('number')
    item5: HeroItemId;
    @type('number')
    item6: HeroItemId;
    @type('number')
    rank: HeroRanks;
}*/

/*export class HeroTemplateSchema extends Schema implements HeroTemplate {
    @type('string')
    ability1: HeroAbilityName;
    @type('string')
    ability2: HeroAbilityName;
    @type('string')
    ability3: HeroAbilityName;
    @type('string')
    ability4: HeroAbilityName;
    @type('number')
    agility: number;
    @type('number')
    armor: number;
    @type('number')
    health: number;
    @type('string')
    heroTemplateId: HeroTemplateId;
    @type('string')
    icon: string;
    @type('number')
    intelligence: number;
    @type('number')
    magicPiercing: number;
    @type('number')
    magicProtection: number;
    @type('string')
    model: string;
    @type('string')
    name: string;
    @type('number')
    physicPiercing: number;
    @type('string')
    position: HeroPosition;
    @type('number')
    power: number;
    @type('string')
    rank: HeroRanks;
    @type({ array: HeroRanksItemsSchema })
    rankItems: ArraySchema<HeroRanksItems>;
    @type('string')
    role: HeroRoles;
}*/

