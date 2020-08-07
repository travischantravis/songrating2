import axios from "axios";
import * as song from "./songTypes";

export const addSong = (number = 1) => {
  return {
    type: song.ADD_SONG,
    payload: number,
  };
};

export const deleteSong = (number = 1) => {
  return {
    type: song.DELETE_SONG,
    payload: number,
  };
};

// an action creator returns a function instead of an action
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
  type: song.FETCH_DATA_LOADING,
});

const fetchDataSuccess = (data) => ({
  type: song.FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: song.FETCH_DATA_FAILURE,
  payload: error,
});
