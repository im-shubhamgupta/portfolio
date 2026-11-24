import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import SocialMedia from "../socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className={isDark ? "footer-div footer-dark" : "footer-div"}>
        <div className="page-container footer-inner">
          <div className="footer-brand">
            <a href="#greeting" className="footer-name">
              {greeting.username}
            </a>
            <p className="footer-text">
              Turning ideas into scalable products through clean architecture
              and secure engineering.
            </p>
          </div>
          <SocialMedia />
        </div>
        <div className="page-container footer-bottom">
          <span>
            © {new Date().getFullYear()} {greeting.username}. All rights
            reserved.
          </span>
          <span>Built with React</span>
        </div>
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p> */}
      </footer>
    </Fade>
  );
}
//Turning your Business ideas into Technology — with a powerful strategy & top-notch security.❤️
//       {emoji("Turning your business ideas into innovative technology — with smart strategy, robust security, and seamless user experience. ❤️")}
// {emoji("Your business ideas. My technology. Strategy, security, and efficiency in every line of code. ❤️")}

// {emoji("Transforming ideas into technology solutions — with strategy, security, and user efficiency at the core. ❤️")}
// {emoji("Turning your ideas into code, one backend at a time. ❤️")}
