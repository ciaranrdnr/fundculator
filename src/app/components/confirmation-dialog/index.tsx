"use client";
import Button from "../button";
import Image from "next/image";

interface IConfirmationDialog{ 
  title:string, 
  desc:string, 
  imgUrl: string, 
  onClick: (e?: any)=>void, 
  label: string, 
  footer?: React.ReactNode
  className?: {
    overlay?: string
    inside?: string
  } 
}

const ConfirmationDialog = ({ title, desc, imgUrl, onClick, label, footer, className }: IConfirmationDialog) => {
  return (
    <div className={`transition-all fixed text-white top-0 left-0 w-full h-full ${className?.overlay ??'p-4 py-4'} z-20`}>
      <div className=" flex  items-center justify-center bg-black/80 rounded-[10px] w-full h-full ">
        <div className={`${className?.inside ??'w-2/3 py-6 px-4'} flex flex-col space-y-6 items-center rounded-[10px] bg-gradient-to-br  from-[#377cb1] from-0% to-[#133F5D] to-100%`}>
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
            objectFit="contain" />
          <Button
            onClick={onClick}
            isFullWidth
            variant="contained"
            label={label}
            className="py-[10px] text-sm" />
          {footer}
        </div>
      </div>
    </div>
  );
};
export default ConfirmationDialog