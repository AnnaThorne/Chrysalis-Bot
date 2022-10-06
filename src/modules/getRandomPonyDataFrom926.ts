import {e926RequestRandomService} from "../utils/e621RequestService";

export const getRandomPonyDataFrom926 = async (tags: string) => {
    const ponyData = await e926RequestRandomService(tags);
    return ponyData;
}