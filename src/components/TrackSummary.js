import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../redux/track/trackActions";
import TrackCommentForm from "./TrackCommentForm";

const TrackSummary = (props) => {
  const { track } = props;

  return (
    <div className="track-summary-container">
      {track.title ? (
        <div>
          <h2>
            {`${track.artists} - ${track.title} `}{" "}
            <span style={{ color: "lightgreen" }}>{track.popularity}</span>
          </h2>
          <img className="track-image" src={track.image} alt="" />
          <button className="my-button btn-open-form">Add comment</button>
          <TrackCommentForm />
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
