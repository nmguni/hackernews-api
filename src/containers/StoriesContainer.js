import React, { useEffect, useState, memo } from "react";
import { getStroyIds } from "../services/hnApi";
import { Story } from "../components/Story";
import {
  StoriesContainerWrapper,
  GlobalStyle
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { Header } from "./headerContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./nav";
export const StoriesContainer = () => {
  // const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStroyIds().then(data => setStoryIds(data));
  }, []);

  // [] when them component mounts do this...
  //[stoyIdsUpdates (true/false)] useEffect will watch for change

  return (
    <div>
      <Router>
        <GlobalStyle />
        {/* <Header /> */}
        <Nav />

        {/* <StoriesContainerWrapper dtat-test-id="stories-container">
          <h1>Hacker News Stories</h1>
          {storyIds.slice(0, count).map(storyId => (
            <Story key={storyId} storyId={storyId} />
          ))}
        </StoriesContainerWrapper> */}
      </Router>
    </div>
  );
};

// user gets on page at 0 and 30
// user scrolls 0 and 60...
