import axios from "axios";
import * as track from "./trackTypes";

// an action creator returns a function instead of an action
export const fetchAudioFeatures = (accessToken) => {
  const options = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    json: true,
  };
  return (dispatch) => {
    dispatch(fetchDataLoading());
    axios
      .get(
        `https://api.spotify.com/v1/audio-features/06AKEBrKUckW0KREUWRnvT`,
        options
      )
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
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
