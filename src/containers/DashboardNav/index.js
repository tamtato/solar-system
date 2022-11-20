import React from "react";
import ActionsContainer from "./ActionsContainer";
import NavItemsContainer from "./NavItemsContainer";
import Button from "../../components/Button";

const DashboardNav = ({ data }) => {
  return (
    <div className="flex flex-col w-80 flex-1">
      <ActionsContainer />
      <NavItemsContainer data={data} />
      <Button name="Add New Body" onClick={() => console.log("click")} />
    </div>
  );
};

export default DashboardNav;
