import { useCallback } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import LogoTentang from "../assets/img/logoOnly.svg";

const TentangComponent2 = () => {
  const onForwardImageClick = useCallback(() => {}, []);

  return (
    <section className="pt-14 lg:pt-56">
      {/* Tentang Logo Start */}
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-between">
        {/* Logo */}
        <div className="w-full lg:w-1/2 lg:mr-10">
          <div className="w-full lg:w-[787px] h-[509px] ml-12">
            <img src={LogoTentang} alt="Tentang Image" className="pl-20" />
          </div>
        </div>
        {/* Text */}
        <div className="w-full lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
          <div className="w-full lg:w-[464px] h-[276px] text-stone-900 text-base lg:text-xl font-bold font- [Nunito] ml-12">
            Warna hijau dan logo 3 daun melambangkan alam dan lingkungan. Simbol
            3R (Reuse, Reduce, Recycle):
            <br />
            <br />
            Segitiga yang dibentuk oleh 3 daun melambangkan keseimbangan,
            sinergi, dan kolaborasi antara Reuse, Reduce, dan Recycle.
            <br />
            <br />3 daun mewakili pertumbuhan dan kehidupan baru, sejalan dengan
            tujuan 3R untuk keberlanjutan. EcoSphere adalah
          </div>
        </div>
        {/* <img className="w-[70px] h-[70px]" src="https://via.placeholder.com/70x70" /> */}
      </div>
      {/* Tentang Logo End */}
    </section>
  );
};

export default TentangComponent2;
