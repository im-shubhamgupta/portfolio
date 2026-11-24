import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <section className={isDark ? "dark-mode main section-block" : "main section-block"} id="skills">
      <Fade bottom duration={800} distance="24px">
        <div className="skills-main-div">
          <div className="skills-text-div">
            <div className="section-header">
              <h2
                className={
                  isDark ? "dark-mode section-heading" : "section-heading"
                }
              >
                {skillsSection.title}
              </h2>
              <p
                className={
                  isDark
                    ? "dark-mode section-subtitle skills-text-subtitle"
                    : "section-subtitle subTitle skills-text-subtitle"
                }
              >
                {skillsSection.subTitle}
              </p>
            </div>
            <SoftwareSkill />
            <div className="skills-list">
              {skillsSection.skills.map((skill, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
