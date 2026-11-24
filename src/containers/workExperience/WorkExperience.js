import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  if (!workExperiences.display) {
    return null;
  }

  const content = (
    <section className="section" id="experience">
      <div className="page-container">
        <div className="section-header">
          <h2 className={isDark ? "dark-mode section-heading" : "section-heading"}>
            {workExperiences.title || "Experience"}
          </h2>
          {workExperiences.subtitle && (
            <p
              className={
                isDark
                  ? "dark-mode section-subtitle"
                  : "section-subtitle subTitle"
              }
            >
              {workExperiences.subtitle}
            </p>
          )}
        </div>
        <div className="experience-timeline">
          {workExperiences.experience.map((card, i) => (
            <ExperienceCard
              key={i}
              isDark={isDark}
              cardInfo={{
                company: card.company,
                href: card.href,
                desc: card.desc,
                date: card.date,
                companylogo: card.companylogo,
                role: card.role,
                descBullets: card.descBullets
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );

  const isReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (isReducedMotion) {
    return content;
  }

  return <Fade bottom duration={600} distance="16px">{content}</Fade>;
}
