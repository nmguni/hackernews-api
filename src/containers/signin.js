import React from "react";
import UserForm from "../components/userForm";
import {
  StoriesContainerWrapper,
  GlobalStyle
} from "../styles/StoriesContainerStyles";

export const Signin = () => {
  return (
    <div>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <UserForm />
      </StoriesContainerWrapper>
    </div>
  );
};
