import React from "react";
import { Route } from "react-router-dom";

import Track from "../pages/Track";
import Home from "../pages/Home";

const Main = () => {
  return (
    <div className="main">
      <Route exact path="/" component={Home} />
      <Route path="/track/:id" component={Track} />
    </div>
  );
};

export default Main;
