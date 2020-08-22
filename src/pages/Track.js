import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import TrackSummary from "../components/TrackSummary";
import TrackCommentForm from "../components/TrackCommentForm";
import { setFormVisible, getSingleTrack } from "../redux/track/trackActions";

const Track = (props) => {
  const {
    track,
    audioFeatures,
    setFormVisible,
    isFormVisible,
    getSingleTrack,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    getSingleTrack(id);
  }, [id]);

  console.log(track);
  console.log(audioFeatures);

  return (
    <div>
      <TrackSummary track={track} />
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
  );
};

const mapStateToProps = (state) => {
  return {
    track: state.track.track,
    audioFeatures: state.track.audioFeatures,
    isFormVisible: state.track.isFormVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormVisible: (isVisible) => dispatch(setFormVisible(isVisible)),
    getSingleTrack: (id) => dispatch(getSingleTrack(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
