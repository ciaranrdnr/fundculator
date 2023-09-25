import Steps from "../steps";
import Button from "../button";
import UploadIcon from "@/app/assets/icons/upload";

interface ILastStep {
   dialogElement: React.ReactNode, 
   onSave: ()=>void;
   data?: string;
}


function LastStep({dialogElement,data,onSave}:ILastStep) {
  return <div className="transition-all flex flex-col space-y-6 bg-white rounded-[10px] py-8 px-6 relative">
    {dialogElement}
    <p className="text-lg text-center">Lihat Simulasi Pinjaman Anda </p>
    <Steps
      variant="horizontal"
      autoChange={false}
      selected={2}
      contents={["Isi Form", "Pilih Penawaran", "Tanda Tangan Dokumen"]} />
    <p className="text-gray-800 font-bold text-lg">
      Silahkan unggah tanda tangan Anda
    </p>
    <div>
      <div className="border rounded-lg border-blue border-dashed flex flex-col items-center space-y-4 py-10">
        <UploadIcon size={32} />
        <p className="text-gray-800/50 text-sm">Unggah file Anda di sini</p>
        <Button
          variant="outlined-blue"
          label={data == undefined ? "Unggah File" : "Ubah"}
          className="py-2 px-4 text-sm font-bold" />
      </div>
      <p className="text-gray-800/50 text-sm pt-2">*Ukuran maksimum 10MB</p>
    </div>
    <div className="mx-auto w-1/2">
      <Button
        onClick={onSave}
        variant="contained"
        isFullWidth
        label="Simpan"
        className="py-3 px-10 text-base" />
    </div>
  </div>;
}


export default LastStep