import React from "react";

const SmallButton = ({ icon, handleOnClick, active }) => {
  return (
    <button
      className="flex justify-center content-center p-3"
      onClick={() => handleOnClick()}
    >
      <div
        className={`material-symbols-rounded ${active && "text-yellow-500"}`}
      >
        {icon}
      </div>
    </button>
  );
};

export default SmallButton;
