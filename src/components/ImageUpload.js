import React, { useState } from "react";
import { connect } from "react-redux";
import { Progress } from "semantic-ui-react";

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
        <input
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
        <div className="preview-img-container">
          <img src={previewUrl} className="preview-img" alt="profile pic" />
        </div>
        <button className="my-button" type="submit">
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
