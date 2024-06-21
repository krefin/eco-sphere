import { useEffect, useState } from "react";
import { deleteUser, getAllUsers, updateUser } from "../../hooks/axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const UserManagementPage = () => {
    const [data, setData] = useState([]);

    // Mengambil data saat komponen dimount
    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllUsers();
            setData(result.data);
        };
        fetchData();
    }, []);
    const handleEdit = async (item) => {
        const { value: formValues } = await withReactContent(Swal).fire({
            title: 'Update Data',
            html: `<div class="flex flex-col justify-between items-start">
            <label for="swal-input1">Nama Depan</label>
            <input id="swal-input1" name="nama_depan" class="swal2-input ml-0 w-full" placeholder="Nama Depan" value="${item.nama_depan}" />
            <label for="swal-input2">Nama Belakang</label>
            <input id="swal-input2" name="nama_belakang" class="swal2-input ml-0 w-full" placeholder="Nama Belakang" value="${item.nama_belakang}" />
            <label for="swal-input3">Email</label>
            <input id="swal-input3" name="email" class="swal2-input ml-0 w-full" placeholder="Email" value="${item.email}" />
            <label for="swal-input5">Role</label>
            <select id="swal-input5" name="role" class="swal2-input ml-0 w-full" value="${item.role}">
            <option value="User" ${item.role === 'User' ? ' selected' : ''}>User</option>
            <option value="Admin" ${item.role === 'Admin' ? ' selected' : ''}>Admin</option>
            </select>
            <label for="swal-input6">Gambar</label>
            <input id="swal-input6" name="img_profile" type="file" class="swal2-file ml-0 w-full" placeholder="Gambar" value=${item.img_profile} />
            ${item.img_profile ? `<img src="${import.meta.env.VITE_API_URL}/assets/${item.img_profile}" alt="Current Image" style="max-width: 100%; margin-bottom: 10px;" />` : ''}
        </div>,`,
            focusConfirm: false,
            showCancelButton: true,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value,
                    document.getElementById('swal-input5').value,
                    document.getElementById('swal-input6').files
                ];
            }
        });

        if (formValues) {
            const updatedItem = { nama_depan: formValues[0], nama_belakang: formValues[1], email: formValues[2], role: formValues[3], img_profile: formValues[4][0] ? formValues[4][0] : item.img_profile };
            console.log(updatedItem);
            await updateUser(item.id_user, updatedItem);
            setData((prevData) =>
                prevData.map((d) => (d.id_user === item.id_user ? updatedItem : d))
            );
            Swal.fire('Updated!', 'Your data has been updated.', 'success');
        }
    };
    const handleDelete = async (item) => {
        await deleteUser(item.id_user);
        setData((prevData) => prevData.filter((d) => d.id_user !== item.id_user));
    };
    return (
        <section className="overflow-x-hidden">
            <div className="container lg:max-w-5/6 lg:flex justify-start ml-60">
                <div className="lg:flex justify-center items-center px-4">
                    <div className="lg:w-full lg:pt-32 px-4 lg:py-20 py-10 lg:flex">
                        <div className="w-full">
                            <h2 className="text-2xl font-bold">User Management</h2>
                            <p className="text-sm">Dashboard / User</p>
                            <div>
                                <h4 className="font-bold text-xl mt-7">Data User</h4>
                                <table className="text-center">
                                    <thead>
                                        <tr className="bg-netrals">
                                            <th className="p-4">No</th>
                                            <th className="p-4">Nama Depan</th>
                                            <th className="p-4">Nama Belakang</th>
                                            <th className="p-4">Email</th>
                                            <th className="p-4">Foto</th>
                                            <th className="p-4">Role</th>
                                            <th className="p-4">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, i) => (
                                            <tr className="bg-netrals/50" key={i}>
                                                <td>{i + 1}</td>
                                                <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.nama_depan}</td>
                                                <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.nama_belakang}</td>
                                                <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.email}</td>
                                                <td>{item.img_profile ? (
                                                    <img className="w-32" src={`${import.meta.env.VITE_API_URL}/assets/${item.img_profile}`} alt={item.name} />
                                                ) : (
                                                    <span>No Image</span>
                                                )}</td>
                                                <td>{item.role}</td>
                                                <td className="flex flex-col gap-2 p-2">
                                                    <button className="py-1 px-2 bg-primary text-light rounded-lg" onClick={() => handleEdit(item)}>Edit</button>
                                                    <button className="py-1 px-2 bg-red-600 text-light rounded-lg" onClick={() => handleDelete(item)}>Hapus</button>
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default UserManagementPage