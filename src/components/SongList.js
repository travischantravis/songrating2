import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addSong, fetchData } from "../redux/song/songActions";

const SongList = (props) => {
  const [number, setNumber] = useState(1);
  const { userData } = props;

  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div>
      <h2>Number of songs added: {props.numOfSongs}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={() => props.addSong(number)}>Add song</button>
      {userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>Users list</h2>
          <div>
            {userData.users &&
              userData.users.map((user, i) => <p key={i}>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfSongs: state.song.numOfSongs,
    userData: state.song,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSong: (number) => dispatch(addSong(number)),
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
