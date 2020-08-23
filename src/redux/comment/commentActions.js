import * as comment from "./commentTypes";

import myAWS from "../../config/DynamoDB";
const docClient = new myAWS.DynamoDB.DocumentClient();

export const setNewComment = (data) => ({
  type: comment.SET_NEW_COMMENT,
  payload: data,
});

export const postNewComment = (data) => {
  const params = {
    TableName: "comments",
    Item: data,
  };

  return (dispatch) => {
    dispatch(postCommentLoading());
    docClient.put(params, (err, data) => {
      if (err) {
        console.error(
          "Unable to add item. Error JSON:",
          JSON.stringify(err, null, 2)
        );
        dispatch({
          type: comment.PROCESS_COMMENT_FAILURE,
          payload: err,
        });
      } else {
        dispatch({
          type: comment.POST_NEW_COMMENT_SUCCESS,
        });
      }
    });
  };
};

export const getComment = (id) => {
  const params = {
    TableName: "comments",
    Key: {
      id,
    },
  };

  return (dispatch) => {
    dispatch(getCommentLoading());
    docClient.get(params, (err, data) => {
      if (err) {
        console.error(
          "Unable to get item. Error JSON:",
          JSON.stringify(err, null, 2)
        );
        dispatch({
          type: comment.PROCESS_COMMENT_FAILURE,
          payload: err,
        });
      } else {
        // console.log("GetItem succeeded:", JSON.stringify(data, null, 2));

        dispatch({
          type: comment.GET_COMMENT_SUCCESS,
          payload: data.Item,
        });
      }
    });
  };
};

const postCommentLoading = () => ({
  type: comment.POST_NEW_COMMENT_LOADING,
});

const getCommentLoading = () => ({
  type: comment.GET_COMMENT_LOADING,
});
