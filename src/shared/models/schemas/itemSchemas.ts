import {MapSchema, Schema, type} from '@colyseus/schema'
import {SInventory, SItemGear, SItemScroll} from "~/shared/models/item";

export class SItemGearSchema extends Schema implements SItemGear {
    @type('number')
    id: number;
    @type('number')
    c: number;
}

export class SItemScrollSchema extends Schema implements SItemScroll {
    @type('number')
    id: number;
    @type('number')
    c: number;
}

export class SInventorySchema extends Schema implements SInventory {
    @type({map: SItemGearSchema})
    gears: MapSchema<SItemGear>;
    @type({map: SItemScrollSchema})
    scrolls: MapSchema<SItemScroll>;
}