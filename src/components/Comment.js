import React from "react";
import moment from "moment";

const Comment = (props) => {
  const { comment } = props;

  return (
    <div className="comment-container">
      <p>
        <span>
          {comment.name}
          {" - "}
        </span>
        <span className="comment-artists">{comment.artists} </span>
        <span>{comment.rating}/10 </span>
        <span>{moment(comment.lastEdited).fromNow()}</span>
      </p>
      <p>{comment.comment}</p>
    </div>
  );
};

export default Comment;
