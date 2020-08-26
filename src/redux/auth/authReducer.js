import * as auth from "./authTypes";

const initState = {
  signUpResult: {},
  isSignUpSuccess: false,
  error: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case auth.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpResult: action.payload,
        isSignUpSuccess: true,
        error: "",
      };
    case auth.AUTH_FAILURE:
      return {
        ...state,
        signUpResult: {},
        isSignUpSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
