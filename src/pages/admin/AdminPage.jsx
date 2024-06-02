import { useEffect, useState } from "react";
import { getAllWastes } from "../../hooks/axios"


const AdminPage = () => {
    const [data, setData] = useState([]);
    const [imageUrls, setImageUrls] = useState({});

    // Mengambil data saat komponen dimount
    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllWastes();
            setData(result.data);
            console.log(result.data);
            const urls = {};
            for (let item of result.data) {
                if (item.image) {
                    const blob = new Blob([new Uint8Array(item.image.data)], { type: "image/jpeg" });
                    const blobUrl = URL.createObjectURL(blob);
                    urls[item.wasteId] = blobUrl;
                }
            }
            setImageUrls(urls);
            console.log(urls);
        };
        fetchData();
    }, []);
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
                                    <form action="">
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
                                                {data.map((item, i) => (

                                                    <tr className="bg-netrals/50" key={i} >

                                                        <td>{i + 1}</td>
                                                        <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.name}</td>
                                                        <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.content_name}</td>
                                                        <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.description}</td>
                                                        <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.characteristics}</td>
                                                        <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.impacts}</td>
                                                        <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.recycling_steps}</td>
                                                        <td>{imageUrls[item.wasteId] ? (
                                                            <img className="w-32" src={imageUrls[item.wasteId]} alt={item.name} />
                                                        ) : (
                                                            <span>No Image</span>
                                                        )}</td>
                                                        <td className="flex flex-col gap-2 p-2">
                                                            <button className="py-1 px-2 bg-primary text-light rounded-lg">Edit</button>
                                                            <button className="py-1 px-2 bg-red-600 text-light rounded-lg">Hapus</button>
                                                        </td>
                                                    </tr>

                                                ))}
                                            </tbody>
                                        </table>
                                    </form>
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