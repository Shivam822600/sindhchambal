import React from "react";
import { Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import About from "../pages/About/Index";
import Contact from "../pages/Contact/Index";

const authProtectedRoutes = [
  { path: "/sindhchambal", component: <Dashboard /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
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
