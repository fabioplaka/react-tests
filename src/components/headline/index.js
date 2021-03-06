import React from "react";
import PropTypes from "prop-types";

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

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};

export default Headline;
