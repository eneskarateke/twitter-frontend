import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./feedComponents/Navbar";
import SendTweet from "./feedComponents/SendTweet";
import TweetList from "./feedComponents/TweetList";
import Explore from "./feedComponents/Explore";
import { SET_TWEET } from "../actions";

export default function Feed() {
  const token = useSelector((state) => state.feed.token);
  const tweets = useSelector((state) => state.feed.tweets);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    dispatch({
      type: SET_TWEET,
      payload: tweets,
    });
  }, [tweets, dispatch]);

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
