import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import About from "./about/About";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Awards from "./awards/Awards";
import Achievement from "./achievement/Achievement";
import Education from "./education/Education";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  // Light theme by default; a visitor's toggle choice is remembered
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(
    splashScreen.enabled
  );

  useEffect(() => {
    if (!splashScreen.enabled) {
      setIsShowingSplashAnimation(false);
      return;
    }
    const splashTimer = setTimeout(
      () => setIsShowingSplashAnimation(false),
      splashScreen.duration
    );
    return () => clearTimeout(splashTimer);
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <About />
            <WorkExperience />
            <StartupProject />
            <Awards />
            <Achievement />
            <Education />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
