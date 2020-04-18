import styled from "styled-components";

export const StoryWrapper = styled.section`
  ${"" /* padding-top: 10px; */}
  margin-bottom: 20px;
  background-color: #364f6b;
  border-radius: 4px;
  padding: 18px;
  line-height: 2rem;
  ${"" /* border-top: 1px solid #cccccc; */}
  -webkit-box-shadow: -6px 7px 25px -11px rgba(0,0,0,0.75);
  -moz-box-shadow: -6px 7px 25px -11px rgba(0, 0, 0, 0.75);
  box-shadow: -6px 7px 25px -11px rgba(0, 0, 0, 0.75);

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #fff;
    ${"" /* background-color: #bbdefb; */}
    text-decoration: none;
    padding: 2.5px;
    border-radius: 4px;
  }
  a:hover {
    background-color: #fafafe;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;
width: 40%;
padding: .2rem;
border-radius: 4px;
background-color: #ffffffab;

  > span:first-child {
    margin-right: 10px;
  }

  > span:not(:first-child):before {
    content: '•'
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: 800;
  color: ${(props) => props.color || "red"};
`;
