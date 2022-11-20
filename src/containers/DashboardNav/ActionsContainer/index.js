import React from "react";
import SearchInput from "../../../components/SearchInput";

const ActionsContainer = ({ handleSearchData }) => {
  return (
    <div>
      <SearchInput
        name="search"
        handleOnChange={handleSearchData}
        placeholder="Search Bodies"
      />
    </div>
  );
};

export default ActionsContainer;
