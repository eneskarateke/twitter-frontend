import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendTweet } from "../../actions";

function SendTweet() {
  const [tweetText, setTweetText] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.tweet);

  const handleInputChange = (e) => {
    setTweetText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTweetText = tweetText.trim();

    if (!trimmedTweetText) {
      alert("Tweet cannot be blank.");
      return;
    }

    if (trimmedTweetText.length > 280) {
      alert("Tweet length cannot be more than 280.");
      return;
    }

    dispatch(sendTweet(trimmedTweetText));

    setTweetText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={tweetText}
          onChange={handleInputChange}
          placeholder="What's happening?"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Tweet"}
        </button>
      </form>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default SendTweet;
