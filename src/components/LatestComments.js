import React, { useEffect } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";

const LatestReviews = (props) => {
  const { latestComments, queryLatestComments } = props;

  useEffect(() => {
    queryLatestComments();
  }, []);

  return (
    <div className="box">
      <h3>Latest Reviews</h3>
      {latestComments &&
        latestComments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    latestComments: state.comment.latestComments,
  };
};

export default connect(mapStateToProps)(LatestReviews);
