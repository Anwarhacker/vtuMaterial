// src/routes/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../auth";

const PrivateRoute = () => {
  const user = getUser();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
