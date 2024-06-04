import { useEffect, useState } from "react";
import { createWaste, deleteWaste, getAllContents, getAllRecycling, getAllWastes, updateWaste } from "../../hooks/axios"
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";


const AdminPage = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [imageUrls, setImageUrls] = useState({});

    // Mengambil data saat komponen dimount
    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllWastes();
            const result2 = await getAllContents();
            const result3 = await getAllRecycling();
            setData(result.data);
            setData2(result2.data);
            setData3(result3.data);
            const urls = {};
            for (let item of result.data) {
                if (item.image) {
                    const blob = new Blob([new Uint8Array(item.image.data)], { type: "image/jpeg" });
                    const blobUrl = URL.createObjectURL(blob);
                    urls[item.wasteId] = blobUrl;
                }
            }
            setImageUrls(urls);
        };
        fetchData();
    }, []);


    const handleUpdate = async (it) => {
        const { value: formValues } = await withReactContent(Swal).fire({
            title: 'Update Data',
            html: `<div class="flex flex-col justify-between items-start">
            <label for="swal-input1">Name</label>
            <input id="swal-input1" name="name" class="swal2-input ml-0 w-full" placeholder="Name" value="${it.name}" />
            <label for="swal-input2">Jenis Sampah</label>
            <select id="swal-input2" name="contentId" class="swal2-input ml-0 w-full">
            ${data2.map(data => (
                `<option value="${data.contentId}" ${data.contentId === it.contentId ? "selected" : ''}>${data.name}</option>`
            )).join('')}
            </select>
            <label for="swal-input3">Description</label>
            <input id="swal-input3" name="description" class="swal2-input ml-0 w-full" placeholder="Description" value="${it.description}" />
            <label for="swal-input4">Karakteristik</label>
            <input id="swal-input4" name="characteristics" class="swal2-input ml-0 w-full" placeholder="Karakteristik" value="${it.characteristics}" />
            <label for="swal-input5">Dampak</label>
            <input id="swal-input5" name="impacts" class="swal2-input ml-0 w-full" placeholder="Description" value="${it.impacts}" />
            <label for="swal-input6">Daur Ulang</label>
            <select id="swal-input6" name="recyclingId" class="swal2-input ml-0 w-full">
            ${data3.map(data => (
                `<option value="${data.recyclingId}" ${data.recyclingId === it.recyclingId ? 'selected' : ''}>${data.steps}</option>`
            )).join('')}
            </select>
            <label for="swal-input7">Gambar</label>
            <input id="swal-input7" name="image" type="file" class="swal2-file ml-0 w-full" placeholder="Gambar" value=${it.image} />
            ${it.image ? `<img src="${URL.createObjectURL(new Blob([new Uint8Array(it.image.data)], { type: 'image/jpeg' }))}" alt="Current Image" style="max-width: 100%; margin-bottom: 10px;" />` : ''}
        </div>,`,
            focusConfirm: false,
            showCancelButton: true,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value,
                    document.getElementById('swal-input4').value,
                    document.getElementById('swal-input5').value,
                    document.getElementById('swal-input6').value,
                    document.getElementById('swal-input7').files
                ];
            }
        });

        if (formValues) {
            const updatedItem = { ...it, name: formValues[0], contentId: formValues[1], description: formValues[2], characteristics: formValues[3], impacts: formValues[4], recyclingId: formValues[5], image: formValues[6][0] ? formValues[6][0] : it.image };
            await updateWaste(it.wasteId, updatedItem);
            setData((prevData) =>
                prevData.map((d) => (d.wasteId === it.wasteId ? updatedItem : d))
            );
            Swal.fire('Updated!', 'Your data has been updated.', 'success');
        }
    };
    const handleTambah = async () => {
        const { value: formValues } = await withReactContent(Swal).fire({
            title: 'Update Data',
            html: `<div class="flex flex-col justify-between items-start">
            <label for="swal-input1">Name</label>
            <input id="swal-input1" name="name" class="swal2-input ml-0 w-full" placeholder="Name"  />
            <label for="swal-input2">Jenis Sampah</label>
            <select id="swal-input2" name="contentId" class="swal2-input ml-0 w-full" >
            ${data2.map(data => (
                `<option value=${data.contentId}>${data.name}</option>`
            )).join('')}
            </select>
            <label for="swal-input3">Description</label>
            <input id="swal-input3" name="description" class="swal2-input ml-0 w-full" placeholder="Description" />
            <label for="swal-input4">Karakteristik</label>
            <input id="swal-input4" name="characteristics" class="swal2-input ml-0 w-full" placeholder="Karakteristik" />
            <label for="swal-input5">Dampak</label>
            <input id="swal-input5" name="impacts" class="swal2-input ml-0 w-full" placeholder="Description" />
            <label for="swal-input6">Daur Ulang</label>
            <select id="swal-input6" name="recyclingId" class="swal2-input ml-0 w-full">
            ${data3.map(data => (
                `<option value=${data.recyclingId}>${data.steps}</option>`
            )).join('')}
            </select>
            <label for="swal-input7">Gambar</label>
            <input id="swal-input7" name="image" type="file" class="swal2-file ml-0 w-full" placeholder="Gambar" />
        </div>,`,
            focusConfirm: false,
            showCancelButton: true,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value,
                    document.getElementById('swal-input4').value,
                    document.getElementById('swal-input5').value,
                    document.getElementById('swal-input6').value,
                    document.getElementById('swal-input7').files
                ];
            }
        });

        if (formValues) {
            const updatedItem = { name: formValues[0], contentId: formValues[1], description: formValues[2], characteristics: formValues[3], impacts: formValues[4], recyclingId: formValues[5], image: formValues[6][0] ? formValues[6][0] : null };
            await createWaste(updatedItem);
            setData((prevData) => [...prevData, updatedItem]);
            Swal.fire('Updated!', 'Your data has been updated.', 'success');
        }
    }
    const handleDelete = async (it) => {
        await deleteWaste(it.wasteId);
        setData((prevData) => prevData.filter((d) => d.wasteId !== it.wasteId));
    };
    return (
        <section className="overflow-x-hidden">
            <div className="container lg:max-w-5/6 lg:flex justify-start ml-60">
                <div className="lg:flex justify-center items-center px-4">
                    <div className="lg:w-full lg:pt-32 px-4 lg:py-20 py-10 lg:flex flex-col">
                        <div className="lg:flex w-full justify-between flex-row-reverse">
                            <div className="w-full">
                                <h2 className="text-2xl font-bold">Content Management</h2>
                                <p className="text-sm">Dashboard / Content</p>
                                <div>
                                    <h4 className="font-bold text-xl mt-7">Data Content</h4>
                                    <button onClick={handleTambah} className="bg-primary text-white py-2 px-4 rounded my-3">Tambah Data</button>
                                    <table className="text-center">
                                        <thead>
                                            <tr className="bg-netrals">
                                                <th className="p-4">No</th>
                                                <th className="p-4">Nama Sampah</th>
                                                <th className="p-4">Jenis Sampah</th>
                                                <th className="p-4">Deskripsi</th>
                                                <th className="p-4">Karekteristik</th>
                                                <th className="p-4">Dampak</th>
                                                <th className="p-4">Daur Ulang</th>
                                                <th className="p-4">Gambar</th>
                                                <th className="p-4">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((it, i) => (

                                                <tr className="bg-netrals/50" key={i} >

                                                    <td>{i + 1}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{it.name}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{it.content_name}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{it.description}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{it.characteristics}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{it.impacts}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{it.recycling_steps}</td>
                                                    <td>{imageUrls[it.wasteId] ? (
                                                        <img className="w-32" src={imageUrls[it.wasteId]} alt={it.name} />
                                                    ) : (
                                                        <span>No Image</span>
                                                    )}</td>
                                                    <td className="flex flex-col gap-2 p-2">
                                                        <button className="py-1 px-2 bg-primary text-light rounded-lg" onClick={() => handleUpdate(it)}>Edit</button>
                                                        <button className="py-1 px-2 bg-red-600 text-light rounded-lg" onClick={() => handleDelete(it)}>Hapus</button>
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
        </section >
    )
}

export default AdminPage