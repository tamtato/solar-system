import React from "react";

import DashboardNav from "../containers/DashboardNav";
import SelectedBodyContent from "../containers/SelectedBodyContent";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full">
      <DashboardNav />
      <SelectedBodyContent />
    </div>
  );
};

export default Dashboard;
