import * as auth from "./authTypes";

const initState = {
  name: "",
  signUpError: "",
  signInError: "",
  signOutError: "",
  currentUserError: "",
  isSignInSuccess: false,
  isSignUpSuccess: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case auth.SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignUpSuccess: true,
        signUpError: "",
      };
    case auth.SIGN_UP_FAILURE:
      return {
        ...state,
        isSignUpSuccess: false,
        signUpError: action.payload,
      };
    case auth.SIGN_IN_SUCCESS:
      return {
        ...state,
        name: action.payload.attributes.name,
        isSignInSuccess: true,
        signInError: "",
      };
    case auth.SIGN_IN_FAILURE:
      return {
        ...state,
        name: "",
        isSignInSuccess: false,
        signInError: action.payload,
      };
    case auth.SIGN_OUT_SUCCESS:
      return {
        ...state,
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
    case auth.GET_USER_SUCCESS:
      return {
        ...state,
        name: action.payload.attributes.name,
        isSignInSuccess: true,
        currentUserError: "",
      };
    case auth.GET_USER_FAILURE:
      return {
        ...state,
        name: "",
        isSignInSuccess: false,
        currentUserError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
