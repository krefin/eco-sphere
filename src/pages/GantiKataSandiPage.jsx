import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Logo from "../assets/img/logoLengkap.svg"



const GantiKataSandiPage = () => {
    const navigate = useNavigate();
    const simpan = () => {
        const Toast = withReactContent(Swal).mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Data berhasil diperbaharui"
        })
    }
    const showSwal = () => {
        withReactContent(Swal).fire({
            html: `<img src=${Logo} alt="logo" style="width:80%;margin:0 auto;" /><br>
            <b><p>Anda Yakin Ingin Keluar?</p><b/>`,
            showCancelButton: true,
            confirmButtonColor: "#249624",
            cancelButtonColor: "#E7E7E7",
            confirmButtonText: "Yes, keluar!",
            width: '25%'
        }).then((result) => {
            if (result.isConfirmed) {
                withReactContent(Swal).fire({
                    title: "Berhasil!",
                    text: "Anda Berhasil Keluar.",
                    icon: "success",
                    confirmButtonColor: "#249624"
                });
                navigate('/login');
            }
        });
    }

    return (
        <section>
            <div className="container">
                <div className="lg:flex justify-center items-center px-4">
                    <div className="lg:w-2/12 flex self-start flex-col gap-3 lg:pt-32 mt-32 lg:mt-0 bg-netrals lg:bg-light p-4 lg:p-0 rounded-lg">
                        <h3 className="text-xl font-bold">Pengaturan</h3>
                        <div className="flex flex-col px-4 gap-3">
                            <NavLink to="/editProfil" className={({ isActive, isPanding }) => isPanding ? " text-dark px-4 py-2 rounded-lg" : isActive ? "bg-primary text-light px-4 py-2 rounded-lg" : " text-dark px-4 py-2 rounded-lg"}>Profil</NavLink>
                            <NavLink to="/gantiPassword" className={({ isActive, isPanding }) => isPanding ? " text-dark px-4 py-2 rounded-lg" : isActive ? "bg-primary text-light px-4 py-2 rounded-lg" : " text-dark px-4 py-2 rounded-lg"}>Ganti Kata Sandi</NavLink>
                        </div>
                        <Link className="text-xl font-bold" onClick={showSwal}>Keluar Akun</Link>
                    </div>
                    <div className="lg:w-5/12 lg:pt-32 px-4 lg:border-l-4 lg:py-20 py-10">
                        <div>
                            <h2 className="text-2xl font-bold">Ganti Kata Sandi</h2>
                            <p className="text-sm">Silahkan Ganti Kata Sandi Anda</p>
                            <div className="lg:hidden bg-primary text-light p-4 rounded-xl flex mt-10 flex-col gap-5">
                                <p className="font-bold">Gunakan Kata Sandi yang Unik!</p>
                                <p className="font-light">Pastikan tidak mengggunakan Hari dan Tanggal lahir!</p>
                            </div>
                        </div>
                        <form className="mt-10 flex flex-col gap-3">
                            <div>
                                <label htmlFor="namaDepan" className="text-primary px-4">Kata Sandi</label>
                                <div>
                                    <input type="password" name="namaDepan" id="namaDepan" placeholder="Masukan Kata Sandi" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="namaBelakang" className="text-primary px-4">Kata Sandi</label>
                                <div>
                                    <input type="password" name="namaBelakang" id="namaBelakang" placeholder="Masukan Kata Sandi Baru" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="ulang" className="text-primary px-4">Ulangi Kata Sandi Baru</label>
                                <div>
                                    <input type="password" name="ulang" id="ulang" placeholder="Ulangi Kata Sandi Baru" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="flex justify-end items-center bg-netrals rounded-full w-6 p-[2px]">
                                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                                </div>
                                <p className="text-sm">Verifikasi nomer telepon</p>
                            </div>
                            <button className="bg-primary text-light lg:w-2/5 py-2 px-4 rounded-lg hover:opacity-80 mt-5 mb-20" onClick={simpan}>Simpan Perubahan</button>
                        </form>
                    </div>
                    <div className="lg:w-5/12 self-start lg:mt-56">
                        <div className="flex flex-col justify-center items-start">
                            <div className="bg-primary hidden text-light p-4 rounded-xl lg:flex flex-col gap-5">
                                <p className="font-bold">Gunakan Kata Sandi yang Unik!</p>
                                <p className="font-light">Pastikan tidak mengggunakan Hari dan Tanggal lahir!</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default GantiKataSandiPage