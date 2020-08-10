import * as track from "./trackTypes";

const initState = {
  track: {},
  loading: false,
  error: "",
  isFormVisible: false,
};

const trackReducer = (state = initState, action) => {
  switch (action.type) {
    case track.FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case track.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        track: action.payload,
        error: "",
      };
    case track.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        track: {},
        error: action.payload,
      };
    case track.SET_TRACK:
      return {
        ...state,
        track: action.payload,
      };
    case track.SET_FORM_VISIBLE:
      return {
        ...state,
        isFormVisible: action.payload,
      };
    default:
      return state;
  }
};

export default trackReducer;
