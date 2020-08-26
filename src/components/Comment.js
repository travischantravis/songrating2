import React from "react";
import moment from "moment";
import chroma from "chroma-js";
import { Icon, Label } from "semantic-ui-react";

const colorScale = chroma
  .scale(["yellow", "lightgreen"])
  .mode("lrgb")
  .domain([0, 10]);

const Comment = (props) => {
  const { comment } = props;

  return (
    <div className="comment-container">
      <p>
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
      </p>
      <p>
        <span>{comment.comment}</span>
        {/* <span style={{ float: "right", color: colorScale(comment.rating) }}>
          {comment.rating}/10{" "}
        </span> */}
      </p>
      <p style={{ marginTop: "5px" }}>
        <Icon color="grey" name="time" />
        {moment(comment.lastEdited).fromNow()}
      </p>
    </div>
  );
};

export default Comment;
