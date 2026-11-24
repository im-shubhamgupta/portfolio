import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ContactForm from "../../components/contactForm/ContactForm";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {renderBold} from "../../utils";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={600} distance="16px">
      <section className="section section-alt" id="contact">
        <div className="page-container contact-wrapper">
          <div className="section-header">
            <h2
              className={
                isDark ? "dark-mode section-heading" : "section-heading"
              }
            >
              {contactInfo.title}
            </h2>
            <p
              className={
                isDark
                  ? "dark-mode section-subtitle"
                  : "section-subtitle subTitle"
              }
            >
              {renderBold(contactInfo.subtitle)}
            </p>
          </div>

          <div className="contact-cards">
            {contactInfo.number && (
              <a
                href={"tel:" + contactInfo.number.replace(/\s/g, "")}
                className={isDark ? "contact-card dark" : "contact-card"}
              >
                <span className="contact-card-label">Phone</span>
                <span className="contact-card-value">{contactInfo.number}</span>
              </a>
            )}
            <a
              href={"mailto:" + contactInfo.email_address}
              className={isDark ? "contact-card dark" : "contact-card"}
            >
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">
                {contactInfo.email_address}
              </span>
            </a>
            {contactInfo.href && (
              <a
                href={contactInfo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={isDark ? "contact-card dark" : "contact-card"}
              >
                <span className="contact-card-label">WhatsApp</span>
                <span className="contact-card-value">Message me</span>
              </a>
            )}
          </div>

          <ContactForm
            isDark={isDark}
            fallbackEmail={contactInfo.email_address}
            title={contactInfo.formTitle}
            subtitle={contactInfo.formSubtitle}
          />

          <div className="contact-social">
            <SocialMedia />
          </div>
        </div>
      </section>
    </Fade>
  );
}
