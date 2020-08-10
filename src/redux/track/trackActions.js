import axios from "axios";
import * as track from "./trackTypes";

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

export const setTrack = (data) => ({
  type: track.SET_TRACK,
  payload: data,
});

export const setFormVisible = (data) => ({
  type: track.SET_FORM_VISIBLE,
  payload: data,
});

const fetchDataLoading = () => ({
  type: track.FETCH_DATA_LOADING,
});

const fetchDataSuccess = (data) => ({
  type: track.FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: track.FETCH_DATA_FAILURE,
  payload: error,
});
