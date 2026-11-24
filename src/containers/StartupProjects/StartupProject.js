import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {renderBold} from "../../utils";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer")?.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  return (
    <section className="section section-alt" id="projects">
      <Fade bottom duration={600} distance="16px">
        <div className="page-container">
          <div className="section-header">
            <h2 className="section-heading">{bigProjects.title}</h2>
            <p
              className={
                isDark
                  ? "dark-mode section-subtitle"
                  : "section-subtitle subTitle"
              }
            >
              {bigProjects.subtitle}
            </p>
          </div>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => (
              <article
                key={i}
                className={
                  isDark
                    ? "project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {project.image && (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    />
                  </div>
                )}
                <div className="project-detail">
                  {project.category && (
                    <span className="project-category">{project.category}</span>
                  )}
                  <h3 className="card-title">{project.projectName}</h3>
                  <p className="card-subtitle">
                    {renderBold(project.projectDesc)}
                  </p>
                  {project.tags && (
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span className="project-tech-tag" key={tagIndex}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.footerLink && (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, linkIndex) => (
                        <button
                          type="button"
                          key={linkIndex}
                          className="project-tag"
                          onClick={() => openUrlInNewTab(link.url)}
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}
