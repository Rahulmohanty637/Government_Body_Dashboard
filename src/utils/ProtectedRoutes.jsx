/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const state = localStorage.getItem("state");
  if (!state) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
