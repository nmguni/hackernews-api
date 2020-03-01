import React, { useEffect, useState, memo } from "react";
import {
  StoriesContainerWrapper,
  GlobalStyle
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { getStroyIds } from "../services/hnApi";
import { Story } from "../components/Story";

export const NewStories = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStroyIds().then(data => setStoryIds(data));
  }, []);

  return (
    <div>
      <GlobalStyle />
      <h1 style={{ fontSize: "8rem" }}>New Stories</h1>
      {/* <StoriesContainerWrapper dtat-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper> */}
    </div>
  );
};
