import React, { useState, useEffect, useRef } from "react";

const SmallButtonDropdown = ({
  icon,
  handleOnClick,
  options,
  selectedOption
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef();

  const closeOpenDropdown = e => {
    if (
      dropdown.current &&
      showDropdown &&
      !dropdown.current.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenDropdown);
  }, []);

  return (
    <div ref={dropdown} className="relative">
      <button onClick={() => setShowDropdown(!showDropdown)}>
        <span
          className={`material-symbols-rounded ${selectedOption &&
            "text-yellow-500"}`}
        >
          {icon}
        </span>
      </button>
      {showDropdown && (
        <div className="absolute z-10 cursor-pointer">
          {options.map(option => (
            <div
              key={option}
              className={selectedOption === option ? "text-yellow-500" : ""}
              onClick={() =>
                handleOnClick(option === selectedOption ? null : option)
              }
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmallButtonDropdown;
