import React from "react";
import { Link } from "react-router-dom";
import GuestLinks from "./GuestLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Connect bazaar - Continuous Integration - From development
        </Link>
        <GuestLinks />
      </div>
    </nav>
  );
};

export default Navbar;
