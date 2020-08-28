import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../redux/auth/authActions";

const AuthStatus = (props) => {
  const { isSignInSuccess, name, signOut } = props;

  return (
    <div>
      {isSignInSuccess ? (
        <>
          {name}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthStatus);
