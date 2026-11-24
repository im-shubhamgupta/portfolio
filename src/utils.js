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

/**
 * Turn a Google Drive share link into a direct-download link.
 *
 * @param {string} url - A Drive link such as
 *   https://drive.google.com/file/d/<id>/view?usp=sharing or one with ?id=<id>.
 * @returns {string} https://drive.google.com/uc?export=download&id=<id> for
 *   Drive links; any other value (non-Drive URL, empty, undefined) is
 *   returned unchanged. Never throws.
 * The file must be shared as "Anyone with the link" or visitors get an error.
 */
export const toDriveDownloadUrl = url => {
  if (typeof url !== "string" || !url.includes("drive.google.com")) {
    return url;
  }
  const match = url.match(/\/d\/([\w-]+)/) || url.match(/[?&]id=([\w-]+)/);
  return match
    ? `https://drive.google.com/uc?export=download&id=${match[1]}`
    : url;
};
