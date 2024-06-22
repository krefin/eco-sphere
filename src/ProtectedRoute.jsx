/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ProtectedRoute = ({ role }) => {
    const [isConfirmed, setIsConfirmed] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('data'));
        const storedUser = JSON.parse(sessionStorage.getItem('user'));

        if (!storedData && !storedUser) {
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
        } else {
            storedData ? setUserData(storedData) : setUserData(storedUser);
            // setUserData(storedData || storedUser);
        }
    }, []);

    if (isConfirmed === false) {
        return <Navigate to="/" />;
    }

    if (isConfirmed) {
        return <Navigate to="/login" />;
    }

    if (!userData) {
        return null; // Render nothing while waiting for the confirmation
    }

    const userRole = userData.role || userData.user.role;

    if (userRole === role || (role === "User" && userRole === "User")) {
        return <Outlet />;
    }

    return <Navigate to="/" />;
};

export default ProtectedRoute;
