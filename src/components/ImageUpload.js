import React, { useState } from "react";
import { connect } from "react-redux";

const ImageUpload = (props) => {
  const { isUploadPicSuccess, uploadProfilePic } = props;
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState(
    "https://react.semantic-ui.com/images/wireframe/square-image.png"
  );

  return (
    <div>
      <p>Update your profile image</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          uploadProfilePic(file[0]);
        }}
      >
        <input
          type="file"
          accept="image/*"
          multiple={false}
          onChange={(e) => {
            setFile(e.target.files);
            URL.revokeObjectURL(fileUrl);
            setFileUrl(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <button className="my-button" type="submit">
          Upload
        </button>
      </form>
      <div
        style={{
          height: "100px",
          width: "100px",
          border: "1px dashed black",
        }}
      >
        <img
          src={fileUrl}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div>{isUploadPicSuccess ? <p>Upload successful!</p> : null}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isUploadPicSuccess: state.auth.isUploadPicSuccess,
  };
};

export default connect(mapStateToProps)(ImageUpload);
