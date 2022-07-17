import React from "react";
import "./Toolbar.css";

function Toolbar() {
  return (
    <div className="menu-container">
      <span className="link-container">
        <a className="menu-link" href="#about">
          About
        </a>
        <a className="menu-link" href="#project">
          Projects
        </a>
        <a className="menu-link" href="#contact">
          Contact
        </a>
      </span>
    </div>
  );
}

export default Toolbar;
