import React, { useState } from "react";
import {Link} from "react-router-dom";
import "../../styles/navbar.scss";
import NavLogo from "../../Assets/logo.png";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <nav className="navigation">
        <a href="/" className="brand-name">
          <img src={NavLogo} alt="navbar Logo" />
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <button className="white_btn" onClick={handleLogout}> Logout
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
