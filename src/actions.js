import axios from "axios";
export const DELETE_TWEET = "DELETE_TWEET";
export const LIKE_TWEET_SUCCESS = "LIKE_TWEET_SUCCESS";
export const LIKE_TWEET_FAILURE = "LIKE_TWEET_FAILURE";
export const LIKE_TWEET_REQUEST = "LIKE_TWEET_REQUEST";
export const DELETE_REPLY_REQUEST = "DELETE_REPLY_REQUEST";
export const DELETE_REPLY_SUCCESS = "DELETE_REPLY_SUCCESS";
export const DELETE_REPLY_FAILURE = "DELETE_REPLY_FAILURE";
export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

export const UNLIKE_TWEET_SUCCESS = "UNLIKE_TWEET_SUCCESS";
export const UNLIKE_TWEET_FAILURE = "UNLIKE_TWEET_FAILURE";
export const UNLIKE_TWEET_REQUEST = "UNLIKE_TWEET_REQUEST";

export const SET_TWEET = "SET_TWEET";
export const SET_TOKEN = "SET_TOKEN";

export const SEND_REPLY_REQUEST = "SEND_REPLY_REQUEST";
export const SEND_REPLY_SUCCESS = "SEND_REPLY_SUCCESS";
export const SEND_REPLY_FAILURE = "SEND_REPLY_FAILURE";

export const SEND_TWEET_REQUEST = "SEND_TWEET_REQUEST";
export const SEND_TWEET_SUCCESS = "SEND_TWEET_SUCCESS";
export const SEND_TWEET_FAILURE = "SEND_TWEET_FAILURE";

export const retweetRequest = () => ({
  type: RETWEET_REQUEST,
});

export const retweetSuccess = () => ({
  type: RETWEET_SUCCESS,
});

export const retweetFailure = (error) => ({
  type: RETWEET_FAILURE,
  payload: error,
});

export const deleteReplyRequest = () => ({
  type: DELETE_REPLY_REQUEST,
});

export const deleteReplySuccess = (replyId) => ({
  type: DELETE_REPLY_SUCCESS,
  payload: replyId,
});

export const deleteReplyFailure = (error) => ({
  type: DELETE_REPLY_FAILURE,
  payload: error,
});
export const sendTweetRequest = () => ({
  type: SEND_TWEET_REQUEST,
});

export const sendTweetSuccess = (tweet) => ({
  type: SEND_TWEET_SUCCESS,
  payload: tweet,
});

export const sendTweetFailure = (error) => ({
  type: SEND_TWEET_FAILURE,
  payload: error,
});

export const likeTweetSuccess = (tweetId) => ({
  type: LIKE_TWEET_SUCCESS,
  payload: tweetId,
});

export const likeTweetFailure = (error) => ({
  type: LIKE_TWEET_FAILURE,
  payload: error,
});
export const likeTweetRequest = () => ({
  type: LIKE_TWEET_REQUEST,
});

export const unlikeTweetSuccess = (tweetId) => ({
  type: UNLIKE_TWEET_SUCCESS,
  payload: tweetId,
});

export const unlikeTweetFailure = (error) => ({
  type: UNLIKE_TWEET_FAILURE,
  payload: error,
});
export const unlikeTweetRequest = () => ({
  type: UNLIKE_TWEET_REQUEST,
});

export const retweetTweet = (tweetId) => {
  return async (dispatch, getState) => {
    dispatch(retweetRequest());

    try {
      const token = getState().feed.token;
      if (!token) {
        throw new Error("No token available. Unable to retweet.");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(
        `http://localhost:8080/tweet/retweet/${tweetId}`,
        null,
        config
      );

      dispatch(retweetSuccess());
      dispatch(setTweets());
    } catch (error) {
      dispatch(retweetFailure(error));
    }
  };
};

export const deleteReply = (replyId) => {
  return async (dispatch, getState) => {
    dispatch(deleteReplyRequest());

    try {
      const token = getState().feed.token;
      if (!token) {
        throw new Error("No token available. Unable to delete reply.");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(
        `http://localhost:8080/tweet/reply/${replyId}`,
        config
      );

      dispatch(deleteReplySuccess(replyId));
      dispatch(setTweets());
    } catch (error) {
      dispatch(deleteReplyFailure(error));
    }
  };
};
export const sendReply = (tweetId, replyText) => {
  return async (dispatch, getState) => {
    dispatch({ type: SEND_REPLY_REQUEST });

    try {
      const token = getState().feed.token;
      if (!token) {
        throw new Error("No token available. Unable to send reply.");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        `http://localhost:8080/tweet/reply/${tweetId}`,
        {
          tweet: replyText,
        },
        config
      );

      const newReply = response.data.post;
      dispatch({ type: SEND_REPLY_SUCCESS, payload: newReply });
      dispatch(setTweets());
    } catch (error) {
      dispatch({ type: SEND_REPLY_FAILURE, payload: error.message });
    }
  };
};

export const likeTweet = (tweetId) => {
  return async (dispatch, getState) => {
    dispatch(likeTweetRequest);

    const token = getState().feed.token;
    if (!token) {
      throw new Error("No token available. Unable to like tweet.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/tweet/like/${tweetId}`,
        null,
        config
      );

      dispatch(likeTweetSuccess(response.data.tweetId));
      dispatch(setTweets());
    } catch (error) {
      console.error("Error liking tweet:", error);
      dispatch(likeTweetFailure(error));
    }
  };
};

export const unlikeTweet = (likeId) => {
  return async (dispatch, getState) => {
    dispatch(unlikeTweetRequest());

    const token = getState().feed.token;
    if (!token) {
      throw new Error("No token available. Unable to unlike tweet.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.delete(
        `http://localhost:8080/tweet/like/${likeId}`,
        config
      );

      dispatch(unlikeTweetSuccess(response.data.tweetId));
      dispatch(setTweets());
    } catch (error) {
      console.error("Error unliking tweet:", error);
      dispatch(unlikeTweetFailure(error));
    }
  };
};

export const sendTweet = (tweetText) => {
  return async (dispatch, getState) => {
    dispatch(sendTweetRequest());

    try {
      const token = getState().feed.token;
      if (!token) {
        throw new Error("No token available. Unable to send tweet.");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:8080/tweet/",
        {
          tweet: tweetText,
        },
        config
      );

      const newTweet = response.data.tweet;
      dispatch(sendTweetSuccess(newTweet));
      dispatch(setTweets());
    } catch (error) {
      dispatch(sendTweetFailure(error));
    }
  };
};

export const deleteTweet = (tweetId) => {
  return async (dispatch, getState) => {
    const token = getState().feed.token;

    if (token) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        await axios.delete(`http://localhost:8080/tweet/${tweetId}`, config);

        dispatch(setTweets());
      } catch (error) {
        console.error("Error deleting tweet:", error);
      }
    } else {
      console.error("No token available. Unable to delete tweet.");
    }
  };
};

export const setTweets = () => {
  return async (dispatch, getState) => {
    const token = getState().feed.token;

    if (token) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          "http://localhost:8080/tweet/",
          config
        );

        dispatch({
          type: SET_TWEET,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    } else {
      console.error("No token available. Unable to fetch tweets.");
    }
  };
};
export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});
