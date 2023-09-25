import Image from "next/image";
import InputNumber from "../input";
import Steps from "../steps";
import Button from "../button";
import { IData } from ".";

interface ILoanOffer {
    totalLoan: number, 
    onSave: any, 
    data: IData
}

const LoanOffer = ({
  data,
  onSave,
  totalLoan
}:ILoanOffer)=> {
  return( 
  <div className="transition-all flex flex-col space-y-6 bg-white rounded-[10px] py-8 px-6">
    <Steps
      variant="horizontal"
      autoChange={false}
      selected={1}
      contents={["Isi Form", "Pilih Penawaran", "Tanda Tangan Dokumen"]} />
    <div className="flex flex-col space-y-2">
      <p className="text-blue/50 pl-4 ">Jumlah Pinjaman</p>
      <InputNumber
        prefix="Rp"
        value={totalLoan}
        className={`flex ${totalLoan ? "text-blue" : "text-tertiary"} focus-within:text-blue space-x-2 text-2xl font-bold pl-4`} />
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
                height={24} />
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
                height={24} />
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
        onClick={onSave}
        isFullWidth
        variant="contained"
        label="Simpan"
        isDisabled={!!data?.offer}
        className="py-3 px-10 text-base" />
    </div>
  </div>);
}
export default LoanOffer