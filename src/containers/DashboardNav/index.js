import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterSolarSystemData,
  sortSolarSystemData,
  getAllSolarSystemData
} from "../../store/ducks/solarSystemDash";
import ActionsContainer from "./ActionsContainer";
import NavItemsContainer from "./NavItemsContainer";
import CreateNewBodyContainer from "./CreateNewBodyContainer";

const DashboardNav = () => {
  const dispatch = useDispatch();
  const [navData, setNavData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortDirection, setSortDirection] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const allSolarSystemData = useSelector(
    state => state.solarSystemDash.allSolarSystemData
  );

  const queriedSolarSystemData = useSelector(
    state => state.solarSystemDash.queriedSolarSystemData
  );

  useEffect(() => {
    dispatch(getAllSolarSystemData());
  }, [dispatch]);

  useEffect(() => {
    //Will always run any changes to data through search function -
    //if a filter is added and a search value is present
    //the list should consider this
    handleSearchData(searchValue);
  }, [queriedSolarSystemData]);

  const handleSearchData = value => {
    if (queriedSolarSystemData && queriedSolarSystemData.bodies) {
      const filteredData = [...queriedSolarSystemData.bodies].filter(item => {
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
    setSelectedFilter(null);
  };

  const handleFilterData = filter => {
    setSortDirection(null);
    setSelectedFilter(filter);
    dispatch(filterSolarSystemData(filter));
  };

  return (
    <div className="flex flex-col w-80 flex-1">
      <ActionsContainer
        sortDirection={sortDirection}
        selectedFilter={selectedFilter}
        handleSearchData={handleSearchData}
        handleSortData={handleSortData}
        handleFilterData={handleFilterData}
      />
      <NavItemsContainer
        navData={navData}
        allData={allSolarSystemData.bodies}
      />
      <CreateNewBodyContainer />
    </div>
  );
};

export default DashboardNav;
