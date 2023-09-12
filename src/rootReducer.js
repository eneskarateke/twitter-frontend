import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import feedReducer from "./feedReducer";

const rootReducer = combineReducers({
  tweet: tweetReducer,
  feed: feedReducer,
});

export default rootReducer;
