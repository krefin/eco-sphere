import { useState } from "react";
import logo from '../assets/img/logo2.svg'
import signup from '../assets/img/signup.svg'
import mata from '../assets/mata.svg'


const SignUpPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(true);
        setTimeout(() => {
            setPasswordVisible(false);
        }, 1000);
    }
    return (
        <section className='bg-netrals py-10 lg:py-0 overflow-x-hidden'>
            <div className="container">
                <div className="w-[96%] mx-auto rounded-3xl bg-light my-10">
                    <div className="w-full flex justify-center lg:block lg:px-12 pt-6">
                        <img src={logo} alt="Eco Sphere" />
                    </div>
                    <div className="w-full flex">
                        <div className="lg:w-[40%] w-full mx-4 bg-light py-6 rounded-xl mt-10 relative">
                            <h1 className='lg:px-[20%] px-[10%] text-4xl font-bold mb-12'>Daftar</h1>
                            <form className='group'>
                                <div className="email mb-5">
                                    <input type="email" name='email' id='email' placeholder='Email' className='w-[80%] mx-[10%] lg:mx-[20%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' />
                                </div>
                                <div className="password mb-5">
                                    <input type={passwordVisible ? "text" : "password"} name='password' id='password' placeholder='Kata Sandi' className='w-[80%] mx-[10%] lg:mx-[20%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' />
                                    <span className='flex absolute right-14 lg:right-5 sm:right-20 bottom-[18.5rem] xl:bottom-[20.8rem] cursor-pointer' onClick={togglePasswordVisibility}>
                                        <img src={mata} alt="visible" />
                                    </span>
                                </div>

                                <div className="password mb-5">
                                    <input type={passwordVisible ? "text" : "password"} name='password' id='rePassword' placeholder='Ketik Ulang Kata Sandi' className='w-[80%] mx-[10%] lg:mx-[20%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' />
                                    <span className='flex absolute right-14 lg:right-5 sm:right-20 bottom-[14.3rem] xl:bottom-[16.6rem] cursor-pointer' onClick={togglePasswordVisibility}>
                                        <img src={mata} alt="visible" />
                                    </span>
                                </div>
                                <button className='bg-primary text-light w-[80%] lg:mx-[20%] ml-[10%] py-3 rounded-lg hover:opacity-80 mb-6'>Masuk</button>
                                <button className='bg-light border-2 border-primary text-primary w-[80%] lg:mx-[20%] ml-[10%] py-3 rounded-lg hover:opacity-80 mb-6'>Login With Google</button>
                                <p className="text-center lg:ml-[20%]">Sudah memiliki akun? <span className='text-primary font-semibold'>Masuk</span></p>
                            </form>
                        </div>
                        <div className="w-[60%] px-10 hidden lg:block">
                            <img src={signup} alt="Eco Sphere" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpPage