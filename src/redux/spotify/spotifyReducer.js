import * as spotifyActions from "./spotifyTypes";

const initState = {
  loading: false,
  searchBarLoading: false,
  accessToken: {},
  error: "",
  tracks: [],
};

const spotifyReducer = (state = initState, action) => {
  switch (action.type) {
    case spotifyActions.FETCH_TOKEN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case spotifyActions.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: true,
        accessToken: action.payload,
        error: "",
      };
    case spotifyActions.FETCH_TOKEN_FAILURE:
      return {
        ...state,
        loading: true,
        accessToken: "",
        error: action.payload,
      };

    case spotifyActions.FETCH_TRACKS_LOADING:
      return {
        ...state,
        loading: true,
        searchBarLoading: true,
      };
    case spotifyActions.FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchBarLoading: false,

        tracks: action.payload,
        error: "",
      };
    case spotifyActions.FETCH_TRACKS_FAILURE:
      return {
        ...state,
        loading: false,
        searchBarLoading: false,
        tracks: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default spotifyReducer;
