import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSolarSystemData } from "./store/ducks/solarSystemDash";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSolarSystemData(null));
  }, [dispatch]);

  return <div></div>;
};

export default App;
