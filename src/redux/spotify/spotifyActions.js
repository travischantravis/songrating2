import axios from "axios";
import qs from "qs";
import * as spotifyActions from "./spotifyTypes";

export const getAccessToken = () => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const param = {
    grant_type: "client_credentials",
  };

  return (dispatch) => {
    dispatch(fetchTokenLoading());

    return axios
      .post(
        "https://accounts.spotify.com/api/token",
        qs.stringify(param),
        headers
      )
      .then((response) => {
        dispatch(fetchTokenSuccess(response.data.access_token));
        return response.data.access_token;
      })
      .catch((err) => {
        dispatch(fetchTokenFailure(err));
      });
  };
};

const searchTracks = (accessToken, searchValue) => {
  const options = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    json: true,
  };

  // Escape space characters
  const query = searchValue.replace(" ", "%20");

  return (dispatch) => {
    dispatch(fetchTracksLoading());

    axios
      .get(
        `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`,
        options
      )
      .then((response) => {
        const { items } = response.data.tracks;
        dispatch(fetchTracksSuccess(items));
      })
      .catch((err) => {
        dispatch(fetchTracksFailure(err));
      });
  };
};

export const getTracks = (searchValue) => (dispatch) => {
  // TODO get access token from localStorage
  dispatch(getAccessToken()).then((accessToken) =>
    dispatch(searchTracks(accessToken, searchValue))
  );
};

const fetchTokenLoading = () => ({
  type: spotifyActions.FETCH_TOKEN_LOADING,
});

const fetchTokenSuccess = (data) => ({
  type: spotifyActions.FETCH_TOKEN_SUCCESS,
  payload: data,
});

const fetchTokenFailure = (error) => ({
  type: spotifyActions.FETCH_TOKEN_FAILURE,
  payload: error,
});

const fetchTracksLoading = () => ({
  type: spotifyActions.FETCH_TRACKS_LOADING,
});

const fetchTracksSuccess = (data) => ({
  type: spotifyActions.FETCH_TRACKS_SUCCESS,
  payload: data,
});

const fetchTracksFailure = (error) => ({
  type: spotifyActions.FETCH_TRACKS_FAILURE,
  payload: error,
});
