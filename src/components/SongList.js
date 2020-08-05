import React, { useState } from "react";
import { connect } from "react-redux";

import { addSong } from "../redux/song/songActions";

const SongList = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Number of cakes: {props.numOfSongs}</h2>

      <button onClick={props.addSong}>Add song</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfSongs: state.song.numOfSongs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSong: () => dispatch(addSong()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
