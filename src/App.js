import React from "react";
import { StoriesContainer } from "./containers/StoriesContainer";
import { JobsContainer } from "./containers/jobsContainer";
import { Ask } from "./containers/askContainer";
import { UserForm } from "./components/userForm";

export const App = () => <StoriesContainer />;

// export const App = () => {
//   const [storyIds, setStoryIds] = useState([]);

//   useEffect(() => {
//     getJobIds().then(data => setStoryIds(data));
//   }, []);

//   return <p>{JSON.stringify(storyIds)}</p>;
// };

// comments
// export const App = () => {
//   const [storyIds, setStoryIds] = useState([]);

//   useEffect(() => {
//     getComments().then(lemons => lemons && setStoryIds(lemons));
//   }, []);

//   return <p>{JSON.stringify(storyIds)}</p>;
// };
