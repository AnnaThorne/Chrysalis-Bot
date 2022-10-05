import PonyModel from "../database/models/PonyModel";

export const getPonyData = async (name: string) => {
    const ponyData = await PonyModel.findOne({ponyName: name.toLowerCase()});
    return ponyData;
}