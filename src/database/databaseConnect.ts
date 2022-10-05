import {connect} from "mongoose";

export const databaseConnect = async () => {

    await connect(process.env.MONGO_URI as string);
    console.log("db connected");
}