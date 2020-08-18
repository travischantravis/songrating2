import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  fetchAudioFeatures,
  setFormVisible,
} from "../redux/track/trackActions";
import TrackCommentForm from "./TrackCommentForm";

const TrackSummary = (props) => {
  const {
    track,
    setFormVisible,
    isFormVisible,
    fetchAudioFeatures,
    accessToken,
  } = props;

  useEffect(() => {
    console.log(props);
    // if (!_.isEmpty(accessToken)) fetchAudioFeatures(accessToken)
    fetchAudioFeatures(accessToken);
  }, []);

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
    audioFeatures: state.track.audioFeatures,
    accessToken: state.spotify.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAudioFeatures: () => dispatch(fetchAudioFeatures()),
    setFormVisible: (isVisible) => dispatch(setFormVisible(isVisible)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackSummary);
