"use client";
import { useState } from "react";
import LoanOffer from "./loan-offer";
import LastStep from "./last-step";
import FormSimulator from "./form-simulator";
import Onboarding from "./onboarding";
import InteractiveArrow from "../interactive-arrow";
import ConfirmationDialog from "../confirmation-dialog";

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
      <InteractiveArrow/>
    </div>
  );
};

Simulator.displayName = "Simulator";

Simulator.defaultProps = {};

export default Simulator;

