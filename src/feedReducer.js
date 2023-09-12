import {
  SET_TWEET,
  SET_TOKEN,
  LIKE_TWEET_SUCCESS,
  LIKE_TWEET_FAILURE,
} from "./actions";

const initialState = {
  tweets: [],
  token: null,
};

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TWEET:
      return {
        ...state,
        tweets: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case LIKE_TWEET_SUCCESS:
      const likedTweetId = action.payload;

      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet.id === likedTweetId
            ? { ...tweet, likes: tweet.likes + 1 }
            : tweet
        ),
      };

    case LIKE_TWEET_FAILURE:
      return state;
    default:
      return state;
  }
};

export default feedReducer;
