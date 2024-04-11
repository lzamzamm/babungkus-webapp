import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? (
    <Outlet />
  ) : (
    <Navigate to="/masuk" replace state={{ msg: "Anda harus login terlebih dahulu" }} />
  );
};

export default PrivateRoute;
