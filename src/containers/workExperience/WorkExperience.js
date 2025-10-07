import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const isReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (workExperiences.display) {
    return (
      <div id="experience">
        {isReducedMotion ? (
          <>
            <div className="experience-container hello" id="workExperience">
              <div>
                <h1 className="experience-heading">Experiences</h1>
                <div className="experience-cards-div">
                  {workExperiences.experience.map((card, i) => {
                    return (
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
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container hello" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
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
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
        )}
      </div>
    );
  }
  return null;
}
