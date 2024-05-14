import { useCallback } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import TentangComponent1 from "../components/TentangComponent1";
import TentangComponent2 from "../components/TentangComponent2";
import TentangComponent3 from "../components/TentangComponent3";

const TentangKami = () => {
  const onForwardImageClick = useCallback(() => {}, []);
  return (
    <section>
      {/* Memanggil Component Tentang Logo Start */}
      <TentangComponent3 />
      {/* Memanggil Component Tentang Logo End */}

      {/* Tentang Kami Start */}
      <div className="w-full h-[510px] bg-neutral-200">
        <div
          className="w-[461px] h-[781px] text-green-700 text-4xl font-bold font-['Nunito'] pt-[250px] ml-14 pl-20"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)" }}
        >
          Tentang Kami
        </div>
      </div>
      {/* Tentang Kami End */}
    </section>
  );
};

export default TentangKami;
