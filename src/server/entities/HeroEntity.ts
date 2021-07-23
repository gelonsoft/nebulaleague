import { Schema, Document, model } from 'mongoose';

/**
 * Entity to represent the user in the database and throughout the server
 */

export interface IHeroEntity extends Document {
    playerId: number,
    heroId: number,
    xp: number
    level: number,
    color: number,
    slot1: boolean,
    slot2: boolean,
    slot3: boolean,
    slot4: boolean,
    slot5: boolean,
    slot6: boolean,
    skill1: number,
    skill2: number,
    skill3: number,
    skill4: number,
    power: number,
    star: number,
}

export const HeroSchema: Schema = new Schema({
    playerId: { type: Number, required: true },
    heroId: { type: Number, required: true },
    xp: { type: Number },
    level: { type: Number },
    color: { type: Number },
    slot1: { type: Boolean },
    slot2: { type: Boolean },
    slot3: { type: Boolean },
    slot4: { type: Boolean },
    slot5: { type: Boolean },
    slot6: { type: Boolean },
    skill1: { type: Number },
    skill2: { type: Number },
    skill3: { type: Number },
    skill4: { type: Number },
    power: { type: Number },
    star: { type: Number },
});

// Export the model and return your IUser interface
export default model<IHeroEntity>('Hero', HeroSchema);