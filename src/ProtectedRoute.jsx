/* eslint-disable react/prop-types */

import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role }) => {
    const data = JSON.parse(sessionStorage.getItem('data'));
    if (!data) {
        return <Navigate to="/login" />;
    }
    const userRole = data.user.role;

    if (userRole && role === "User") {
        return <Outlet />;
    }
    return userRole === role ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
