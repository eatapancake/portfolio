import React from "react";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <div>
      <h2>My Recent Project</h2>
      <p>
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
  );
}

export default Projects;
