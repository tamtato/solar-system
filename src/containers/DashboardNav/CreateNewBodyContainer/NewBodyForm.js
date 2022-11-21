import React from "react";
import Input from "../../../components/Input";

const NewBodyForm = ({ setBodyName, setBodyType, bodyName, bodyType }) => {
  return (
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
  );
};

export default NewBodyForm;
