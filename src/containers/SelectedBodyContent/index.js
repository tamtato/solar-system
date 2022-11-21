import React from "react";
import { useSelector } from "react-redux";
import BodyInfo from "./BodyInfo";
import BodyRelations from "./BodyRelations";

const SelectedBodyContent = () => {
  const allSolarSystemData = useSelector(
    state => state.solarSystemDash.allSolarSystemData
  );
  const selectedBody = useSelector(state => state.solarSystemDash.selectedBody);

  let infoCards = [];
  let foundBody = {};

  if (allSolarSystemData.bodies) {
    foundBody =
      allSolarSystemData.bodies &&
      allSolarSystemData.bodies.find(body => body.englishName === selectedBody);

    infoCards = [
      {
        title: "Type",
        value: foundBody.bodyType
      },
      {
        title: "Gravity",
        value: (foundBody.gravity ? foundBody.gravity : 0) + "m.s-2"
      },
      {
        title: "Avg. Temp",
        value: (foundBody.avgTemp ? foundBody.avgTemp : 0) + "K"
      }
    ];
  }

  return (
    <div className="w-3/4 flex flex-col justify-center px-20 pt-20">
      {allSolarSystemData.bodies && (
        <>
          <BodyInfo title={selectedBody} infoCards={infoCards} />
          <BodyRelations
            foundBody={foundBody}
            allSolarSystemData={allSolarSystemData}
          />
        </>
      )}
    </div>
  );
};

export default SelectedBodyContent;
