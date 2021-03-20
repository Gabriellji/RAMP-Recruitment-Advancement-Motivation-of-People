import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ text }) => <p>{text}</p>;

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
