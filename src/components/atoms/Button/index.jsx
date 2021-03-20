import React from "react";

export const Button = ({ text, action }) => {
  return(
    <button 
        onClick={action}>
            {text}
    </button>
  );
};

export default Button;
