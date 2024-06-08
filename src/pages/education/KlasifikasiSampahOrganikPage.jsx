import Hero from "../../assets/img/edukasi/hero-edukasi3.png";
import SisaMakanan from "../../assets/img/sampah/sisa-makanan.png";
import Dedaunan from "../../assets/img/sampah/dedaunan1.png";
import SisaBuahSayur from "../../assets/img/sampah/sisa-buah-sayur.png";
import KotoranHewan from "../../assets/img/sampah/kotoran-hewan1.png";
import Ilustrasi1 from "../../assets/img/edukasi/ilustrasi4.png";
import Ilustrasi2 from "../../assets/img/edukasi/ilustrasi5.png";
import Ilustrasi3 from "../../assets/img/edukasi/ilustrasi6.png";
import Alert from "../../assets/img/edukasi/ilustrasi-alert.png";
import Logo from "../../assets/img/logoLengkap.png"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KlasifikasiSampahOrganikPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.offsetHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Jarak dari bawah halaman yang ingin Anda gunakan sebagai batas
            const distanceFromBottom = 100;

            if (documentHeight - (scrollTop + windowHeight) < distanceFromBottom) {
                // Memunculkan alert ketika mencapai batas bawah halaman
                withReactContent(Swal).fire({
                    html: `<img src=${Alert} alt="logo" style="width:80%;margin:0 auto;" />
                            <br><b><p>Asiik!! Kamu berhasil menyelesaikan satu pembelajaranmu! Belajar materi yang lain lagi yuk!</p><b/>`,
                    showCancelButton: true,
                    confirmButtonColor: "#249624",
                    cancelButtonColor: "#E7E7E7",
                    confirmButtonText: "Materi Selanjutnya",
                    cencelButtonText: "Kembali",
                }).then((result) => {
                    if (result.isConfirmed) {
                        withReactContent(Swal).fire({
                            html: `<img src=${Logo} alt="logo" style="width:80%;margin:0 auto;" />
                            <br><b><p>Selamat Belajar Materi Selanjutnya!</p><b/>`,
                            confirmButtonColor: "#249624"
                        });
                        navigate("/edukasi/klasifikasiAnorganik");
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        navigate("/edukasi");
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });

            }
        };

        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
                            <p className="text-3xl">Sampah Organik</p>

                        </div>
                        <div className="flex flex-col items-center gap-5 mx-7 lg:w-1/2 pb-20 lg:pb-0">
                            <div className="flex justify-between items-center gap-5 mx-7 w-full">
                                <div className="bg-netrals p-4 w-1/2 rounded-lg shadow-lg">
                                    <h4 className="text-2xl font-bold">Klasifikasi Sampah :</h4>
                                    <p className="text-xl font-bold">Sampah Kertas</p>
                                </div>
                                <div className="bg-netrals p-4 w-1/2 rounded-lg shadow-lg">
                                    <h4 className="text-2xl font-bold">Klasifikasi Sampah :</h4>
                                    <p className="text-xl font-bold">Sampah B3</p>
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
                        <div className="lg:w-3/6 self-start lg:pt-24 py-10  lg:ml-32">
                            <h3 className="text-2xl font-bold text-primary">Apa Itu Sampah Organik ?</h3>
                            <p className="text-xl text-justify mt-7"><span className="font-bold text-3xl">S</span>ampah organik adalah sampah yang berasal dari sisa mahkluk hidup yang mudah terurai secara alami tanpa proses campur tangan manusia untuk dapat terurai.</p>
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
                            <h3 className="text-2xl font-bold text-primary">Apa Saja Jenis Sampah Organik ?</h3>
                            <p className="text-xl">Jenis - jenis sampah organik diantaranya,</p>
                        </div>
                        <div className="flex w-4/6 flex-wrap self-center lg:flex-nowrap gap-5 pt-20 lg:py-10 py-20">
                            <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                <img src={SisaMakanan} alt="Sampah Sisa Makanan" className="bg-cover w-full" />
                                <div className="px-5 py-2">
                                    <h4 className="text-xl font-semibold">Sisa Makanan</h4>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                <img src={Dedaunan} alt="Sampah Dedaunan" className="bg-cover w-full" />
                                <div className="px-5 py-2">
                                    <h4 className="text-xl font-semibold">Dedaunan</h4>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                <img src={SisaBuahSayur} alt="Sampah sisa buah dan sayur" className="bg-cover w-full" />
                                <div className="px-5 py-2">
                                    <h4 className="text-xl font-semibold">Sisa Buah Dan Sayur</h4>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/5 bg-netrals text-dark rounded-2xl lg:rounded-lg shadow-lg">
                                <img src={KotoranHewan} alt="Sampah Kotoran HEwan" className="bg-cover w-full" />
                                <div className="px-5 py-2">
                                    <h4 className="text-xl font-semibold">Kotoran Hewan</h4>
                                </div>
                            </div>
                            <div className="rounded-full w-10 h-10 flex flex-col gap-1 justify-center items-center bg-primary self-center">
                                <span className="bg-light block px-2 py-[0.15rem] w-5 rotate-[30deg]"></span>
                                <span className="bg-light block px-2 py-[0.15rem] w-5 -rotate-[30deg]"></span>
                            </div>
                        </div>
                        <div className=" lg:ml-32 lg:w-4/5">
                            <p className="text-xl"><span className="font-bold text-3xl">S</span>ampah organik adalah sampah yang berasal dari sisa mahkluk hidup yang mudah terurai secara alami tanpa proses campur tangan manusia untuk dapat terurai. Sampah organik bisa dikatakan sebagai sampah ramah lingkungan bahkan sampah bisa diolah kembali menjadi suatu yang bermanfaat bila dikelola dengan tepat.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-netrals lg:py-10">
                <div className="container">
                    <div className="flex flex-wrap justify-between items-center px-7">
                        <div className="lg:w-4/6 self-start lg:ml-32 py-10 lg:py-0">
                            <h3 className="text-2xl font-bold text-primary">Ciri-Ciri Sampah Organik</h3>
                            <p className="text-xl text-justify mt-7">Ciri - ciri sampah organik diantaranya,</p>
                            <ul className="list-disc text-xl">
                                <li className="ml-7 pt-5">Mengandung banyak air. Biasanya, limbah organik memiliki banyak kandungan air.</li>
                                <li className="ml-7">Berasal dari sisa bahan alam. Limbah organik berasal dari sisa bahan alam.</li>
                                <li className="ml-7">Mudah membusuk. Limbah organik cenderung mudah membusuk, tanpa perlu melewati berbagai proses pengolahan.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:py-10">
                <div className="container">
                    <div className="flex flex-wrap justify-between items-center px-7">
                        <div className="lg:w-2/6 self-start lg:ml-32 pt-10">
                            <h3 className="text-2xl font-bold text-primary mb-5">Dampak Sampah Organik</h3>
                            <p className="text-xl"><span className="font-bold text-3xl">S</span>ampah organik yang dibuang ke sungai, danau, waduk, dan sumber air lainnya dapat mencemari air. Rembesan sampah organik basah ke dalam tanah juga dapat mencemari air tanah. Matinya beberapa binatang merupakan dampak lanjutan dari tercemarnya sumber air.
                            </p>
                        </div>
                        <div className="lg:w-2/6 self-start lg:mr-32">
                            <img src={Ilustrasi2} alt="Ilustrasi" />
                        </div>
                    </div>
                    <div className="lg:w-4/5 lg:ml-32 px-7 mb-10 lg:mb-0">
                        <p className="text-xl">Ketika limbah rumah tangga tidak dikelola dengan baik, dapat menyebabkan dampak negatif pada lingkungan sekitarnya. Limbah organik yang terbuang dapat membusuk dan menghasilkan gas metana, yang merupakan gas rumah kaca yang berkontribusi pada perubahan iklim.</p>
                    </div>
                </div>
            </section>
            <section className="lg:py-10 bg-netrals">
                <div className="container">
                    <div className="lg:flex justify-beetwen items-center px-7">

                        <div className="lg:w-2/5 self-start lg:ml-32">
                            <img src={Ilustrasi3} alt="Ilustrasi" />
                        </div>
                        <div className="lg:w-2/5 self-start lg:mr-32 mx-auto lg:py-14 pb-14 lg:pb-0">
                            <p className="text-xl text-justify mb-5">Sementara itu, sampah organik juga dapat menimbulkan berbagai masalah kesehatan. Diakunya, pembusukan sampah organik dapat sebabkan gangguan kesehatan manusia. ”Sumber penyakit jika sampah organik tak diolah. Bisa jadi sarang lalat, yang bisa mempermudah penularan penyakit. Seperti diare dan tifus,
                            </p>
                            <p className="text-2xl font-bold text-primary text-justify">Jadi, apakah kamu siap menjadi bagian dari agen perubahan bumi yang lebih baik ? </p>
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

export default KlasifikasiSampahOrganikPage