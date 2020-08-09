import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../redux/track/trackActions";

const TrackSummary = (props) => {
  const { track } = props;

  return (
    <div className="trackSummaryContainer">
      {track.title ? (
        <div>
          <h2>
            {`${track.artists} - ${track.title} `}{" "}
            <span style={{ color: "lightgreen" }}>{track.popularity}</span>
          </h2>
          <img className="trackImage" src={track.image} alt="" />
          <button className="myButton openCommentForm">Add comment</button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    track: state.track.track,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackSummary);
