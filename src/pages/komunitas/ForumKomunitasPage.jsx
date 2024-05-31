import { NavLink } from "react-router-dom";
import Hero from "../../assets/img/komunitas/hero-komunitas.svg";
import Ilustrasi from "../../assets/img/komunitas/ilustrasi.svg";
import PavingBlock from "../../assets/img/paving-block.svg";
import { BarChart2, Bookmark, Edit3, Heart, Image, List, MessageSquare, Search, Upload, Video } from "react-feather";
import Profil1 from "../../assets/img/komunitas/vector-profil.svg";
import Profil2 from "../../assets/img/profil/profil-2.svg";
import Profil3 from "../../assets/img/profil/profil-1.svg";
import Profil4 from "../../assets/img/profil/profil-3.svg";

const ForumKomunitasPage = () => {
    return (
        <>
            <section className="relative pt-20 lg:pt-0">
                <img src={Hero} alt="Hero Image" className="brightness-75 bg-cover" />
                <div className="flex justify-between items-center px-12 absolute top-1/3 w-full">
                    <div>
                        <h1 className="lg:text-4xl text-xl font-bold text-light">Bertanya-tanya</h1>
                        <h1 className="lg:text-4xl text-xl font-bold text-light">Bagaimana kita melakukan semuanya ?</h1>
                        <p className="lg:text-lg text-sm text-light">Telusuri berbagai pengetahuan dan pengalaman dalam mengelola sampah</p>
                    </div>
                    <img src={Ilustrasi} alt="Ilustrasi" className="w-2/5" />
                </div>
            </section>
            <section className="py-7">
                <div className="container">
                    <div className="lg:flex justify-between items-center px-4">
                        <div className="lg:w-1/5 flex flex-col gap-3 items-center relative  border border-netrals rounded-lg shadow-lg py-5 self-start">
                            <span className="absolute top-7 left-12 lg:left-8"><Search color="#249624" /></span>
                            <input type="text" placeholder="Cari" className="w-4/5 rounded-lg shadow-md  placeholder:text-primary py-2 px-9 border border-netrals" />
                            <h4 className="text-xl font-bold text-primary">Topik Rekomendasi</h4>
                            <NavLink to={"/komunitas/plastik"} className={({ isActive, isPanding }) => isPanding ? " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : isActive ? "bg-primary text-light w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full"} >Pengelolaan Limbah Plastik</NavLink>
                            <NavLink to={"/komunitas/organik"} className={({ isActive, isPanding }) => isPanding ? " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : isActive ? "bg-primary text-light w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full"} >Pengelolaan Limbah Organik</NavLink>
                            <NavLink to={"/komunitas/kertas"} className={({ isActive, isPanding }) => isPanding ? " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : isActive ? "bg-primary text-light w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full"} >Pengelolaan Limbah Kertas</NavLink>
                            <NavLink to={"/komunitas/tekstil"} className={({ isActive, isPanding }) => isPanding ? " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : isActive ? "bg-primary text-light w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full"} >Pengelolaan Limbah Tekstil</NavLink>
                            <NavLink to={"/komunitas/kaca"} className={({ isActive, isPanding }) => isPanding ? " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : isActive ? "bg-primary text-light w-4/6 text-center shadow-lg px-4 py-2 rounded-full" : " text-primary w-4/6 text-center shadow-lg px-4 py-2 rounded-full"} >Pengelolaan Limbah Kaca</NavLink>
                        </div>
                        <div className="lg:w-4/5 self-start pt-10 lg:pt-0 lg:px-4">
                            <div className="flex bg-primary rounded-t-xl">
                                <button className="text-light bg-netrals/20 py-2 px-12 rounded-tl-xl">Populer</button>
                                <button className="text-light bg-primary py-2 px-12">Terbaru</button>
                            </div>
                            <form className="flex flex-col border border-netrals rounded-b-xl">
                                <div className="flex items-center">
                                    <div className="self-start bg-netrals rounded-full p-2 mx-7 my-7">
                                        <img src={Profil1} alt="" />
                                    </div>
                                    <div className="relative lg:w-10/12 w-4/6">
                                        <textarea name="post" rows={4} id="post" placeholder="What's happening today?" className="block w-full px-4 py-2 border border-netrals rounded-xl shadow-lg mt-5 resize-none focus:outline-none"></textarea>
                                        <div className="flex items-center gap-3 absolute top-[6.5rem] left-3">
                                            <span className="text-slate-400"><Image /></span>
                                            <span className="text-slate-400"><Video /></span>
                                            <span className="text-slate-400"><List /></span>
                                        </div>
                                    </div>
                                </div>
                                <button className="lg:w-1/6 w-1/3 my-3 mx-7 lg:mx-12 lg:px-10 py-2 bg-netrals text-primary rounded-lg shadow-lg self-end">Posting</button>
                            </form>
                            <div className="w-full my-3">
                                <div className="flex items-start border border-netrals  lg:px-1 px-4 py-8 rounded-lg shadow-[0_2px_10px_2px_rgba(0,0,0,1)] shadow-netrals">
                                    <div className="w-1/12 flex justify-center">
                                        <img src={Profil2} alt="foto profil" />
                                    </div>
                                    <div className="w-11/12">
                                        <div className="flex justify-between gap-2 ml-2 mb-2">
                                            <div className="flex gap-2">
                                                <h4 className="text-lg font-bold">Alifnovikasari2771</h4>
                                                <p className="font-medium text-slate-400">@Alif... 23 Menit</p>
                                            </div>
                                            <div className="flex gap-1 lg:mx-7">
                                                <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>

                                            </div>

                                        </div>
                                        <p className="lg:text-xl text-slate-400  ml-2">Kemarin aku bikin pot juga dari galon bekas loh. Bisa di cek di profileku aja!!</p>
                                        <div className="flex justify-between gap-2 mt-4 ml-2">
                                            <div className="flex gap-5 text-slate-400">
                                                <div className="flex gap-1">
                                                    <i><MessageSquare size={15} /></i>
                                                    <p className="text-sm">1,7rb</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    <i><Edit3 size={15} /></i>
                                                    <p className="text-sm">3,3rb</p>
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
                                            <div className="flex gap-3 text-slate-400 px-7">
                                                <i><Bookmark size={20} /></i>
                                                <i><Upload size={20} /></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full my-3">
                                <div className="flex items-start border border-netrals px-4  lg:px-1 py-8 rounded-lg shadow-[0_2px_10px_2px_rgba(0,0,0,1)] shadow-netrals">
                                    <div className="w-1/12 flex justify-center">
                                        <img src={Profil3} alt="foto profil" />
                                    </div>
                                    <div className="w-11/12">
                                        <div className="flex justify-between gap-2 ml-2 mb-2">
                                            <div className="flex gap-2">
                                                <h4 className="text-lg font-bold">ZianitaAureliaAb1</h4>
                                                <p className="font-medium text-slate-400">@zia... 23 Menit</p>
                                            </div>
                                            <div className="flex gap-1 lg:mx-7">
                                                <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>

                                            </div>

                                        </div>
                                        <p className="lg:text-xl text-slate-400  ml-2">ini adalah cara saya dalam mengolah limbah plastik menjadi paving blok.</p>
                                        <img src={PavingBlock} alt="Foto Paving Block" className="mt-2 ml-2" />
                                        <div className="flex justify-between gap-2 mt-4 ml-2">
                                            <div className="flex gap-5 text-slate-400">
                                                <div className="flex gap-1">
                                                    <i><MessageSquare size={15} /></i>
                                                    <p className="text-sm">1,7rb</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    <i><Edit3 size={15} /></i>
                                                    <p className="text-sm">3,3rb</p>
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
                                            <div className="flex gap-3 text-slate-400 px-7">
                                                <i><Bookmark size={20} /></i>
                                                <i><Upload size={20} /></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full my-3">
                                <div className="flex items-start border border-netrals px-4 lg:px-1 py-8 rounded-lg shadow-[0_2px_10px_2px_rgba(0,0,0,1)] shadow-netrals">
                                    <div className="w-1/12 flex justify-center">
                                        <img src={Profil4} alt="foto profil" />
                                    </div>
                                    <div className="w-11/12">
                                        <div className="flex justify-between gap-2 ml-2 mb-2">
                                            <div className="flex gap-2">
                                                <h4 className="lg:text-lg font-bold">MhmdIqbalGhozy1</h4>
                                                <p className="font-medium text-slate-400">@mh... 23 Menit</p>
                                            </div>
                                            <div className="flex gap-1 lg:mx-7">
                                                <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>

                                            </div>

                                        </div>
                                        <p className="text-xl text-slate-400  ml-2">Infonya dong temen-temen cara pengolahan limbah dapur bisa jadi apa aja?</p>
                                        <div className="flex justify-between gap-2 mt-4 ml-2">
                                            <div className="flex gap-5 text-slate-400">
                                                <div className="flex gap-1">
                                                    <i><MessageSquare size={15} /></i>
                                                    <p className="text-sm">1,7rb</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    <i><Edit3 size={15} /></i>
                                                    <p className="text-sm">3,3rb</p>
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
                                            <div className="flex gap-3 text-slate-400 px-7">
                                                <i><Bookmark size={20} /></i>
                                                <i><Upload size={20} /></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForumKomunitasPage