import {Schema, type, MapSchema, ArraySchema} from "@colyseus/schema";
import {MainPlayerModel, PlayerModelSchema} from "~/shared/models";
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
    coins: number
    @type('number')
    playerEnergy: number
}

export class MainGameStateSchema extends Schema implements MainGameStateSchema {
    @type(MainPlayerModelSchema )
    player: MainPlayerModelSchema
   // @type({set: HeroSchema})
   // heroes: MapSchema<HeroSchema>
}