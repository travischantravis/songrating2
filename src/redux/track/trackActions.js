import axios from "axios";
import * as track from "./trackTypes";
import { getAccessToken } from "../spotify/spotifyActions";

const getOptions = (accessToken) => {
  return {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    json: true,
  };
};

const fetchAudioFeatures = (accessToken, id) => {
  const options = getOptions(accessToken);
  return (dispatch) => {
    dispatch(fetchDataLoading());
    axios
      .get(`https://api.spotify.com/v1/audio-features/${id}`, options)
      .then((response) => {
        const data = response.data;
        dispatch(fetchAudioDataSuccess(data));
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};

const fetchSingleTrack = (accessToken, id) => {
  const options = getOptions(accessToken);
  return (dispatch) => {
    dispatch(fetchDataLoading());
    return axios
      .get(`https://api.spotify.com/v1/tracks/${id}`, options)
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};

// Get track data, and audio features [2 endpoints]
export const getSingleTrack = (id) => (dispatch) => {
  dispatch(getAccessToken()).then((accessToken) =>
    dispatch(fetchSingleTrack(accessToken, id)).then(() =>
      dispatch(fetchAudioFeatures(accessToken, id))
    )
  );
};

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

const fetchAudioDataSuccess = (data) => ({
  type: track.FETCH_AUDIO_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: track.FETCH_DATA_FAILURE,
  payload: error,
});
