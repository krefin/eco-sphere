import CheckMark from "../assets/img/check-mark.svg"

const NotificationForgotPasswordPage = () => {
    return (
        <section className="bg-netrals min-h-screen">
            <div className="container">
                <div className="flex justify-center items-center">
                    <div className="lg:w-[80%] w-full bg-netrals">
                        <div className="w-full flex justify-center">
                            <div className="lg:w-[60%] w-full  mx-4 bg-light py-10 rounded-xl mt-24 lg:mt-[10%] relative">
                                <div className='w-full text-center justify-between mb-5 flex'>
                                    <hr className="border-2 border-primary self-center w-1/3" />
                                    <h1 className='lg:text-4xl text-3xl font-bold w-full self-center'>Lupa Kata Sandi</h1>
                                    <hr className="border-2 border-primary self-center w-1/3" />
                                </div>
                                <div className="w-[80%] mx-auto flex gap-3 flex-wrap justify-center">
                                    <img src={CheckMark} alt="check mark" />
                                    <p className="lg:text-2xl text-lg text-center">Periksa email Anda untuk petunjuk pengaturan ulang kata sandi. Jika Anda tidak menerima email, periksa folder spam atau hubungi administrator Anda.</p>
                                    <a href="/login" className="text-primary text-xl lg:text-2xl font-bold decoration-none mt-5">Kembali Ke Masuk</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotificationForgotPasswordPage