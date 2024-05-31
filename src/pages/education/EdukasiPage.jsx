import Hero from "../../assets/img/edukasi/hero-edukasi1.svg";
import Anorganik from "../../assets/img/sampah/sampah-anorganik.svg";
import Organik from "../../assets/img/sampah/sampah-organik.svg";
import Kertas from "../../assets/img/sampah/sampah-kertas.svg";
import B3 from "../../assets/img/sampah/sampah-b3.svg";
import Residu from "../../assets/img/sampah/sampah-residu.svg";
import DaurKertas from "../../assets/img/daur-ulang/kertas.svg";
import DaurPlastik from "../../assets/img/daur-ulang/plastik.svg";
import DaurLogam from "../../assets/img/daur-ulang/logam.svg";
import DaurKaca from "../../assets/img/daur-ulang/kaca.svg";
import DaurTekstil from "../../assets/img/daur-ulang/tekstil.svg";
import DaurKeramik from "../../assets/img/daur-ulang/keramik.svg";
import DaurKaret from "../../assets/img/daur-ulang/karet.svg";
import DaurElektronik from "../../assets/img/daur-ulang/elektronik.svg";
import DaurKarton from "../../assets/img/daur-ulang/karton.svg";
import DaurMinyak from "../../assets/img/daur-ulang/minyak.svg";
import DaurKulit from "../../assets/img/daur-ulang/kulit.svg";
import DaurBaterai from "../../assets/img/daur-ulang/baterai.svg";

const EdukasiPage = () => {
    return (
        <>
            <section className="pt-20 lg:pt-0">
                <img src={Hero} alt="Gambar Sampah Terklasifikasi" className="bg-cover" />
            </section>
            <section>
                <div className="contaiiner">
                    <div className="lg:flex justify-between items-center px-7">
                        <div className="bg-netrals mx-7 p-12 lg:w-1/2 font-semibold rounded-xl relative -top-10 shadow-lg">
                            <h2 className="text-5xl font-bold pb-5">Halo, Nur Laila!</h2>
                            <p className="text-3xl">Selamat Datang</p>
                            <p className="text-3xl">di <span className="font-bold text-3xl">Edukasi EcoSphere</span></p>
                        </div>
                        <div className="flex justify-around items-center gap-5 mx-7 lg:w-1/2 pb-20 lg:pb-0">
                            <div className="bg-primary p-4 w-1/2 rounded-lg text-light shadow-lg">
                                <h4 className="text-base pb-3">KATEGORI MATERI</h4>
                                <p className="text-3xl font-bold">Klasifikasi Sampah</p>
                            </div>
                            <div className="bg-netrals p-4 w-1/2 rounded-lg shadow-lg">
                                <h4 className="text-base pb-3">KATEGORI MATERI</h4>
                                <p className="text-3xl font-bold">Daur</p>
                                <p className="text-3xl font-bold"> Ulang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-netrals rounded-t-3xl">
                <div className="container">
                    <div className="w-full py-10 text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-primary">Klasifikasi Sampah</h1>
                        <p className="font-bold">Klasifikasi Sampah</p>
                    </div>
                    <div className="w-full">
                        <div className="flex px-6 pb-20">
                            <div className="w-full flex flex-wrap lg:flex-nowrap gap-5 pt-20">
                                <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={Organik} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Sampah Organik</h4>
                                        <a href="/edukasi/klasifikasiOrganik" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={Anorganik} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Sampah Anorganik</h4>
                                        <a href="/edukasi/klasifikasiAnorganik" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={Kertas} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Sampah Kertas</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={B3} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Sampah B3</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={Residu} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Sampah Residu</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="lg:flex items-center justify-between gap-10 px-7">
                        <div className="lg:w-2/6 pt-20">
                            <h2 className="text-5xl font-bold text-primary">Daur Ulang Sampah</h2>
                            <p className="font-bold">Panduan Daur Ulang Sampah</p>
                        </div>
                        <div className="lg:w-4/6 w-full">
                            <div className="flex  flex-wrap lg:flex-nowrap gap-5 pt-20 lg:pt-10">
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurKertas} alt="Daur Ulang Kertas" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Kertas</h4>
                                        <a href="/edukasi/daurUlang" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurPlastik} alt="Daur Ulang Plastik" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Plastik</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurLogam} alt="Daur Ulang Logam" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Logam</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurKaca} alt="Daur Ulang Kaca" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Kaca</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex  flex-wrap lg:flex-nowrap gap-5 pt-20 lg:pt-10">
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurTekstil} alt="Daur Ulang Tekstil" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Tekstil</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurKeramik} alt="Daur Ulang Keramik" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Keramik</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurKaret} alt="Daur Ulang Karet" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Karet</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurElektronik} alt="Daur Ulang Elektronik" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Elektronik</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex  flex-wrap lg:flex-nowrap gap-5 pt-20 lg:py-10 py-20">
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurKarton} alt="Daur Ulang Karton" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Karton</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurMinyak} alt="Daur Ulang Minyak" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Minyak</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurKulit} alt="Daur Ulang Kulit" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Kulit</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/4 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                    <img src={DaurBaterai} alt="Daur Ulang Baterai" className="bg-cover w-full" />
                                    <div className="px-5 py-2">
                                        <h4 className="text-xl font-semibold">Baterai</h4>
                                        <a href="#" className="decoration-none">Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EdukasiPage