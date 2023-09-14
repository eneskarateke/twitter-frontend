import {
  SEND_TWEET_REQUEST,
  SEND_TWEET_SUCCESS,
  SEND_TWEET_FAILURE,
  SEND_REPLY_REQUEST,
  SEND_REPLY_SUCCESS,
  SEND_REPLY_FAILURE,
  LIKE_TWEET_SUCCESS,
  LIKE_TWEET_FAILURE,
  LIKE_TWEET_REQUEST,
  UNLIKE_TWEET_SUCCESS,
  UNLIKE_TWEET_FAILURE,
  UNLIKE_TWEET_REQUEST,
  DELETE_REPLY_REQUEST,
  DELETE_REPLY_SUCCESS,
  DELETE_REPLY_FAILURE,
  RETWEET_REQUEST,
  RETWEET_SUCCESS,
  RETWEET_FAILURE,
  UPDATE_TWEET_FAILURE,
  UPDATE_TWEET_REQUEST,
  UPDATE_TWEET_SUCCESS,
} from "./actions";

const initialState = {
  loading: false,
  tweet: null,
  error: null,
  deletedReplyId: null,
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TWEET_REQUEST:
    case SEND_REPLY_REQUEST:
    case LIKE_TWEET_REQUEST:
    case UNLIKE_TWEET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEND_TWEET_SUCCESS:
    case SEND_REPLY_SUCCESS:
    case LIKE_TWEET_SUCCESS:
    case UNLIKE_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        tweet: action.payload,
      };
    case SEND_TWEET_FAILURE:
    case SEND_REPLY_FAILURE:
    case LIKE_TWEET_FAILURE:
    case UNLIKE_TWEET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REPLY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_REPLY_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedReplyId: action.payload,
      };
    case DELETE_REPLY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RETWEET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RETWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case RETWEET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_TWEET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UPDATE_TWEET_FAILURE:
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
