import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavItem from "../../../components/NavItem";
import { setSelectedBody } from "../../../store/ducks/solarSystemDash";

const NavItemsContainer = ({ navData, allData }) => {
  const dispatch = useDispatch();
  const selectedBody = useSelector(state => state.solarSystemDash.selectedBody);

  const buildSubText = item => {
    let subText = "";
    if (item.moons || item.bodyType === "Planet") {
      subText = item.moons
        ? item.moons.length + " " + (item.moons.length > 1 ? "Moons" : "Moon")
        : "0 Moons";
    } else if (item.aroundPlanet) {
      const foundPlanet = allData.find(
        planet => planet.id === item.aroundPlanet.planet
      );
      subText = foundPlanet ? foundPlanet.englishName : "";
    } else {
      subText = item.bodyType;
    }
    return subText;
  };

  const handleOnClick = name => {
    dispatch(setSelectedBody(name));
  };

  return (
    <div className="lg:flex-1 h-80 relative">
      <div className="w-full h-full absolute left-0 top-0 overflow-y-auto space-y-4">
        {navData &&
          navData.map(item => {
            return (
              <NavItem
                key={"navItem-" + item.englishName}
                name={item.englishName}
                subText={buildSubText(item)}
                handleOnClick={handleOnClick}
                active={selectedBody === item.englishName}
              />
            );
          })}
      </div>
    </div>
  );
};

export default NavItemsContainer;
