import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut, getCurrentUser } from "../redux/auth/authActions";

const AuthStatus = (props) => {
  const { isSignInSuccess, name, signOut, getCurrentUser } = props;
  useEffect(() => {
    getCurrentUser();
    // console.log(authUser);
  }, []);
  return (
    <div>
      {isSignInSuccess ? (
        <>
          <Link to="/profile">{name}</Link>
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
