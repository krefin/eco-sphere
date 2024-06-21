import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState, useEffect, useRef } from 'react';

const AdminHeaderComponent = () => {
    const [isActive, setIsActive] = useState(false);
    const hamburgerRef = useRef(null);
    const navMenuRef = useRef(null);
    const buttonNavRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);
    const toggleHamburger = () => {
        setIsActive(!isActive);
        hamburgerRef.current.classList.toggle('hamburger-active');
        navMenuRef.current.classList.toggle('hidden');
    }
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (hamburgerRef.current &&
                navMenuRef.current &&
                !hamburgerRef.current.contains(e.target) &&
                !navMenuRef.current.contains(e.target)) {
                setIsActive(false);
                hamburgerRef.current.classList.remove('hamburger-active');
                navMenuRef.current.classList.add('hidden');
            }
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const dataUser = JSON.parse(sessionStorage.getItem('data'));

    return (
        <header className="w-full fixed top-0 left-0 flex items-center z-10 bg-light shadow-md">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <Link to="/">
                            <img src={logo} alt="logo" className='py-6' />
                        </Link>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" ref={hamburgerRef} name="hamburger" type="button" className="block absolute right-4 lg:hidden" onClick={toggleHamburger}>
                            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                        </button>
                        <nav id="nav-menu" ref={navMenuRef} className="hidden absolute py-5 bg-light shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none ">
                            <ul className='lg:flex block'>

                                <li className="flex items-center pl-5 mt-3 lg:mt-0">
                                    <div className='flex justify-between items-center gap-3' ref={buttonNavRef}>
                                        <Link to="/signup">
                                            {dataUser.user.nama_depan}
                                        </Link>
                                        <Link to="/login" className='w-10 h-10 rounded-full bg-netrals flex justify-center items-center'>
                                            {
                                                dataUser.user.img_profile ?
                                                    <img src={`${import.meta.env.VITE_API_URL}/assets/${dataUser.user.img_profile}`} alt="profile" className='w-full h-full object-cover rounded-full' /> : dataUser.user.email.charAt(0).toUpperCase()
                                            }
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AdminHeaderComponent