
import LogoTentang from "../assets/img/logoLengkap.png";

const TentangComponent3 = () => {

  return (
    <section className="pt-32 lg:pt-56 lg:pb-32">
      {/* Tentang Logo Start */}
      <div className="container">
        <div className="lg:flex justify-between items-center lg:gap-20 px-7">
          {/* Logo */}
          <div className="lg:w-1/2 lg:flex justify-center items-center">
            <img src={LogoTentang} alt="Tentang Image" />
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-[464px] h-[276px] text-stone-900 text-base lg:text-xl font-bold">
              <p>“Reducing Waste, Preserving Our World artinya Mengurangi Sampah,
                Melestarikan Dunia Kita” Slogan ini mencerminkan komitmen untuk
                membuat perubahan positif dalam lingkungan melalui tindakan-tindakan
                kecil yang diambil oleh setiap individu.</p>
              <p className="mt-3">Dengan setiap langkah kecil atau satu aksi yang diambil menuju
                keberlanjutan, kita bisa menerangi dunia dengan kebaikan dan harapan
                untuk masa depan yang lebih hijau.</p>
            </div>
          </div>
        </div>
        {/* <img className="w-[70px] h-[70px]" src="https://via.placeholder.com/70x70" /> */}
      </div>
      {/* Tentang Logo End */}
    </section>
  );
};

export default TentangComponent3;
