import Image from "next/image";
import Simulator from "../../simulator";

const HeroSection = () => {
  return (
    <section className="hero relative flex-col flex sm:flex-row min-h-screen bg-gradient-to-b pb-[10%] from-[#4195D5] from-0% via-[#27638a] via-50% to-[#133F5D] to-100%">
      <div className="hero-wrapper h-full pt-[100px] sm:pl-[10%] sm:pr-0 sm:pt-[12%] px-4 text-white w-full sm:w-1/2 z-10">
        <p className="simulator text-sm sm:leading-[45px] sm:text-[31px]">
          Simulasikan Pembayaran Lebih Cepat dengan
        </p>
        <h1 className="hero-title font-bold text-3xl sm:leading-[75px] sm:text-[56px]">
          API Embeded Financing Paper!
        </h1>
      </div>
      <div className="w-0 sm:w-[10vw]" />
      <Simulator />
      <Image
        className="z-0"
        draggable={false}
        src={"https://paper-sepia.vercel.app/_next/image?url=%2FAurora.png&w=640&q=100"}
        alt=""
        fill
      />
    </section>
  );
};
export default HeroSection;
