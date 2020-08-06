const initState = {
  numOfSongs: 0,
  loading: false,
  users: [],
  error: "",
};

const songReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        numOfSongs: state.numOfSongs + parseInt(action.payload),
      };
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
