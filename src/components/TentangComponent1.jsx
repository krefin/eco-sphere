import { useCallback } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import LogoTentang from "../assets/img/logo-Tentang.svg";

const TentangComponent1 = () => {
  const onForwardImageClick = useCallback(() => {}, []);

  return (
    <section className="pt-14 lg:pt-56">
      {/* Tentang Logo Start */}
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-between">
        {/* Logo */}
        <div className="w-full lg:w-1/2 lg:mr-10">
          <div className="w-full lg:w-[487px] h-[509px] ml-12">
            <img src={LogoTentang} alt="Tentang Image" className="w-full" />
          </div>
        </div>
        {/* Text */}
        <div className="w-full lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
          <div className="w-full lg:w-[464px] h-[276px] text-stone-900 text-base lg:text-xl font-bold font- [Nunito] ml-12">
            EcoSphere adalah gabungan dari dua konsep : “Eco” yang merupakan
            singkatan dari “ekosistem” atau “lingkungan” dan “Sphere” yang
            berarti “lingkup” atau “wilayah”. <br />
            <br />
            "EcoSphere" dapat diartikan sebagai “lingkungan atau ekosistem dalam
            sebuah lingkup atau wilayah tertentu”.
          </div>
        </div>
        {/* <img className="w-[70px] h-[70px]" src="https://via.placeholder.com/70x70" /> */}
      </div>
      {/* Tentang Logo End */}
    </section>
  );
};

export default TentangComponent1;
