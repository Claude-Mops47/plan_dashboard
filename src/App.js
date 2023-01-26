import React from "react";
import "./App.css";
import Body from "./components/admin/body_section/Body";
import SideBar from "./components/admin/sideBar_section/SideBar";

const App = () => {
  return (
    <div className="container">
      <SideBar />
      <Body />
    </div>
  );
};

export default App;
