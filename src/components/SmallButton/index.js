import React from "react";

const SmallButton = ({ icon, handleOnClick }) => {
  return (
    <button onClick={() => handleOnClick()}>
      <span className="material-symbols-rounded">{icon}</span>
    </button>
  );
};

export default SmallButton;
