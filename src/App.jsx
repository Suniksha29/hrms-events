import React from "react";
import Sidebar from "./components/sidebar";
import EventsPage from "./pages/eventspage";

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <EventsPage />
    </div>
  );
};

export default App;