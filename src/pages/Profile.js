import React, { useState } from "react";
import { uploadProfilePic } from "../redux/auth/authActions";

const Profile = () => {
  const [file, setFile] = useState();
  return (
    <div>
      <h2>Your Profile</h2>
      <p>Upload your profile image</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(file[0]);
          uploadProfilePic(file[0]);
        }}
      >
        <input
          label="upload file"
          type="file"
          accept="image/*"
          multiple={false}
          onChange={(e) => {
            setFile(e.target.files);
          }}
        />
        <button className="my-button" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Profile;
