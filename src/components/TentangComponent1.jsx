
import LogoTentang from "../assets/img/logo-Tentang.png";

const TentangComponent1 = () => {

  return (
    <section className="pt-32 pb-10 lg:pt-56 lg:pb-32">
      {/* Tentang Logo Start */}
      <div className="container">
        <div className="lg:flex justify-between items-center lg:gap-20 px-7">
          {/* Logo */}
          <div className="lg:w-1/2">
            <div className="">
              <img src={LogoTentang} alt="Tentang Image" />
            </div>
          </div>
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-[464px] h-[276px] text-stone-900 text-base lg:text-xl font-bold">
              <p className="mb-5">EcoSphere adalah gabungan dari dua konsep : “Eco” yang merupakan
                singkatan dari “ekosistem” atau “lingkungan” dan “Sphere” yang
                berarti “lingkup” atau “wilayah”.</p>
              <p>“EcoSphere“ dapat diartikan sebagai “lingkungan atau ekosistem dalam
                sebuah lingkup atau wilayah tertentu”.</p>
            </div>
          </div>
        </div>
        {/* <img className="w-[70px] h-[70px]" src="https://via.placeholder.com/70x70" /> */}
      </div>
      {/* Tentang Logo End */}
    </section>
  );
};

export default TentangComponent1;
