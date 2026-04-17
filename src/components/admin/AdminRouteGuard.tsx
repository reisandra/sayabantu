import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { getAdminSession } from "@/lib/adminAuth";

interface AdminRouteGuardProps {
  children: ReactElement;
}

const AdminRouteGuard = ({ children }: AdminRouteGuardProps) => {
  const session = getAdminSession();

  if (!session.isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminRouteGuard;
