import React from "react";
import { useState } from "react";

const StringArea = ({ text, max }) => {
  const [showFullText, setShowFulltext] = useState(false);

  const handleClick = () => {
    setShowFulltext(!showFullText);
  };

  let shortText = text;

  if (text.length > max && !showFullText) {
    shortText = text.substring(0, max) + "...";
  }

  return <p onClick={handleClick}>{shortText}</p>;
};

export default StringArea;
