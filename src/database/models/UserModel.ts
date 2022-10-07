import type {Document} from 'mongoose';
import {model, Schema} from 'mongoose';
export type UserModel = {
	discordId: string;
	points: number;
} & Document;
export const user = new Schema({
	discordId: String,
	points: Number,
});

export default model<UserModel>('User', user);
