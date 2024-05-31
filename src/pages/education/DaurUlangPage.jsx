import Hero from "../../assets/img/edukasi/hero-edukasi4.svg";
import IconOrigami from "../../assets/img/daur-ulang/icon-origami.svg";
import IconKardus from "../../assets/img/daur-ulang/icon-kardus.svg";
import Content1 from "../../assets/img/daur-ulang/content-img1.svg";
import Content2 from "../../assets/img/daur-ulang/content-img2.svg";
import Content3 from "../../assets/img/daur-ulang/content-img3.svg";
import Content4 from "../../assets/img/daur-ulang/content-img4.svg";
import Content5 from "../../assets/img/daur-ulang/content-img5.svg";
import Content6 from "../../assets/img/daur-ulang/content-img6.svg";

const DaurUlangPage = () => {
    return (
        <>
            <section className="pt-20 lg:pt-0">
                <img src={Hero} alt="Gambar Sampah Terklasifikasi" className="bg-cover" />
            </section>
            <section>
                <div className="contaiiner">
                    <div className="lg:flex justify-between items-center px-7">
                        <div className="bg-primary mx-7 p-12 lg:w-1/2 font-semibold rounded-xl relative -top-10 shadow-lg text-light">
                            <h2 className="lg:text-5xl text-3xl font-bold pb-5">Panduan Daur Ulang :</h2>
                            <p className="text-3xl">Kertas</p>

                        </div>
                        <div className="flex flex-col items-center gap-5 mx-7 lg:w-1/2 pb-20 lg:pb-0">
                            <div className="flex justify-between items-center gap-5 mx-7 w-full">
                                <div className="bg-primary w-1/2 rounded-xl flex items-center">
                                    <img src={IconOrigami} alt="Origami" className="w-1/2" />
                                    <p className="text-xl font-bold pl-2 lg:pl-3 text-light">Origami</p>
                                </div>
                                <div className="bg-netrals w-1/2 rounded-xl flex items-center">
                                    <img src={IconKardus} alt="Origami" className="w-1/2" />
                                    <p className="text-xl font-bold pl-2 lg:pl-3 text-dark">Kardus</p>
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
            <section className="lg:mt-10">
                <div className="container">
                    <div className="flex flex-col gap-10 justify-between items-center py-10 px-7">
                        <h3 className="text-primary font-bold text-2xl lg:text-3xl">Langkah-langkah Membuat Origami dari Kertas Daur Ulang</h3>
                        <img src={Content1} alt="Origami" />
                        <div className="lg:w-5/6">
                            <h3 className="text-primary font-bold text-2xl lg:text-3xl self-start lg:ml-20">Langkah 1: Persiapkan Bahan</h3>
                            <ul className="list-disc text-xl self-start lg:ml-28 ml-10">
                                <li>Ambil selembar kertas persegi dari bahan daur ulang yang kamu miliki. Pastikan kertas tersebut cukup besar dan memiliki ketebalan yang sesuai untuk memudahkan proses melipat.</li>
                            </ul>
                        </div>
                        <img src={Content2} alt="Kertas Kosong" />
                        <div className="lg:w-5/6">
                            <h3 className="text-primary font-bold text-2xl lg:text-3xl self-start lg:ml-20">Langkah 2: Mulai Lipat</h3>
                            <ul className="list-disc text-xl self-start lg:ml-28 ml-10">
                                <li>Letakkan kertas di depan kamu dengan sisi berwarna (jika ada) menghadap ke bawah.</li>
                                <li>Lipat kertas menjadi dua secara diagonal untuk membentuk segitiga. Pastikan lipatan tersebut rapi dan tepat.</li>
                            </ul>
                        </div>
                        <img src={Content3} alt="Lipat Kertas" />
                        <div className="lg:w-5/6">
                            <h3 className="text-primary font-bold text-2xl lg:text-3xl self-start lg:ml-20">Langkah 3: Bentuk Segitiga</h3>
                            <ul className="list-disc text-xl self-start lg:ml-28 ml-10">
                                <li>Buka kembali lipatan yang baru saja kamu buat, sehingga kembali membentuk persegi panjang.</li>
                                <li>Lipat kertas menjadi dua secara diagonal lagi, tetapi kali ini lipatlah ke arah yang berlawanan dari lipatan sebelumnya.</li>
                            </ul>
                        </div>
                        <img src={Content4} alt="Bentuk Segitiga" />
                        <div className="lg:w-5/6">
                            <h3 className="text-primary font-bold text-2xl lg:text-3xl self-start lg:ml-20">Langkah 4: Lipat Ujung</h3>
                            <ul className="list-disc text-xl self-start lg:ml-28 ml-10">
                                <li>Lipat salah satu ujung segitiga ke titik tengah lipatan sebelumnya. Pastikan lipatan tersebut rapi dan lurus.</li>
                                <li>Lakukan langkah yang sama dengan ujung segitiga yang lain, sehingga keduanya bertemu di titik tengah.</li>
                            </ul>
                        </div>
                        <img src={Content5} alt="Lipat Ujung" />
                        <div className="lg:w-5/6">
                            <h3 className="text-primary font-bold text-2xl lg:text-3xl self-start lg:ml-20">Langkah 5: Bentuk Kepala & Ekor</h3>
                            <ul className="list-disc text-xl self-start lg:ml-28 ml-10">
                                <li>Lipat ujung atas segitiga ke bawah sedikit untuk membentuk kepala.</li>
                                <li>Lipat ujung bawah segitiga ke atas sedikit untuk membentuk ekor dan origami kamu sudah selesai.</li>
                            </ul>
                        </div>
                        <img src={Content6} alt="Origami selesai" />
                        <div className="lg:w-5/6">
                            <p className="text-xl self-start lg:ml-20"><span className="font-bold">Source:</span> liputan6.com/hot/read/4292405/6-cara-melipat-kertas-origami-berbagai-bentuk-yang-mudah-dilakukan?page=3</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DaurUlangPage