import React, { useEffect, useState } from "react";
import { getStroyIds } from "../services/hnApi";
import { Story } from "../components/Story";
import {
  StoriesContainerWrapper,
  GlobalStyle,
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { BrowserRouter as Router } from "react-router-dom";
export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStroyIds().then((data) => setStoryIds(data));
  }, []);

  // [] when them component mounts do this...
  // [stoyIdsUpdates (true/false)] useEffect will watch for change

  return (
    <div>
      <Router>
        <GlobalStyle />
        <StoriesContainerWrapper dtat-test-id="stories-container">
          {storyIds.slice(0, count).map((storyId) => (
            <Story key={storyId} storyId={storyId} />
          ))}
        </StoriesContainerWrapper>
      </Router>
    </div>
  );
};

// user gets on page at 0 and 30
// user scrolls 0 and 60...
