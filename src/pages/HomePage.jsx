import HeroImage from "../assets/img/HeroImage.png";
import TentangImage from "../assets/img/Tentang-image.png";
import PavingBlock from "../assets/img/paving-block.png";
// import Peta from "../assets/img/peta-sementara.png";
import Anorganik from "../assets/img/sampah/sampah-anorganik.png";
import Organik from "../assets/img/sampah/sampah-organik.png";
import Kertas from "../assets/img/sampah/sampah-kertas.png";
import B3 from "../assets/img/sampah/sampah-b3.png";
import Residu from "../assets/img/sampah/sampah-residu.png";
import Profil1 from "../assets/img/profil/profil-1.png";
import Profil2 from "../assets/img/profil/profil-2.png";
import Profil3 from "../assets/img/profil/profil-3.png";
import { Heart, MessageSquare, BarChart2 } from "react-feather";
import { useNavigate } from "react-router-dom";
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
// import { useState } from "react";

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '70vh',
};
const center = {
    lat: -7.869618019131568,
    lng: 110.42990021354213,
};
const center1 = {
    lat: -7.868289542767149,
    lng: 110.43132714875411,
};
const center2 = {
    lat: -7.867162594299753,
    lng: 110.43041339953001,
};


const HomePage = () => {
    const navigate = useNavigate();
    // const [markers, setMarkers] = useState([
    //     { lat: -7.8684343, lng: 110.4262846 },
    //     { lat: -7.8684340, lng: 110.4262843 },
    //     { lat: -7.8684339, lng: 110.4262840 },
    // ]);
    const komunitas = () => {
        navigate('/komunitas');
    }
    const edukasi = () => {
        navigate('/edukasi');
    }
    const tentang = () => {
        navigate("/tentang")
    }
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`,
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <section className="pt-36">
            {/* Hero Start */}
            <div className="container">
                <div className="lg:flex justify-between items-center">
                    <div className="lg:w-3/5 w-full self-center px-5">
                        <h1 className="lg:text-5xl text-3xl font-semibold lg:leading-[3.5rem]">
                            Satu aksi hijau, satu dunia yang lebih baik bersama <span className="text-primary font-bold">EcoSphere</span>
                        </h1>
                        <p className="lg:text-3xl text-xl mt-3">Platform Edukasi dan Informasi Sampah yang memberikan solusi inovatif untuk membantu meningkatkan minat dalam mengelola sampah</p>
                    </div>
                    <div className="lg:w-2/5 w-full self-end px-5 pt-20 lg:pt-0">
                        <img src={HeroImage} alt="Hero Image" />
                    </div>
                </div>
            </div>
            {/* Hero End */}

            {/* Text Pembatas Start */}
            <div className="w-full flex relative lg:justify-between justify-center items-center text-light py-5 mt-20 bg-dark
                ">
                <p className="lg:inline hidden">PRESERVING OUR WORLD</p>
                <p className="lg:inline hidden">REDUCING WASTE PRESERVING OUR WORLD</p>
                <p>REDUCING WASTE PRESERVING OUR WORLD</p>
                <p className="lg:inline hidden">REDUCING WASTE</p>
            </div>
            {/* Text Pembatas End */}

            {/* Tentang Kami Start */}
            <div className="px-7 py-20 bg-netrals">
                <div className="container">
                    <div className="lg:flex justify-between items-center">
                        <div className="lg:w-1/2 w-full self-center px-5">
                            <img src={TentangImage} alt="Sampah daur ulang dalam kardus" />
                        </div>
                        <div className="lg:w-1/2 w-full self-end px-5 py-10 lg:py-0">
                            <h4 className="text-xl font-semibold text-primary">TENTANG KAMI</h4>
                            <h2 className="text-3xl my-3 font-bold">Mulailah hari ini dengan EcoSphere! Jadikan setiap langkah hijau membawa kita menuju masa depan yang lebih baik!</h2>
                            <p className="text-lg">Anda akan mendapatkan informasi dan edukasi mengenai jenis sampah serta cara pengelolaanya dengan lebih spesifik. Tersedianya Forum Komunitas akan menjadi sarana diskusi Anda dengan pengguna lain untuk saling membagikan mengenai pengelolaan sampah maupun informasi mengenai kegiatan kebersihan. Sehingga dapat menumbuhkan minat yang sama dalam membangun kebiasaan mengelola sampah.</p>
                            <div className="flex my-5">
                                <button className="py-2 px-4 rounded-full bg-primary text-light text-lg" onClick={tentang}>+</button>
                                <button className="py-2 px-4 rounded-full bg-primary text-light text-lg ml-3" onClick={tentang}>Telusuri Lebih Jauh</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Tentang Kami End */}

            {/* Edukasi Start */}
            <div className="container pt-16">
                <div className="lg:flex items-center">
                    <div className="flex w-full lg:justify-end justify-center">
                        <div className="lg:w-[30%] px-8 lg:px-0">
                            <h2 className="text-4xl font-bold">Mari belajar bersama
                                di Edukasi EcoSphere</h2>
                            <div className="flex my-5">
                                <button className="py-2 px-4 rounded-full bg-primary text-light text-lg" onClick={edukasi}>+</button>
                                <button className="py-2 px-4 rounded-full bg-primary text-light text-lg ml-3" onClick={edukasi}>Telusuri Lebih Jauh</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex px-6 pb-20">
                    <div className="w-full flex flex-wrap lg:flex-nowrap gap-5 pt-20">
                        <div className="w-full lg:w-1/5 bg-netrals text-primary rounded-2xl lg:rounded-lg">
                            <img src={Organik} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                            <div className="px-5 py-2">
                                <h4 className="text-xl font-semibold">Sampah Organik</h4>
                                <a href="#" className="decoration-none">Selengkapnya</a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/5 bg-netrals text-primary rounded-2xl lg:rounded-lg">
                            <img src={Anorganik} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                            <div className="px-5 py-2">
                                <h4 className="text-xl font-semibold">Sampah Anorganik</h4>
                                <a href="#" className="decoration-none">Selengkapnya</a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/5 bg-netrals text-primary rounded-2xl lg:rounded-lg">
                            <img src={Kertas} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                            <div className="px-5 py-2">
                                <h4 className="text-xl font-semibold">Sampah Kertas</h4>
                                <a href="#" className="decoration-none">Selengkapnya</a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/5 bg-netrals text-primary rounded-2xl lg:rounded-lg">
                            <img src={B3} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                            <div className="px-5 py-2">
                                <h4 className="text-xl font-semibold">Sampah B3</h4>
                                <a href="#" className="decoration-none">Selengkapnya</a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/5 bg-netrals text-primary rounded-2xl lg:rounded-lg">
                            <img src={Residu} alt="Sampah daur ulang dalam kardus" className="bg-cover w-full" />
                            <div className="px-5 py-2">
                                <h4 className="text-xl font-semibold">Sampah Residu</h4>
                                <a href="#" className="decoration-none">Selengkapnya</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Edukasi End */}

            {/* Text Pembatas Start */}
            <div className="w-full flex relative lg:justify-between justify-center items-center text-light py-5 bg-primary
                ">
                <p className="lg:inline hidden">PRESERVING OUR WORLD</p>
                <p className="lg:inline hidden">REDUCING WASTE PRESERVING OUR WORLD</p>
                <p>REDUCING WASTE PRESERVING OUR WORLD</p>
                <p className="lg:inline hidden">REDUCING WASTE</p>
            </div>
            {/* Text Pembatas End */}

            {/* Forum Komunitas Start */}
            <div className="container pt-20 pb-20">
                <div className="lg:flex justify-between items-center px-6">
                    <div className="w-full lg:w-1/3">
                        <h1 className="text-4xl font-bold mb-3 text-primary">Forum Komunitas</h1>
                        <p className="text-xl mb-3">berbagi pengetahuan dan pengalaman mengelola sampah dengan komunitas</p>
                        <button className="py-2 px-4 rounded-full bg-primary text-light text-lg mb-10 lg:mb-0" onClick={komunitas}>Telusuri Lebih Jauh</button>
                    </div>
                    <div className="w-full lg:w-1/3 rounded-lg shadow-[0_2px_10px_2px_rgba(0,0,0,1)] shadow-netrals px-1 py-10">
                        <div className="flex items-start">
                            <div className="w-1/5 flex justify-end">
                                <img src={Profil1} alt="foto profil" />
                            </div>
                            <div className="w-4/5">
                                <div className="flex gap-2 ml-2">
                                    <h4 className="text-lg font-bold">ZianitaAureliaAb1</h4>
                                    <p className="font-medium text-slate-400">@zia... 23 Menit</p>
                                </div>
                                <p className="text-slate-400  ml-2">ini adalah cara saya dalam mengolah limbah plastik menjadi paving blok.</p>
                                <img src={PavingBlock} alt="Foto Paving Block" className="mt-2 ml-2" />
                                <div className="flex gap-2 mt-2 ml-2">
                                    <div className="flex gap-1">
                                        <i><MessageSquare size={15} /></i>
                                        <p className="text-sm">1,7rb</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <i><Heart size={15} /></i>
                                        <p className="text-sm">20rb</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <i><BarChart2 size={15} /></i>
                                        <p className="text-sm">1,9jt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 lg:ml-3">
                        <div className="flex items-start  px-1 py-8 rounded-lg shadow-[0_2px_10px_2px_rgba(0,0,0,1)] shadow-netrals">
                            <div className="w-1/5 flex justify-end">
                                <img src={Profil2} alt="foto profil" />
                            </div>
                            <div className="w-4/5">
                                <div className="flex gap-2 ml-2">
                                    <h4 className="text-lg font-bold">Alifnovikasari2771</h4>
                                    <p className="font-medium text-slate-400">@Alif... 23 Menit</p>
                                </div>
                                <p className="text-slate-400  ml-2">Kemarin aku bikin pot juga dari galon bekas loh. Bisa di cek di profileku aja!!</p>
                                <div className="flex gap-2 mt-2 ml-2">
                                    <div className="flex gap-1">
                                        <i><MessageSquare size={15} /></i>
                                        <p className="text-sm">1,7rb</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <i><Heart size={15} /></i>
                                        <p className="text-sm">20rb</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <i><BarChart2 size={15} /></i>
                                        <p className="text-sm">1,9jt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start px-1 py-8 lg:mt-4 rounded-lg shadow-[0_2px_10px_2px_rgba(0,0,0,1)] shadow-netrals">
                            <div className="w-1/5 flex justify-end">
                                <img src={Profil3} alt="foto profil" />
                            </div>
                            <div className="w-4/5">
                                <div className="flex gap-2 ml-2">
                                    <h4 className="text-lg font-bold">MhmdIqbalGhozy1</h4>
                                    <p className="font-medium text-slate-400">@mh... 23 Menit</p>
                                </div>
                                <p className="text-slate-400  ml-2">Infonya dong temen-temen cara pengolahan limbah dapur bisa jadi apa aja?</p>
                                <div className="flex gap-2 mt-2 ml-2">
                                    <div className="flex gap-1">
                                        <i><MessageSquare size={15} /></i>
                                        <p className="text-sm">1,7rb</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <i><Heart size={15} /></i>
                                        <p className="text-sm">20rb</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <i><BarChart2 size={15} /></i>
                                        <p className="text-sm">1,9jt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Forum Komunitas End */}

            {/* Peta Start */}
            <div className="bg-netrals px-12 py-32">
                <div className="container">
                    <div className="lg:flex justify-between items-center">
                        <div className="lg:w-3/12 w-full mb-5 lg:mb-0">
                            <h1 className="text-4xl font-bold">Peta Interaktif</h1>
                            <p className="text-base">TPS (Tempat Pembuangan Sampah)
                                Sekitar Piyungan, Yogyakarta</p>
                        </div>
                        <div className="lg:w-1/2 w-full">

                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                zoom={10}
                                center={center}
                                mapId={import.meta.env.VITE_MAP_ID}
                            >

                                <MarkerF position={center} />
                                <MarkerF position={center1} />
                                <MarkerF position={center2} />

                            </GoogleMap>
                        </div>
                    </div>

                </div>
            </div>
            {/* Peta End */}
        </section>
    )
}

export default HomePage