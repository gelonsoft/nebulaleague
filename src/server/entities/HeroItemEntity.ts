import { Schema, Document, model } from 'mongoose';
import {HeroItemId} from "~/shared/models";

/**
 * Entity to represent the user in the database and throughout the server
 */

export interface IHeroItemEntity extends Document {
    playerId: number,
    itemId: number,
    count: number
}

export const HeroItemSchema: Schema = new Schema({
    playerId: { type: Number, required: true, unique: true },
    itemId: { type: Number, required: true, unique: true },
    count: { type: Number, required: true }
});

// Export the model and return your IUser interface
export default model<IHeroItemEntity>('HeroItem', HeroItemSchema);