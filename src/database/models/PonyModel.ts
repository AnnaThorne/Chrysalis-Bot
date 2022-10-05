import { Document, model, Schema } from "mongoose";
export interface IPonyModel extends Document {
    id: string;
    ponyName: string;
    imgUrl: string,
}
export const Pony = new Schema({
    id: String,
    ponyName: String,
    imgUrl: String,
});

export default model<IPonyModel>("Pony", Pony);