import logo from '../assets/img/logo2.svg'
import login from '../assets/img/LoginIlustrasi.svg'
import mata from '../assets/mata.svg'

const LoginPage = () => {
    return (
        <section className='flex justify-center'>
            <div className="container">
                <div className="w-full mx-[48px] flex">
                    <div className="w-[40%]">
                        <img src={logo} alt="Eco Sphere" className='mb-[100px] mt-[51px]' />
                        <img src={login} alt="Ilustrasi Login" />
                    </div>
                    <div className="w-[60%] bg-netrals">
                        <div className="w-full flex justify-center">
                            <div className="w-[60%] bg-light py-10 rounded-xl mt-[218px] relative">
                                <h1 className='px-[10%] text-4xl font-bold mb-12'>Login</h1>
                                <form className='group'>
                                    <div className="email mb-2">
                                        <label htmlFor="email" className='px-[10%]'>Email</label>
                                        <input type="email" name='email' id='email' placeholder='Masukan Email' className='w-[80%] mx-[10%] bg-netrals rounded p-2' />
                                    </div>
                                    <div className="password mb-2">
                                        <label htmlFor="password" className='px-[10%]'>Password</label>
                                        <input type="password" name='password' id='password' placeholder='Masukan Email' className='w-[80%] mx-[10%] bg-netrals rounded p-2' />
                                        <span className='flex absolute right-14 bottom-[132px] cursor-pointer'>
                                            <img src={mata} alt="visible" />
                                        </span>
                                    </div>

                                    <div className='flex justify-between px-4 mb-3'>
                                        <div className='w-full'>
                                            <input type="checkbox" name='remember' id='remember' className='w-6 ml-[10%] checked:accent-primary' />
                                            <label htmlFor="remember">Ingat Saya</label>
                                        </div>
                                        <a href="#" className='decoration-none w-full -mr-32'>Lupa Kata Sandi?</a>
                                    </div>
                                    <button className='bg-primary text-light w-[80%] mx-[10%] py-2 rounded-lg'>Masuk</button>
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