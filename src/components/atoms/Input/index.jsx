import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Input = ({
  placeholder, onChange, type, id, initialValue,
}) => {
  const [value, setValue] = useState(initialValue);

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
      id={id}
    />
  );
};

export default Input;

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  id: '',
  onChange: () => {},
  initialValue: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.string,
  initialValue: PropTypes.string,
};
