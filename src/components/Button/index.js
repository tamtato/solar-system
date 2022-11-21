import React from "react";

const Button = ({ name, handleOnClick }) => {
  return (
    <button
      className="font-text text-white font-medium"
      onClick={() => handleOnClick()}
    >
      {name}
    </button>
  );
};

export default Button;
