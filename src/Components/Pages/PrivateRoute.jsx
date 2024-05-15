import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../../Provider/AuthProvider";
const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    <span className="loading loading-spinner loading-lg text-error"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
