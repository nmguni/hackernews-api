/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants";
import { debounce } from "../utils/debounce";

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  // handle scroll method
  const handleScroll = debounce(() => {
    // get window
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;

    // if count is 480 + story inc(30)  = 510
    // dont let user keep scolling.
    // adds 30 + 30 ... 500
    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // unsubscribe from event
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
