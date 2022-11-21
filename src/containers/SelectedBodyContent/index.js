import React from "react";
import Title from "../../components/Title";
import { useSelector } from "react-redux";

const SelectedBodyContent = () => {
  const allSolarSystemData = useSelector(
    state => state.solarSystemDash.allSolarSystemData
  );
  const selectedBody = useSelector(state => state.solarSystemDash.selectedBody);

  const foundBody = allSolarSystemData.bodies.find(
    body => body.englishName === selectedBody
  );

  console.log(foundBody);

  return (
    <div className="w-3/4 flex flex-col justify-center px-20">
      <Title title={selectedBody} />
      {foundBody.isPlanet ? (
        <Title title="Moons" />
      ) : (
        foundBody.bodyType !== "Star" && <Title title="Orbiting" />
      )}
    </div>
  );
};

export default SelectedBodyContent;
