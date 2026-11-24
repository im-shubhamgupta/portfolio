import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, socialMediaLinks, isHireable} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {renderBold, toDriveDownloadUrl} from "../../utils";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <section
      className={`hero-section ${isDark ? "hero-dark" : ""}`}
      id="greeting"
    >
      <Fade bottom duration={700} distance="20px">
        <div className="page-container hero-inner">
          <div className="hero-grid">
            <div className="hero-content">
              {isHireable && (
                <span className="hero-badge">
                  <span className="hero-badge-dot" aria-hidden="true" />
                  Open to new opportunities
                </span>
              )}
              <p className="hero-role">{greeting.roleTitle}</p>
              <h1 className={isDark ? "dark-mode hero-name" : "hero-name"}>
                Hi, I'm{" "}
                <span className="hero-name-accent">{greeting.title}</span>
              </h1>
              <p
                className={
                  isDark ? "dark-mode hero-tagline" : "hero-tagline subTitle"
                }
              >
                {renderBold(greeting.subTitle)}
              </p>

              <div className="hero-contact-row">
                {greeting.email && (
                  <a
                    href={`mailto:${greeting.email}`}
                    className="hero-contact-link"
                  >
                    <i className="fas fa-envelope" aria-hidden="true" />
                    {greeting.email}
                  </a>
                )}
                {greeting.phone && (
                  <a
                    href={`tel:${greeting.phone.replace(/\s/g, "")}`}
                    className="hero-contact-link"
                  >
                    <i className="fas fa-phone-alt" aria-hidden="true" />
                    {greeting.phone}
                  </a>
                )}
              </div>

              {socialMediaLinks.display && (
                <div className="hero-social">
                  <SocialMedia />
                </div>
              )}

              <div className="hero-actions">
                <Button text="View Projects" href="#projects" />
                {greeting.resumeLink && (
                  <Button
                    text="View Resume"
                    href={greeting.resumeLink}
                    newTab={true}
                    variant="outline"
                  />
                )}
                {greeting.resumeLink && (
                  <Button
                    text="Download Resume"
                    href={toDriveDownloadUrl(greeting.resumeLink)}
                    newTab={true}
                    variant="outline"
                  />
                )}
              </div>
            </div>

            <div className="hero-visual">
              {greeting.profileImage && (
                <div className="profile-image-frame">
                  <img
                    src={greeting.profileImage}
                    alt={greeting.username}
                    className="profile-image"
                  />
                </div>
              )}
            </div>
          </div>

          <a href="#about" className="hero-scroll" aria-label="Scroll to about">
            <i className="fas fa-chevron-down" aria-hidden="true" />
          </a>
        </div>
      </Fade>
    </section>
  );
}
