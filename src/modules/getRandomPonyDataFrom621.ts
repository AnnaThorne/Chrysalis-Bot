import { e621RequestRandomService } from "../utils/e621RequestService";

export const getRandomPonyDataFrom621 = async (tags: string) => {
  const ponyData = await e621RequestRandomService(tags);
  return ponyData;
};
