import { Schema, type, MapSchema, ArraySchema } from '@colyseus/schema'
import {SHero} from "~/shared/models";

export class SHeroSchema extends Schema implements SHero {
    @type('number')
    heroId: number;
    @type('number')
    xp: number;
    @type('number')
    level: number;
    @type('number')
    color: number;
    @type('number')
    slot1: number;
    @type('number')
    slot2: number;
    @type('number')
    slot3: number;
    @type('number')
    slot4: number;
    @type('number')
    slot5: number;
    @type('number')
    slot6: number;
    @type('number')
    skill1: number;
    @type('number')
    skill2: number;
    @type('number')
    skill3: number;
    @type('number')
    skill4: number;
    @type('number')
    power: number;
    @type('number')
    star: number;
}


