"use client";
import { useState } from "react";
import Button from "../button";
import Input from "../input";
import ArrowIcon from "@/app/assets/icons/arrow";
import Image from "next/image";
import Steps from "../steps";
import UploadIcon from "@/app/assets/icons/upload";

interface ISimulator {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
interface IData {
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
  const onboarding = (
    <div className="transition-all flex flex-col space-y-6 bg-white rounded-[10px] py-8 px-6">
      <p className="text-lg text-center">Lihat Simulasi Pinjaman Anda</p>
      <div className="flex flex-col space-y-2">
        <p>Jumlah Pinjaman</p>
        <Input
          prefix="Rp"
          value={totalLoan}
          onChange={(e: any) => {
            setTotalLoan(e.target.value);
          }}
          className={`flex ${
            totalLoan ? "text-blue" : "text-tertiary"
          } focus-within:text-blue space-x-2 text-2xl`}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <p>Estimasi Fee</p>
        <Input
          suffix="%"
          placeholder="0"
          value={fee}
          onChange={(e: any) => {
            setFee(e.target.value);
          }}
          className={`flex max-w-[7px] w-7 ${
            fee ? "text-blue" : "text-tertiary"
          } focus-within:text-blue space-x-2 text-2xl`}
        />
      </div>
      <div className="mx-auto sm:w-1/2">
        <Button
          onClick={() => {
            setSimStep(simStep + 1);
          }}
          isFullWidth
          variant="contained"
          label="Daftar Sekarang!"
          isDisabled={totalLoan <= 0}
          className="py-3 px-10 text-base"
        />
      </div>
    </div>
  );
  const loanOffer = (
    <div className="transition-all flex flex-col space-y-6 bg-white rounded-[10px] py-8 px-6">
      <Steps
        variant="horizontal"
        autoChange={false}
        selected={1}
        contents={["Isi Form", "Pilih Penawaran", "Tanda Tangan Dokumen"]}
      />
      <div className="flex flex-col space-y-2">
        <p className="text-blue/50 pl-4 ">Jumlah Pinjaman</p>
        <Input
          prefix="Rp"
          value={totalLoan}
          className={`flex ${
            totalLoan ? "text-blue" : "text-tertiary"
          } focus-within:text-blue space-x-2 text-2xl font-bold pl-4`}
        />
        <div className="flex flex-col space-y-4">
          <p className="text-gray-800 font-bold text-lg">
            Pilih penawaran untuk pinjaman Anda
          </p>
          <label className="flex border rounded-lg p-5 cursor-pointer">
            <div className="flex-col space-y-4">
              <div className="flex space-x-2">
                <input type="checkbox" />
                <Image
                  src="https://storage.googleapis.com/clevertap-assets/landing-page/partner/koinworks.svg"
                  alt=""
                  width={154}
                  height={24}
                />
              </div>
              <div className="flex">
                <div className="flex flex-col text-sm ">
                  <p className="text-gray-800/80 pl-4">Jumlah Pinjaman</p>
                  <p className="text-gray-800 font-bold pl-4">Rp {totalLoan}</p>
                </div>
                <div className="flex flex-col text-sm ">
                  <p className="text-gray-800/80 pl-4">Fee</p>
                  <p className="text-gray-800 font-bold pl-4">1.1%</p>
                </div>
              </div>
            </div>
          </label>
          <label className="flex border rounded-lg p-5 cursor-pointer">
            <div className="flex-col space-y-4">
              <div className="flex space-x-2">
                <input type="checkbox" />
                <Image
                  src="https://storage.googleapis.com/clevertap-assets/landing-page/partner/koinworks.svg"
                  alt=""
                  width={154}
                  height={24}
                />
              </div>
              <div className="flex">
                <div className="flex flex-col text-sm ">
                  <p className="text-gray-800/80 pl-4">Jumlah Pinjaman</p>
                  <p className="text-gray-800 font-bold pl-4">Rp {totalLoan}</p>
                </div>
                <div className="flex flex-col text-sm ">
                  <p className="text-gray-800/80 pl-4">Fee</p>
                  <p className="text-gray-800 font-bold pl-4">1.1%</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="mx-auto w-1/2">
        <Button
          onClick={() => {
            setSimStep(simStep + 1);
          }}
          isFullWidth
          variant="contained"
          label="Simpan"
          isDisabled={!!data.offer}
          className="py-3 px-10 text-base"
        />
      </div>
    </div>
  );

  const ConfirmationDialog = ({ title, desc, imgUrl, onClick }: any) => {
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
              label="Ya, Saya Mengerti"
              className="py-[10px] text-sm"
            />
            <p className="text-[13px] text-center opacity-60">
              Butuh bantuan? Hubungi kami <b>0821-1767-9173</b> <br />
              atau klik <b>di sini</b>
            </p>
          </div>
        </div>
      </div>
    );
  };
  const form = (
    <div className="transition-all flex relative flex-col space-y-6 bg-white rounded-[10px] py-8 px-6 text-black">
      {showDataConfirmation && (
        <ConfirmationDialog
          title="Pengajuan Anda Berhasil Diajukan!"
          desc="Data pengajuan Anda telah kami terima dan akan diproses dalam waktu 2x24jam."
          imgUrl="/cs-illustration.png"
          onClick={() => {
            setShowDataConfirmation(false);
            setSimStep(simStep + 1);
          }}
        />
      )}
      <Steps
        variant="horizontal"
        autoChange={false}
        selected={0}
        contents={["Isi Form", "Pilih Penawaran", "Tanda Tangan Dokumen"]}
      />
      <p className="text-base text-left">Data Diri Lengkap</p>
      <div className="flex flex-col space-y-2">
        <p className="text-xs">Nama Lengkap</p>
        <Input
          placeholder={"cth. Priska Aprilia"}
          type="text"
          value={data.name}
          onChange={(e: any) => {
            setData({ ...data, name: e.target.value });
          }}
          className={`flex ${
            data.name ? "text-black" : "text-tertiary"
          } focus-within:text-black space-x-2 text-sm border-b pb-1`}
        />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <p className="text-xs">Alamat Lengkap</p>
        <Input
          type="text"
          placeholder={"cth. Jl. Sunter Garden Raya No.5D, RT.6/RW.12"}
          value={data.address}
          onChange={(e: any) => {
            setData({ ...data, address: e.target.value });
          }}
          className={`w-full flex ${
            data.address ? "text-black" : "text-tertiary"
          } focus-within:text-black space-x-2 text-sm border-b pb-1`}
        />
      </div>
      <div className="flex sm:flex-row flex-col space-y-4 sm:space-x-4">
        <div className="flex flex-col space-y-2 w-full">
          <p className="text-xs">Tanggal Lahir</p>
          <Input
            type="date"
            placeholder={"Pilih Tanggal"}
            value={data.birthdate}
            onChange={(e: any) => {
              setData({ ...data, birthdate: e.target.value });
            }}
            className={`w-full flex ${
              data.birthdate ? "text-black" : "text-tertiary"
            } focus-within:text-black space-x-2 text-sm border-b pb-1`}
          />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <p className="text-xs">No. Telp</p>
          <Input
            type="number"
            placeholder={"cth. 08123456789"}
            value={data.phone}
            onChange={(e: any) => {
              setData({ ...data, phone: e.target.value });
            }}
            className={`w-full flex ${
              data.phone ? "text-black" : "text-tertiary"
            } focus-within:text-black space-x-2 text-sm border-b pb-1`}
          />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <p className="text-xs">No. Telp Perusahaan</p>
          <Input
            type="text"
            placeholder={"cth. 021998997"}
            value={data.companyPhone}
            onChange={(e: any) => {
              setData({ ...data, companyPhone: e.target.value });
            }}
            className={`w-full flex ${
              data.companyPhone ? "text-black" : "text-tertiary"
            } focus-within:text-black space-x-2 text-sm border-b pb-1`}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col space-y-4 sm:space-x-4">
        <div className="flex flex-col space-y-2 w-full">
          <p className="text-xs">No. KTP</p>
          <Input
            type="number"
            placeholder={"cth. 327123456789"}
            value={data.ktp}
            onChange={(e: any) => {
              setData({ ...data, ktp: e.target.value });
            }}
            className={`w-full flex ${
              data.ktp ? "text-black" : "text-tertiary"
            } focus-within:text-black space-x-2 text-sm border-b pb-1`}
          />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <p className="text-xs">No. NPWP</p>
          <Input
            type="number"
            placeholder={"cth. 990998997996"}
            value={data.npwp}
            onChange={(e: any) => {
              setData({ ...data, npwp: e.target.value });
            }}
            className={`w-full flex ${
              data.npwp ? "text-black" : "text-tertiary"
            } focus-within:text-black space-x-2 text-sm border-b pb-1`}
          />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <p className="text-xs">Jumlah Pinjaman</p>
          <Input
            type="number"
            placeholder={"0"}
            value={data.totalLoan}
            onChange={(e: any) => {
              setData({ ...data, totalLoan: e.target.value });
            }}
            className={`w-full flex ${
              data.totalLoan ? "text-black" : "text-tertiary"
            } focus-within:text-black space-x-2 text-sm border-b pb-1`}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2 w-full">
        <p className="text-xs">Nama Perusahaan</p>
        <Input
          type="text"
          placeholder={"cth. PT Pembangunan Sejahtera"}
          value={data.companyName}
          onChange={(e: any) => {
            setData({ ...data, companyName: e.target.value });
          }}
          className={`w-full flex ${
            data.companyName ? "text-black" : "text-tertiary"
          } focus-within:text-black space-x-2 text-sm border-b pb-1`}
        />
      </div>
      <div className="flex flex-col space-y-2 w-full">
        <p className="text-xs">Alamat Perusahaan</p>
        <Input
          type="text"
          placeholder={"cth. Jl. Otto Iskandardinata 30, DKI Jakarta"}
          value={data.companyAddress}
          onChange={(e: any) => {
            setData({ ...data, companyAddress: e.target.value });
          }}
          className={`w-full flex ${
            data.companyAddress ? "text-black" : "text-tertiary"
          } focus-within:text-black space-x-2 text-sm border-b pb-1`}
        />
      </div>

      <p className="text-base text-left font-bold">Unggah Dokumen Pribadi</p>
      <div className="fflex sm:flex-row flex-col space-y-6 sm:space-x-6">
        <div className="flex-col space-y-3 p-3 rounded-[10px] border w-full">
          <div className="flex space-x-3">
            <div className="bg-blue/20 w-[72px] h-[48px] rounded-[5px]"></div>
            <div className="flex flex-col">
              <p className="text-sm font-bold">Foto e-KTP</p>
              <p className="text-xs">
                {data.ktpImg == undefined ? "Foto belum diunggah" : "ktp.jpg"}
              </p>
            </div>
          </div>
          <Button
            variant="outlined-blue"
            isFullWidth
            label={data.ktpImg == undefined ? "Unggah" : "Ubah"}
            className="py-2 px-10 text-sm"
          />
        </div>
        <div className="flex-col space-y-3 p-3 rounded-[10px] border w-full">
          <div className="flex space-x-3">
            <div className="bg-blue/20 w-[72px] h-[48px] rounded-[5px]"></div>
            <div className="flex flex-col">
              <p className="text-sm font-bold">Dokumen Legal</p>
              <p className="text-xs">
                {data.legalDoc == undefined
                  ? "Dokumen belum diunggah"
                  : "legal_final.jpg"}
              </p>
            </div>
          </div>
          <Button
            variant="outlined-blue"
            isFullWidth
            label={data.legalDoc == undefined ? "Unggah" : "Ubah"}
            className="py-2 px-10 text-sm"
          />
        </div>
      </div>

      <div className="mx-auto w-1/2">
        <Button
          onClick={() => {
            setShowDataConfirmation(true);
          }}
          variant="contained"
          isFullWidth
          label="Simpan"
          isDisabled={!!!data.name}
          className="py-3 px-10 text-base"
        />
      </div>
    </div>
  );
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
  const lastStep = (
    <div className="transition-all flex flex-col space-y-6 bg-white rounded-[10px] py-8 px-6 relative">
      {showDataConfirmation && (
        <ConfirmationDialog
          title={contentLastStep[dialogStep].title}
          desc={contentLastStep[dialogStep].desc}
          imgUrl={contentLastStep[dialogStep].imgUrl}
          onClick={contentLastStep[dialogStep].onClick}
        />
      )}
      <p className="text-lg text-center">Lihat Simulasi Pinjaman Anda </p>
      <Steps
        variant="horizontal"
        autoChange={false}
        selected={2}
        contents={["Isi Form", "Pilih Penawaran", "Tanda Tangan Dokumen"]}
      />
      <p className="text-gray-800 font-bold text-lg">
        Silahkan unggah tanda tangan Anda
      </p>
      <div>
        <div className="border rounded-lg border-blue border-dashed flex flex-col items-center space-y-4 py-10">
          <UploadIcon size={32} />
          <p className="text-gray-800/50 text-sm">Unggah file Anda di sini</p>
          <Button
            variant="outlined-blue"
            label={data.ktpImg == undefined ? "Unggah File" : "Ubah"}
            className="py-2 px-4 text-sm font-bold"
          />
        </div>
        <p className="text-gray-800/50 text-sm pt-2">*Ukuran maksimum 10MB</p>
      </div>
      <div className="mx-auto w-1/2">
        <Button
          onClick={() => {
            setShowDataConfirmation(true);
          }}
          variant="contained"
          isFullWidth
          label="Simpan"
          className="py-3 px-10 text-base"
        />
      </div>
    </div>
  );
  return (
    <div className="w-full sm:w-3/6 flex flex-col space-y-6 pt-[10%] sm:pr-[10%] sm:pl-0 px-4 z-10 transition-all">
      <div className="border-b-2 border-r p-4 bg-white/30 backdrop-blur-md rounded-[10px]">
        {simStep == 0 ? onboarding : null}
        {simStep == 1 ? form : null}
        {simStep == 2 ? loanOffer : null}
        {simStep == 3 ? lastStep : null}
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
