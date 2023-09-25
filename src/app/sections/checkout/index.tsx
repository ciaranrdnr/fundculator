"use client";
import Button from "@/app/components/button";
import InteractiveArrow from "@/app/components/interactive-arrow";
import Image from "next/image";
import PaymentMethod from "./payment-method";
import { useState } from "react";
import ApprovementDialog from "./approvement";

const CheckoutSection = () => {
  const [showDialog, setShowDialog] = useState(false)
  const [showApprovement, setShowApprovement] = useState(false)
  return (
    <section className="checkout flex relative mt-24 b-0 sm:pb-40  sm:min-h-screen">
     {showDialog && <PaymentMethod onPay={()=>{setShowDialog(false);setShowApprovement(true)}} onClose={()=>{setShowDialog(false)}} />}
     {showApprovement && <ApprovementDialog onFinish={()=>{setShowApprovement(false); }}/>}
      <div className="flex sm:flex-row flex-col items-center sm:space-x-14 px-[10%]">
        <h3 className="text-navy text-3xl sm:w-1/2 sm:text-5xl sm:leading-[72px] text-left font-bold">
          Lihat Simulasi Penggunaan Limit yang Diberikan!
        </h3>
        <div className="w-full sm:w-[50vw] items-center relative sm:h-[20vw]">
          <div className="mx-auto z-10 sm:w-1/2 flex flex-col space-y-6">
            <div className="space-y-4 flex-col p-6 sm:-translate-y-10 bg-white rounded-[5px] shadow-lg z-[11]">
               <Image
                src={"/lamp.png"}
                alt=""
                width={600}
                height={0}
                style={{ width: "100%", height: "auto" }}
               />
              <p className="text-black font-bold text-2xl">EVEDAL Night Lamp</p>
              <div className="flex flex-col space-y-8">
                  <div className="flex justify-between items-center">
                  <p className="text-blue font-bold text-2xl">Rp5.000.000</p>
                  <div className="flex space-x-4">
                    <p className="font-bold text-blue">-</p>
                    <p>50</p>
                    <p className="font-bold text-blue">+</p>
                  </div>
                </div>
                <Button variant="contained" onClick={()=>{setShowDialog(true)}} isFullWidth label='Bayar Sekarang' className="font-bold py-[9px]"/>
              </div>
            </div>
            <InteractiveArrow className="text-black/50" color="#bbbbbb"/>
          </div>
            <Image
              className="z-0"
              src={"/bg-checkout.png"}
              alt=""
              fill
            />
          </div>
      </div>
      
    </section>
  );
};
export default CheckoutSection;
