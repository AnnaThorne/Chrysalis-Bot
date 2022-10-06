import {e621RequestService} from "../utils/e621RequestService";

export const getPonyDataFrom621 = async (tags: string) => {
    const ponyData = await e621RequestService(tags);
    return ponyData;
}