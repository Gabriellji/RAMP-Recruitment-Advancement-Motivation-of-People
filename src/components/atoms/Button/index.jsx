import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, action }) => (
  <button
    type="submit"
    onClick={action}
  >
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
