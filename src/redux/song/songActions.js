import axios from "axios";

export const addSong = (number = 1) => {
  return {
    type: "ADD_SONG",
    payload: number,
  };
};

// an action creator returning a function instead of an action
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataLoading());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchDataSuccess(users));
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};

const fetchDataLoading = () => ({
  type: "FETCH_DATA_LOADING",
});

const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});
