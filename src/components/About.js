import React from "react";
import profile from "../images/Chibi.png";
import resume from "../images/JanetSantoyoResume.pdf";
import "./About.css";
import Icons from "./Icons";

function About() {
  return (
    <div className="about" id="about">
      <h2>Hello, my name is Janet.</h2>
      <em className="em-text">I'm a Web Developer based in Chicago, IL</em>
      <img className="profile" src={profile} alt="profile" width="200" />
      <h2>Nice to Meet You! 𓅱</h2>
      <p className="intro">
        I graduated from Columbia College in Chicago with a BA in Game Art and a
        minor in Programming where I discovered my passion for web development.
        After graduating, I continued to improve my web developing skills.
      </p>
      <span></span>
      <Icons />
      <div className="resume">
        <a
          className="resume-link"
          target="_blank"
          href={resume}
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="skills-container">
        <div className="skills-item">
          <h3>Programing Languages</h3>
          <p className="skills-p">JavaScript, HTML/CSS, C#</p>
        </div>
        <div className="skills-item">
          <h3>Dev Tools</h3>
          <p className="skills-p">React.js, Bootstrap, Cloud FireStore</p>
        </div>
      </div>
    </div>
  );
}

export default About;
