import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //console.log(projects);

  const projectLists = projects.map((project)=>{
    return <li key={project.id}>{project.name} {project.about} {project.technologies}</li>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectLists}</div>
      <ProjectItem 
      name={projects.name}
      about ={projects.about}
      technologies={projects.technologies}

      />
    </div>
  );
}

export default ProjectList;
