import type {Document} from 'mongoose';
import {model, Schema} from 'mongoose';
export type PonyModel = {
	id: string;
	ponyName: string;
	imgUrl: string;
} & Document;
export const pony = new Schema({
	id: String,
	ponyName: String,
	imgUrl: String,
});

export default model<PonyModel>('pony', pony);
