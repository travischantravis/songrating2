import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import AuthStatus from "./AuthStatus";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="my-link" to="/">
        <h2>Song Blog</h2>
      </Link>

      <AuthStatus />
      <SearchBar />
    </div>
  );
};

export default NavBar;
