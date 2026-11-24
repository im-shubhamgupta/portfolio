import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {aboutSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {renderBold} from "../../utils";
import "./About.scss";

export default function About() {
  const {isDark} = useContext(StyleContext);

  if (!aboutSection.display) {
    return null;
  }

  return (
    <section
      className={`section section-alt ${isDark ? "section-dark" : ""}`}
      id="about"
    >
      <Fade bottom duration={600} distance="16px">
        <div className="page-container">
          <div className="section-header">
            <h2
              className={
                isDark ? "dark-mode section-heading" : "section-heading"
              }
            >
              {aboutSection.title}
            </h2>
          </div>

          {aboutSection.summaryTitle && (
            <h3 className={`about-summary-title ${isDark ? "dark-mode" : ""}`}>
              {aboutSection.summaryTitle}
            </h3>
          )}

          <div className="about-summary">
            {aboutSection.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  isDark ? "dark-mode about-paragraph" : "about-paragraph"
                }
              >
                {renderBold(paragraph)}
              </p>
            ))}
          </div>

          {aboutSection.stats && (
            <div className="stats-grid">
              {aboutSection.stats.map((stat, index) => (
                <div
                  key={index}
                  className={isDark ? "stat-card stat-card-dark" : "stat-card"}
                >
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {aboutSection.coreTechnologies && (
            <div className="about-block">
              <h3
                className={
                  isDark ? "dark-mode about-block-title" : "about-block-title"
                }
              >
                Core Technologies
              </h3>
              <div className="tech-pills">
                {aboutSection.coreTechnologies.map((tech, index) => (
                  <span
                    key={index}
                    className={
                      isDark ? "tech-pill tech-pill-dark" : "tech-pill"
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {aboutSection.aiTechnologies && (
            <div className="about-block about-ai-block">
              <h3
                className={
                  isDark ? "dark-mode about-block-title" : "about-block-title"
                }
              >
                <i className="fas fa-brain" aria-hidden="true" />{" "}
                {aboutSection.aiTitle || "AI & LLM"}
              </h3>
              <div className="tech-pills">
                {aboutSection.aiTechnologies.map((tech, index) => (
                  <span
                    key={index}
                    className={
                      isDark
                        ? "tech-pill ai-pill ai-pill-dark"
                        : "tech-pill ai-pill"
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {aboutSection.keyExpertise && (
            <div className="about-block">
              <h3
                className={
                  isDark ? "dark-mode about-block-title" : "about-block-title"
                }
              >
                Key Expertise
              </h3>
              <ul className="expertise-list">
                {aboutSection.keyExpertise.map((item, index) => (
                  <li key={index} className={isDark ? "dark-mode-text" : ""}>
                    {renderBold(item)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Fade>
    </section>
  );
}
