import React, { useEffect, useState } from "react";
import { getQuestions, getStory } from "../services/hnApi";
import { Questions } from "../components/questions";

export const Ask = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getQuestions().then(data => setStoryIds(data));
  }, []);

  return storyIds.map(storyId => <Questions key={storyId} storyId={storyId} />);
};
