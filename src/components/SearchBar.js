import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getTracks } from "../redux/spotify/spotifyActions";

const SearchBar = (props) => {
  const { getTracks, tracks } = props;

  useEffect(() => {
    getTracks();
  }, []);

  console.log(props);
  return (
    <div>
      <h2>Search Bar</h2>
      {tracks && tracks.map((track, i) => <p key={i}>{track.name}</p>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    accessToken: state.spotify.accessToken,
    tracks: state.spotify.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTracks: () => dispatch(getTracks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
