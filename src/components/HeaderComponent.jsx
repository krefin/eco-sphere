import logo from '../assets/logo.svg';
import { useState, useEffect, useRef } from 'react';

const HeaderComponent = () => {
    const [isActive, setIsActive] = useState(false);
    const hamburgerRef = useRef(null);
    const navMenuRef = useRef(null);
    const buttonNavRef = useRef(null);
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
    return (
        <header className="w-full fixed top-0 left-0 flex items-center z-10 bg-light shadow-md">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="/">
                            <img src={logo} alt="logo" className='py-6' />
                        </a>
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
                                    <a href="" className='py-2 mx-5 flex group-hover:text-secondary'>Tentang Kami</a>
                                </li>
                                <li className='group'>
                                    <a href="" className='py-2 mx-5 flex group-hover:text-secondary'>Edukasi</a>
                                </li>
                                <li className='group'>
                                    <a href="" className='py-2 mx-5 flex group-hover:text-secondary'>Forum Komunitas</a>
                                </li>
                                <li className='group'>
                                    <a href="" className='py-2 mx-5 flex group-hover:text-secondary'>Kontak Kami</a>
                                </li>
                                <li className="flex items-center pl-5 mt-3 lg:mt-0">
                                    <div className='flex' ref={buttonNavRef}>
                                        <a href="/signup">
                                            <button className='bg-secondary text-light w-[100px] py-2 mr-2 rounded-lg'>Sign up</button>
                                        </a>
                                        <a href="/login">
                                            <button className='bg-primary text-light w-[100px] py-2 mr-2 rounded-lg'>Login</button>
                                        </a>
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

export default HeaderComponent