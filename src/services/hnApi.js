import axios from "axios";
import { selectFields } from "../selectors/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async storyId => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};

// storye ids
export const getStroyIds = async () => {
  // micro task que
  // once you got the data get the data
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return result;
};
