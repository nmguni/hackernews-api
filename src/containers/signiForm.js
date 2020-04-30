import React from "react";
import Signup from "../components/1-signup";
import {
  StoriesContainerWrapper,
  GlobalStyle,
} from "../styles/StoriesContainerStyles";

export const SigniForm = () => {
  return (
    <div>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <Signup />
      </StoriesContainerWrapper>
    </div>
  );
};
