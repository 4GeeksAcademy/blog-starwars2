import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "../components/MyNavbar.jsx";

const Layout = () => (
  <>
    <MyNavbar />
    <Outlet />
  </>
);

export default Layout;
