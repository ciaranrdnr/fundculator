import List from "@/app/components/list";
import Image from "next/image";

const BenefitSection = () => {
  const contents = [
    {
      title: "One Time Integration",
      desc: "Menyediakan solusi pembiayaan dengan cara yang nyaman dan efisien bagi bisnis melalui satu proses integrasi.",
    },
    {
      title: "Seamless User Experience",
      desc: "Proses pengajuan pinjaman dengan lebih mudah tanpa harus berinteraksi atau menelepon pihak pemberi pinjaman.",
    },
    {
      title: "One Submission for Multiple Financial Institutions",
      desc: "Cukup dengan satu kali pendaftaran, Anda dapat langsung diproses secara otomatis ke beberapa lembaga keuangan.",
    },
  ];
  return (
    <section className="benefit relative pt-24 pb-40">
      <h2 className="text-navy text-3xl sm:text-5xl text-center font-bold">
        Manfaat yang Bisa Anda Rasakan
      </h2>
      <div className="flex flex-col sm:flex-row sm:space-x-[140px]">
        <List content={contents} />
        <div className="sm:flex hidden w-full sm:w-2/5 sm:pr-[10%]  items-center">
          <Image
            src={"/benefit.png"}
            alt=""
            width={600}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};
export default BenefitSection;
