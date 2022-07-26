import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Contact.css";

function Icons() {
  const linkedIn = (
    <div className="circle-icon">
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/janet-santoyo-6789381a7/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
  const github = (
    <div className="circle-icon">
      <a
        className="icon-link"
        href="https://github.com/eatapancake"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />{" "}
      </a>
    </div>
  );
  const ffc = (
    <div className="circle-icon">
      <a
        className="icon-link"
        href="https://www.freecodecamp.org/eatapancake"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} />
      </a>
    </div>
  );
  const codePen = (
    <div className="circle-icon">
      <a
        className="icon-link"
        href="https://codepen.io/Eatapancake"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faCodepen} />{" "}
      </a>
    </div>
  );
  const mail = (
    <div className="circle-icon">
      <a className="icon-link" href="mailto: santoyojanet27@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />{" "}
      </a>
    </div>
  );
  return (
    <div id="menu-container">
      <span className="icon-span">
        {mail} {github} {linkedIn} {ffc} {codePen}
      </span>
    </div>
  );
}

export default Icons;
