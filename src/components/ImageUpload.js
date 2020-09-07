import React, { useState } from "react";
import { connect } from "react-redux";
import { Progress, Icon } from "semantic-ui-react";

const ImageUpload = (props) => {
  const {
    isUploadPicSuccess,
    isUploadPicLoading,
    uploadPicProgress,
    uploadProfilePic,
  } = props;
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState(
    "https://react.semantic-ui.com/images/wireframe/square-image.png"
  );

  console.log(uploadPicProgress);
  return (
    <div>
      <p>Update your profile image</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (file) {
            uploadProfilePic(file[0]);
          }
        }}
      >
        <div className="margin-bottom-5">
          <label className="my-button" htmlFor="pic-upload">
            <Icon color="grey" name="upload" />
            Choose an image
          </label>
          <input
            id="pic-upload"
            type="file"
            accept="image/*"
            multiple={false}
            onChange={(e) => {
              setFile(e.target.files);
              // Remove existing url to avoid memory leak
              URL.revokeObjectURL(previewUrl);
              setPreviewUrl(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </div>
        <div className="preview-img-container">
          <img src={previewUrl} className="preview-img" alt="profile pic" />
        </div>
        <button className="my-button margin-top-5" type="submit">
          Save
        </button>

        <div>
          {isUploadPicLoading ? (
            <Progress
              className="progress-bar"
              percent={uploadPicProgress}
              color="teal"
              size="tiny"
              active
            >
              Loading...
            </Progress>
          ) : null}
        </div>
        <div>
          {isUploadPicSuccess ? (
            <p style={{ color: "teal" }}>Upload successful!</p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isUploadPicSuccess: state.profile.isUploadPicSuccess,
    isUploadPicLoading: state.profile.isUploadPicLoading,
    uploadPicProgress: state.profile.uploadPicProgress,
  };
};

export default connect(mapStateToProps)(ImageUpload);
