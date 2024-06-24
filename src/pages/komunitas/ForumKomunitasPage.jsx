import { NavLink, useNavigate } from "react-router-dom";
import Hero from "../../assets/img/komunitas/hero-komunitas.png";
import Ilustrasi from "../../assets/img/komunitas/ilustrasi.png";
import PavingBlock from "../../assets/img/paving-block.png";
import { BarChart2, Bookmark, Edit3, Heart, Image, List, MessageSquare, Search, Upload, Video } from "react-feather";
import Profil1 from "../../assets/img/komunitas/vector-profil.png";
// import Profil2 from "../../assets/img/profil/profil-2.png";
import Profil3 from "../../assets/img/profil/profil-1.png";
import Profil4 from "../../assets/img/profil/profil-3.png";
import { useEffect, useState } from "react";
import { commentOnPost, createPostByUser, getAllCommunities, getCommentByCommunityId, getLike, like, unlike } from "../../hooks/axios";
import Swal from "sweetalert2";


const ForumKomunitasPage = () => {
    const [fileContent, setFileContent] = useState('');
    const [fileComment, setFileComment] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const [fileCommentUrl, setFileCommentUrl] = useState('');
    const [img, setImg] = useState(null);
    const [imgComment, setImgComment] = useState(null);
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    const [likes, setLikes] = useState([]);
    const navigate = useNavigate();

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
    const handleFileComment = (event, communityId) => {
        const file = event.target.files[0];
        setImgComment((prev) => ({ ...prev, [communityId]: file }));
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileCommentUrl((prev) => ({ ...prev, [communityId]: e.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };
    const handlePost = async () => {
        const dataPost = {
            post: fileContent,
            post_img: img
        }

        try {
            await createPostByUser(dataPost)
        } catch (error) {
            if (error.response.status === 403) {
                Swal.fire({
                    icon: 'error',
                    title: 'session expired',
                    text: 'Anda harus login terlebih dahulu',
                })
                navigate('/login')
            }
        }
    }

    const handleComment = async (communityId) => {
        const dataPost = {
            comment: fileComment[communityId],
            comment_img: imgComment[communityId]
        }
        try {
            await commentOnPost(communityId, dataPost)
            window.location.reload();
        } catch (error) {
            if (error.response.status === 403) {
                Swal.fire({
                    icon: 'error',
                    title: 'session expired',
                    text: 'Anda harus login terlebih dahulu',
                })
                navigate('/login')
            }
        }
    }
    const getComment = async (communityId) => {
        const result = await getCommentByCommunityId(communityId)
        setComment(result.data)
    }
    const getLikes = async (communityId) => {
        const res = await getLike(communityId)
        setLikes(res.data)
    }
    const likePost = async (communityId) => {
        try {
            await like(communityId)
        } catch (error) {
            if (error.response.status === 403) {
                Swal.fire({
                    icon: 'error',
                    title: 'session expired',
                    text: 'Anda harus login terlebih dahulu',
                })
                navigate('/login')
            }
        }
    }
    const unlikePost = async (communityId) => {
        try {
            await unlike(communityId)
        } catch (error) {
            if (error.response.status === 403) {
                Swal.fire({
                    icon: 'error',
                    title: 'session expired',
                    text: 'Anda harus login terlebih dahulu',
                })
                navigate('/login')
            }
        }
    }
    const handleLike = (communityId, id_user) => {
        if (likes.includes(id_user)) {
            unlikePost(communityId)
        } else {
            likePost(communityId)
        }
    }
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
                                    <div className="hidden sm:flex self-start bg-netrals rounded-full p-2 mx-7 my-7">
                                        <img src={Profil1} alt="" />
                                    </div>
                                    <div className="relative lg:w-10/12 sm:w-4/6 w-full">
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
                            {post.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((d, i) => {
                                async () => {
                                    await getLikes(d.communityId)
                                }
                                return (
                                    <div className="w-full my-3" key={i}>

                                        <div className="flex items-start border border-netrals  lg:px-1 px-4 py-8 rounded-lg shadow-[0_2px_10px_2px_rgba(0,0,0,1)] shadow-netrals">
                                            <div className="sm:w-1/12 w-3/12 flex justify-center">
                                                {d.img_profile ? (
                                                    <img className="w-12 h-12 bg-netrals rounded-full cover" src={`${import.meta.env.VITE_API_URL}/assets/${d.img_profile}`} alt={d.name} />
                                                ) :
                                                    (d.email.charAt(0).toUpperCase())
                                                }
                                            </div>
                                            <div className="sm:w-11/12 w-10/12">
                                                <div className="flex justify-between gap-2 ml-0 sm:ml-2 mb-2">
                                                    <div className="flex gap-2">
                                                        <h4 className="sm:text-lg text-xs font-bold">{d.nama_depan}</h4>
                                                        <p className="font-medium text-xs sm:text-base text-slate-400">{d.email} 23 Menit</p>
                                                    </div>
                                                    <div className="flex gap-1 lg:mx-7">
                                                        <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                        <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>
                                                        <span className="w-[0.35rem] h-[0.35rem] border border-dark rounded-full"></span>

                                                    </div>

                                                </div>
                                                <p className="lg:text-xl text-slate-400  ml-2">{d.post}</p>
                                                {d.post_img ? (
                                                    <img className="w-32 ml-2" src={`${import.meta.env.VITE_API_URL}/assets/${d.post_img}`} alt={"Post image"} />
                                                ) : (
                                                    ""
                                                )}
                                                <div className="flex justify-between gap-2 mt-4 ml-2 border-b-2">
                                                    <div className="flex gap-2 sm:gap-5 text-slate-400">
                                                        <div className="flex gap-1">
                                                            <label htmlFor={`comment${d.communityId}`} onClick={() => getComment(d.communityId)}><i><MessageSquare size={15} /></i></label>
                                                            <p className="text-xs sm:text-sm">1,7rb</p>
                                                        </div>
                                                        <div className="flex gap-1">
                                                            <i><Edit3 size={15} /></i>
                                                            <p className="text-xs sm:text-sm">3,3rb</p>
                                                        </div>
                                                        {likes && likes.filter(l => l.communityId === d.communityId).length > 0 ? likes.filter(l => l.communityId === d.communityId)
                                                            .map((l, i) => (
                                                                <div key={i} className="flex gap-1" onClick={() => handleLike(d.communityId, l.id_user)}>

                                                                    <i><Heart size={15} className="bg-red-500 rounded-sm" /></i>
                                                                    <p className="text-xs sm:text-sm">{l.like.length}rb</p>

                                                                </div>
                                                            )) : (
                                                            <div className="flex gap-1" onClick={() => handleLike(d.communityId)}>
                                                                <i><Heart size={15} /></i>
                                                                <p className="text-xs sm:text-sm">20rb</p>
                                                            </div>
                                                        )}


                                                        <div className="flex gap-1">
                                                            <i><BarChart2 size={15} /></i>
                                                            <p className="text-xs sm:text-sm">1,9jt</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-1 sm:gap-3 text-slate-400 sm:px-7 pb-1">
                                                        <i><Bookmark size={15} /></i>
                                                        <i><Upload size={15} /></i>
                                                    </div>
                                                </div>

                                                {comment && comment
                                                    .filter(dc => dc.communityId === d.communityId) // Filter komentar dengan communityId yang sama
                                                    .map((dc, i) => (
                                                        <div key={i} className="flex gap-3 mt-3 justify-start ml-3">
                                                            <div className="flex-none flex justify-end">
                                                                {dc.img_profile ? (
                                                                    <img className="w-12 h-12 bg-netrals rounded-full" src={`${import.meta.env.VITE_API_URL}/assets/${dc.img_profile}`} alt={"Post image"} />
                                                                ) : (
                                                                    <div className="w-10 h-10 bg-netrals rounded-full flex justify-center items-center">{dc.email.charAt(0).toUpperCase()}</div>
                                                                )}
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="inline-block bg-netrals px-3 py-2 rounded-lg mr-9">
                                                                    <h4 className="font-bold text-xs">{dc.email}</h4>
                                                                    <p className="text-xs">{dc.comment}</p>
                                                                    {dc.comment_img && (
                                                                        <img className="w-32" src={`${import.meta.env.VITE_API_URL}/assets/${dc.comment_img}`} alt={"comment image"} />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                {fileCommentUrl[d.communityId] && <img src={fileCommentUrl[d.communityId]} alt="Selected" className="mt-4 w-1/2" />}
                                                <div className="inputCommentSection flex gap-3 items-center mt-3">

                                                    <input type="text" name="comment" id={`comment${d.communityId}`} placeholder="Tulis Komentar" className="w-3/4 px-4 lg:mx-2 ml-2 lg:ml-0 py-2 border border-netrals rounded-lg" onChange={(e) => setFileComment({ ...fileComment, [d.communityId]: e.target.value })} value={fileComment[d.communityId] || ""} />
                                                    <input type="file" name="comment_img" id={`comment_img${d.communityId}`} className="hidden" onChange={(even) => handleFileComment(even, d.communityId)} />
                                                    <label htmlFor={`comment_img${d.communityId}`}><Image size={20} /></label>
                                                    <button className="w-1/6 lg:mx-7 py-2 sm:text-base text-xs bg-netrals text-primary rounded-lg" onClick={() => handleComment(d.communityId)}>Kirim</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
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