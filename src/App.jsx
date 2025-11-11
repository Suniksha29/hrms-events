import React from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-background p-8">
        <h1 className="text-2xl font-semibold text-textPrimary mb-4">Events</h1>
        <div className="w-full h-[80vh] flex items-center justify-center text-textSecondary text-lg">
          (Main content area will go here)
        </div>
      </div>
    </div>
  );
};

export default App;
