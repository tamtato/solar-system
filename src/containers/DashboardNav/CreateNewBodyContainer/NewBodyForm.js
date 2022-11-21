import React from "react";
import Input from "../../../components/Input";
import Pill from "../../../components/Pill";
import Label from "../../../components/Label";

const NewBodyForm = ({ setBodyName, setBodyType, bodyName, bodyType }) => {
  const bodyTypeList = ["Planet", "Moon", "Star"];
  return (
    <div className="absolute w-full flex flex-col bottom-0 left-0 mb-16 z-10 bg-zinc-700 px-6 py-8 space-y-4">
      <h4 className="font-medium text-center pb-3">Create New Body</h4>
      <Label label="Body Name" />
      <Input
        name="name"
        placeholder="Body Name"
        label="Body Name"
        value={bodyName}
        handleOnChange={setBodyName}
      />
      <div className="pb-1" />
      <Label label="Body Type" />
      <div className="flex">
        {bodyTypeList.map(body => (
          <Pill
            key={"typeList-" + body}
            active={bodyType === body}
            name={body}
            handleOnClick={() => setBodyType(body)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewBodyForm;
