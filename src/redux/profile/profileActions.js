import * as profile from "./profileTypes";
import axios from "axios";

// Upload profile pic
export const uploadProfilePic = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return (dispatch) => {
    dispatch({
      type: profile.UPLOAD_PIC_LOADING,
    });
    console.log(file);
    return axios
      .post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(progressEvent);
          dispatch({
            type: profile.UPLOAD_PIC_PROGRESS,
            payload: percentCompleted,
          });
        },
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: profile.UPLOAD_PIC_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: profile.UPLOAD_PIC_FAILURE,
          payload: err,
        });
      });
  };
};
