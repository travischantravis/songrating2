import React from "react";
import { Route } from "react-router-dom";

import TrackSummary from "./TrackSummary";
import Home from "./Home";

const Main = () => {
  return (
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route path="/track/:id" component={TrackSummary} />
    </div>
  );
};

export default Main;
