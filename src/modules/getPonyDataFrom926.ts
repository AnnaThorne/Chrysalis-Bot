import {e926RequestRandomService} from '../utils/e621RequestService';

export const getPonyDataFrom926 = async (tags: string) => {
	const ponyData = await e926RequestRandomService(tags);
	return ponyData;
};
