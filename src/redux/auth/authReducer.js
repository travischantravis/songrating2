import * as auth from "./authTypes";

const initState = {
  signUpResult: {},
  signUpError: "",
  isSignUpSuccess: false,
  signInResult: {},
  signInError: "",
  isSignInSuccess: false,
  signOutError: "",
  name: "",
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
        name: action.payload.attributes.name,
        isSignInSuccess: true,
        signInError: "",
      };
    case auth.SIGN_IN_FAILURE:
      return {
        ...state,
        signInResult: {},
        name: "",
        isSignInSuccess: false,
        signInError: action.payload,
      };
    case auth.SIGN_OUT_SUCCESS:
      return {
        ...state,
        signInResult: {},
        name: "",
        isSignInSuccess: false,
        signOutError: "",
      };
    case auth.SIGN_OUT_FAILURE:
      return {
        ...state,
        isSignInSuccess: false,
        signOutError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
