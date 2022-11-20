import React, { useEffect, useState } from "react";
import ActionsContainer from "./ActionsContainer";
import NavItemsContainer from "./NavItemsContainer";
import Button from "../../components/Button";

const DashboardNav = ({ data }) => {
  const [navData, setNavData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (data) {
      //Will always run any changes to data through search function -
      //if a filter is added and a search value is present
      //the list should consider this
      handleSearchData(searchValue);
    }
  }, [data]);

  const handleSearchData = value => {
    const filteredData = [...data].filter(item => {
      if (item.englishName.toLowerCase().includes(value.toLowerCase())) {
        return item;
      }
    });
    setSearchValue(value);
    setNavData(filteredData);
  };

  return (
    <div className="flex flex-col w-80 flex-1">
      <ActionsContainer handleSearchData={handleSearchData} />
      <NavItemsContainer data={navData} />
      <Button name="Add New Body" onClick={() => console.log("click")} />
    </div>
  );
};

export default DashboardNav;
