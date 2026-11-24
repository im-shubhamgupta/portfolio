import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <button
      type="button"
      className={isDark ? "theme-toggle theme-toggle-dark" : "theme-toggle"}
      onClick={changeTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <i className={isDark ? "fas fa-sun" : "fas fa-moon"} aria-hidden="true" />
    </button>
  );
};
export default ToggleSwitch;
