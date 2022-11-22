import React from "react";

import DashboardNav from "../containers/DashboardNav";
import SelectedBodyContent from "../containers/SelectedBodyContent";

const Dashboard = () => {
  return (
    <div className="flex h-full 2xl:w-3/4 2xl:h-3/4 w-full flex-col lg:flex-row">
      <DashboardNav />
      <SelectedBodyContent />
    </div>
  );
};

export default Dashboard;
