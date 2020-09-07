import * as profile from "./profileTypes";
import axios from "axios";
import myAWS from "../../config/S3";

const s3 = new myAWS.S3();
const bucketName = "songratingredux-profilepic";

// Upload profile pic to S3
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

// Get profile pic from S3
export const getProfilePic = async (key) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: "1599419682072-img.jpg",
    };

    const data = await s3.getObject(params).promise();
    return encode(data.Body);
  } catch (e) {
    throw new Error(`Could not retrieve file from S3: ${e.message}`);
  }
};

function encode(data) {
  var str = data.reduce(function (a, b) {
    return a + String.fromCharCode(b);
  }, "");
  return btoa(str).replace(/.{76}(?=.)/g, "$&\n");
}
