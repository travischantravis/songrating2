import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Track from "../pages/Track";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Main = (props) => {
  // const { isSignUpSuccess } = props;
  // console.log(isSignUpSuccess);
  return (
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/track/:id" component={Track} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignUpSuccess: state.auth.isSignUpSuccess, //unused
  };
};

export default connect(mapStateToProps)(Main);
