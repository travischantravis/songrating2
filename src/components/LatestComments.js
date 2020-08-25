import React, { useEffect } from "react";
import { connect } from "react-redux";

const LatestReviews = (props) => {
  const { latestComments, queryLatestComments } = props;
  const date = new Date().toISOString();

  useEffect(() => {
    queryLatestComments(date);
  }, []);

  return (
    <div className="box">
      <h3>Latest Reviews</h3>
      {latestComments &&
        latestComments.map((comment, i) => (
          <div key={i} className="comment-container">
            <p>
              <span>
                {i + 1}
                {". "}
                {comment.name}
                {" - "}
              </span>
              <span className="comment-artists">{comment.artists} </span>
              <span>{comment.rating}</span>
            </p>
            <p>{comment.comment}</p>
          </div>
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
