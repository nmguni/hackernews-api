import axios from "axios";
import { selectFields } from "../selectors/selectFields";
import { questonsFields } from "../selectors/questonsFields";
// BASE
export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
// STORIES
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;
//  JOBS
export const newjobsUrl = `${baseUrl}jobstories.json`;
export const jobsUrl = `${baseUrl}item/`;
// COMMENTS
export const newAskUrl = `${baseUrl}askstories.json`;
export const askUrl = `${baseUrl}item/`;

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

// JOBS ID
export const getJobIds = async () => {
  const result = await axios.get(newjobsUrl).then(({ data }) => data);
  return result;
};

// ASK
export const getQuestions = async () => {
  const result = await axios.get(newAskUrl).then(({ data }) => data);
  return result;
};
