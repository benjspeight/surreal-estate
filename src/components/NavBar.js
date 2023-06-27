import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="/images/logo.png" alt="Surreal Estate Logo" className="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="# ">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="# ">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
