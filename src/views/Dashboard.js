import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSolarSystemData } from "./store/ducks/solarSystemDash";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSolarSystemData(null));
  }, [dispatch]);

  return <div>Dash</div>;
};

export default Dashboard;
