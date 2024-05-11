import HeroImage from "../assets/img/HeroImage.svg";

const HomePage = () => {
    return (
        <section className="pt-36">
            <div className="container">
                <div className="lg:flex justify-between items-center">
                    <div className="lg:w-3/5 w-full self-center px-5">
                        <h1 className="text-5xl font-semibold leading-[3.5rem]">
                            Satu aksi hijau, satu dunia yang lebih baik bersama <span className="text-primary font-bold">EcoSphere</span>
                        </h1>
                        <p className="text-3xl mt-3">Platform Edukasi dan Informasi Sampah yang memberikan solusi inovatif untuk membantu meningkatkan minat dalam mengelola sampah</p>
                    </div>
                    <div className="lg:w-2/5 w-full self-end px-5">
                        <img src={HeroImage} alt="Hero Image" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomePage