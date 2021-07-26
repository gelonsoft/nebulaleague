import {Schema, type, MapSchema, ArraySchema} from "@colyseus/schema";
import {MainPlayerModel, PlayerModelSchema} from "~/shared/models";
import {SInventorySchema} from "~/shared/models/schemas/itemSchemas";
import {SHeroSchema} from "~/shared/models/schemas/heroSchemas";
//import {HeroSchema} from "~/shared/models/schemas/heroSchemas";

export class MainPlayerModelSchema extends Schema implements MainPlayerModel {
    @type('number')
    playerId: number;
    @type('string')
    playerName: string;
    @type('number')
    playerLevel: number;
    @type('string')
    token?: string
    @type('number')
    gold: number
    @type('number')
    stamina: number
    @type('number')
    lastStaminaUpdate: number
}

export class MainGameStateSchema extends Schema implements MainGameStateSchema {
    @type(MainPlayerModelSchema )
    player: MainPlayerModelSchema
    @type(SInventorySchema )
    inventory: SInventorySchema
    @type({map: SHeroSchema} )
    heroes: MapSchema<SHeroSchema>
   // @type({set: HeroSchema})
   // heroes: MapSchema<HeroSchema>
}