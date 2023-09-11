import React, { useState } from "react";
import TwitterLogo from "../../logos/twitter-logo.svg"; // Replace with the actual path to your SVG file

function SendTweet() {
  // Create a state variable to store the text input value
  const [tweetText, setTweetText] = useState("");

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    setTweetText(e.target.value);
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can perform any action with the tweetText here, e.g., send it to a server
    console.log("Tweet submitted:", tweetText);
    // Clear the input field
    setTweetText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4" // You can adjust the number of rows as needed
          cols="50" // You can adjust the number of columns as needed
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
