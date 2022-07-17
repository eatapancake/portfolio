import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

function Contact() {
  const linkedIn = (
    <div className="circle-icon">
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/janet-santoyo-6789381a7/"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
  const github = (
    <div className="circle-icon">
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/janet-santoyo-6789381a7/"
      >
        <FontAwesomeIcon icon={faGithub} />{" "}
      </a>
    </div>
  );
  const ffc = (
    <div className="circle-icon">
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/janet-santoyo-6789381a7/"
      >
        <FontAwesomeIcon icon={faFreeCodeCamp} />{" "}
      </a>
    </div>
  );
  const codePen = (
    <div className="circle-icon">
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/janet-santoyo-6789381a7/"
      >
        <FontAwesomeIcon icon={faCodepen} />{" "}
      </a>
    </div>
  );
  return (
    <div id="contact">
      <h2>Contact</h2>
      <p>Best way to reach me is through email.</p>
      <span className="icon-span">
        {github} {linkedIn} {ffc} {codePen}
      </span>
    </div>
  );
}

export default Contact;
