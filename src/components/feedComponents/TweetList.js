import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "../../actions";

import TweetCard from "./TweetCard";

function TweetList() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.feed.tweets);
  const reversedTweets = [...tweets].reverse();
  useEffect(() => {
    dispatch(setTweets());
  }, [dispatch]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {reversedTweets.map((tweet, index) => (
        <div key={index} style={{ display: "flex", flexDirection: "column" }}>
          <TweetCard tweet={tweet} />
        </div>
      ))}
    </div>
  );
}

export default TweetList;
