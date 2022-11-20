import { combineReducers } from "redux";
import solarSystemDash from "./ducks/solarSystemDash";

const createRootReducer = () =>
  combineReducers({
    solarSystemDash
  });

export default createRootReducer;
