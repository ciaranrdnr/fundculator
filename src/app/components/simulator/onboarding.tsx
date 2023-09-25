"use client";
import { ChangeEventHandler } from "react";
import Button from "../button";
import Input from "../input";

interface IOnboarding {
   totalLoan: number, 
   onChangeLoan: ChangeEventHandler<HTMLInputElement>, 
   onChangeFee: ChangeEventHandler<HTMLInputElement>, 
   onRegis?: ((e: any) => void) , 
   fee: number, 
}

const Onboarding = ({
  fee,
  onChangeLoan,
  onChangeFee,
  onRegis,
  totalLoan
  }: IOnboarding) => {
  return <div className="transition-all flex flex-col space-y-6 bg-white rounded-[10px] py-8 px-6">
    <p className="text-lg text-center">Lihat Simulasi Pinjaman Anda</p>
    <div className="flex flex-col space-y-2">
      <p>Jumlah Pinjaman</p>
      <Input
        prefix="Rp"
        value={totalLoan}
        onChange={onChangeLoan}
        className={`flex ${totalLoan ? "text-blue" : "text-tertiary"} focus-within:text-blue space-x-2 text-2xl`} />
    </div>
    <div className="flex flex-col space-y-2">
      <p>Estimasi Fee</p>
      <Input
        suffix="%"
        placeholder="0"
        value={fee}
        onChange={onChangeFee}
        className={`flex max-w-[7px] w-7 ${fee ? "text-blue" : "text-tertiary"} focus-within:text-blue space-x-2 text-2xl`} />
    </div>
    <div className="mx-auto sm:w-1/2">
      <Button
        onClick={onRegis}
        isFullWidth
        variant="contained"
        label="Daftar Sekarang!"
        isDisabled={totalLoan <= 0}
        className="py-3 px-10 text-base" />
    </div>
  </div>;
}
export default Onboarding
