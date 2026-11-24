import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <section className="section" id="achievements">
      <Fade bottom duration={600} distance="16px">
        <div className="page-container">
          <div className="section-header">
            <h2
              className={
                isDark ? "dark-mode section-heading" : "section-heading"
              }
            >
              {achievementSection.title}
            </h2>
            <p
              className={
                isDark
                  ? "dark-mode section-subtitle"
                  : "section-subtitle subTitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}
