const initState = {
  numOfSongs: 0,
};

const songReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        numOfSongs: ++state.numOfSongs,
      };
    default:
      return state;
  }
};

export default songReducer;
