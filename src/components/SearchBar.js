import React, { useState } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Search } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { getTracks } from "../redux/spotify/spotifyActions";
import { setFormVisible } from "../redux/track/trackActions";

const SearchBar = (props) => {
  const { getTracks, tracks, searchBarLoading, setFormVisible } = props;
  const [input, setInput] = useState("");

  return (
    <div className="searchBarContainer">
      <Search
        loading={searchBarLoading}
        // onResultSelect={(e, { result }) => {
        //   e.preventDefault();
        //   setInput(result.title);
        // }}
        onSearchChange={_.debounce(
          (e, props) => {
            const { value } = props;

            setInput(value);
            if (value) {
              getTracks(value);
            }
          },
          500,
          {
            leading: true,
          }
        )}
        resultRenderer={(track) => {
          const { trackid, title, artists, image } = track;
          return (
            <Link
              key={trackid}
              to={`/track/${trackid}`}
              onClick={() => {
                setFormVisible(false);
                setInput(title);
              }}
            >
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="content">
                <div className="title">{title}</div>
                <div className="description">{artists}</div>
              </div>
            </Link>
          );
        }}
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
            key: track.id,
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
    setFormVisible: (isVisible) => dispatch(setFormVisible(isVisible)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
