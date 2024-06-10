/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ProtectedRoute = ({ role }) => {
    const [isConfirmed, setIsConfirmed] = useState(null);
    const data = JSON.parse(sessionStorage.getItem('data'));

    useEffect(() => {
        if (!data) {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: "Anda Belum Login!",
                text: "Login terlebih dahulu untuk mengakses konten",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#249624",
                cancelButtonColor: "#E7E7E7",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                setIsConfirmed(result.isConfirmed);
            });
        }
    }, [data]);

    if (isConfirmed === false) {
        return <Navigate to="/" />;
    }

    if (isConfirmed) {
        return <Navigate to="/login" />;
    }

    if (!data) {
        return null; // Render nothing while waiting for the confirmation
    }

    const userRole = data.user.role;

    if (userRole && role === "User") {
        return <Outlet />;
    }

    return userRole === role ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
