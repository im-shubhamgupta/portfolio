import React, {useContext} from "react";
import "./Awards.scss";
import {awardsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {renderBold} from "../../utils";

export default function Awards() {
  const {isDark} = useContext(StyleContext);
  if (!awardsSection.display || !awardsSection.awards.length) {
    return null;
  }

  return (
    <section className="section" id="awards">
      <Fade bottom duration={600} distance="16px">
        <div className="page-container">
          <div className="section-header">
            <h2
              className={
                isDark ? "dark-mode section-heading" : "section-heading"
              }
            >
              {awardsSection.title}
            </h2>
            {awardsSection.subtitle && (
              <p
                className={
                  isDark
                    ? "dark-mode section-subtitle"
                    : "section-subtitle subTitle"
                }
              >
                {awardsSection.subtitle}
              </p>
            )}
          </div>

          <div className="awards-list">
            {awardsSection.awards.map((award, i) => (
              <article
                key={i}
                className={isDark ? "award-card award-card-dark" : "award-card"}
              >
                {award.image && (
                  <a
                    href={award.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="award-image-link"
                    title="View full image"
                  >
                    <img
                      src={award.image}
                      alt={award.imageAlt || award.title}
                      className="award-image"
                      loading="lazy"
                    />
                  </a>
                )}
                <div className="award-detail">
                  <span className="award-icon" aria-hidden="true">
                    <i className="fas fa-trophy" />
                  </span>
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-meta">
                    {award.issuer}
                    {award.issuer && award.date && " · "}
                    {award.date}
                  </p>
                  {award.description && (
                    <p className="award-desc">
                      {renderBold(award.description)}
                    </p>
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
