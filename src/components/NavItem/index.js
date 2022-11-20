import React from "react";

const NavItem = ({ name, subText }) => {
  return (
    <div>
      <p className="text-xl">{name}</p>
      <p>{subText}</p>
    </div>
  );
};

export default NavItem;
