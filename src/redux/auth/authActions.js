import * as auth from "./authTypes";

import { Auth } from "aws-amplify";

export const signUp = (user) => {
  const { username, password, name } = user;

  return async (dispatch) => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          name: name,
        },
      });
      console.log("sign up success", user);
      dispatch({
        type: auth.SIGN_UP_SUCCESS,
        payload: user,
      });
    } catch (err) {
      console.log("error signing up:", err);
      dispatch({
        type: auth.SIGN_UP_FAILURE,
        payload: err.message,
      });
    }
  };
};

export const signIn = (user) => {
  const { username, password } = user;

  return async (dispatch) => {
    try {
      const user = await Auth.signIn({
        username,
        password,
      });
      console.log("sign in success", user);
      dispatch({
        type: auth.SIGN_IN_SUCCESS,
        payload: user,
      });
    } catch (err) {
      console.log("error signing in:", err);
      dispatch({
        type: auth.SIGN_IN_FAILURE,
        payload: err.message,
      });
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      await Auth.signOut();
      console.log("sign out success");
      dispatch({
        type: auth.SIGN_OUT_SUCCESS,
      });
    } catch (err) {
      console.log("error signing out:", err);
      dispatch({
        type: auth.SIGN_OUT_FAILURE,
        payload: err,
      });
    }
  };
};
