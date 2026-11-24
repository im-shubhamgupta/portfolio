import React, {useEffect, useState} from "react";
import "./Top.scss";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button once the user scrolls past the first 300px
  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function TopEvent() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <button
      onClick={TopEvent}
      id="topButton"
      className={isVisible ? "visible" : ""}
      title="Go to top"
      aria-label="Go to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
