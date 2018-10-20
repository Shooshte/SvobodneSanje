import React from "react";
import { Link } from "gatsby";

import "../styles/navbar.sass";

const Navbar = () => (
  <nav className="navbar-container">
    <div className="links-container">
      <Link to="/" className="nav-link">
        Blog
      </Link>
      <Link to="/CV" className="nav-link">
        CV
      </Link>
    </div>
  </nav>
);

export default Navbar;
