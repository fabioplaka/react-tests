import React, { useState } from "react";

const Headline = ({ header, desc }) => {
  if (!header) {
    return null;
  }

  return (
    <div data-test="HeadlineComponent">
      <h1 data-test="header">{header}</h1>
      <p data-test="descWrapper">{desc}</p>
    </div>
  );
};

export default Headline;
