import { Link, NavLink } from "react-router-dom";
import Profil from "../assets/img/profil/profil-kosong.svg";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const EditProfilePage = () => {


    const showSwal = () => {
        withReactContent(Swal).fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#249624",
            cancelButtonColor: "#E7E7E7",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                withReactContent(Swal).fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    confirmButtonColor: "#249624"
                });
            }
        });
    }
    const showInputFile = async () => {
        const { value: file } = await withReactContent(Swal).fire({
            title: "Select image",
            input: "file",
            inputAttributes: {
                "accept": "image/*",
                "aria-label": "Upload your profile picture"
            },
            confirmButtonColor: "#249624"
        });
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                Swal.fire({
                    title: "Your uploaded picture",
                    imageUrl: e.target.result,
                    imageAlt: "The uploaded picture",
                    confirmButtonColor: "#249624"
                });
            };
            reader.readAsDataURL(file);
        }
    }
    const simpan = () => {
        const Toast = withReactContent(Swal).mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            confirmButtonColor: "#249624",
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
                        <Link to={"/login"} className="text-xl font-bold">Keluar Akun</Link>
                    </div>
                    <div className="lg:w-5/6 lg:pt-32 px-4 lg:border-l-4 lg:py-20 py-10 lg:flex flex-col">
                        <div className="lg:flex w-full flex-row-reverse">
                            <div className=" bg-primary text-light p-4 rounded-xl hidden lg:flex mb-10 lg:mt-24 flex-col gap-5">
                                <p className="font-bold">Tingkatkan Kepercayaan Diri Anda dengan Menggunakan Foto Profil!</p>
                                <p className="font-light">Gunakan foto yang menggambarkan diri Anda!</p>
                                <p className="font-light">Pastikan mengisi dengan nama asli Anda agar kami dapat mengenali Anda.</p>
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-2xl font-bold">Edit Profil</h2>
                                <p className="text-sm">Edit Profil Anda</p>
                                <div className="lg:hidden bg-primary text-light p-4 rounded-xl flex mt-10 lg:mt-24 flex-col gap-5">
                                    <p className="font-bold">Tingkatkan Kepercayaan Diri Anda dengan Menggunakan Foto Profil!</p>
                                    <p className="font-light">Gunakan foto yang menggambarkan diri Anda!</p>
                                    <p className="font-light">Pastikan mengisi dengan nama asli Anda agar kami dapat mengenali Anda.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold mt-7">Foto Profil User</h4>
                                    <div className="flex gap-5 mt-3">
                                        <div className="bg-netrals w-28 h-28 rounded-full flex justify-center items-center">
                                            <img src={Profil} alt="Foto Profil" />
                                        </div>
                                        <div className="flex flex-col justify-around items-start">
                                            <button className="bg-primary text-light px-[1.37rem] py-2 rounded-lg" onClick={showInputFile}>Ubah Foto Profil</button>
                                            <button className=" text-primary px-4 py-2 rounded-lg border-2 border-primary" onClick={showSwal}>Hapus Foto Profil</button>
                                        </div>
                                    </div>
                                    <p className="text-md mt-3">Masukan foto, direkomendisikan ukuran 256x256px</p>
                                </div>
                            </div>

                        </div>
                        <form className="mt-10 lg:flex gap-20 w-full">
                            <div className="flex flex-col gap-3 lg:w-2/5">
                                <div>
                                    <label htmlFor="namaDepan" className="text-primary px-4">Nama Depan</label>
                                    <div>
                                        <input type="text" name="namaDepan" id="namaDepan" placeholder="Nur" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="namaBelakang" className="text-primary px-4">Nama Belakang</label>
                                    <div>
                                        <input type="text" name="namaBelakang" id="namaBelakang" placeholder="Laila" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-primary px-4">Email</label>
                                    <div>
                                        <input type="email" name="email" id="email" placeholder="nurlaila0982@gmail.com" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="telepon" className="text-primary px-4">Nomor Telepon</label>
                                    <div>
                                        <input type="text" name="telepon" id="telepon" placeholder="+62 812 3456 7890" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex justify-end items-center bg-netrals rounded-full w-6 p-[2px]">
                                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                                    </div>
                                    <p className="text-sm">Verifikasi nomer telepon</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="bg-primary text-light py-2 px-4 rounded-lg hover:opacity-80 lg:mt-[9.5rem] mt-5" onClick={simpan}>Simpan Perubahan</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default EditProfilePage