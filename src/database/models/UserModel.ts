import { Document, model, Schema } from "mongoose";
export interface IUserModel extends Document {
    discordId: string;
    points: number;
}
export const User = new Schema({
    discordId: String,
    points: Number,
});

export default model<IUserModel>("User", User);