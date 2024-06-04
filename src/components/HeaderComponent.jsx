import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useState, useEffect, useRef } from 'react';
import { getAllUsers } from '../hooks/axios';

const HeaderComponent = () => {
    const [isActive, setIsActive] = useState(false);
    const hamburgerRef = useRef(null);
    const navMenuRef = useRef(null);
    const buttonNavRef = useRef(null);
    const [isLogin, setIsLogin] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [dataUser, setDataUser] = useState([]);
    const [imageUrls, setImageUrls] = useState({});
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
    const data = JSON.parse(sessionStorage.getItem('data'));
    const logout = () => {
        sessionStorage.removeItem('data');
        setIsLogin(false);
    }
    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('data'));
        if (data) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllUsers();
            setDataUser(result.data);
            const urls = {};
            for (let item of result.data) {
                if (item.img_profile) {
                    const blob = new Blob([new Uint8Array(item.img_profile.data)], { type: "image/jpeg" });
                    const blobUrl = URL.createObjectURL(blob);
                    urls[item.id_user] = blobUrl;
                }
            }
            setImageUrls(urls);
        };
        fetchData();
    }, []);
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
                        <nav id="nav-menu" ref={navMenuRef} className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none ">
                            <ul className='lg:flex block'>
                                <li className='group'>
                                    <NavLink to="/tentang" className={({ isActive, isPanding }) => isPanding ? 'py-2 mx-5 flex group-hover:text-secondary' : isActive ? 'py-2 mx-5 flex group-hover:text-opacity-80 text-primary' : 'py-2 mx-5 flex group-hover:text-secondary'}>Tentang Kami</NavLink>
                                </li>
                                <li className='group'>
                                    <NavLink to="/edukasi" className={({ isActive, isPanding }) => isPanding ? 'py-2 mx-5 flex group-hover:text-secondary' : isActive ? 'py-2 mx-5 flex group-hover:text-opacity-80 text-primary' : 'py-2 mx-5 flex group-hover:text-secondary'}>Edukasi</NavLink>
                                </li>
                                <li className='group'>
                                    <NavLink to="/komunitas" className={({ isActive, isPanding }) => isPanding ? 'py-2 mx-5 flex group-hover:text-secondary' : isActive ? 'py-2 mx-5 flex group-hover:text-opacity-80 text-primary' : 'py-2 mx-5 flex group-hover:text-secondary'}>Forum Komunitas</NavLink>
                                </li>
                                <li className='group'>
                                    <NavLink to="/kontak" className={({ isActive, isPanding }) => isPanding ? 'py-2 mx-5 flex group-hover:text-secondary' : isActive ? 'py-2 mx-5 flex group-hover:text-opacity-80 text-primary' : 'py-2 mx-5 flex group-hover:text-secondary'}>Kontak Kami</NavLink>
                                </li>
                                <li className="flex items-center pl-5 mt-3 lg:mt-0">
                                    {isLogin ? (
                                        <div className="flex items-center justify-between">
                                            <button onClick={logout}>Logout</button>
                                            <div className='w-10 h-10 bg-primary rounded-full ml-2 text-light flex items-center justify-center'>
                                                {
                                                    imageUrls[data.user.id_user] ?
                                                        <img src={imageUrls[data.user.id_user]} alt="profile" className='w-full h-full object-cover rounded-full' /> : data.user.email.charAt(0).toUpperCase()
                                                }</div>
                                        </div>
                                    ) : (
                                        <div className='flex' ref={buttonNavRef}>
                                            <Link to="/signup">
                                                <button className='bg-secondary text-light w-[100px] py-2 mr-2 rounded-lg'>Sign up</button>
                                            </Link>
                                            <Link to="/login">
                                                <button className='bg-primary text-light w-[100px] py-2 mr-2 rounded-lg'>Login</button>
                                            </Link>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent