import logo from '../assets/img/logo2.svg'
import login from '../assets/img/LoginIlustrasi.svg'
import mata from '../assets/mata.svg'
import { useState } from 'react'

const LoginPage = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(true);
        setTimeout(() => {
            setPasswordVisible(false);
        }, 1000);
    }
    return (
        <section className='bg-netrals lg:bg-white py-10 lg:py-0 overflow-x-hidden'>
            <div className="container">
                <div className="w-full lg:mx-[48px] lg:flex block">
                    <div className="lg:w-[40%] w-full">
                        <img src={logo} alt="Eco Sphere" className='lg:mb-[100px] lg:mt-[51px] pt-10 lg:pt-0 mx-auto lg:mx-0' />
                        <img src={login} alt="Ilustrasi Login" className='hidden lg:inline-block' />
                    </div>
                    <div className="lg:w-[60%] w-full bg-netrals">
                        <div className="w-full flex justify-center">
                            <div className="lg:w-[60%] w-full  mx-4 bg-light py-10 rounded-xl mt-10 lg:mt-[218px] relative">
                                <h1 className='px-[10%] text-4xl font-bold mb-12'>Masuk</h1>
                                <form className='group'>
                                    <div className="email mb-5">
                                        <input type="email" name='email' id='email' placeholder='Email' className='w-[80%] mx-[10%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' />
                                    </div>
                                    <div className="password mb-5">
                                        <input type={passwordVisible ? "text" : "password"} name='password' id='password' placeholder='Kata Sandi' className='w-[80%] mx-[10%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' />
                                        <span className='flex absolute right-14 lg:right-14 sm:right-20 bottom-[10.2rem] cursor-pointer' onClick={togglePasswordVisibility}>
                                            <img src={mata} alt="visible" />
                                        </span>
                                    </div>

                                    <div className='flex w-[80%] mb-5 ml-[10%]'>
                                        <div className='w-full'>
                                            <input type="checkbox" name='remember' id='remember' className='w-6 checked:accent-primary' />
                                            <label htmlFor="remember">Ingat Saya</label>
                                        </div>
                                        <div className="w-full text-right">
                                            <a href="#" className='decoration-none'>Lupa Kata Sandi?</a>
                                        </div>
                                    </div>
                                    <button className='bg-primary text-light w-[80%] mx-[10%] py-3 rounded-lg hover:opacity-80'>Masuk</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage