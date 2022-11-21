import React from "react";

const Pill = ({ name, handleOnClick, active }) => {
  return (
    <div
      onClick={() => handleOnClick(name)}
      className={`hover:text-yellow-500 bg-zinc-800 py-3 flex-1 text-center cursor-pointer ${active &&
        "opacity-100 text-yellow-500"}`}
    >
      <p className="text-md">{name}</p>
    </div>
  );
};

export default Pill;
