import {e621RequestRandomService, e621RequestService} from "../utils/e621RequestService";

export const getRandomPonyDataFrom621 = async (tags: string) => {
    const ponyData = await e621RequestRandomService(tags);
    return ponyData;
}