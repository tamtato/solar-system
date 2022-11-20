import React, { useState } from "react";
import SearchInput from "../../../components/SearchInput";
import SmallButton from "../../../components/SmallButton";
import SmallButtonDropdown from "../../../components/SmallButtonDropdown";

const ActionsContainer = ({
  handleSearchData,
  sortDirection,
  handleSortData,
  handleFilterData,
  selectedFilter
}) => {
  return (
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
        icon="filter_list"
        handleOnClick={handleFilterData}
        options={["planet", "moon", "star"]}
        selectedOption={selectedFilter}
      />
    </div>
  );
};

export default ActionsContainer;
