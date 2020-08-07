import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getTracks } from "../redux/spotify/spotifyActions";

const SearchBar = (props) => {
  const { getTracks, tracks } = props;
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getTracks("1");
  }, []);

  console.log(props);
  return (
    <div>
      <h2>Search Bar</h2>
      <form>
        <input
          type="text"
          placeholder="Tracks"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (searchValue) getTracks(searchValue);
          }}
        >
          Search
        </button>
      </form>
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
    getTracks: (searchValue) => dispatch(getTracks(searchValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
