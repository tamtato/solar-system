import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { addNewBody } from "../../../store/ducks/solarSystemDash";

const CreateNewBodyContainer = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [bodyName, setBodyName] = useState("");
  const [bodyType, setBodyType] = useState(null);

  const handleAddNewBody = () => {
    if (bodyName.length > 0 && bodyType) {
      let customBodies = JSON.parse(localStorage.getItem("customBodies"));
      if (customBodies) {
        customBodies.push({ englishName: bodyName, bodyType });
        localStorage.setItem("customBodies", JSON.stringify(customBodies));
      } else
        localStorage.setItem(
          "customBodies",
          JSON.stringify([{ englishName: bodyName, bodyType }])
        );
      setShowDropdown(false);
      dispatch(addNewBody({ englishName: bodyName, bodyType }));
    }
  };

  return (
    <div className="relative">
      {showDropdown && (
        <div className="absolute top-0 left-0 -mt-20 z-10 bg-white">
          <div>Create New Body</div>
          <Input
            name="name"
            placeholder="Body Name"
            value={bodyName}
            handleOnChange={setBodyName}
          />
          <div className="flex">
            <div onClick={() => setBodyType("Planet")}>Planet</div>
            <div onClick={() => setBodyType("Moon")}>Moon</div>
            <div onClick={() => setBodyType("Star")}>Star</div>
          </div>
        </div>
      )}
      {showDropdown ? (
        <>
          <Button
            name="Cancel"
            handleOnClick={() => setShowDropdown(!showDropdown)}
          />
          <Button name="Create" handleOnClick={() => handleAddNewBody()} />
        </>
      ) : (
        <Button
          name="Add New Body"
          handleOnClick={() => setShowDropdown(!showDropdown)}
        />
      )}
    </div>
  );
};

export default CreateNewBodyContainer;
