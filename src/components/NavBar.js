import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="my-link" to="/">
        <h2>Song Blog</h2>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
