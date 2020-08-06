import React, { useState } from "react";
import { connect } from "react-redux";

import { addSong, fetchData } from "../redux/song/songActions";

const SongList = (props) => {
  const [number, setNumber] = useState(1);

  console.log(props);
  return (
    <div>
      <h2>Number of songs added: {props.numOfSongs}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={() => props.addSong(number)}>Add song</button>
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
    addSong: (number) => dispatch(addSong(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
