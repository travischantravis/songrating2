import * as comment from "./commentTypes";

const initState = {
  postLoading: false,
  getLoading: false,
  curComment: {},
  error: "",
};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case comment.SET_NEW_COMMENT:
      return {
        ...state,
        curComment: action.payload,
      };
    case comment.POST_NEW_COMMENT_LOADING:
      return {
        ...state,
        postLoading: true,
      };
    case comment.POST_NEW_COMMENT_SUCCESS:
      return {
        ...state,
        postLoading: false,
        error: "",
      };
    case comment.GET_COMMENT_LOADING:
      return {
        ...state,
        getLoading: true,
      };
    case comment.GET_COMMENT_SUCCESS:
      return {
        ...state,
        getLoading: false,
        curComment: action.payload,
        error: "",
      };
    case comment.PROCESS_COMMENT_FAILURE:
      return {
        ...state,
        postLoading: false,
        getLoading: false,
        curComment: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducer;
