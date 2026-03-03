import React from "react";
import minorProjects from "../Data/minorProjectsData";
import majorProjects from "../Data/majorProjectsData";
import SectionHeader from "./SectionHeader";
export default function Projects() {
  return (
    <div id="projects">
      <SectionHeader sectionName="Major Projects" />
      <div id="major-projects-container" className="container">
        {majorProjects.map((project) => (
          <div data-aos="fade-up" key={project.id}>
            <div>
              <img
                src={project.projectImage}
                alt="not found"
                style={{ width: "100%" }}
              />
            </div>
            <div className="usedTechnologies">
              <p>{project.usedTechnologies}</p>
            </div>
            <div className="projectDetails">
              <p key={project._id} className="projectName">
                {project.projectName}
              </p>
              <p className="projectDescription">{project.projectDescription}</p>
              <div className="project-btns">
                {project.projectLiveUrl && (
                  <a
                    href={project.projectLiveUrl}
                    className="live-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live &nbsp;
                    <i className="fa-brands fa-hive"></i>
                  </a>
                )}
                {project.projectGitRepo && (
                  <a
                    href={project.projectGitRepo}
                    className="github-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo &nbsp;
                    <i className="fa-solid fa-code-branch"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <SectionHeader sectionName="Minor Projects" />
      <div id="minor-projects-container" className="container">
        {minorProjects.map((project) => (
          <div data-aos="fade-up" key={project.id}>
            <div className="minor-project-used-technologies">
              {project.usedTechnologies}
            </div>
            <div className="minor-project-detail">
              <p key={project._id} className="minor-project-name">
                {project.projectName}
              </p>
              <p className="minor-project-description">
                {project.projectDescription}
              </p>
              <a
                href={project.projectGitRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="minor-project-git-repo"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
