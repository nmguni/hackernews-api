/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";
import { mapTime } from "../mappers/mapTime";

export const Jobs = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  // return story && story.url ? (
  //   <StoryWrapper data-test-id="story">
  //     <StoryTitle>
  //       <a title="Up Vote">^</a>
  //       <a href={story.url}>{story.title}</a>
  //     </StoryTitle>

  //     <StoryMeta>
  //       <span data-tested="story-by">
  //         <StoryMetaElement color="#000">By:</StoryMetaElement>
  //         {story.by}
  //       </span>

  //       <span data-tested="story-tim">
  //         <StoryMetaElement color="#000">Posted: </StoryMetaElement>
  //         {mapTime(story.time)}
  //       </span>
  //     </StoryMeta>
  //   </StoryWrapper>
  // ) : null;
  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
