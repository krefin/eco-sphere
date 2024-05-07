import { useState } from "react";
import logo from '../assets/img/logo2.svg'
import signup from '../assets/img/signup.svg'
import mata from '../assets/mata.svg'


const SignUpPage = () => {
    const pw = document.querySelector('#password');
    const rePw = document.querySelector('#rePassword');
    const [type, setType] = useState('password');
    const show = () => {
        if (type === 'password') {
            pw.setAttribute('type', 'text');
            setType('text');
        }
        setTimeout(() => {
            pw.setAttribute('type', 'password');
            setType('password');
        }, 1000);

    }
    const showRePw = () => {
        if (type === 'password') {
            rePw.setAttribute('type', 'text');
            setType('text');
        }
        setTimeout(() => {
            rePw.setAttribute('type', 'password');
            setType('password');
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
                                    <input type="password" name='password' id='password' placeholder='Kata Sandi' className='w-[80%] mx-[10%] lg:mx-[20%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' />
                                    <span className='flex absolute right-14 lg:right-5 sm:right-20 bottom-[15rem] xl:bottom-[20.8rem] cursor-pointer' onClick={show}>
                                        <img src={mata} alt="visible" />
                                    </span>
                                </div>

                                <div className="password mb-5">
                                    <input type="password" name='password' id='rePassword' placeholder='Ketik Ulang Kata Sandi' className='w-[80%] mx-[10%] lg:mx-[20%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' />
                                    <span className='flex absolute right-14 lg:right-5 sm:right-20 bottom-[10.8rem] xl:bottom-[16.6rem] cursor-pointer' onClick={showRePw}>
                                        <img src={mata} alt="visible" />
                                    </span>
                                </div>

                                <div className='flex w-[80%] mb-5 lg:ml-[20%] ml-[10%]'>
                                    <div className='w-full'>
                                        <input type="checkbox" name='remember' id='remember' className='w-6 checked:accent-primary' />
                                        <label htmlFor="remember">Ingat Saya</label>
                                    </div>
                                    <div className="w-full text-right">
                                        <a href="#" className='decoration-none'>Lupa Kata Sandi?</a>
                                    </div>
                                </div>
                                <button className='bg-primary text-light w-[80%] lg:mx-[20%] ml-[10%] py-3 rounded-lg hover:opacity-80 mb-6'>Masuk</button>
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