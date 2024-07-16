"use client";
import { useState } from "react";
import Steps from "../../components/steps";
import Slideshow from "../../components/slideshow";
import MoneyIcon from "@/app/assets/icons/money";
import ChartIcon from "@/app/assets/icons/chart";
import HandWithMoneyIcon from "@/app/assets/icons/hand-with-money";

const HowToSection = () => {
  const contents = [
    {
      title: "Kenal lebih dekat dengan reksa dana",
      desc: "Reksa dana adalah instrumen investasi yang menghimpun dana dari banyak investor, untuk kemudian dikelola oleh manajer investasi profesional. Para manajer investasi yang akan mengalokasikan dana ke berbagai instrumen keuangan, seperti saham, obligasi, atau instrumen pasar uang, sehingga kamu tetap dapat menikmati keuntungan tanpa harus ikut repot memilih instrumen mana yang paling cuan. Baca lebih mendalam tentang reksa dana di Funducation!",
      image: "/get-to-know.png",
    },
    {
      title: "Begini cara reksa dana mewujudkan mimpi finansialmu",
      desc: `Kami percaya setiap orang memiliki cara dan gaya yang berbeda dalam meraih mimpi. Dalam hal ini, reksa dana dapat membantu wujudkan tujuan finansialmu meski kondisi ekonomi sedang serba tak pasti. Fleksibilitas reksa dana membuatmu bebas memilih instrumen mana saja, tanpa komitmen waktu tertentu. Asiknya lagi, dana dapat ditarik sewaktu-waktu, tanpa ada waktu tunggu tertentu. Pastikan kamu memilih reksa dana sesuai dengan tujuan finansial dan profil risiko, untuk meminimalisir risiko investasi, dan tentu saja mendapatkan imbal balik yang paling menguntungkan.`,
      image: "/dream.png",
    },
    {
      title: "Begini cara reksa dana melindungi asetmu",
      desc: `Reksa Dana adalah salah satu instrumen investasi yang dikelola oleh manajer investasi profesional dalam bentuk pengumpulan dana dari banyak investor. Dana tersebut kemudian diinvestasikan Manajer Investasi profesional ke berbagai kelas aset, termasuk saham, surat utang, instrumen pasar uang, dan sebagainya untuk dapat menghasilkan capital gain atau pendapatan untuk investor yang menyimpan dananya.`,
      image: "/security.png",
    },
    {
      title: "Lebih praktis & disiplin investasi dengan auto-invest",
      desc: `Platform investasi reksa dana online Mirae Asset memiliki fitur auto-invest yang memudahkan kamu untuk memulai investasi reksa dana secara secara rutin & disiplin.Kalau kamu mengaktifkan fitur auto-invest, jumlah dana di RDN akan didebet & diinvestasikan secara otomatis ke produk yang telah dipilih, dengan periode dan nominal yang sudah kamu atur sebelumnya. Praktis, kan? Pelajari auto-invest lebih lanjut di Belajar Bareng Mirae Asset !`,
      image: "/auto-invest.png",
    },
  ];
  const [selected, setSelected] = useState(0);
  return (
    <section className="how-to bg-white">
      <div className=" text-center text-sm sm:text-lg items-center -translate-y-10 desktop-sm:-translate-y-20 flex flex-row gap-2 px-4 sm:px-0 sm:gap-4 text-white bg-blue-100 justify-center w-full max-w-[80vw] rounded-2xl mx-auto py-2 sm:py-10">
        <div className="flex flex-row gap-4 items-center">
          <div className="desktop-sm:block hidden">
            <MoneyIcon size={32} />
          </div>
          <p>Bebas Biaya Transaksi & Pajak</p>
        </div>
        <div className="w-[1px] h-10 border-l border-white/20" />
        <div className="flex flex-row gap-4 items-center">
          <div className="desktop-sm:block hidden">
            <ChartIcon size={32} />
          </div>
          <p>Imbal Hasil Menarik</p>
        </div>
        <div className="w-[1px] h-10 border-l border-white/20" />
        <div className="flex flex-row gap-4 items-center">
          <div className="desktop-sm:block hidden">
            <HandWithMoneyIcon size={32} />
          </div>
          <p>Beragam Pilihan Produk</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row-reverse sm:gap-12 h-full items-start max-w-[1440px] mx-auto sm:my-20 px-6 sm:px-12 desktop-lg:px-0">
        <Steps
          contents={contents}
          selected={selected}
          onChange={(e: any) => {
            setSelected(e);
          }}
          className="w-full"
        />
        <div className="desktop-sm:block hidden">
          <Slideshow contents={contents} active={selected} />
        </div>
      </div>
    </section>
  );
};
export default HowToSection;
