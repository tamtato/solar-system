import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchInput from "../../../components/SearchInput";
import SmallButton from "../../../components/SmallButton";
import SmallButtonDropdown from "../../../components/SmallButtonDropdown";
import {
  filterSolarSystemData,
  sortSolarSystemData
} from "../../../store/ducks/solarSystemDash";
import Title from "../../../components/Title";

const ActionsContainer = ({ handleSearchData }) => {
  const dispatch = useDispatch();
  const [sortDirection, setSortDirection] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);

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
    <>
      <Title title="Solar System" />
      <div className="flex">
        <SearchInput
          name="search"
          handleOnChange={handleSearchData}
          placeholder="Search Bodies"
        />
        <SmallButton
          icon="swap_vert"
          handleOnClick={handleSortData}
          active={sortDirection}
        />
        <SmallButtonDropdown
          title="Filter by"
          icon="filter_list"
          handleOnClick={handleFilterData}
          options={["planet", "moon", "star"]}
          selectedOption={selectedFilter}
        />
      </div>
    </>
  );
};

export default ActionsContainer;
