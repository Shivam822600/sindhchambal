import React from "react";
import { Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard/index";

const authProtectedRoutes = [
  { path: "/sindhchambal", component: <Dashboard /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/sindhchambal" />,
  },
];

const publicRoutes = [
  
  // { path: "/login", component: <Login /> },
  // { path: "/logout", component: <Logout /> },
  // { path: "/forgot-password", component: <ForgetPwd /> },
  // { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
