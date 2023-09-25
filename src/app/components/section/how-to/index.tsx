"use client";
import { useState } from "react";
import Steps from "../../steps";
import Slideshow from "../../slideshow";

const HowToSection = () => {
  const contents = {
    desc: [
      "Isi data diri dan unggah dokumen legal Anda (SIUP, Akta Perusahaan, dll) pada halaman Pendaftaran.",
      "Dapatkan persetujuan penawaran dari berbagai macam lembaga keuangan penyedia pembayaran.",
      "Tanda tangan dokumen secara digital.",
      "Selesai! Anda dapat langsung melakukan transaksi dengan Paper Usaha.",
    ],
    imgSrc: [
      "/../../../img-how-to-1.png",
      "/../../../img-how-to-2.png",
      "/../../../img-how-to-3.png",
      "/../../../img-how-to-4.png",
    ],
  };
  const [selected, setSelected] = useState(0);
  return (
    <section className="how-to pt-[54px] pb-[60px]">
      <h2 className="text-navy text-5xl text-center font-bold">
        Proses Pendaftaran SmartCart Pay Later
      </h2>
      <div className="flex space-x-24 h-full items-center">
        <Steps
          contents={contents.desc}
          selected={selected}
          onChange={(e) => {
            setSelected(e);
          }}
          className="w-1/2 pl-[10%] pt-[10%]"
        />
        <Slideshow urls={contents.imgSrc} active={selected} />
      </div>
    </section>
  );
};
export default HowToSection;
