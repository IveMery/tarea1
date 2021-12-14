import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./header.styles.scss";

const Header = () => {
  return (
    <nav className="navbar  bg-success justify-content-around-">
      <div className="p-2">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/" className="p-2 text-decoration-none text-dark fw-bold">
          HOMEPAGE
        </Link>
        <Link
          to="/characters"
          className="p-2 text-decoration-none text-dark fw-bold"
        >
          CHARACTERS
        </Link>
        <Link
          to="/aboutus"
          className="p-2 text-decoration-none text-dark fw-bold"
        >
          ABOUT US
        </Link>
      </div>
    </nav>
  );
};

export default Header;
