import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(
      `Image of ${school.schoolName} is missing in education section`
    );

  return (
    <Fade bottom duration={600} distance="16px">
      <article
        className={
          isDark ? "education-card education-card-dark" : "education-card"
        }
      >
        <div className="education-card-header">
          {school.logo && (
            <img
              className="education-logo"
              src={school.logo}
              alt={school.schoolName}
            />
          )}
          <div>
            <h3 className="education-text-school">{school.schoolName}</h3>
            <p className="education-text-subHeader">{school.subHeader}</p>
          </div>
        </div>
        <span className="education-text-duration">
          <i className="far fa-calendar-alt" aria-hidden="true" />
          {school.duration}
        </span>
        {school.desc && <p className="education-text-desc">{school.desc}</p>}
        {school.descBullets && (
          <ul className="education-text-bullets">
            {school.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </article>
    </Fade>
  );
}
