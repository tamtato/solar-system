import React from "react";
import SearchInput from "../../../components/SearchInput";
import SmallButton from "../../../components/SmallButton";

const ActionsContainer = ({
  handleSearchData,
  handleSortData,
  handleFilterData
}) => {
  return (
    <div>
      <SearchInput
        name="search"
        handleOnChange={handleSearchData}
        placeholder="Search Bodies"
      />
      <SmallButton icon="swap_vert" handleOnClick={handleSortData} />
      <SmallButton icon="filter_list" handleOnClick={handleFilterData} />
    </div>
  );
};

export default ActionsContainer;
