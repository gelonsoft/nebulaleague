import { Schema, type} from '@colyseus/schema'
import {
    HeroItem, HeroItemId
} from "~/shared/models";

export class HeroItemSchema extends Schema implements HeroItem {
    @type('boolean')
    canCraft: boolean;
    @type('string')
    icon: string;
    @type('number')
    itemId: HeroItemId;
    @type('number')
    minLevel: number;
    @type('string')
    name: string;
}