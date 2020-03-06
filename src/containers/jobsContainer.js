import React, { useEffect, useState } from "react";
import { getJobIds, getStory } from "../services/hnApi";
import { Jobs } from "../components/jobs";
import {
  StoriesContainerWrapper,
  GlobalStyle
} from "../styles/StoriesContainerStyles";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";

export const JobsContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <h1>Hacker news APi</h1>
      <StoriesContainerWrapper dtat-test-id="stories-container">
        {storyIds.map(storyId => (
          <Jobs key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
