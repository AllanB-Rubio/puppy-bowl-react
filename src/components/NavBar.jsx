import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
    </div>
  );
}
