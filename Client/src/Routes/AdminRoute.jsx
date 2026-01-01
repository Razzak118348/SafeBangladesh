import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../Components/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  const adminEmails = [
    "abdurrazzak118348@gmail.com",
"alfat422@gmail.com",
  ];

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  if (user && adminEmails.includes(user.email)) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
