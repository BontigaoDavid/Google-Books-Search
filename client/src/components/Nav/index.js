import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <a className="navbar-brand navigate" href="/search">
        Search
      </a>
      <a className="navbar-brand navigate" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
