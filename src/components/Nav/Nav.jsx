import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Nav.css"; // Import nav styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="nav">
      {/* Left Side - Logo */}
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      {/* Center - Navigation Links */}
      <ul className="nav__links">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>

      {/* Right Side - Icons */}
      <div className="nav__icons">
        <FontAwesomeIcon
          icon={faSearch}
          style={{ color: "white", cursor: "pointer" }}
        />
        <FontAwesomeIcon
          icon={faBell}
          style={{ color: "white", cursor: "pointer" }}
        />

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Avatar"
        />
        <ExpandMoreIcon
          style={{ color: "white", marginLeft: "8px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Nav;
