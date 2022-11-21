import React, { useState, useEffect, useRef } from "react";
import { useOutsideClickClose } from "../../hooks/useOutsideClickClose";

const SmallButtonDropdown = ({
  icon,
  handleOnClick,
  options,
  selectedOption,
  title
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef("smallButtonDropdown");
  useOutsideClickClose(dropdownRef, () => {
    setShowDropdown(false);
  });

  return (
    <div
      ref={dropdownRef}
      className="relative flex justify-center content-center p-3"
    >
      <button onClick={() => setShowDropdown(!showDropdown)}>
        <span
          className={`material-symbols-rounded ${(selectedOption ||
            showDropdown) &&
            "text-yellow-500"}`}
        >
          {icon}
        </span>
      </button>
      {showDropdown && (
        <div className="absolute z-10 cursor-pointer bg-zinc-700 w-40 pt-4 pb-1 mt-10 ml-32 ">
          <h4 className="font-medium border-b border-zinc-500 block pb-4 px-4">
            {title}
          </h4>
          <ul className="capitalize divide-y divide-zinc-500">
            {options.map(option => (
              <li
                key={option}
                className={`py-2 px-4 hover:text-yellow-500 ${
                  selectedOption === option ? "text-yellow-500" : ""
                }`}
                onClick={() =>
                  handleOnClick(option === selectedOption ? null : option)
                }
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SmallButtonDropdown;
