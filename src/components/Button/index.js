import React from "react";

const Button = ({ name, handleOnClick }) => {
  return (
    <button
      className="font-medium bg-sky-500 p-3 flex-1"
      onClick={() => handleOnClick()}
    >
      {name}
    </button>
  );
};

export default Button;
