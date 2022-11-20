import React from "react";
import NavItem from "../../../components/NavItem";

const NavItemsContainer = ({ data }) => {
  const buildSubText = item => {
    let subText = "";

    if (item.moons || item.bodyType === "Planet") {
      subText = item.moons
        ? item.moons.length + " " + (item.moons.length > 1 ? "Moons" : "Moon")
        : "0 Moons";
    } else if (item.aroundPlanet) {
      const foundPlanet = data.find(
        planet => planet.id === item.aroundPlanet.planet
      );
      subText = foundPlanet.englishName;
    } else {
      subText = item.bodyType;
    }
    return subText;
  };
  return (
    <div className="flex-1 relative">
      <div className="w-full h-full absolute left-0 top-0 overflow-y-auto">
        {data &&
          data.map(item => {
            return (
              <NavItem
                key={item.englishName}
                name={item.englishName}
                subText={buildSubText(item)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NavItemsContainer;