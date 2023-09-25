import Image from "next/image";
import Simulator from "../../simulator";

const HeroSection = () => {
  return (
    <section className="hero relative flex min-h-screen bg-gradient-to-b pb-[10%] from-[#4195D5] from-0% via-[#27638a] via-50% to-[#133F5D] to-100%">
      <div className="hero-wrapper h-full pl-[10%] pt-[12%] text-white w-1/2 z-10">
        <p className="simulator text-[31px]">
          Simulasikan Pembayaran Lebih Cepat dengan
        </p>
        <h1 className="hero-title font-bold text-[56px]">
          API Embeded Financing Paper!
        </h1>
      </div>
      <div className="w-[10vw]" />
      <Simulator />
      <Image
        className="z-0"
        draggable={false}
        src={"/Aurora.png"}
        alt=""
        fill
      />
    </section>
  );
};
export default HeroSection;
