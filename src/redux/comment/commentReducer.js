import * as comment from "./commentTypes";

const initState = {
  loading: false,
  newComment: {},
  error: "",
};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case comment.SET_NEW_COMMENT:
      return {
        ...state,
        newComment: action.payload,
      };
    case comment.POST_NEW_COMMENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case comment.POST_NEW_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        newComment: action.payload,
        error: "",
      };
    case comment.POST_NEW_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        newComment: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
