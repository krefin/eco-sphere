
import LogoTentang from "../assets/img/logoOnly.svg";

const TentangComponent2 = () => {


  return (
    <section className="pt-14 lg:pt-56 lg:pb-32">
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
              <p className="mb-5">Warna hijau dan logo 3 daun melambangkan alam dan lingkungan. Simbol
                3R (Reuse, Reduce, Recycle):</p>
              <p className="mb-5">Segitiga yang dibentuk oleh 3 daun melambangkan keseimbangan,
                sinergi, dan kolaborasi antara Reuse, Reduce, dan Recycle.</p>
              <p>3 daun mewakili pertumbuhan dan kehidupan baru, sejalan dengan
                tujuan 3R untuk keberlanjutan. EcoSphere adalah</p>
            </div>
          </div>
        </div>
        {/* <img className="w-[70px] h-[70px]" src="https://via.placeholder.com/70x70" /> */}
      </div>
      {/* Tentang Logo End */}
    </section>
  );
};

export default TentangComponent2;
