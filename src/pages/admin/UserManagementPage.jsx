

const UserManagementPage = () => {
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
                                <form action="">
                                    <table className="text-center">
                                        <thead>
                                            <tr className="bg-netrals">
                                                <th className="p-4">No</th>
                                                <th className="p-4">Nama Depan</th>
                                                <th className="p-4">Nama Belakang</th>
                                                <th className="p-4">Email</th>
                                                <th className="p-4">Password</th>
                                                <th className="p-4">Foto</th>
                                                <th className="p-4">Role</th>
                                                <th className="p-4">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-netrals/50">
                                                <td>1</td>
                                                <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Antoni</td>
                                                <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">Gasing</td>
                                                <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">antonigasing@gamil.com</td>
                                                <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">hsadasfkfausfakfjs</td>
                                                <td><img src="" alt="" /></td>
                                                <td>User</td>
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
        </section>
    )
}

export default UserManagementPage