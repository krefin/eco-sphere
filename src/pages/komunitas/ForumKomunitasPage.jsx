import { NavLink } from "react-router-dom";
import Hero from "../../assets/img/komunitas/hero-komunitas.png";
import Ilustrasi from "../../assets/img/komunitas/ilustrasi.png";
import PavingBlock from "../../assets/img/paving-block.png";
import { BarChart2, Bookmark, Edit3, Heart, Image, List, MessageSquare, Search, Upload, Video } from "react-feather";
import Profil1 from "../../assets/img/komunitas/vector-profil.png";
// import Profil2 from "../../assets/img/profil/profil-2.png";
import Profil3 from "../../assets/img/profil/profil-1.png";
import Profil4 from "../../assets/img/profil/profil-3.png";
import { useEffect, useState } from "react";
import { commentOnPost, createPostByUser, getAllCommunities } from "../../hooks/axios";


const ForumKomunitasPage = () => {
    const [fileContent, setFileContent] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const [img, setImg] = useState(null);
    const [post, setPost] = useState([]);

    useEffect(() => {
        const communityPost = async () => {
            const result = await getAllCommunities();
            setPost(result.data);
        }
        communityPost();
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImg(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileUrl(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handlePost = async () => {
        const dataPost = {
            post: fileContent,
            post_img: img
        }
        await createPostByUser(dataPost)
    }
    // const handleComment = async () => {
    //     const dataPost = {
    //         comment: fileContent,
    //         comment_img: img
    //     }
    //     await commentOnPost(dataPost)
    // }
    return (
        <>
            <section className="relative pt-20 lg:pt-0">
                <img src={Hero} alt="Hero Image" className="brightness-75 bg-cover w-svw" />
                <div className="flex justify-between items-center px-12 absolute top-1/3 w-full">
                    <div>
                        <h1 className="lg:text-4xl 3xl:text-5xl text-xl font-bold text-light">Bertanya-tanya</h1>
                        <h1 className="lg:text-4xl 3xl:text-5xl text-xl font-bold text-light">Bagaimana kita melakukan semuanya ?</h1>
                        <p className="lg:text-lg  3xl:text-xl text-sm text-light">Telusuri berbagai pengetahuan dan pengalaman dalam mengelola sampah</p>
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
                                        <textarea name="post" rows={4} id="post" placeholder="What's happening today?" className="block w-full px-4 py-2 border border-netrals rounded-xl shadow-lg mt-5 resize-none focus:outline-none" onChange={(e) => setFileContent(e.target.value)} value={fileContent}></textarea>
                                        <div className="flex items-center gap-3 absolute top-[6.5rem] left-3">
                                            <span className="text-slate-400">
                                                <input type="file" className="hidden" id="post_img" name="post_img" onChange={handleFileChange} />
                                                <label htmlFor="post_img"><Image /></label>
                                            </span>
                                            <span className="text-slate-400"><Video /></span>
                                            <span className="text-slate-400"><List /></span>
                                        </div>
                                        {fileUrl && <img src={fileUrl} alt="Selected" className="mt-4 w-1/2" />}
                                    </div>
                                </div>
                                <button className="lg:w-1/6 w-1/3 my-3 mx-7 lg:mx-12 lg:px-10 py-2 bg-netrals text-primary rounded-lg shadow-lg self-end" onClick={handlePost}>Posting</button>
                            </form>
                            {post.map((d, i) => (
                                <div className="w-full my-3" key={i}>

                                    <div className="flex items-start border border-netrals  lg:px-1 px-4 py-8 rounded-lg shadow-[0_2px_10px_2px_rgba(0,0,0,1)] shadow-netrals">
                                        <div className="w-1/12 flex justify-center">
                                            {d.img_profile ? (
                                                <img className="h-12 w-12  bg-netrals rounded-full cover" src={`${import.meta.env.VITE_API_URL}/assets/${d.img_profile}`} alt={d.name} />
                                            ) :
                                                (d.email.charAt(0).toUpperCase())
                                            }
                                        </div>
                                        <div className="w-11/12">
                                            <div className="flex justify-between gap-2 ml-2 mb-2">
                                                <div className="flex gap-2">
                                                    <h4 className="text-lg font-bold">{d.nama_depan}</h4>
                                                    <p className="font-medium text-slate-400">{d.email} 23 Menit</p>
                                                </div>
                                                <div className="flex gap-1 lg:mx-7">
                                                    <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                    <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                    <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>

                                                </div>

                                            </div>
                                            <p className="lg:text-xl text-slate-400  ml-2">{d.post}</p>
                                            {d.image ? (
                                                <img className="w-32" src={`${import.meta.env.VITE_API_URL}/assets/${d.image}`} alt={"Post image"} />
                                            ) : (
                                                ""
                                            )}
                                            <div className="flex justify-between gap-2 mt-4 ml-2 border-b-2">
                                                <div className="flex gap-5 text-slate-400">
                                                    <div className="flex gap-1">
                                                        <label htmlFor="comment"><i><MessageSquare size={15} /></i></label>
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
                                                <div className="flex gap-3 text-slate-400 px-7 pb-1">
                                                    <i><Bookmark size={20} /></i>
                                                    <i><Upload size={20} /></i>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 mt-3 justify-start ml-3">
                                                <div className="flex-none flex justify-end">
                                                    <img src={Profil3} alt="foto profil" className="w-7 h-7" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="inline-block bg-netrals px-3 py-2 rounded-lg mr-9">
                                                        <h4 className="font-bold text-xs">ZianitaAureliaAb1</h4>
                                                        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. lorem30</p>
                                                        <img src={PavingBlock} alt="" className="mt-3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inputCommentSection flex gap-3 items-center mt-3">
                                                <input type="text" name="comment" id="comment" placeholder="Tulis Komentar" className="w-3/4 px-4 lg:mx-2 ml-2 lg:ml-0 py-2 border border-netrals rounded-lg" />
                                                <input type="file" name="comment_img" id="comment_img" className="hidden" />
                                                <label htmlFor="comment_img"><Image size={20} /></label>
                                                <button className="w-1/6 lg:mx-7 py-2 bg-netrals text-primary rounded-lg">Kirim</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
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