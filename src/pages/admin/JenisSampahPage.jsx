import { useEffect, useState } from "react";
import { createContent, deleteContent, getAllContents, updateContent } from "../../hooks/axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const JenisSampahPage = () => {
    const [data, setData] = useState([]);

    // Mengambil data saat komponen dimount
    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllContents();
            setData(result.data);
        };
        fetchData();
    }, []);

    const handleTambah = async () => {
        const { value: formValues } = await withReactContent(Swal).fire({
            title: 'Update Data',
            html: `<div class="flex flex-col justify-between items-start">
            <label for="swal-input1">Jenis Sampah</label>
            <input id="swal-input1" name="name" class="swal2-input ml-0 w-full" placeholder="Name"  />
            <label for="swal-input2">Description</label>
            <input id="swal-input2" name="description" class="swal2-input ml-0 w-full" placeholder="Description" />
            <label for="swal-input3">Gambar</label>
            <input id="swal-input3" name="image" type="file" class="swal2-file ml-0 w-full" placeholder="Gambar" />
        </div>,`,
            focusConfirm: false,
            showCancelButton: true,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').files
                ];
            }
        });

        if (formValues) {
            const updatedItem = { name: formValues[0], description: formValues[1], image: formValues[2][0] ? formValues[2][0] : null };
            await createContent(updatedItem);
            setData((prevData) => [...prevData, updatedItem]);
            Swal.fire('Updated!', 'Your data has been updated.', 'success');
        }
    }
    const handleUpdate = async (item) => {
        const { value: formValues } = await withReactContent(Swal).fire({
            title: 'Update Data',
            html: `<div class="flex flex-col justify-between items-start">
            <label for="swal-input1">Jenis Sampah</label>
            <input id="swal-input1" name="name" class="swal2-input ml-0 w-full" placeholder="Name" value="${item.name}" />
            <label for="swal-input2">Description</label>
            <input id="swal-input2" name="description" class="swal2-input ml-0 w-full" placeholder="Description" value="${item.description}" />
            <label for="swal-input3">Gambar</label>
            <input id="swal-input3" name="image" type="file" class="swal2-file ml-0 w-full" placeholder="Gambar" value="${item.image}" />
            ${item.image ? `<img src="${import.meta.env.VITE_API_URL}/assets/${item.image}" alt="Current Image" style="max-width: 100%; margin-bottom: 10px;" />` : ''}
        </div>,`,
            focusConfirm: false,
            showCancelButton: true,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').files
                ];
            }
        });

        if (formValues) {
            const updatedItem = { name: formValues[0], description: formValues[1], image: formValues[2][0] ? formValues[2][0] : null };
            await updateContent(item.contentId, updatedItem);
            setData((prevData) => [...prevData, updatedItem]);
            Swal.fire('Updated!', 'Your data has been updated.', 'success');
        }
    }
    const handleDelete = async (item) => {
        await deleteContent(item.contentId);
        setData((prevData) => prevData.filter((d) => d.contentId !== item.contentId));
    };
    return (
        <section className="overflow-x-hidden">
            <div className="container lg:max-w-5/6 lg:flex justify-start ml-60">
                <div className="lg:flex justify-center items-center px-4">
                    <div className="lg:w-full lg:pt-32 px-4 lg:py-20 py-10 lg:flex">
                        <div className="w-full">
                            <h2 className="text-2xl font-bold">Jenis Sampah Management</h2>
                            <p className="text-sm">Dashboard / Jenis Sampah</p>
                            <div>
                                <h4 className="font-bold text-xl mt-7">Data Jenis Sampah</h4>
                                <button onClick={handleTambah} className="bg-primary text-white py-2 px-4 rounded my-3">Tambah Data</button>
                                <div>
                                    <table className="text-center">
                                        <thead>
                                            <tr className="bg-netrals">
                                                <th className="p-4">No</th>
                                                <th className="p-4">Jenis Sampah</th>
                                                <th className="p-4">Deskripsi</th>
                                                <th className="p-4">Gambar</th>
                                                <th className="p-4">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, i) => (
                                                <tr className="bg-netrals/50" key={i}>
                                                    <td>{i + 1}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.name}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.description}</td>
                                                    <td>{item.image ? (
                                                        <img className="w-32" src={`${import.meta.env.VITE_API_URL}/assets/${item.image}`} alt={item.name} />
                                                    ) : (
                                                        <span>No Image</span>
                                                    )}</td>
                                                    <td className="flex flex-col gap-2 p-2">
                                                        <button className="py-1 px-2 bg-primary text-light rounded-lg" onClick={() => handleUpdate(item)}>Edit</button>
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
            </div>
        </section>
    )
}

export default JenisSampahPage