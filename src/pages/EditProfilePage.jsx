import { Link, NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useEffect, useRef, useState } from "react";
import { getUserById, updateUser } from "../hooks/axios";

const EditProfilePage = () => {
    const [userData, setUserData] = useState({});
    const [img, setImg] = useState(null);
    const namadepanRef = useRef(null);
    const namabelakangRef = useRef(null);
    const emailRef = useRef(null);

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
                setImg(file);
            };
            reader.readAsDataURL(file);
        }
    }

    const simpan = async () => {
        const formData = new FormData();

        if (img) {
            formData.append('img_profile', img);
        } else if (userData.img_profile) {
            formData.append('img_profile', userData.img_profile);
        }

        formData.append('nama_depan', namadepanRef.current.value);
        formData.append('nama_belakang', namabelakangRef.current.value);
        formData.append('email', emailRef.current.value);
        formData.append('role', userData.role);

        try {
            await updateUser(userData.id_user, formData);
            Swal.fire('Updated!', 'Your data has been updated.', 'success');
        } catch (error) {
            console.error('Error updating user:', error);
            Swal.fire('Error', 'Failed to update user. Please try again later.', 'error');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = JSON.parse(sessionStorage.getItem('data'));
                if (!data || !data.user || !data.user.id_user) {
                    throw new Error('Data tidak valid di sessionStorage');
                }
                const result = await getUserById(data.user.id_user);
                setUserData(result);
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Swal.fire('Error', 'Failed to fetch user data. Please try again later.', 'error');
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchDataUser = async () => {
            try {
                const data = JSON.parse(sessionStorage.getItem('user'));
                if (!data || !data.id_user) {
                    throw new Error('Data tidak valid di sessionStorage');
                }
                const result = await getUserById(data.id_user);
                setUserData(result);
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Swal.fire('Error', 'Failed to fetch user data. Please try again later.', 'error');
            }
        };
        fetchDataUser();
    }, []);


    const logout = () => {
        withReactContent(Swal).fire({
            title: "Are you sure?",
            text: "Anda Akan Logout!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#249624",
            cancelButtonColor: "#E7E7E7",
            confirmButtonText: "Yes, logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem('data');
                sessionStorage.removeItem('user');
                window.location.href = "/";
            }
        });
    }
    console.log(userData);
    return (
        <section>

            <div className="container">
                <div className="lg:flex justify-center items-center px-4">
                    <div className="lg:w-2/12 flex self-start flex-col gap-3 lg:pt-32 mt-32 lg:mt-0 bg-netrals lg:bg-white p-4 lg:p-0 rounded-lg">
                        <h3 className="text-xl font-bold">Pengaturan</h3>
                        <div className="flex flex-col px-4 gap-3">
                            <NavLink to="/editProfil" className={({ isActive, isPanding }) => isPanding ? " text-dark px-4 py-2 rounded-lg" : isActive ? "bg-primary text-light px-4 py-2 rounded-lg" : " text-dark px-4 py-2 rounded-lg"}>Profil</NavLink>
                            <NavLink to="/gantiPassword" className={({ isActive, isPanding }) => isPanding ? " text-dark px-4 py-2 rounded-lg" : isActive ? "bg-primary text-light px-4 py-2 rounded-lg" : " text-dark px-4 py-2 rounded-lg"}>Ganti Kata Sandi</NavLink>
                        </div>
                        <Link onClick={logout} className="text-xl font-bold">Keluar Akun</Link>
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
                                            {
                                                userData.img_profile ?
                                                    <img src={`${import.meta.env.VITE_API_URL}/assets/${userData.img_profile}`} alt="profile" className='w-full h-full object-cover rounded-full' /> : (userData.email ? userData.email.charAt(0).toUpperCase() : "")
                                            }
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
                        <div className="mt-10 lg:flex gap-20 w-full">
                            <div className="flex flex-col gap-3 lg:w-2/5">
                                <div>
                                    <label htmlFor="namaDepan" className="text-primary px-4">Nama Depan</label>
                                    <div>
                                        <input ref={namadepanRef} type="text" name="namaDepan" id="namaDepan" placeholder="Nama depan masih kosong" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" value={userData.nama_depan || ""} onChange={(e) => setUserData({ ...userData, nama_depan: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="namaBelakang" className="text-primary px-4">Nama Belakang</label>
                                    <div>
                                        <input ref={namabelakangRef} type="text" name="namaBelakang" id="namaBelakang" placeholder="Nama belakang masih kosong" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" value={userData.nama_belakang || ""} onChange={(e) => setUserData({ ...userData, nama_belakang: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-primary px-4">Email</label>
                                    <div>
                                        <input ref={emailRef} type="email" name="email" id="email" placeholder="Email masih kosong" className="lg:w-5/6 w-full bg-netrals rounded-full px-4 py-2 focus:outline-none focus:ring-primary focus:ring-2 placeholder:text-dark" value={userData.email || ""} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="bg-primary text-light py-2 px-4 rounded-lg hover:opacity-80 lg:mt-[9.5rem] mt-5 3xl:ml-20" onClick={simpan}>Simpan Perubahan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditProfilePage
