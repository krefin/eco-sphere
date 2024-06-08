import { useState } from "react";
import logo from '../assets/img/logo2.png'
import signup from '../assets/img/signup.png'
import mata from '../assets/mata.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useForm } from 'react-hook-form'


const SignUpPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const togglePasswordVisibility = () => {
        setPasswordVisible(true);
        setTimeout(() => {
            setPasswordVisible(false);
        }, 1000);
    }
    const showSwal = () => {
        withReactContent(Swal).fire({
            title: "Berhasil Mendaftar!",
            text: "Silahkan login dengan akun yang telah didaftarkan.",
            icon: "success",
            confirmButtonColor: "#249624"
        });
    }
    const onSubmit = async (data) => {
        try {
            if (data.password !== data.confirmPassword) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password tidak cocok!'
                })
            } else {
                await axios.post('http://localhost:4000/api/user', data)
                showSwal();
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }

        } catch (error) {
            console.error(error);
        }
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
                            <form className='group' onSubmit={handleSubmit(onSubmit)}>
                                <div className="email mb-5">
                                    <input type="email" name='email' id='email' placeholder='Email' className='w-[80%] mx-[10%] lg:mx-[20%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' {...register("email", { require: "Email harus diisi" })} />
                                </div>
                                <div className="password mb-5">
                                    <input type={passwordVisible ? "text" : "password"} name='password' id='password' placeholder='Kata Sandi' className='w-[80%] mx-[10%] lg:mx-[20%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' {...register("password", { require: "Kata sandi harus diisi" })} />
                                    <span className='flex absolute right-14 lg:right-5 sm:right-20 bottom-[18.5rem] xl:bottom-[20.8rem] cursor-pointer' onClick={togglePasswordVisibility}>
                                        <img src={mata} alt="visible" />
                                    </span>
                                </div>

                                <div className="password mb-5">
                                    <input type={passwordVisible ? "text" : "password"} name='confirmPassword' id='rePassword' placeholder='Ketik Ulang Kata Sandi' className='w-[80%] mx-[10%] lg:mx-[20%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' {...register("confirmPassword", { require: "Kata sandi harus diisi" })} />
                                    <span className='flex absolute right-14 lg:right-5 sm:right-20 bottom-[14.3rem] xl:bottom-[16.6rem] cursor-pointer' onClick={togglePasswordVisibility}>
                                        <img src={mata} alt="visible" />
                                    </span>
                                </div>
                                <button type="submit" className='bg-primary text-light w-[80%] lg:mx-[20%] ml-[10%] py-3 rounded-lg hover:opacity-80 mb-6'>Daftar</button>
                                <p className="text-center lg:ml-[20%]">Sudah memiliki akun? <Link to={'/login'} className='text-primary font-semibold'>Masuk</Link></p>
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