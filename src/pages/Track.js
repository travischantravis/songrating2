import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";

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

  return (
    <div>
      {fetchError === "" ? (
        <Grid stackable centered>
          <Grid.Column width={4}>
            <TrackSummary track={track} />
            <TrackAudioFeatures audioFeatures={audioFeatures} />
          </Grid.Column>
          <Grid.Column width={8}>
            <TrackCommentForm
              setFormVisible={setFormVisible}
              setNewComment={setNewComment}
              postNewComment={postNewComment}
            />
          </Grid.Column>
        </Grid>
      ) : (
        <div>
          <h2>Track not available</h2>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    track: state.track.track,
    fetchError: state.track.error,
    audioFeatures: state.track.audioFeatures,
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
