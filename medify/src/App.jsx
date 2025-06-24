import Home from "./Home/Home";
import { useState } from "react";
import { Outlet } from "react-router";

function App() {
  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <Outlet />
    </div>
  );
}

export default App;