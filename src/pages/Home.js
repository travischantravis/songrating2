import React from "react";
import "../styles/Home.css";
import LatestReviews from "../components/LatestReviews";

const Home = () => {
  return (
    <div className="dashboard">
      <LatestReviews />
    </div>
  );
};

export default Home;
