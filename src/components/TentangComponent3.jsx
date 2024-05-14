import { useCallback } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import LogoTentang from "../assets/img/logoLengkap.svg";

const TentangComponent3 = () => {
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
            “Reducing Waste, Preserving Our World artinya Mengurangi Sampah,
            Melestarikan Dunia Kita” Slogan ini mencerminkan komitmen untuk
            membuat perubahan positif dalam lingkungan melalui tindakan-tindakan
            kecil yang diambil oleh setiap individu.
            <br />
            <br />
            Dengan setiap langkah kecil atau satu aksi yang diambil menuju
            keberlanjutan, kita bisa menerangi dunia dengan kebaikan dan harapan
            untuk masa depan yang lebih hijau.
          </div>
        </div>
        {/* <img className="w-[70px] h-[70px]" src="https://via.placeholder.com/70x70" /> */}
      </div>
      {/* Tentang Logo End */}
    </section>
  );
};

export default TentangComponent3;
