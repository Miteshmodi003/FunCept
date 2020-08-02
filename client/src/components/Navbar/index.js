import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="newFlex">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={
                window.location.pathname === "/signup" || window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/activityfeed"
              className={window.location.pathname === "/activityfeed" ? "nav-link active" : "nav-link"}
            >
              Activity Feed
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/uploadvideos"
              className={window.location.pathname === "/uploadvideos" ? "nav-link active" : "nav-link"}
            >
              Upload Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/findpeople"
              className={window.location.pathname === "/findpeople" ? "nav-link active" : "nav-link"}
            >
              Find People
            </Link>
          </li>
        </ul>
        <h3 className="siteNameNav">FunCept</h3>
      </div>
    </nav>
  );
}

export default Navbar;
