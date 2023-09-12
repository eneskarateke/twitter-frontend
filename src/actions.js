import axios from "axios";

export const SET_TWEET = "SET_TWEET";
export const SET_TOKEN = "SET_TOKEN";

export const SEND_TWEET_REQUEST = "SEND_TWEET_REQUEST";
export const SEND_TWEET_SUCCESS = "SEND_TWEET_SUCCESS";
export const SEND_TWEET_FAILURE = "SEND_TWEET_FAILURE";

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
