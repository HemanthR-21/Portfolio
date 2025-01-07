import React from "react";
import projectData from "./ProjectData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center my-4">Projects</h2>
      <div className="row">
        {projectData.map((project) => (
          <div className="col-md-6" key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
