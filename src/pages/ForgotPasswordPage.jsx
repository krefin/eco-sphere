import logo from '../assets/img/logo2.svg';

const ForgotPasswordPage = () => {
    return (
        <section className="bg-netrals min-h-screen">
            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="lg:w-[80%] w-full bg-netrals">
                        <div className="w-full flex justify-center">
                            <div className="lg:w-[60%] w-full  mx-4 bg-light py-10 rounded-xl mt-24 lg:mt-[10%] relative">
                                <div className='w-full text-center'>
                                    <img src={logo} alt="Eco Sphere" className='mx-auto' />
                                    <h1 className='px-[10%] text-4xl font-bold my-12'>Lupa Kata Sandi</h1>
                                </div>
                                <form action='/notificationForgotPassword' className='group text-center'>
                                    <div className="email mb-5">
                                        <input type="email" name='email' id='email' placeholder='Masukan Alamat Email' className='w-[80%] mx-[10%] bg-netrals rounded-lg p-3 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark' />
                                    </div>

                                    <button className='bg-primary text-light w-[60%] mx-[10%] mt-5 py-3 rounded-lg hover:opacity-80'>Kirim Tautan</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPasswordPage