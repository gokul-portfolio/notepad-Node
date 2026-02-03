import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AdminRoute = () => {
  const { user } = useContext(UserContext);

  // still loading user
  if (!user) return null;

  return user.role === "admin"
    ? <Outlet />
    : <Navigate to="/unauthorized" replace />;
};

export default AdminRoute;
