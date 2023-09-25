import CrossIcon from "@/app/assets/icons/cross";
import Button from "@/app/components/button";
import ConfirmationDialog from "@/app/components/confirmation-dialog";
import { useState } from "react";

interface IApprovementDialog {
  onFinish: (e?:any)=>void
}
const ApprovementDialog= (props:IApprovementDialog)=>{
  const contentDialog = {
      title: "Siap untuk mencoba Paper.id?",
      desc: "Paper.id  dapat membantu Anda mendapatkan pembayaran lebih cepat untuk bisnis Anda!",
      imgUrl: "/partner.png",
      label: "Selesai",
      onClick: props.onFinish,
    }
  const [showContent, setShowContent] = useState(0)
  switch (showContent) {
    case 0:
       return(
        <div className="transition-all fixed top-0 bg-black/80 w-full h-full z-30 flex items-center justify-center">
          <div className="relative transition-all bg-gradient-to-br shadow-lg from-[#2e7bb6] from-0%  to-[#133F5D] to-100% sm:m-0 mx-4 sm:w-2/5 min-h-[50vh] rounded-2xl flex flex-col px-10 pb-10 space-y-5 pt-[10px]">
            <div className="flex justify-end py-2">
              <button onClick={()=>{}}>
                <CrossIcon size={24} color="#cccccc"/>
              </button>
            </div>
            <div className="flex flex-col text-center text-white space-y-1
            ">
              <p className="font-bold text-lg">Selamat, Pembayaran Anda Berhasil</p>
              <p className="text-sm">Pembayaran sudah diterima oleh Paper.id dan dana akan diteruskan ke rekening penerima dengan rincian sebagai berikut:</p>
            </div>

            <div className="flex flex-col space-y-[10px] items-center">
              <div className="bg-white w-full p-5 text-black flex flex-col space-y-[14px] rounded-[10px]">
                <div className="flex justify-between font-bold ">
                  <p className="text-black/50">Nominal Transaksi</p>
                  <p>Rp 5,000,000.00</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-black/50">Admin Fee</p>
                  <p>Rp 2,090.00</p>
                </div>
                <div className="flex justify-between font-bold">
                  <p className="text-black/50">Total Bayar</p>
                  <p>Rp 5,002,090.00</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-black/50">Tanggal Pembayaran</p>
                  <p>12 Juni 2023 - 12:17:17</p>
                </div>
              </div>

              <div className="bg-white w-full p-5 flex flex-col space-y-[14px] rounded-[10px]">
                <div className="flex justify-between">
                  <p className="text-black/50">Metode Pembayaran</p>
                  <p>Paper Usaha - KoinWorks</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-black/50">Sisa Limit</p>
                  <p className="text-blue font-bold">Rp 5,000,000.00</p>
                </div>
              </div>
              <div className="pt-8">
                <Button
                onClick={()=>{setShowContent(1)}}
                variant="contained"
                label='Baik, Saya Mengerti' 
                className="px-5 py-3"/>
              </div>
            </div>
          </div>
          </div>
      )
  
    default:
      return(
        <ConfirmationDialog
          footer={
            <p className="text-white/50 text-[13px]">Hubungi kami <b>0821-1767-9137</b> </p>
          }
          className={{overlay:"p-0 z-40 rounded-none", inside:"px-4 py-6 w-[320px]"}}
          {...contentDialog}
        />
      )
  }
 
}
export default ApprovementDialog;