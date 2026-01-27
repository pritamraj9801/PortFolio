import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
export default function Projects() {
  const [majorProjects, setMajorProjects] = useState([]);
  const [minorProjects, setMinorProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/GetMajorProjects")
      .then((res) => res.json())
      .then((data) => setMajorProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/api/GetMinorProjects")
      .then((res) => res.json())
      .then((data) => setMinorProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
  return (
    <div id="projects">
      <SectionHeader sectionName="Major Projects" />
      <div id="major-projects-container" className="container">
        {majorProjects.map((project) => (
          <div data-aos="fade-up">
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
                <a href={project.projectLiveUrl} className="live-btn" target="_blank" rel="noreferrer">
                  Live &nbsp;
                  <i class="fa-brands fa-hive"></i>
                </a>
                <a href={project.projectGitRepo} className="github-btn" target="_blank" rel="noreferrer">
                  Repo &nbsp;
                  <i class="fa-solid fa-code-branch"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SectionHeader sectionName="Minor Projects" />
      <div id="minor-projects-container" className="container">
        {minorProjects.map((project) => (
          <div data-aos="fade-up">
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
