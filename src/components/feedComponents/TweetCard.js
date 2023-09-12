import React from "react";
import { useDispatch } from "react-redux";
import { deleteTweet } from "../../actions";

function TweetCard({ tweet }) {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteTweet(tweet.id));
  };

  return (
    <div>
      <p>{tweet.post}</p> <span>{tweet.userId}</span>
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

        <div>
          <button onClick={handleDeleteClick}>Delete Tweet</button>
        </div>

        <div>
          <button>Update Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
