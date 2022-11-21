import React from "react";

const Input = ({ name, placeholder, value, handleOnChange, label }) => {
  return (
    <input
      className="flex-1"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={e => handleOnChange(e.target.value)}
    />
  );
};

export default Input;
