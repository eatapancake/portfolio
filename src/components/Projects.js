import React from "react";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <div id="project">
      <div className="project-container">
        <h2>My Recent Projects</h2>
        <p className="project-text">
          Here are some of my recent work. All code can be found on my{" "}
          <a
            className="link-dark"
            href="https://github.com/eatapancake?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>
        <ProjectList />
      </div>
    </div>
  );
}

export default Projects;
