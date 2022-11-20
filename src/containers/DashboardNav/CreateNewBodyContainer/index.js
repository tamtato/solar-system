import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewBody } from "../../../store/ducks/solarSystemDash";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const CreateNewBodyContainer = () => {
  const dispatch = useDispatch();

  const [showDropdown, setShowDropdown] = useState(false);
  const [bodyName, setBodyName] = useState("");
  const [bodyType, setBodyType] = useState(null);
  //dispatch(getAllSolarSystemData());

  const handleAddNewBody = () => {
    if (bodyName.length > 0 && bodyType) {
      dispatch(addNewBody());
      setShowDropdown(false);
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
            <div onClick={() => setBodyType("planet")}>Planet</div>
            <div onClick={() => setBodyType("moon")}>Moon</div>
            <div onClick={() => setBodyType("star")}>Star</div>
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
