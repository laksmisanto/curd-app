import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Rootlayout;
