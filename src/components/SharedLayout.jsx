import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function SharedLayout() {
  return (
    <main className="main">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </main>
  );
}

export default SharedLayout;
