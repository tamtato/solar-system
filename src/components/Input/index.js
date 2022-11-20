import React from "react";

const Input = ({ name, placeholder, value, handleOnChange }) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={e => handleOnChange(e.target.value)}
    />
  );
};

export default Input;
