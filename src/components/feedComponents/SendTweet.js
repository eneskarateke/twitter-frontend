import React, { useState } from "react";

function SendTweet() {
  const [tweetText, setTweetText] = useState("");

  const handleInputChange = (e) => {
    setTweetText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tweet submitted:", tweetText);
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
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
}

export default SendTweet;
