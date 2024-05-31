import Hero from "../../assets/img/edukasi/hero-edukasi2.svg";
import DaurKarton from "../../assets/img/daur-ulang/karton.svg";
import DaurMinyak from "../../assets/img/daur-ulang/minyak.svg";
import DaurKulit from "../../assets/img/daur-ulang/kulit.svg";
import DaurBaterai from "../../assets/img/daur-ulang/baterai.svg";
import Ilustrasi1 from "../../assets/img/edukasi/ilustrasi1.svg";
import Ilustrasi2 from "../../assets/img/edukasi/ilustrasi2.svg";
import Ilustrasi3 from "../../assets/img/edukasi/ilustrasi3.svg";

const KlasifikasiSampahAnorganikPage = () => {
    return (
        <>
            <section className="pt-20 lg:pt-0">
                <img src={Hero} alt="Gambar Sampah Terklasifikasi" className="bg-cover" />
            </section>
            <section>
                <div className="contaiiner">
                    <div className="lg:flex justify-between items-center px-7">
                        <div className="bg-primary mx-7 p-12 lg:w-1/2 font-semibold rounded-xl relative -top-10 shadow-lg text-light">
                            <h2 className="text-5xl font-bold pb-5">Klasifikasi Sampah :</h2>
                            <p className="text-3xl">Sampah Anorganik</p>

                        </div>
                        <div className="flex flex-col items-center gap-5 mx-7 lg:w-1/2 pb-20 lg:pb-0">
                            <div className="flex justify-between items-center gap-5 mx-7 w-full">
                                <div className="bg-netrals p-4 w-1/2 rounded-lg shadow-lg">
                                    <h4 className="text-2xl font-bold">Klasifikasi Sampah :</h4>
                                    <p className="text-xl font-bold">Sampah Organik</p>
                                </div>
                                <div className="bg-netrals p-4 w-1/2 rounded-lg shadow-lg">
                                    <h4 className="text-2xl font-bold">Klasifikasi Sampah :</h4>
                                    <p className="text-xl font-bold">Sampah Kertas</p>
                                </div>
                            </div>
                            <div className="flex gap-1 self-end">
                                <span className="w-3 h-3 rounded-full bg-primary block"></span>
                                <span className="w-3 h-3 rounded-full bg-netrals block"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-netrals lg:mt-10">
                <div className="container">
                    <div className="lg:flex justify-between items-center px-7">
                        <div className="lg:w-2/6 self-start lg:pt-24 py-10  lg:ml-32">
                            <h3 className="text-2xl font-bold text-primary">Apa Itu Sampah Anorganik ?</h3>
                            <p className="text-xl text-justify mt-7"><span className="font-bold text-3xl">S</span>ampah anorganik adalah jenis sampah yang tidak mudah terurai secara alami oleh mikroorganisme atau proses alamiah.</p>
                        </div>
                        <div className="lg:w-4/6 flex justify-end pb-10 lg:pb-0">
                            <img src={Ilustrasi1} alt="Ilustrasi" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="flex flex-col px-7 py-10">
                        <div className=" lg:ml-32">
                            <h3 className="text-2xl font-bold text-primary">Apa Saja Jenis Sampah Anorganik ?</h3>
                            <p className="text-xl">Jenis - jenis sampah anorganik diantaranya,</p>
                        </div>
                        <div className="flex w-4/6 flex-wrap self-center lg:flex-nowrap gap-5 pt-20 lg:py-10 py-20">
                            <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                <img src={DaurKarton} alt="Daur Ulang Karton" className="bg-cover w-full" />
                                <div className="px-5 py-2">
                                    <h4 className="text-xl font-semibold">Karton</h4>
                                    <a href="#" className="decoration-none">Selengkapnya</a>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                <img src={DaurMinyak} alt="Daur Ulang Minyak" className="bg-cover w-full" />
                                <div className="px-5 py-2">
                                    <h4 className="text-xl font-semibold">Minyak</h4>
                                    <a href="#" className="decoration-none">Selengkapnya</a>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                <img src={DaurKulit} alt="Daur Ulang Kulit" className="bg-cover w-full" />
                                <div className="px-5 py-2">
                                    <h4 className="text-xl font-semibold">Kulit</h4>
                                    <a href="#" className="decoration-none">Selengkapnya</a>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                <img src={DaurBaterai} alt="Daur Ulang Baterai" className="bg-cover w-full" />
                                <div className="px-5 py-2">
                                    <h4 className="text-xl font-semibold">Baterai</h4>
                                    <a href="#" className="decoration-none">Selengkapnya</a>
                                </div>
                            </div>
                            <div className="rounded-full w-10 h-10 flex flex-col gap-1 justify-center items-center bg-primary self-center">
                                <span className="bg-light block px-2 py-[0.15rem] w-5 rotate-[30deg]"></span>
                                <span className="bg-light block px-2 py-[0.15rem] w-5 -rotate-[30deg]"></span>
                            </div>
                        </div>
                        <div className=" lg:ml-32 lg:w-4/5">
                            <p className="text-xl"><span className="font-bold text-3xl">S</span>ampah Anorganik termasuk jenis sampai yang sulit terurai dan berpotensi mencemari lingkungan jika tidak dikelola dengan baik. Oleh karena itu pengelolaan sampah anorganik merupakan tantangan besar dalam upaya pengelolaan lingkungan yang berkelanjutan.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-netrals lg:py-10">
                <div className="container">
                    <div className="flex flex-wrap justify-between items-center px-7">
                        <div className="lg:w-2/6 self-start lg:ml-32 py-10 lg:py-0">
                            <h3 className="text-2xl font-bold text-primary">Ciri-Siri Sampah Anorganik</h3>
                            <p className="text-xl text-justify mt-7">Ciri - ciri sampah anorganik diantaranya,</p>
                            <ul className="text-xl list-disc">
                                <li className="ml-7 pt-5">Tidak Mudah Terurai</li>
                                <li className="ml-7">Mengandung Bahan Kimia Berbahaya</li>
                                <li className="ml-7">Berat dan Padat</li>
                                <li className="ml-7">Tidak Memiliki Kandungan Organik</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:py-10">
                <div className="container">
                    <div className="flex flex-wrap justify-between items-center px-7">
                        <div className="lg:w-2/6 self-start lg:ml-32 pt-10">
                            <h3 className="text-2xl font-bold text-primary mb-5">Dampak Sampah Anorganik</h3>
                            <p className="text-xl"><span className="font-bold text-3xl">D</span>ampak dari pencemaran lingkungan yang disebabkan oleh sampah anorganik dapat merusak ekosistem alami. Ini dapat mempengaruhi keberlanjutan sumber daya alam, merusak habitat satwa liar, dan mengancam keberlangsungan spesies tertentu.</p>
                        </div>
                        <div className="lg:w-2/6 self-start lg:mr-32 mb-10 lg:mb-0">
                            <img src={Ilustrasi2} alt="Ilustrasi" />
                            <p className="text-xl"><span className="font-bold text-3xl">D</span>ampak dari pencemaran lingkungan yang disebabkan oleh sampah anorganik dapat merusak ekosistem alami. Ini dapat mempengaruhi keberlanjutan sumber daya alam, merusak habitat satwa liar, dan mengancam keberlangsungan spesies tertentu.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:py-10 bg-netrals">
                <div className="container">
                    <div className="flex flex-wrap justify-beetwen items-center px-7 lg:relative">

                        <div className="lg:w-2/6 self-start lg:ml-32 lg:absolute -top-24">
                            <img src={Ilustrasi3} alt="Ilustrasi" />
                        </div>
                        <div className="lg:w-2/6 self-start lg:mr-32 mx-auto py-2">
                            <p className="text-xl text-justify mb-5">Dengan memahami dampak dari sampah anorganik, penting untuk mengambil langkah-langkah untuk mengurangi penggunaannya, mendaur ulang sebanyak mungkin, dan mengelola dengan bijaksana agar dapat menjaga kelestarian lingkungan dan kesehatan manusia.</p>
                            <p className="text-xl font-bold text-primary text-justify">Jadi, apakah kamu siap menjadi bagian dari agen perubahan bumi yang lebih baik ? </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:py-10">
                <div className="container">
                    <div className="flex flex-wrap justify-center items-center px-7 py-10 lg:py-0">
                        <div className=" self-start lg:mx-32">
                            <p className="text-2xl text-justify font-bold italic">“Mulailah memilah sampah dengan baik pada tempatnya dan membangun kesadaran diri dari sekarang. Kalau bukan kamu yang mulai, harus tunggu siapa lagi?”.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KlasifikasiSampahAnorganikPage