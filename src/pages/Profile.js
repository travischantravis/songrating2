import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ImageUpload from "../components/ImageUpload";
import {
  uploadProfilePic,
  getProfilePic,
} from "../redux/profile/profileActions";
import "../styles/Profile.css";

const Profile = (props) => {
  const { uploadProfilePic } = props;
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const pic = await getProfilePic("abc");
      setImgUrl(pic);
      console.log(pic);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>Your Profile</h2>
      <ImageUpload uploadProfilePic={uploadProfilePic} />
      <img
        style={{ width: "100px" }}
        src={`data:image/png;base64,${imgUrl}`}
        alt="profile-pic"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadProfilePic: (file) => dispatch(uploadProfilePic(file)),
  };
};

export default connect(null, mapDispatchToProps)(Profile);
