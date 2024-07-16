import Image from "next/image";

const TopSection = () => {
  return (
    <section className="hero relative flex-col flex sm:flex-row min-h-[50vh] sm:min-h-[75vh] bg-gradient-to-tr from-apricot-100 to-apricot-50 to-100% justify-center">
      <div className="text-center z-10 flex flex-col items-center justify-center uppercase !font-montserrat font-black text-white/80 select-none">
        <p className="text-2xl sm:text-5xl desktop-md:text-7xl">Mengenal</p>
        <p className="text-4xl sm:text-7xl desktop-md:text-9xl">Reksa dana</p>
        <p className="text-2xl sm:text-5xl desktop-md:text-7xl">Lebih Dekat</p>
      </div>
      <Image
        className="absolute bottom-0 z-0"
        draggable={false}
        width={"1990"}
        height={"516"}
        objectFit="cover"
        src={"/banner-reksadana.png"}
        loading="lazy"
        sizes="(max-width: 1440px) 100vw, 33vw"
        alt=""
      />
    </section>
  );
};
export default TopSection;
