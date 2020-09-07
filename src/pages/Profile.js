import React from "react";
import { connect } from "react-redux";
import ImageUpload from "../components/ImageUpload";
import {
  uploadProfilePic,
  getProfilePic,
} from "../redux/profile/profileActions";
import "../styles/Profile.css";

const Profile = (props) => {
  const { uploadProfilePic } = props;

  return (
    <div>
      <h2>Your Profile</h2>
      <ImageUpload uploadProfilePic={uploadProfilePic} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadProfilePic: (file) => dispatch(uploadProfilePic(file)),
  };
};

export default connect(null, mapDispatchToProps)(Profile);
