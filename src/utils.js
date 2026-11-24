import React from "react";

export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

/**
 * Render `**bold**` markers in a plain-text string as <strong> elements.
 *
 * @param {*} text - Content from portfolio.js. Non-string values (React
 *   elements, null, undefined) are returned unchanged.
 * @returns {*} The original value, or an array of strings and <strong>
 *   elements. Unmatched `**` markers are left as literal text.
 * Never throws; text is rendered as React children, never as raw HTML.
 */
export const renderBold = text => {
  if (typeof text !== "string" || !text.includes("**")) {
    return text;
  }
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-highlight">
        {part}
      </strong>
    ) : (
      part
    )
  );
};
