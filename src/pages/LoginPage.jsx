import logo from '../assets/img/logo2.png'
import login from '../assets/img/LoginIlustrasi.png'
import mata from '../assets/mata.png'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginUser } from '../hooks/axios'


const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }
    const showSwal = () => {
        const Toast = withReactContent(Swal).mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            confirmButtonColor: "#249624",
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Anda Berhasil Login!",
            confirmButtonColor: "#249624"
        });

    }
    const onSubmit = async (data) => {
        try {
            const res = await loginUser(data);
            if (res.data.token) {
                const data = JSON.stringify(res.data);
                sessionStorage.setItem('data', data);

            }
            showSwal();
            setTimeout(() => {
                res.data.user.role === "Admin" ? navigate('/dashboard') : navigate('/');
            }, 3000);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <section className='bg-netrals lg:bg-white py-10 lg:py-0 overflow-x-hidden lg:w-full lg:flex'>
            <div className="container">
                <div className="w-full lg:mx-[48px] lg:flex block">
                    <div className="w-full">
                        <img src={logo} alt="Eco Sphere" className='lg:mt-[51px] pt-10 lg:pt-0 mx-auto lg:mx-0 lg:px-24 px-10' />
                        <img src={login} alt="Ilustrasi Login" className='hidden lg:flex mx-auto 3xl:mt-32' />
                    </div>
                </div>
            </div>
            <div className="container bg-netrals 3xl:h-[100vh] 3xl: lg:pt-32">
                <div className=" w-full">
                    <div className="w-full flex justify-center ">
                        <div className="lg:w-[60%] w-full  mx-4 bg-light py-10 rounded-xl mt-10 3xl:mt-[218px] relative">
                            <h1 className='px-[10%] text-4xl font-bold mb-12'>Masuk</h1>
                            <form className='group' onSubmit={handleSubmit(onSubmit)}>
                                <div className="email mb-5">
                                    <input type="email" name='email' id='email' placeholder='Email' className='w-[80%] mx-[10%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' {...register("email", { required: 'Email harus diisi' })} />

                                </div>
                                <div className="password mb-5">
                                    <input type={passwordVisible ? "text" : "password"} name='password' id='password' placeholder='Kata Sandi' className='w-[80%] mx-[10%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' {...register("password", { required: 'Kata sandi harus diisi' })} />
                                    <span className='flex absolute right-14 3xl:right-20 lg:right-14 sm:right-20 bottom-[16.9rem] cursor-pointer' onClick={togglePasswordVisibility}>
                                        <img src={mata} alt="visible" />
                                    </span>
                                </div>

                                <div className='flex w-[80%] mb-5 ml-[10%]'>
                                    <div className='w-full'>
                                        <input type="checkbox" name='remember' id='remember' className='w-6 checked:accent-primary' />
                                        <label htmlFor="remember">Ingat Saya</label>
                                    </div>
                                    <div className="w-full text-right">
                                        <a href="/forgotPassword" className='decoration-none'>Lupa Kata Sandi?</a>
                                    </div>
                                </div>
                                <button type='submit' className='bg-primary text-light w-[80%] mx-[10%] py-3 rounded-lg hover:opacity-80'>Masuk</button>
                                <button className='bg-light border-2 border-primary text-primary w-[80%] mx-[10%] py-3 rounded-lg hover:opacity-80 mt-5'>Login With Google</button>
                                <p className='text-center mt-3'>Belum punya akun? <a href="/signup" className='decoration-none text-primary font-semibold'>Daftar Sekarang</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default LoginPage