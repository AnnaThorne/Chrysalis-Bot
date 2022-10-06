import fetch from 'cross-fetch';
import {e621RandomtoPonyData, e621toPonyData} from "./e621PostData";
import {e621JSON, e621RandomJSON} from "../interfaces/e621PostTypes";

export const e621RequestService = async (tags: string) => {
    try {
        const response = await fetch(`https://e621.net/posts.json?tags=${tags}&limit=1`, {headers: {"User-Agent": "Chrysalis-Bot/0.2"},})
        if (response.ok) {
            const data = await response.json() as e621JSON;
            return e621toPonyData(data);
        } else {
            throw new Error("Request failed");
        }
    } catch (err) {
        console.log(err);
    }
}

export const e621RequestRandomService = async (tags: string) => {
    try {
        const response = await fetch(`https://e621.net/posts/random.json?tags=${tags}&limit=1`, {headers: {"User-Agent": "Chrysalis-Bot/0.2"},})
        if (response.ok) {
            const data = await response.json() as e621RandomJSON;
            return e621RandomtoPonyData(data);
        } else {
            throw new Error("Request failed");
        }
    } catch (err) {
        console.log(err);
    }
}