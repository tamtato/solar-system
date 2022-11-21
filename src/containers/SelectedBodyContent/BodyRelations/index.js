import React from "react";
import Title from "../../../components/Title";
import { useDispatch } from "react-redux";
import { setSelectedBody } from "../../../store/ducks/solarSystemDash";
import NavItem from "../../../components/NavItem";

const BodyRelations = ({ foundBody, allSolarSystemData }) => {
  const dispatch = useDispatch();

  const handleOnClick = name => {
    dispatch(setSelectedBody(name));
  };

  const foundPlanet =
    foundBody.aroundPlanet &&
    allSolarSystemData.bodies.find(
      body => body.id === foundBody.aroundPlanet.planet
    );

  return (
    <>
      {foundBody.bodyType === "Planet" ? (
        <div>
          <Title title="Moons" />
          <div className="flex flex-wrap content-start mt-6 h-32 overflow-y-auto">
            {foundBody.moons ? (
              foundBody.moons.map(moon => {
                const foundMoon = allSolarSystemData.bodies.find(
                  body => body.name === moon.moon
                );
                return (
                  <div className="pr-4">
                    <NavItem
                      handleOnClick={handleOnClick}
                      name={foundMoon.englishName}
                    />
                  </div>
                );
              })
            ) : (
              <p className="opacity-50">This planet doesn't have any moons.</p>
            )}
          </div>
        </div>
      ) : (
        <>
          <Title title="Orbiting" />
          <div className="mt-6 h-32">
            {foundPlanet ? (
              <NavItem
                handleOnClick={handleOnClick}
                name={foundPlanet && foundPlanet.englishName}
              />
            ) : (
              <p className="opacity-50">
                This {foundBody.bodyType} does not orbit anything.
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default BodyRelations;
