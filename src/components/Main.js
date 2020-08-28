import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Track from "../pages/Track";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Main = (props) => {
  const { isSignInSuccess } = props;
  return (
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin">
        {isSignInSuccess ? <Redirect to="/" /> : <SignIn />}
      </Route>
      <Route path="/track/:id" component={Track} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignInSuccess: state.auth.isSignInSuccess,
  };
};

export default connect(mapStateToProps)(Main);
