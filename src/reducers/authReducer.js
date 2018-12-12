import {UPDATE_SIGN_IN_STATE, UPDATE_USER_ID} from "../actions/types.js";

export default (state = {isSignedIn: false, userId: null}, action) => {
  switch (action.type) {
    case UPDATE_SIGN_IN_STATE:
      return {...state, isSignedIn: action.payload};
    case UPDATE_USER_ID:
      return {...state, userId: action.payload};
    default:
      return state;
  }
};
