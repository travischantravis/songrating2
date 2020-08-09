import React, { useState } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Search } from "semantic-ui-react";

import { getTracks } from "../redux/spotify/spotifyActions";
import { setTrack } from "../redux/track/trackActions";

const SearchBar = (props) => {
  const { getTracks, setTrack, tracks, loading } = props;
  const [input, setInput] = useState("");

  console.log(props);

  return (
    <div className="searchBarContainer">
      <Search
        loading={loading}
        onResultSelect={(e, { result }) => {
          e.preventDefault();
          setInput(result.title);
          setTrack(result);
        }}
        onSearchChange={_.debounce(
          (e, props) => {
            const { value } = props;
            setInput(value);
            if (value) getTracks(value);
          },
          500,
          {
            leading: true,
          }
        )}
        results={tracks.map((track) => {
          const artistNames = track.artists
            .map((artist) => artist.name)
            .join(", ");

          return {
            artists: artistNames,
            artistid: track.artists[0].id,
            description: artistNames,
            title: track.name,
            image: track.album.images[0].url,
            id: track.id,
            popularity: track.popularity,
          };
        })}
        value={input}
        size="small"
        placeholder="Search a track"
      ></Search>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.spotify.loading,
    tracks: state.spotify.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTracks: (searchValue) => dispatch(getTracks(searchValue)),
    setTrack: (track) => dispatch(setTrack(track)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
