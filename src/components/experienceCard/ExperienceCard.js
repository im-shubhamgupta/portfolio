import React from "react";
import "./ExperienceCard.scss";
import {renderBold} from "../../utils";

export default function ExperienceCard({cardInfo, isDark}) {
  const GetDescBullets = ({descBullets}) => {
    if (!descBullets || !descBullets.length) {
      return null;
    }
    return (
      <ul className="experience-bullets">
        {descBullets.map((item, i) => (
          <li key={i}>{renderBold(item)}</li>
        ))}
      </ul>
    );
  };

  return (
    <article
      className={
        isDark ? "experience-timeline-item dark" : "experience-timeline-item"
      }
    >
      <div className="experience-timeline-marker" aria-hidden="true" />
      <div className="experience-timeline-body">
        <div className="experience-timeline-header">
          {cardInfo.companylogo && (
            <img
              src={cardInfo.companylogo}
              alt=""
              className="experience-company-logo"
            />
          )}
          <div className="experience-timeline-meta">
            <h3 className="experience-company-name">
              {cardInfo.href ? (
                <a
                  href={cardInfo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardInfo.company}
                </a>
              ) : (
                cardInfo.company
              )}
            </h3>
            <p className="experience-role-name">{cardInfo.role}</p>
            <p className="experience-date">{cardInfo.date}</p>
          </div>
        </div>
        {cardInfo.desc && (
          <p className="experience-desc">{renderBold(cardInfo.desc)}</p>
        )}
        <GetDescBullets descBullets={cardInfo.descBullets} />
      </div>
    </article>
  );
}
