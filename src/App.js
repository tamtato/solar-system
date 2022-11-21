import React from "react";
import Dashboard from "./views/Dashboard";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-900 text-white font-text p-12 sm:p-6">
      <Dashboard />
    </div>
  );
};

export default App;
