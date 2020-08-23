import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import TrackSummary from "../components/TrackSummary";
import TrackCommentForm from "../components/TrackCommentForm";
import TrackAudioFeatures from "../components/TrackAudioFeatures";
import { setFormVisible, getSingleTrack } from "../redux/track/trackActions";
import { setNewComment, postNewComment } from "../redux/comment/commentActions";

const Track = (props) => {
  const {
    track,
    audioFeatures,
    setFormVisible,
    isFormVisible,
    getSingleTrack,
    setNewComment,
    postNewComment,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    getSingleTrack(id);
  }, [id]);

  // console.log(track);
  // console.log(audioFeatures);

  return (
    <div>
      <div className="track-info-container">
        <TrackSummary track={track} />
        <TrackAudioFeatures audioFeatures={audioFeatures} />
      </div>

      {isFormVisible ? (
        <TrackCommentForm
          setFormVisible={setFormVisible}
          setNewComment={setNewComment}
          postNewComment={postNewComment}
        />
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
    setNewComment: (comment) => dispatch(setNewComment(comment)),
    postNewComment: (comment) => dispatch(postNewComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
