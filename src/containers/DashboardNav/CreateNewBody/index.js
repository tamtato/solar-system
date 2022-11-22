import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import { addNewBody } from "../../../store/ducks/solarSystemDash";
import NewBodyForm from "./NewBodyForm";
import CancelButton from "../../../components/CancelButton";
import { useOutsideClickClose } from "../../../hooks/useOutsideClickClose";

const CreateNewBody = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [bodyName, setBodyName] = useState("");
  const [bodyType, setBodyType] = useState(null);
  const dropdownRef = useRef("formDropdown");
  useOutsideClickClose(dropdownRef, () => {
    setShowForm(false);
  });

  const handleCloseForm = () => {
    setShowForm(false);
    setBodyName("");
    setBodyType(null);
  };

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
      handleCloseForm();
      dispatch(addNewBody({ englishName: bodyName, bodyType }));
    }
  };

  return (
    <div ref={dropdownRef} className="relative flex w-full">
      {showForm && (
        <NewBodyForm
          bodyName={bodyName}
          setBodyName={setBodyName}
          bodyType={bodyType}
          setBodyType={setBodyType}
        />
      )}
      {showForm ? (
        <div className="flex-1 flex">
          <CancelButton handleOnClick={() => handleCloseForm()} />
          <Button name="Create" handleOnClick={() => handleAddNewBody()} />
        </div>
      ) : (
        <Button name="Add New Body" handleOnClick={() => setShowForm(true)} />
      )}
    </div>
  );
};

export default CreateNewBody;
