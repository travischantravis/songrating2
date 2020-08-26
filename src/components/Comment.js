import React from "react";
import moment from "moment";
import { Icon, Label } from "semantic-ui-react";

const Comment = (props) => {
  const { comment } = props;

  return (
    <div className="comment-container">
      <div>
        <span style={{ fontWeight: "bold" }}>
          {comment.name}
          {" - "}
        </span>
        <span className="comment-artists">{comment.artists} </span>
        <span style={{ float: "right" }}>
          <Label horizontal>
            {comment.isFav ? <Icon color="teal" name="star" /> : null}
            {comment.rating}/10
          </Label>
        </span>
      </div>
      <p>
        <span>{comment.comment}</span>
      </p>
      <p style={{ marginTop: "5px" }}>
        <Icon color="grey" name="time" />
        {moment(comment.lastEdited).fromNow()}
      </p>
    </div>
  );
};

export default Comment;
