import IconCS from "../assets/icon/icon-cs.png";
import IconMail from "../assets/icon/icon-mail.png";
import IconWWW from "../assets/icon/icon-www.png";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const KontakKamiPage = () => {
    const showSwal = () => {
        withReactContent(Swal).fire({
            title: "Pesan Terkirim!",
            text: "Terimakasih Telah Mengubungi Kami.",
            icon: "success",
            confirmButtonColor: "#249624"
        });
    }
    return (
        <>
            <section className="pt-32 pb-10">
                <div className="container">
                    <div className="flex justify-center items-center px-7">
                        <h1 className="text-3xl font-bold">Kami Senang Membantu & Menerima Pesan dari Anda</h1>
                    </div>
                    <div className="lg:flex justify-center items-center px-7 py-10">
                        <form className="lg:w-7/12 flex flex-col gap-3">
                            <div>
                                <label htmlFor="namaDepan" className="text-primary px-4">Nama Lengkap</label>
                                <div>
                                    <input type="text" name="namaLengkap" id="namaLengkap" placeholder="Nama Lengkap" className="w-full bg-netrals rounded-2xl px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="nomorPonsel" className="text-primary px-4">Nomor Ponsel</label>
                                <div>
                                    <input type="text" name="nomorPonsel" id="nomorPonsel" placeholder="Nomor Ponsel" className="w-full bg-netrals rounded-2xl px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-primary px-4">Email</label>
                                <div>
                                    <input type="text" name="email" id="email" placeholder="Email" className="w-full bg-netrals rounded-2xl px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="pesan" className="text-primary px-4">Pesan</label>
                                <div>
                                    <textarea name="pesan" id="pesan" className="w-full bg-netrals rounded-2xl px-4 py-2 pb-12 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" placeholder="Pesan"></textarea>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="bg-primary text-light py-2 px-4 rounded-lg hover:opacity-80 w-48" onClick={showSwal}>Kirim</button>
                            </div>
                        </form>
                        <div className="lg:w-5/12 self-start pt-6 mt-10 lg:mt-0">
                            <div className="flex flex-wrap justify-start items-center gap-5 bg-primary rounded-xl py-5 px-7 lg:mx-10">
                                <div className="flex items-center gap-5">
                                    <div className="w-20 h-20 bg-netrals rounded-full flex justify-center items-center">
                                        <img src={IconCS} alt="icon CS" />
                                    </div>
                                    <div>
                                        <p className="text-light">+62823 4737 7775</p>
                                        <p className="text-light">CS.ecosphere@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="w-20 h-20 bg-netrals rounded-full flex justify-center items-center">
                                        <img src={IconMail} alt="icon Mail" />
                                    </div>
                                    <div>
                                        <p className="text-light">@ecosphere_pedulisampah</p>
                                        <p className="text-light">ecosphere2024@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="w-20 h-20 bg-netrals rounded-full flex justify-center items-center">
                                        <img src={IconWWW} alt="icon WWW" />
                                    </div>
                                    <div>
                                        <p className="text-light">www.ecosphere.id</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:flex items-center hidden">
                <div className="bg-secondary text-light p-2 -rotate-90 -ml-12">
                    <p>2024 EcoSphere</p>
                </div>
                <div className="flex justify-between items-center bg-netrals relative gap-60 -ml-12">
                    <div className="text-secondary py-11 px-10">
                        <h4 className="font-bold">Head Office :</h4>
                        <p>Jln. Kampus Merdeka No. 50, Kel. Independen, Kec. MSIB6,
                            Kota Batam, Kepulauan Riau 29111.</p>
                    </div>
                    <div className="px-9 mr-12 text-secondary">
                        <a href="#" className="font-bold">Lihat Lokasi Kami di Peta</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KontakKamiPage