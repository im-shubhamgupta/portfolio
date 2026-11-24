import React, {useContext} from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);

  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <Fade bottom duration={800} distance="24px">
      <section
        className={isDark ? "dark-mode skills-container section-block" : "skills-container section-block"}
        id="proficiency"
      >
        <div className="skills-bar">
          <h2 className="section-heading skills-heading">
            {techStack.title || "Proficiency"}
          </h2>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage
            };
            return (
              <div key={i} className="skill">
                <p className={isDark ? "dark-mode-text" : ""}>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
