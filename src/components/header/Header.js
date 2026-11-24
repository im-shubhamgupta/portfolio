import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  aboutSection,
  workExperiences,
  bigProjects,
  achievementSection,
  awardsSection,
  educationInfo
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  const navItems = [
    aboutSection.display && {href: "#about", label: "About"},
    workExperiences.display && {href: "#experience", label: "Experience"},
    bigProjects.display && {href: "#projects", label: "Projects"},
    awardsSection.display && {href: "#awards", label: "Awards"},
    achievementSection.display && {href: "#achievements", label: "Certs"},
    educationInfo.display && {href: "#education", label: "Education"},
    {href: "#contact", label: "Contact"}
  ].filter(Boolean);

  return (
    <Headroom className="headroom-fixed">
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="#greeting" className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{greeting.username.split(" ")[0]}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"} />
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {navItems.map((item, i) => (
            <li key={i}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li className="theme-toggle-item">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
