import { Mail, Briefcase, Users, Phone } from "react-feather";

const FooterComponent = () => {
    return (
        <footer className="bg-primary pt-10">
            <div className="container">
                <div className="flex flex-wrap justify-center px-7">
                    <div className="w-full text-center">
                        <h1 className="text-5xl font-bold text-light">EcoSphere.</h1>
                        <p className="text-light">Website Penyedia Informasi Terkait Daur Ulang Sampah dan Edukasi Terkait Jenis-Jenis Sampah.</p>
                    </div>
                    <div className="w-full flex flex-wrap lg:flex-nowrap lg:gap-5 border-y mt-5 py-3">
                        <div className="flex gap-1 justify-center items-start w-1/2 lg:w-1/4">
                            <i><Mail color="#F9F9F9" /></i>
                            <div>
                                <h4 className="text-light font-bold">Write Us</h4>
                                <p className="text-light text-xs">ecosphere2024@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-1 justify-center items-start w-1/2 lg:w-1/4">
                            <i><Briefcase color="#F9F9F9" /></i>
                            <div>
                                <h4 className="text-light font-bold">Office</h4>
                                <p className="text-light text-xs">Jln. Kampus Merdeka No. 50,
                                    Kel. Independen, Kec. MSIB6, Kota Batam,
                                    Kepulauan Riau 29111.</p>
                            </div>
                        </div>
                        <div className="flex gap-1 justify-center items-start w-1/2 lg:w-1/4 mt-3 lg:mt-0">
                            <i><Users color="#F9F9F9" /></i>
                            <div>
                                <h4 className="text-light font-bold">Check Us</h4>
                                <p className="text-light text-xs">@ecosphere_pedulisampah</p>
                            </div>
                        </div>
                        <div className="flex gap-1 lg:justify-center justify-start items-start w-1/2 lg:w-1/4 mt-3 lg:mt-0">
                            <i><Phone color="#F9F9F9" /></i>
                            <div>
                                <h4 className="text-light font-bold">Contact Us</h4>
                                <p className="text-light text-xs">+62 823 4737 7775</p>
                            </div>
                        </div>
                    </div>
                    <p className="w-full text-center text-light my-3">Copyright &copy; 2024 | All Right Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent