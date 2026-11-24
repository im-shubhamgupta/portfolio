import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, variant}) {
  const buttonClass =
    variant === "outline"
      ? "main-button button-outline"
      : variant === "secondary"
        ? "main-button button-secondary"
        : "main-button";

  return (
    <div className={className}>
      <a
        className={buttonClass}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
