import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"

const AdminSidebarComponent = () => {

    // eslint-disable-next-line no-unused-vars
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('data'));
        if (data) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);
    const logout = () => {
        sessionStorage.removeItem('data');
        setIsLogin(false);
    }
    return (
        <section className="fixed">
            <div className="container px-9">
                <div className="lg:h-screen flex self-start flex-col gap-3 lg:pt-32 mt-32 lg:mt-0 bg-netrals lg:bg-white p-4 lg:p-0 rounded-lg border-r-4 lg:px-4">
                    <h3 className="text-xl font-bold">Dashboard Admin</h3>
                    <div className="flex flex-col px-4 gap-3">
                        <NavLink to="/dashboard/content" className={({ isActive, isPanding }) => isPanding ? " text-dark px-4 py-2 rounded-lg" : isActive ? "bg-primary text-light px-4 py-2 rounded-lg" : " text-dark px-4 py-2 rounded-lg"}>Content</NavLink>
                        <NavLink to="/dashboard/user" className={({ isActive, isPanding }) => isPanding ? " text-dark px-4 py-2 rounded-lg" : isActive ? "bg-primary text-light px-4 py-2 rounded-lg" : " text-dark px-4 py-2 rounded-lg"}>User</NavLink>
                        <NavLink to="/dashboard/komunitas" className={({ isActive, isPanding }) => isPanding ? " text-dark px-4 py-2 rounded-lg" : isActive ? "bg-primary text-light px-4 py-2 rounded-lg" : " text-dark px-4 py-2 rounded-lg"}>Komunitas</NavLink>
                    </div>
                    <Link to={"/login"} className="text-xl font-bold" onClick={logout}>Keluar Akun</Link>
                </div>
            </div>
        </section>
    )
}

export default AdminSidebarComponent