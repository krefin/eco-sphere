import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState, useEffect, useRef } from 'react';
import WatsonAssistantChat from './WatsonAssistantChat';
import { getUserById } from '../hooks/axios';

const HeaderComponent = () => {
    const [isActive, setIsActive] = useState(false);
    const hamburgerRef = useRef(null);
    const navMenuRef = useRef(null);
    const buttonNavRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);

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

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const duser = {
            token: params.get('token'),
            id_user: params.get('id_user'),
            nama_depan: params.get('nama_depan'),
            email: params.get('email'),
            googleId: params.get('googleId'),
            role: params.get('role'),
            img_profile: params.get('img_profile'),
        };

        if (duser.token) {
            const data = JSON.stringify(duser);
            sessionStorage.setItem('user', data);
            setUser(duser);
            console.log(duser);
        }
    }, []);

    useEffect(() => {
        const checkLoginStatus = () => {
            const data = JSON.parse(sessionStorage.getItem('data'));
            const user = JSON.parse(sessionStorage.getItem('user'));
            if (user) {
                setIsLogin(true);
                setUser(user);
            } else if (data) {
                setIsLogin(true);
                setUser(data);
            } else {
                setIsLogin(false);
            }
        };

        checkLoginStatus();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = JSON.parse(sessionStorage.getItem('user'));
                if (!user || !user.id_user) {
                    throw new Error('Data tidak valid di sessionStorage');
                }

                const result = await getUserById(user.id_user);
                setUserData(result);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = JSON.parse(sessionStorage.getItem('data'));
                if (!data || !data.user.id_user) {
                    throw new Error('Data tidak valid di sessionStorage');
                }

                const result = await getUserById(data.user.id_user);
                setUserData(result);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
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
                        <nav id="nav-menu" ref={navMenuRef} className="hidden absolute py-5 bg-light shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:max-w-full lg:shadow-none lg:rounded-none ">
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
                                    {userData ? (
                                        <div className="flex items-center justify-between">
                                            <h4>{userData.email.split("@")[0]}</h4>
                                            <Link to={`/editProfil`}>
                                                <div className='w-10 h-10 bg-netrals rounded-full ml-2 text-light flex items-center justify-center'>
                                                    {
                                                        userData.img_profile ?
                                                            <img src={`${import.meta.env.VITE_API_URL}/assets/${userData.img_profile}`} alt="profile" className='w-full h-full object-cover rounded-full' /> : userData.email.charAt(0).toUpperCase()
                                                    }</div>
                                            </Link>
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
                            <WatsonAssistantChat />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent
