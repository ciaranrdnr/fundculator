"use client";
import Steps from "@/app/components/steps";
import { useState } from "react";
import { contents } from "./content";
import Image from "next/image";

const FAQSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="benefit relative pt-24 pb-16 bg-gradient-to-t from-blue-10/50 via-50% via-white">
      <div className="flex flex-col max-w-[1440px] mx-auto w-full justify-center items-center gap-10 px-6 sm:px-20 desktop-lg:px-0">
        <div className="flex flex-col gap-2">
          <h2 className="text-navy text-xl sm:text-4xl text-center font-bold uppercase">
            Investor FAQ
          </h2>
          <p className="text-base sm:text-xl">
            Pertanyaan yang sering diajukan oleh calon investor
          </p>
        </div>
        {contents && (
          <Steps
            contents={contents}
            selected={selected}
            onChange={(e: any) => {
              setSelected(e);
            }}
          />
        )}
        <div className="flex flex-col sm:flex-row">
          <h5 className="mb-3 text-center p-4">
            PT Mirae Asset Indonesia berizin dan diawasi oleh Otoritas Jasa
            Keuangan (OJK)
          </h5>
          <div>
            <Image src={"/investor-img.png"} width={343} height={48} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
