import React from "react";
import ContactManager from "../images/ContactManager.png";
import Clock from "../images/25-5-Clock.png";
import DrumMachine from "../images/DrumMachine.png";
import RandomQuotes from "../images/RandonQuote.png";
import ReactCalculator from "../images/ReactCalculator.png";
import TeddyBearCafe from "../images/TeddyBearCafe.png";
import ReactMarkdown from "../images/ReactMarkdown.png";
import "./ProjectList.css";

const projectArr = [
  {
    title: "Clock",
    image: Clock,
    link: "https://eatapancake.github.io/25-5-clock/",
  },

  {
    title: "Drum Machine",
    image: DrumMachine,
    link: "https://eatapancake.github.io/drum-machine/",
  },
  {
    title: "React Calculator",
    image: ReactCalculator,
    link: "https://eatapancake.github.io/react-calculator/",
  },
  {
    title: "Contact Manager",
    image: ContactManager,
    link: "https://eatapancake.github.io/contact-app/",
  },
  {
    title: "Random Quote",
    image: RandomQuotes,
    link: "https://eatapancake.github.io/random-quote-machine/",
  },
  {
    title: "React Markdown Previewer",
    image: ReactMarkdown,
    link: "https://eatapancake.github.io/react-markdown-previewer/",
  },
  {
    title: "Teddy Bear Cafe",
    image: TeddyBearCafe,
    link: "https://codepen.io/Eatapancake/full/rNYJKxL",
  },
];
const DisplayProjects = () => {
  return (
    <div className="project-grid-container">
      {projectArr.map((project) => (
        <div key={project.title} className="img-container">
          <img
            className="img-image"
            src={project.image}
            alt="Contact Manager"
            width="380"
          />

          <a target="_blank" rel="noreferrer" href={project.link}>
            <div className="img-overlay">
              <div className="img-text">{project.title}</div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

function ProjectList() {
  return (
    <div className="hidden">
      <DisplayProjects />
    </div>
  );
}

export default ProjectList;
