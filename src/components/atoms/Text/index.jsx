import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({ text }) => (
  <p>
    {text}
  </p>
);

export default Text;

Text.propTypes = {
  text: PropTypes.string.isRequired,
};
