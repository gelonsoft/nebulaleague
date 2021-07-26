import { Schema, Document, model } from 'mongoose';

/**
 * Entity to represent the user in the database and throughout the server
 */

export interface IUserEntity extends Document {
    playerId: number;
    login: string;
    password: string;
    playerName: string;
    gold: number;
    playerLevel: number;
    token?: string;
    activeSessionId?: string;
    stamina: number,
    lastStaminaUpdate: number
}

export const UserEntitySchema: Schema = new Schema({
    playerId: { type: Number, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    playerName: { type: String, required: true, unique: true },
    gold: { type: Number },
    playerLevel: { type: Number, required: true },
    token: { type: String },
    activeSessionId: { type: String },
    stamina: { type: Number },
    lastStaminaUpdate: { type: Number }
});

// Export the model and return your IUser interface
export default model<IUserEntity>('User', UserEntitySchema);