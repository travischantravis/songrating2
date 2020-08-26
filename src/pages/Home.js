import React from "react";
import { connect } from "react-redux";

import "../styles/Home.css";
import LatestComments from "../components/LatestComments";
import { queryLatestComments } from "../redux/comment/commentActions";

const Home = (props) => {
  const { queryLatestComments } = props;

  return (
    <div className="dashboard">
      <LatestComments queryLatestComments={queryLatestComments} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    latestComments: state.comment.latestComments, //unused
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    queryLatestComments: () => dispatch(queryLatestComments()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
