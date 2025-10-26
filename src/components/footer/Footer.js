import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "footer-text" : "footer-text"}>
          
          {emoji("Turning your Business ideas into Technology — with a powerful strategy & top-notch security.❤️")}
        </p>
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
      </div>
    </Fade>
  );
}

 //       {emoji("Turning your business ideas into innovative technology — with smart strategy, robust security, and seamless user experience. ❤️")}  
          // {emoji("Your business ideas. My technology. Strategy, security, and efficiency in every line of code. ❤️")}

          // {emoji("Transforming ideas into technology solutions — with strategy, security, and user efficiency at the core. ❤️")}
          // {emoji("Turning your ideas into code, one backend at a time. ❤️")}
