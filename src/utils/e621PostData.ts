import type {PonyData} from './ponyData';
import type {E621Json, E621RandomJson} from '../types/e621PostTypes';

export const e621toPonyData = (data: E621Json) => {
	const ponyData: PonyData = {
		id: data.posts[0].id.toString(),
		ponyName: 'Artist: ' + data.posts[0].tags.artist[0],
		imgUrl: data.posts[0].file.url,
	};
	return ponyData;
};

export const e621RandomtoPonyData = (data: E621RandomJson) => {
	const ponyData: PonyData = {
		id: data.post.id.toString(),
		ponyName: 'Artist: ' + data.post.tags.artist[0],
		imgUrl: data.post.file.url,
	};
	return ponyData;
};
