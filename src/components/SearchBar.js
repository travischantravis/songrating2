import React, { useEffect, useState } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Search } from "semantic-ui-react";

import { getTracks } from "../redux/spotify/spotifyActions";

const SearchBar = (props) => {
  const { getTracks, tracks, loading } = props;
  const [input, setInput] = useState("");
  const [track, setTrack] = useState("");

  console.log(props);
  return (
    <div>
      <p>Search for a track: </p>
      <Search
        loading={loading}
        onResultSelect={(e, { result }) => {
          e.preventDefault();
          console.log(result);
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
            title: track.name,
            image: track.album.images[0].url,
            description: artistNames,
            id: track.id,
          };
        })}
        value={input}
        size="small"

        // resultRenderer={resultRenderer}
      ></Search>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // accessToken: state.spotify.accessToken,
    loading: state.spotify.loading,
    tracks: state.spotify.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTracks: (searchValue) => dispatch(getTracks(searchValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
