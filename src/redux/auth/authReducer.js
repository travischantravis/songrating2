import * as auth from "./authTypes";

const initState = {
  signUpResult: {},
  isSignUpSuccess: false,
  signUpError: "",
  signInResult: {},
  isSignInSuccess: false,
  signInError: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case auth.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpResult: action.payload,
        isSignUpSuccess: true,
        signUpError: "",
      };
    case auth.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpResult: {},
        isSignUpSuccess: false,
        signUpError: action.payload,
      };
    case auth.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInResult: action.payload,
        isSignInSuccess: true,
        signInError: "",
      };
    case auth.SIGN_IN_FAILURE:
      return {
        ...state,
        signInResult: {},
        isSignInSuccess: false,
        signInError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
