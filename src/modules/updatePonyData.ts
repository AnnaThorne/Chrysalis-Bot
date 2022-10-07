import PonyModel from "../database/models/PonyModel";
export const updatePonyData = async (name: string, imgUrl: string) => {
  const ponyData = await PonyModel.findOneAndUpdate(
    { ponyName: name },
    { imgUrl: imgUrl }
  );
  return ponyData;
};
