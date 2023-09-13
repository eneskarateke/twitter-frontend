import { SET_TWEET, SET_TOKEN } from "./actions";

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

    default:
      return state;
  }
};

export default feedReducer;
