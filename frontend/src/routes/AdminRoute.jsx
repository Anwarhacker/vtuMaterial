// src/routes/AdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../auth";

const AdminRoute = () => {
  const user = getUser();
  return user && user.role === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
