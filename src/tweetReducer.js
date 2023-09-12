import {
  SEND_TWEET_REQUEST,
  SEND_TWEET_SUCCESS,
  SEND_TWEET_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  tweet: null,
  error: null,
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TWEET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEND_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        tweet: action.payload,
      };
    case SEND_TWEET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tweetReducer;
