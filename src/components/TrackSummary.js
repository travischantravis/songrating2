import React from "react";
import { connect } from "react-redux";

import { fetchData, setFormVisible } from "../redux/track/trackActions";
import TrackCommentForm from "./TrackCommentForm";

const TrackSummary = (props) => {
  const { track, setFormVisible, isFormVisible } = props;

  return (
    <div className="track-summary-container">
      {track.title ? (
        <div>
          <h2>
            {`${track.artists} - ${track.title} `}{" "}
            <span style={{ color: "lightgreen" }}>{track.popularity}</span>
          </h2>
          <img className="track-image" src={track.image} alt="" />
          {isFormVisible ? (
            <TrackCommentForm setFormVisible={setFormVisible} />
          ) : (
            <button
              className="my-button btn-open-form"
              onClick={() => {
                setFormVisible(true);
              }}
            >
              Add comment
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    track: state.track.track,
    isFormVisible: state.track.isFormVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
    setFormVisible: (isVisible) => dispatch(setFormVisible(isVisible)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackSummary);
