import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Label } from "semantic-ui-react";

import { signOut, getCurrentUser } from "../redux/auth/authActions";

const AuthStatus = (props) => {
  const { isSignInSuccess, name, signOut, getCurrentUser } = props;

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div>
      {isSignInSuccess ? (
        <>
          <Link to="/profile">
            <Label image>
              <img
                src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                alt="profile pic"
              />
              {name}
            </Label>
          </Link>
          <Link to="/">
            <button
              className="my-button"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup">
            <button className="my-button">Sign Up</button>
          </Link>

          <Link to="/signin">
            <button className="my-button">Sign In</button>
          </Link>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignInSuccess: state.auth.isSignInSuccess,
    name: state.auth.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    getCurrentUser: () => dispatch(getCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthStatus);
