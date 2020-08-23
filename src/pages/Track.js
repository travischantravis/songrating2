import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import TrackSummary from "../components/TrackSummary";
import TrackCommentForm from "../components/TrackCommentForm";
import TrackAudioFeatures from "../components/TrackAudioFeatures";
import { setFormVisible, getSingleTrack } from "../redux/track/trackActions";
import {
  setNewComment,
  postNewComment,
  getComment,
} from "../redux/comment/commentActions";

const Track = (props) => {
  const {
    track,
    fetchError,
    audioFeatures,
    curComment,
    isCommented,
    setFormVisible,
    getSingleTrack,
    setNewComment,
    postNewComment,
    getComment,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    getSingleTrack(id);
    getComment(id);
  }, [id]);

  // console.log(curComment);
  return (
    <div>
      {fetchError === "" ? (
        <>
          <div className="track-info-container">
            <TrackSummary track={track} />
            <TrackAudioFeatures audioFeatures={audioFeatures} />
          </div>
          <TrackCommentForm
            setFormVisible={setFormVisible}
            setNewComment={setNewComment}
            postNewComment={postNewComment}
            getComment={getComment}
          />
        </>
      ) : (
        <div>Track not available</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    track: state.track.track,
    fetchError: state.track.error,
    audioFeatures: state.track.audioFeatures,
    curComment: state.comment.curComment,
    isCommented: state.comment.isCommented,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormVisible: (isVisible) => dispatch(setFormVisible(isVisible)),
    getSingleTrack: (id) => dispatch(getSingleTrack(id)),
    setNewComment: (comment) => dispatch(setNewComment(comment)),
    postNewComment: (comment) => dispatch(postNewComment(comment)),
    getComment: (id) => dispatch(getComment(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
