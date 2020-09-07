import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import GuardedRoute from "./GuardedRoute";
import Track from "../pages/Track";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";

const Main = (props) => {
  const { isSignInSuccess } = props;
  return (
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/track/:id" component={Track} />
      <GuardedRoute path="/signin" component={SignIn} auth={!isSignInSuccess} />
      <GuardedRoute
        path="/profile"
        component={Profile}
        auth={isSignInSuccess}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignInSuccess: state.auth.isSignInSuccess,
  };
};

export default connect(mapStateToProps)(Main);
