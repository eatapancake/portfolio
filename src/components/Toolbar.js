import React from "react";
import "./Toolbar.css";

function Toolbar() {
  return (
    <div className="menu-container">
      <span className="link-container">
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </span>
    </div>
  );
}

export default Toolbar;
