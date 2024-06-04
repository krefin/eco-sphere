import { useEffect, useState } from "react";
import { deleteCommunity, getAllCommunities } from "../../hooks/axios";


const KomunitasManagementPage = () => {
    const [data, setData] = useState([]);
    const [imageUrls, setImageUrls] = useState({});

    // Mengambil data saat komponen dimount
    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllCommunities();
            setData(result.data);
            const urls = {};
            for (let item of result.data) {
                if (item.post_img) {
                    const blob = new Blob([new Uint8Array(item.post_img.data)], { type: "image/jpeg" });
                    const blobUrl = URL.createObjectURL(blob);
                    urls[item.communityId] = blobUrl;
                }
            }
            setImageUrls(urls);
        };
        fetchData();
    }, []);

    const handleDelete = async (item) => {
        await deleteCommunity(item.communityId);
        setData((prevData) => prevData.filter((d) => d.communityId !== item.communityId));
    };
    return (
        <section className="overflow-x-hidden">
            <div className="container lg:max-w-5/6 lg:flex justify-start ml-60">
                <div className="lg:flex justify-center items-center px-4">
                    <div className="lg:w-full lg:pt-32 px-4 lg:py-20 py-10 lg:flex">
                        <div className="w-full">
                            <h2 className="text-2xl font-bold">Komunitas Management</h2>
                            <p className="text-sm">Dashboard / Komunitas</p>
                            <div>
                                <h4 className="font-bold text-xl mt-7">Data Komunitas</h4>
                                <form action="">
                                    <table className="text-center">
                                        <thead>
                                            <tr className="bg-netrals">
                                                <th className="p-4">No</th>
                                                <th className="p-4">Nama User</th>
                                                <th className="p-4">Caption</th>
                                                <th className="p-4">Gambar</th>
                                                <th className="p-4">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, i) => (
                                                <tr className="bg-netrals/50" key={i}>
                                                    <td>{i + 1}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.email}</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.post}</td>
                                                    <td>{imageUrls[item.communityId] ? (
                                                        <img className="w-32" src={imageUrls[item.communityId]} alt="image" />
                                                    ) : (
                                                        <span>No Image</span>
                                                    )}</td>
                                                    <td className="flex flex-col gap-2 p-2">
                                                        <button className="py-1 px-2 bg-primary text-light rounded-lg">Edit</button>
                                                        <button className="py-1 px-2 bg-red-600 text-light rounded-lg" onClick={() => handleDelete(item)}>Hapus</button>
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
        </section>
    )
}

export default KomunitasManagementPage