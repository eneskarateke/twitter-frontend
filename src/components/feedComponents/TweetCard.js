import React from "react";

function TweetCard({ tweet }) {
  return (
    <div>
      <p>{tweet.content}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <button>Reply</button>
          <span>{tweet.replies}</span>
        </div>

        <div>
          <button>Retweet</button>
          <span>{tweet.retweets}</span>
        </div>

        <div>
          <button>Like</button>
          <span>{tweet.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
