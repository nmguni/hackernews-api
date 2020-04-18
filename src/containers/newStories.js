import React, { useEffect, useState } from "react";
import { getStroyIds } from "../services/hnApi";
import { StoriesContainer } from "./StoriesContainer";

export const NewStories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStroyIds().then(data => setStoryIds(data));
  }, []);

  return (
    <div>
      <StoriesContainer />
    </div>
  );
};
