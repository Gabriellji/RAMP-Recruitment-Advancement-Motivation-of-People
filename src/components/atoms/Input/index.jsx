import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Input = ({ placeholder, onChange, type }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
      value={value}
      type={type}
    />
  );
};

export default Input;

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};
