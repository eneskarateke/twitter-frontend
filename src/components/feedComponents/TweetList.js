import React from "react";
import TweetCard from "./TweetCard";

function TweetList() {
  const tweets = [
    {
      id: "SDTwt141",
      username: "PixelPainter",
      content:
        "Pixels: The building blocks of our digital universe. We're all pixel architects. 🧱🖼️ #DigitalWorld",
      likes: 251,
      retweets: 79,
      replies: [],
    },
    {
      id: "SDTwt142",
      username: "CodeConductor",
      content:
        "Coding like a puzzle: You've got to find the right pieces for the perfect picture. 🧩💻 #CodePuzzles",
      likes: 285,
      retweets: 96,
      replies: [],
    },
    {
      id: "SDTwt143",
      username: "LayoutLuminary",
      content:
        "Web design: Where lines of code dance together to create a visual symphony. 🎵🎉 #WebMagic",
      likes: 219,
      retweets: 70,
      replies: [],
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {tweets.map((tweet, index) => (
        <div key={index} style={{ display: "flex", flexDirection: "column" }}>
          <TweetCard tweet={tweet} />
        </div>
      ))}
    </div>
  );
}

export default TweetList;
