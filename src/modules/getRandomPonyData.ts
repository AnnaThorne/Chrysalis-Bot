import PonyModel from "../database/models/PonyModel";

export const getRandomPonyData = async () => {
    const ponyCount = await PonyModel.count();
    const random = Math.floor(Math.random() * ponyCount);
    const ponyData = await PonyModel.findOne().skip(random);
    return ponyData;
}