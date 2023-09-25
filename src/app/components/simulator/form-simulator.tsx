  "use client";
  import Button from "../button";
  import Input from "../input";
  import Steps from "../steps";
  import { IData } from ".";

  interface IFormSimulator {
  dialogElement: React.ReactNode,
  onSave: ()=> void, 
  data: IData, 
  setData: any
  }
const FormSimulator = ({
    dialogElement,
    data,
    setData,
    onSave,
    }:IFormSimulator) => {
    return( <div className="transition-all flex relative flex-col space-y-6 bg-white rounded-[10px] py-8 px-6 text-black">
     {dialogElement}
      <Steps
        variant="horizontal"
        autoChange={false}
        selected={0}
        contents={["Isi Form", "Pilih Penawaran", "Tanda Tangan Dokumen"]} />
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
          className={`flex ${data.name ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
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
          className={`w-full flex ${data.address ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
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
            className={`w-full flex ${data.birthdate ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
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
            className={`w-full flex ${data.phone ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
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
            className={`w-full flex ${data.companyPhone ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
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
            className={`w-full flex ${data.ktp ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
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
            className={`w-full flex ${data.npwp ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
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
            className={`w-full flex ${data.totalLoan ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
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
          className={`w-full flex ${data.companyName ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
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
          className={`w-full flex ${data.companyAddress ? "text-black" : "text-tertiary"} focus-within:text-black space-x-2 text-sm border-b pb-1`} />
      </div>

      <p className="text-base text-left font-bold">Unggah Dokumen Pribadi</p>
      <div className="flex sm:flex-row flex-col space-y-6 sm:space-x-6 sm:space-y-0">
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
            className="py-2 px-10 text-sm" />
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
            className="py-2 px-10 text-sm" />
        </div>
      </div>

      <div className="mx-auto w-1/2">
        <Button
          onClick={onSave}
          variant="contained"
          isFullWidth
          label="Simpan"
          isDisabled={!!!data.name}
          className="py-3 px-10 text-base" />
      </div>
    </div>);
  }
  export default FormSimulator
