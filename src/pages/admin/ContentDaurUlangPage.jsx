import { useEffect, useState } from "react";
import { createRecycling, deleteRecycling, getAllRecycling, getAllWastes, updateRecycling } from "../../hooks/axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const ContentDaurUlangPage = () => {
    const [data, setData] = useState([]);
    const [waste, setWaste] = useState([]);

    // Mengambil data saat komponen dimount
    useEffect(() => {
        const fetchData = async () => {
            const result1 = await getAllWastes();
            const result = await getAllRecycling();
            setData(result.data);
            setWaste(result1.data);
        };
        fetchData();
    }, []);

    const handleTambah = async () => {
        const MySwal = withReactContent(Swal);

        const { value: formValues } = await MySwal.fire({
            title: 'Tambah Data',
            html: `<div class="flex flex-col justify-between items-start">
                <label for="swal-input1">Steps Daur Ulang</label>
                <strong class="text-xs mb-3">tambah step jika langkah lebih dari 1</strong>
                <div id="step-container" class="w-full">
                        <textarea class="swal2-input ml-0 w-full rounded-md border border-slate-400 mt-2" placeholder="step"></textarea>
                </div>
                <button type="button" id="add-step" class="swal2-confirm swal2-styled mt-2">Tambah Step</button>
                
                <label for="swal-input2">Nama Sampah</label>
                <select id="swal-input2" name="wasteId" class="swal2-input ml-0 w-full">
                    ${waste.map(data => (
                `<option value=${data.wasteId}>${data.name}</option>`
            )).join('')}
                </select>
                
                <label for="swal-input3">Gambar</label>
                <div id="image-container">
                        <div>
                            <input type="file" name="image" id="swal-input3" class="swal2-file ml-0 w-full mt-2" />
                        </div>
                </div>
                <button type="button" id="add-image" class="swal2-confirm swal2-styled mt-2">Tambah Gambar</button>
            </div>`,
            focusConfirm: false,
            showCancelButton: true,
            didOpen: () => {
                document.getElementById('add-step').addEventListener('click', () => {
                    const stepContainer = document.getElementById('step-container');
                    const newStepInput = document.createElement('textarea');
                    newStepInput.className = 'swal2-input ml-0 w-full rounded-md border border-slate-400 mt-2';
                    newStepInput.placeholder = 'Step baru';
                    stepContainer.appendChild(newStepInput);
                });

                document.getElementById('add-image').addEventListener('click', () => {
                    const imageContainer = document.getElementById('image-container');
                    const newImageInput = document.createElement('input');
                    newImageInput.type = 'file';
                    newImageInput.className = 'swal2-file ml-0 w-full mt-2';
                    imageContainer.appendChild(newImageInput);
                });
            },
            preConfirm: () => {
                const steps = Array.from(document.querySelectorAll('#step-container textarea')).map(input => input.value).filter(val => val);
                const wasteId = document.getElementById('swal-input2').value;
                const image = Array.from(document.querySelectorAll('#image-container input[type="file"]')).map(input => input.files[0]).filter(file => file);
                return { steps, wasteId, image };
            }
        });

        if (formValues) {
            const addItem = {
                steps: formValues.steps,
                wasteId: formValues.wasteId,
                image: formValues.image
            };
            console.log(addItem);
            await createRecycling(addItem);
            setData((prevData) => [...prevData, addItem]);
            Swal.fire('Success!', 'Your data has been added.', 'success');
        }
    };

    const handleUpdate = async (item) => {
        const MySwal = withReactContent(Swal);

        const { value: formValues } = await MySwal.fire({
            title: 'Update Data',
            html: `<div class="flex flex-col justify-between items-start">
                <label for="swal-input1">Steps Daur Ulang</label>
                <strong class="text-xs my-3">Tambah step jika langkah lebih dari 1</strong>
                <div id="step-container" class="w-full">
                    ${JSON.parse(item.steps).map((step, index) => `
                        <textarea key=${index} class="swal2-input ml-0 w-full rounded-md border border-slate-400 mt-2" placeholder="Step">${step}</textarea>
                    `).join('')}
                </div>
                <button type="button" id="add-step" class="swal2-confirm swal2-styled mt-2">Tambah Step</button>
                
                <label for="swal-input2">Nama Sampah</label>
                <select id="swal-input2" name="wasteId" class="swal2-input ml-0 w-full">
                    ${waste.map(data => (
                `<option value=${data.wasteId} ${data.wasteId === item.wasteId ? "selected" : ''}>${data.name}</option>`
            )).join('')}
                </select>
                
                <label for="swal-input3">Gambar</label>
                <div id="image-container">
                    ${item.image ? JSON.parse(item.image).map((img, index) => `
                    <div key=${index}>
                        <img src="${import.meta.env.VITE_API_URL}/assets/${img}" alt="Current Image" style="max-width: 100%; margin-bottom: 10px;" />
                        <input type="hidden" name="existingImage" value="${img}" />
                        <input type="file" name="image" class="swal2-file ml-0 w-full mt-2" />
                    </div>
                `).join('') : `<span>No Image</span>
                            <input type="file" name="image" class="swal2-file ml-0 w-full mt-2" />`}
                </div>
                <button type="button" id="add-image" class="swal2-confirm swal2-styled mt-2">Tambah Gambar</button>
            </div>`,
            focusConfirm: false,
            showCancelButton: true,
            didOpen: () => {
                document.getElementById('add-step').addEventListener('click', () => {
                    const stepContainer = document.getElementById('step-container');
                    const newStepInput = document.createElement('textarea');
                    newStepInput.className = 'swal2-input ml-0 w-full rounded-md border border-slate-400 mt-2';
                    newStepInput.placeholder = 'Step baru';
                    stepContainer.appendChild(newStepInput);
                });

                document.getElementById('add-image').addEventListener('click', () => {
                    const imageContainer = document.getElementById('image-container');
                    const newImageInput = document.createElement('input');
                    newImageInput.type = 'file';
                    newImageInput.className = 'swal2-file ml-0 w-full mt-2';
                    imageContainer.appendChild(newImageInput);
                });
            },
            preConfirm: () => {
                const steps = Array.from(document.querySelectorAll('#step-container textarea')).map(input => input.value).filter(val => val);
                const wasteId = document.getElementById('swal-input2').value;
                const existingImages = Array.from(document.querySelectorAll('#image-container input[name="existingImage"]')).map(input => input.value);
                const newImages = Array.from(document.querySelectorAll('#image-container input[type="file"]')).map(input => input.files[0]).filter(file => file);

                // Combine existing images with new images
                const combinedImages = existingImages.map((img, index) => newImages[index] || img);

                // Add any extra new images that do not replace existing ones
                if (newImages.length > existingImages.length) {
                    combinedImages.push(...newImages.slice(existingImages.length));
                }
                console.log(combinedImages);

                return { steps, wasteId, combinedImages };
            }
        });

        if (formValues) {
            const updatedItem = {
                steps: formValues.steps.length > 0 ? formValues.steps : JSON.parse(item.steps),
                wasteId: formValues.wasteId,
                images: formValues.combinedImages
            };

            console.log(updatedItem);

            const formData = new FormData();
            // eslint-disable-next-line no-unused-vars
            updatedItem.steps.forEach((step, index) => {
                formData.append(`steps`, step);
            });

            formData.append('wasteId', updatedItem.wasteId);

            // eslint-disable-next-line no-unused-vars
            updatedItem.images.forEach((img, index) => {
                if (typeof img === 'string') {
                    // Append existing image as a string
                    formData.append(`existingImages`, img);
                } else {
                    // Append new image file
                    formData.append(`image`, img);
                }
            });
            console.log(updatedItem);

            await updateRecycling(item.recyclingId, formData);
            setData((prevData) => prevData.map(d => d.recyclingId === item.recyclingId ? updatedItem : d));
            Swal.fire('Updated!', 'Your data has been updated.', 'success');
        }
    };



    const handleDelete = async (item) => {
        await deleteRecycling(item.recyclingId);
        setData((prevData) => prevData.filter((d) => d.recyclingId !== item.recyclingId));
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
                                                <th className="p-4">Steps Daur Ulang</th>
                                                <th className="p-4">Nama Sampah</th>
                                                <th className="p-4">Gambar</th>
                                                <th className="p-4">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, i) => {
                                                // Konversi item.image dari string ke array
                                                const images = item.image && typeof item.image === 'string' ? JSON.parse(item.image) : item.image;
                                                const steps = item.steps && typeof item.steps === 'string' ? JSON.parse(item.steps) : item.steps;

                                                return (
                                                    <tr className="bg-netrals/50" key={i}>
                                                        <td>{i + 1}</td>
                                                        <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{Array.isArray(steps) ? steps.join(', ') : ''}</td>
                                                        <td className="px-4 py-2 max-w-32 truncate whitespace-nowrap overflow-hidden">{item.waste_type}</td>
                                                        <td>
                                                            {Array.isArray(images) && images.length > 0 ? (
                                                                images.map((image, j) => (
                                                                    <img key={j} src={`${import.meta.env.VITE_API_URL}/assets/${image}`} alt="Current Image" className="w-20 object-cover rounded-lg mr-2" />
                                                                ))
                                                            ) : (
                                                                <span>No Image</span>
                                                            )}
                                                        </td>
                                                        <td className="flex flex-col gap-2 p-2">
                                                            <button className="py-1 px-2 bg-primary text-light rounded-lg" onClick={() => handleUpdate(item)}>Edit</button>
                                                            <button className="py-1 px-2 bg-red-600 text-light rounded-lg" onClick={() => handleDelete(item)}>Hapus</button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}


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

export default ContentDaurUlangPage