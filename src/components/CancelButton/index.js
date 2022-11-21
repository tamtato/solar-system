import React from "react";

const CancelButton = ({ handleOnClick }) => {
  return (
    <button
      className="font-medium p-3 flex-1 bg-transparent"
      onClick={() => handleOnClick()}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
