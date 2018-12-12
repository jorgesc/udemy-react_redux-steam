import {UPDATE_USER_ID} from "./types.js";

const _updateUserId = newId => {
  return {type: UPDATE_USER_ID, payload: newId};
};

export const checkIsSignedIn = () => dispatch => {
  const auth = window.gapi.auth2.getAuthInstance();
  const userId = auth.isSignedIn.get() ? auth.currentUser.get().getId() : false;
  dispatch(_updateUserId(userId));
};

export const signInStart = () => async dispatch => {
  const auth = window.gapi.auth2.getAuthInstance();
  dispatch(_updateUserId(null));
  await auth.signIn().catch(e => undefined);
  dispatch(checkIsSignedIn());
};

export const signOutStart = () => async dispatch => {
  const auth = window.gapi.auth2.getAuthInstance();
  dispatch(_updateUserId(null));
  await auth.signOut().catch(e => undefined);
  dispatch(checkIsSignedIn());
};
