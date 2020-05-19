import React, { useEffect, useState } from "react";
import { getJobIds } from "../services/hnApi";
import { Jobs } from "../components/jobs";
import {
  StoriesContainerWrapper,
  GlobalStyle,
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const JobsContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getJobIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper dtat-test-id="stories-container">
        {storyIds.slice(0, count).map((storyId) => (
          <Jobs key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
