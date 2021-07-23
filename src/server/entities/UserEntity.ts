import { Schema, Document, model } from 'mongoose';

/**
 * Entity to represent the user in the database and throughout the server
 */

export interface IUserEntity extends Document {
    playerId: number;
    login: string;
    password: string;
    playerName: string;
    coins: number;
    playerLevel: number;
    token?: string;
    activeSessionId?: string;
}

export const UserEntitySchema: Schema = new Schema({
    playerId: { type: Number, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    playerName: { type: String, required: true, unique: true },
    coins: { type: Number },
    playerLevel: { type: Number, required: true },
    token: { type: String },
    activeSessionId: { type: String },
});

// Export the model and return your IUser interface
export default model<IUserEntity>('User', UserEntitySchema);