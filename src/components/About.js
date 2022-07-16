import React from "react";
import profile from "../images/Chibi.png";
import "./About.css";

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
        After graduating, I continued to improve my web developing skills, and
        have a better understanding of web design as well.
      </p>
      <div className="skills-container">
        <div>
          <h3>Programing Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>C#</li>
          </ul>
        </div>
        <div>
          <h3>Dev Tools</h3>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>CodePen</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
