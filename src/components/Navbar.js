import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu(!menu);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="beach" />
          </Link>
          <button className="nav-btn" type="button" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={menu ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
