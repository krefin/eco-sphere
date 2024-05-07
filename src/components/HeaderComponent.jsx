import logo from '../assets/logo.svg';

const HeaderComponent = () => {
    return (
        <header className="w-full absolute top-0 left-0 flex items-center z-10 bg-light shadow-md">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="/">
                            <img src={logo} alt="logo" className='py-6' />
                        </a>
                    </div>
                    <nav>
                        <ul className='lg:flex hidden gap-5'>
                            <li className='group'>
                                <a href="" className='group-hover:text-secondary'>Tentang Kami</a>
                            </li>
                            <li className='group'>
                                <a href="" className='group-hover:text-secondary'>Edukasi</a>
                            </li>
                            <li className='group'>
                                <a href="" className='group-hover:text-secondary'>Forum Komunitas</a>
                            </li>
                            <li className='group'>
                                <a href="" className='group-hover:text-secondary'>Kontak Kami</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='lg:flex hidden gap-5'>
                        <button className='bg-primary text-light w-[100px] py-2 rounded-lg'>Sign up</button>
                        <button className='bg-secondary text-light w-[100px] rounded-lg'>Login</button>
                    </div>
                    <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                        <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out"></span>
                        <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent