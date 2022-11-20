import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSolarSystemData } from "../store/ducks/solarSystemDash";
import DashboardNav from "../containers/DashboardNav";

const Dashboard = () => {
  const dispatch = useDispatch();

  const solarSystemData = useSelector(
    state => state.solarSystemDash.solarSystemData
  );

  useEffect(() => {
    dispatch(getSolarSystemData(null));
  }, [dispatch]);

  return (
    <>
      <DashboardNav data={solarSystemData.bodies} />
    </>
  );
};

export default Dashboard;
