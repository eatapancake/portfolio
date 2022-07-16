import React from "react";
import profile from "../images/Chibi.png";

function About() {
  return (
    <div className="about">
      <h2>Hello, my name is Janet.</h2>
      <em>I'm a Web Developer based in Chicago, IL</em>
      <img className="profile" src={profile} alt="profile" width="300" />
    </div>
  );
}

export default About;
