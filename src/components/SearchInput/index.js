import React, { useState } from "react";

const SearchInput = ({ label, handleOnChange, placeholder }) => {
  const [searchValue, setSearchValue] = useState("");

  const onChange = e => {
    setSearchValue(e.target.value);
    handleOnChange(e.target.value);
  };

  return (
    <input
      value={searchValue}
      label={label}
      onChange={e => onChange(e)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
