import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSolarSystemData } from "../../store/ducks/solarSystemDash";
import ActionsContainer from "./ActionsContainer";
import NavItemsContainer from "./NavItemsContainer";
import CreateNewBodyContainer from "./CreateNewBodyContainer";

const DashboardNav = () => {
  const dispatch = useDispatch();
  const [navData, setNavData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
      const queriedData = [...queriedSolarSystemData.bodies].filter(item => {
        return !!item.englishName.toLowerCase().includes(value.toLowerCase());
      });
      setSearchValue(value);
      setNavData(queriedData);
    }
  };

  return (
    <div className="flex flex-col lg:w-80 flex-1 space-y-8">
      <ActionsContainer handleSearchData={handleSearchData} />
      <NavItemsContainer
        navData={navData}
        allData={allSolarSystemData.bodies}
      />
      <CreateNewBodyContainer />
    </div>
  );
};

export default DashboardNav;
