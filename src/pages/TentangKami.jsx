import CarouselComponent from "../components/CarouselComponent";
import TentangComponent1 from "../components/TentangComponent1";
import TentangComponent2 from "../components/TentangComponent2";
import TentangComponent3 from "../components/TentangComponent3";

const TentangKami = () => {

  return (
    <>
      {/* Memanggil Component Tentang Logo Start */}

      <CarouselComponent>
        <TentangComponent1 />
        <TentangComponent2 />
        <TentangComponent3 />
      </CarouselComponent>
      {/* Memanggil Component Tentang Logo End */}
      {/* Tentang Kami Start */}
      <section className="bg-netrals">
        <div className="container">
          <div className="lg:flex justify-between items-center px-7 pt-10 lg:pt-0">
            <div className="lg:w-2/6">
              <h1 className="text-3xl font-bold text-primary drop-shadow text-center lg:text-start">Tentang Kami</h1>
            </div>
            <div className="flex flex-col lg:flex-row w-4/6 gap-10 justify-between mx-auto items-center py-10">
              <div className="lg:w-1/2 w-screen lg:border-2 border-neutral-300 rounded-xl p-3 px-10 lg:px-3">
                <div className="flex justify-center items-center border-2 border-netural-300 rounded-t-xl bg-neutral-300 py-1">
                  <h4 className="text-2xl font-bold text-primary">Visi</h4>
                </div>
                <div className="border-2 border-neutral-300 px-3 pt-5 pb-32 rounded-b-xl relative -top-1 mx-[0.10rem]">
                  <p>Menjadi sumber daya utama dan terpercaya dalam memberikan informasi, edukasi, dan solusi praktis tentang pengelolaan sampah untuk menciptakan lingkungan yang bersih, sehat, dan berkelanjutan.</p>
                </div>
              </div>
              <div className="lg:w-1/2 w-screen lg:border-2 border-neutral-300 rounded-xl p-3 px-10 lg:px-3">
                <div className="flex justify-center items-center border-2 border-netural-300 rounded-t-xl bg-neutral-300 py-1">
                  <h4 className="text-2xl font-bold text-primary">Misi</h4>
                </div>
                <div className="border-2 border-neutral-300 px-3 py-6 rounded-b-xl relative -top-1 mx-[0.10rem]">
                  <ol className="list-decimal px-5">
                    <li>Memberikan informasi yang akurat dan terkini tentang masalah sampah, termasuk penyebab, dampak, dan solusi.</li>
                    <li>Mengedukasi masyarakat tentang pentingnya pengelolaan sampah yang bertanggung jawab dan berkelanjutan.</li>
                    <li>Menyediakan panduan praktis dan tips untuk mengurangi, mendaur ulang, dan mengelola sampah dengan efektif.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tentang Kami End */}
    </>
  );
};

export default TentangKami;
