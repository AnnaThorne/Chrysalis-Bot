import fetch from 'cross-fetch';
import {e621RandomtoPonyData, e621toPonyData} from './e621PostData';
import type {E621Json, E621RandomJson} from '../types/e621PostTypes';

export const e621RequestService = async (tags: string) => {
	try {
		const response = await fetch(`https://e621.net/posts.json?tags=${tags}&limit=1`, {headers: {'User-Agent': 'Chrysalis-Bot/0.2'}});
		if (response.ok) {
			const data = await response.json() as E621Json;
			return e621toPonyData(data);
		}

		throw new Error('Request failed');
	} catch (err: unknown) {
		console.log(err);
	}
};

export const e621RequestRandomService = async (tags: string) => {
	try {
		const response = await fetch(`https://e621.net/posts/random.json?tags=${tags}&limit=1`, {headers: {'User-Agent': 'Chrysalis-Bot/0.2'}});
		if (response.ok) {
			const data = await response.json() as E621RandomJson;
			return e621RandomtoPonyData(data);
		}

		throw new Error('Request failed');
	} catch (err: unknown) {
		console.log(err);
	}
};

export const e926RequestService = async (tags: string) => {
	try {
		const response = await fetch(`https://e926.net/posts.json?tags=${tags}&limit=1`, {headers: {'User-Agent': 'Chrysalis-Bot/0.2'}});
		if (response.ok) {
			const data = await response.json() as E621Json;
			return e621toPonyData(data);
		}

		throw new Error('Request failed');
	} catch (err: unknown) {
		console.log(err);
	}
};

export const e926RequestRandomService = async (tags: string) => {
	try {
		const response = await fetch(`https://e926.net/posts/random.json?tags=${tags}&limit=1`, {headers: {'User-Agent': 'Chrysalis-Bot/0.2'}});
		if (response.ok) {
			const data = await response.json() as E621RandomJson;
			return e621RandomtoPonyData(data);
		}

		throw new Error('Request failed');
	} catch (err: unknown) {
		console.log(err);
	}
};
