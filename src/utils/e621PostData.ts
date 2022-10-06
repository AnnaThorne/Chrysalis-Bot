import { PonyData } from "./ponyData";
import { e621JSON, e621RandomJSON } from "../interfaces/e621PostTypes";

export const e621toPonyData = (data: e621JSON) => {
  const helperData = data;
  const ponyData: PonyData = {
    id: helperData.posts[0].id.toString(),
    ponyName: "Artist: " + helperData.posts[0].tags.artist[0],
    imgUrl: helperData.posts[0].file.url,
  };
  return ponyData;
};

export const e621RandomtoPonyData = (data: e621RandomJSON) => {
  const helperData = data;
  const ponyData: PonyData = {
    id: helperData.post.id.toString(),
    ponyName: "Artist: " + helperData.post.tags.artist[0],
    imgUrl: helperData.post.file.url,
  };
  return ponyData;
};
