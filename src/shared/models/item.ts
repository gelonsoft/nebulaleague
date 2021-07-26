import {MapSchema} from "@colyseus/schema";
import {User} from "~/shared/models/base";

export type SItemGear = {
    id: number,
    c: number
}
export type SItemScroll = {
    id: number,
    c: number
}

export type SInventory = {
    gears: MapSchema<SItemGear>,
    scrolls: MapSchema<SItemScroll>,
}