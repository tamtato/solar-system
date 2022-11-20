import React from "react";

const SmallButton = ({ icon, handleOnClick, active }) => {
  return (
    <button onClick={() => handleOnClick()}>
      <span
        className={`material-symbols-rounded ${active && "text-yellow-500"}`}
      >
        {icon}
      </span>
    </button>
  );
};

export default SmallButton;
