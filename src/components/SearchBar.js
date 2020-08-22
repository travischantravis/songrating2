import React, { useState } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Search } from "semantic-ui-react";

import { getTracks } from "../redux/spotify/spotifyActions";
import { Link } from "react-router-dom";

const resultRenderer = (track) => {
  const { trackid, title, artists, image } = track;
  return (
    <Link key={trackid} to={`/track/${trackid}`}>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{artists}</div>
      </div>
    </Link>
  );
};

const SearchBar = (props) => {
  const { getTracks, tracks, searchBarLoading } = props;
  const [input, setInput] = useState("");

  console.log(props);

  return (
    <div className="searchBarContainer">
      <Search
        loading={searchBarLoading}
        onResultSelect={(e, { result }) => {
          e.preventDefault();
          setInput(result.title);
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
        resultRenderer={resultRenderer}
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
            trackid: track.id,
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
    searchBarLoading: state.spotify.searchBarLoading,
    tracks: state.spotify.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTracks: (searchValue) => dispatch(getTracks(searchValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
