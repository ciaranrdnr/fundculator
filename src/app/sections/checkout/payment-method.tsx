"use client";
import CrossIcon from "@/app/assets/icons/cross"
import Radio from "@/app/components/radio"
import { useEffect, useState } from "react"
import { initial } from "./data"
import VoucherIcon from "@/app/assets/icons/voucher";
import ChevronIcon from "@/app/assets/icons/chevron";
import Button from "@/app/components/button";
import Image from "next/image";

interface IPaymentMethod {
  onClose: (e?:any) => void
  onPay: (e?:any) => void
}
const PaymentMethod = (props:IPaymentMethod)=>{
  const [data,setData] = useState(initial)
  const [showLoad,setShowLoad] = useState(false)
  const [selected,setSelected]= useState<any[]>([null,null])
  useEffect(()=>{
    if(showLoad){
      setTimeout(()=>{
        setShowLoad(false)
        props.onPay()
    },5000)}
  },[showLoad])
  return(
   <div className="transition-all fixed top-0 bg-black/80 w-full h-full z-30 flex items-center justify-center">
      <div className="relative transition-all bg-white w-5/6 sm:w-1/2 min-h-[50vh] rounded-2xl flex flex-col px-10 pb-10 pt-[10px]">
      {showLoad &&  <div className="absolute w-full h-full bg-white/80 rounded-2xl top-0 left-0 z-40 flex items-center  justify-center text-black/80">
          <div  className="flex flex-col items-center space-y-10">
            <div className="animate-[spin_2s_linear_infinite] w-[40px] h-[40px] sm:w-[104px] sm:h-[104px]">
             <Image src={'/load.png'} width={104} height={104} alt="" />
            </div>
            <p className="text-base">Mohon menunggu. Transaksi Anda sedang diproses</p>
          </div>
        </div>}
        <div className="flex justify-end py-2">
          <button onClick={props.onClose}>
             <CrossIcon size={24} color="#8695A1"/>
          </button>
          </div>
        <div className="flex flex-col space-y-2 pb-7">
          <p className="bg-cyan-100/50 p-1 rounded-sm text-blue text-sm w-fit">Payment Paper</p>
          <p className="text-black text-xl">Pilih metode pembayaran</p>
        </div>
        <div className="flex sm:space-x-10 sm:flex-row flex-col">
          <Radio onChange={(i,id)=>{
            const newData = [...data];
            newData.forEach(category => {
              category.contents.forEach(content => {
                content.isSelected = false;
              });
            });
            newData[i].contents[id].isSelected = true;
            setSelected([i,id])
            setData(newData);
             }}   
            datas={data}/>
            <div className="flex flex-col sm:w-1/2 space-y-6">
              <button className="flex p-[10px] border rounded-[5px] justify-between  items-center">
                <div className="flex space-x-[10px]">
                  <VoucherIcon size={24}/>
                   <p>Gunakan promo</p>
                </div>
                <ChevronIcon size={12} color="#000000"/>
              </button>
              <div className="flex flex-col space-y-4">
                <p className="font-bold text-sm">Rincian Pembayaran</p>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between text-xs">
                    <p>Subtotal</p>
                    <p>Rp 5.000.000</p>
                  </div>
                  <div className="w-full bg-gray-200 h-[1px]"/>
                  <div className="flex font-bold justify-between text-sm">
                    <p className="">Total Pembayaran</p>
                    <p className="text-blue">Rp 5.000.000</p>
                  </div>
                </div>
              </div>
              <Button
              onClick={()=>{setShowLoad(true)}}
              variant="contained" label='Bayar Sekarang' isDisabled={selected[1] == null
              } className="font-sm py-3"/>
            </div>
        </div>
      </div>
   </div>
  )
}

export default PaymentMethod