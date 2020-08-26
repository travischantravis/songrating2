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
        type: auth.AUTH_FAILURE,
        payload: err.message,
      });
    }
  };
};
