import React from "react";
import Navbar from "./feedComponents/Navbar";
import SendTweet from "./feedComponents/SendTweet";
import TweetList from "./feedComponents/TweetList";
import Explore from "./feedComponents/Explore";

export default function Feed() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SendTweet />
        <TweetList />
      </div>
      <div>
        <Explore />
      </div>
    </div>
  );
}
