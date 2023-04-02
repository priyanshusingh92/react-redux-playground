import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
const Body = () => {
  const menuShow = useSelector((store) => store.menubar.showSidebar);

  return (
    <div className="flex">

      {menuShow && <Sidebar />}

      <Outlet></Outlet>
    
    </div>
  );
};

export default Body;
