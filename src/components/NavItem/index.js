import React from "react";

const NavItem = ({ name, subText, handleOnClick, active }) => {
  return (
    <div
      onClick={() => handleOnClick(name)}
      className={`hover:text-yellow-500 cursor-pointer hover:opacity-100 ${
        active ? "opacity-100 text-yellow-500" : "opacity-60"
      }`}
    >
      <p className="text-md">{name}</p>
      <p className="text-sm">{subText}</p>
    </div>
  );
};

export default NavItem;
