import React from "react";
import { Link } from "react-router-dom";
import charterLogo from "../../images/charterLogo.jpeg";

import "../dropdown/Dropdown.js";

const Navbar = () => {
  return (
    <>
      <nav className="navbar nav navbar-dark">
        <Link to="/" className="navbar-brand " href="#">
          <img src={charterLogo} className="charter-logo" />
        </Link>

        <Link className="navbar-brand" href="#">
          CHRONICAL
        </Link>
        <div className="mr-auto">
          <span className="user">
            user <i className="fas fa-user"></i>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
