


const AdminPage = () => {
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
                                                <tr className="bg-netrals/50">
                                                    <td>1</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Plastik</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Anorganik</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quaerat!</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quae!</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, officiis consequuntur.</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quaerat nisi delectus sint, ullam illo!</td>
                                                    <td><img src="" alt="" /></td>
                                                    <td className="flex flex-col gap-2 p-2">
                                                        <button className="py-1 px-2 bg-primary text-light rounded-lg">Edit</button>
                                                        <button className="py-1 px-2 bg-red-600 text-light rounded-lg">Hapus</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Kaca</td>
                                                    <td>Anorganik</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quaerat!</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quae!</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, officiis consequuntur.</td>
                                                    <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quaerat nisi delectus sint, ullam illo!</td>
                                                    <td><img src="" alt="" /></td>
                                                    <td className="flex flex-col gap-2 p-2">
                                                        <button className="py-1 px-2 bg-primary text-light rounded-lg">Edit</button>
                                                        <button className="py-1 px-2 bg-red-600 text-light rounded-lg">Hapus</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AdminPage