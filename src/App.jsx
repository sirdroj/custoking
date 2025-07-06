import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footerx } from "./components/Footerx";

const App = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        scrollbarWidth: "10px",
        scrollbarColor: "#6b7280 #1f2937",
      }}
    >
      <Navbar />

      {/* Main content takes all space between navbar and footer */}
      <div className="flex-1">
        <Outlet />
      </div>

      <Footerx />
    </div>
  );
};

export default App;
