import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSolarSystemData,
  sortSolarSystemData
} from "../../store/ducks/solarSystemDash";
import ActionsContainer from "./ActionsContainer";
import NavItemsContainer from "./NavItemsContainer";
import Button from "../../components/Button";

const DashboardNav = () => {
  const dispatch = useDispatch();
  const [navData, setNavData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortDirection, setSortDirection] = useState(null);
  const solarSystemData = useSelector(
    state => state.solarSystemDash.solarSystemData
  );

  useEffect(() => {
    dispatch(getSolarSystemData(null));
  }, [dispatch]);

  useEffect(() => {
    //Will always run any changes to data through search function -
    //if a filter is added and a search value is present
    //the list should consider this
    handleSearchData(searchValue);
  }, [solarSystemData]);

  const handleSearchData = value => {
    if (solarSystemData && solarSystemData.bodies) {
      const filteredData = [...solarSystemData.bodies].filter(item => {
        if (item.englishName.toLowerCase().includes(value.toLowerCase())) {
          return item;
        }
      });
      setSearchValue(value);
      setNavData(filteredData);
    }
  };

  const handleSortData = () => {
    const sortData = value => {
      dispatch(sortSolarSystemData(value));
      setSortDirection(value);
    };
    if (sortDirection === "asc") sortData("desc");
    else if (sortDirection === "desc") sortData(null);
    else sortData("asc");
  };

  const handleFilterData = filter => {
    dispatch(getSolarSystemData(null));
  };

  return (
    <div className="flex flex-col w-80 flex-1">
      <ActionsContainer
        handleSearchData={handleSearchData}
        handleSortData={handleSortData}
        handleFilterData={handleFilterData}
      />
      <NavItemsContainer data={navData} />
      <Button name="Add New Body" onClick={() => console.log("click")} />
    </div>
  );
};

export default DashboardNav;
