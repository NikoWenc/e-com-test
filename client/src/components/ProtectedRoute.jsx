import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute() {
  const { user } = useContext(AuthContext);

  // If there's no user in our context, redirect them to /login
  if (!user) {
    // 'replace' prevents the user from going back to a protected page after logging out
    return <Navigate to="/login" replace />; // Change this to "/login" once done migrating to the new products API
  }

  return <Outlet />;
}

export default ProtectedRoute;
