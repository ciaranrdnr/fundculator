"use client";
import { useState } from "react";
import Button from "../button";
import ArrowIcon from "@/app/assets/icons/arrow";
import Image from "next/image";
import LoanOffer from "./loan-offer";
import LastStep from "./last-step";
import FormSimulator from "./form-simulator";
import Onboarding from "./onboarding";

interface ISimulator {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
export interface IData {
  name: string;
  address?: string;
  birthdate?: Date;
  phone?: number;
  companyPhone?: number;
  ktp?: number;
  npwp?: number;
  totalLoan?: number;
  companyName?: string;
  companyAddress?: string;
  ktpImg?: string;
  legalDoc?: string;
  offer?: 0 | 1;
}
const Simulator = (props: ISimulator) => {
  const [totalLoan, setTotalLoan] = useState(0);
  const [simStep, setSimStep] = useState(0);
  const [dialogStep, setDialogStep] = useState(0);
  const [data, setData] = useState<IData>({
    name: "",
    address: "",
    birthdate: undefined,
    phone: undefined,
    companyPhone: undefined,
    ktp: undefined,
    npwp: undefined,
    totalLoan: undefined,
    companyName: undefined,
    companyAddress: undefined,
    ktpImg: undefined,
    legalDoc: undefined,
    offer: undefined,
  });
  const [fee, setFee] = useState(0);
  const [showDataConfirmation, setShowDataConfirmation] = useState(false);


  const ConfirmationDialog = ({ title, desc, imgUrl, onClick, label, footer }: any) => {
    return (
      <div className="transition-all fixed text-white top-0 left-0 w-full h-full p-4 py-4 z-20">
        <div className=" flex  items-center justify-center bg-black/80 rounded-[10px] w-full h-full ">
          <div className="w-2/3 flex flex-col space-y-6 items-center rounded-[10px] bg-gradient-to-br py-6 px-4 from-[#377cb1] from-0% to-[#133F5D] to-100%">
            <div className="flex flex-col space-y-3">
              <p className="text-[15px] text-center">{title}</p>
              <p className="text-[13px] text-center opacity-60">{desc}</p>
            </div>
            <Image
              src={imgUrl}
              alt=""
              width={194}
              height={0}
              style={{ height: "auto" }}
              objectFit="contain"
            />
            <Button
              onClick={onClick}
              isFullWidth
              variant="contained"
              label={label}
              className="py-[10px] text-sm"
            />
            {footer}
          </div>
        </div>
      </div>
    );
  };
  
  const contentLastStep = [
    {
      title: "Selamat, Limit Anda Sudah Aktif",
      desc: "Anda sudah dapat melakukan transaksi di Paper.id menggunakan limit Paper Usaha.",
      imgUrl: "/success-illustration.png",
      onClick: () => setDialogStep(1),
    },
    {
      title: "Siap untuk mencoba Paper.id?",
      desc: "Paper.id  dapat membantu Anda mendapatkan pembayaran lebih cepat untuk bisnis Anda!",
      imgUrl: "/partner.png",
      onClick: () => {
        setShowDataConfirmation(false);
        setSimStep(0);
      },
    },
  ];
  return (
    <div className="w-full sm:w-3/6 flex flex-col space-y-6 pt-[10%] sm:pr-[10%] sm:pl-0 px-4 z-10 transition-all">
      <div className="border-b-2 border-r p-4 bg-white/30 backdrop-blur-md rounded-[10px]">
        {simStep == 0 ? <Onboarding
        totalLoan={totalLoan}
        fee={fee}
        onChangeLoan={(e: any) => {
          setTotalLoan(e.target.value);
        }}
        onChangeFee={(e: any) => {
          setFee(e.target.value);
        }}
        onRegis={() => {
          setSimStep(simStep + 1);
        }}
        /> : null}
        {simStep == 1 ? 
        <FormSimulator
          setData={setData}  
          data={data}  
          onSave={() => { setShowDataConfirmation(true);}} 
          dialogElement={showDataConfirmation && 
            (<ConfirmationDialog
                title="Pengajuan Anda Berhasil Diajukan!"
                desc="Data pengajuan Anda telah kami terima dan akan diproses dalam waktu 2x24jam."
                imgUrl="/cs-illustration.png"
                onClick={() => {
                  setShowDataConfirmation(false);
                  setSimStep(simStep + 1);
                }} 
                footer={<p className="text-[13px] text-center opacity-60">
                  Butuh bantuan? Hubungi kami <b>0821-1767-9173</b> <br />
                  atau klik <b>di sini</b>
                </p>
                }
                label="Ya, Saya Mengerti"/>
            )}
        /> : null}
        {simStep == 2 ? <LoanOffer totalLoan={totalLoan} onSave={() => { setSimStep(simStep + 1); }} data={data} /> : null}
        {simStep == 3 ? <LastStep
          data={data.ktpImg}
          onSave={() => { setShowDataConfirmation(true);}}
          dialogElement={showDataConfirmation ? 
            ( <ConfirmationDialog
                title={contentLastStep[dialogStep].title}
                desc={contentLastStep[dialogStep].desc}
                imgUrl={contentLastStep[dialogStep].imgUrl}
                onClick={contentLastStep[dialogStep].onClick} 
                label={dialogStep == 0 ? "Ya, Saya Mengerti":"Ulangi Simulasi"} 
                footer={dialogStep == 0 ?
                <p className="text-[13px] text-center opacity-60">Butuh bantuan? Hubungi kami <b>0821-1767-9173</b><br /> atau klik <b>di sini</b></p>
                :
                <p className="text-[13px] text-center opacity-60">Hubungi kami <b>0821-1767-9173</b></p> }/>
              ):null} 
        /> : null}
      </div>
      <div className="flex opacity-70 justify-center space-x-2 animate-[bounce_1.5s_ease-in-out_infinite]">
        <ArrowIcon size={24} color="#ffffff" />
        <p className="text-white text-base">
          Anda dapat berinteraksi pada tampilan ini
        </p>
      </div>
    </div>
  );
};

Simulator.displayName = "Simulator";

Simulator.defaultProps = {};

export default Simulator;

