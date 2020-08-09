import React from "react";
import { Route } from "react-router-dom";

import TrackSummary from "./TrackSummary";

const Main = () => {
  return (
    <div className="main">
      <Route exact path="/" component={TrackSummary} />
    </div>
  );
};

export default Main;
