import Image from "next/image";
import { ReactNode } from "react";

interface IRadio {
  datas: {
    title: string;
    contents: {
      isSelected: boolean;
      imgSrc: string;
      name: string;
      child?: ReactNode
    }[];
  }[];
  onChange?: (i:number,id:number)=>void
} 
const Radio = (props: IRadio) => {
  return (
    <div className="flex-col space-y-4 sm:w-1/2">{props.datas.map((data, i: number) => {
      return (<>
       <div key={data.title + i} className="flex-col">
          <p className="text-black text-sm font-bold">{data.title}</p>
          {data.contents.map((content, id: number) => {
            return (
              <label onClick={()=>{props.onChange && props.onChange(i,  id); console.log(content.child)}} key={content.name + id} className="flex space-x-2 p-[10px] items-start  w-full cursor-pointer">
                <input type="radio"  checked={content.isSelected}/>
                <div className="flex flex-col -translate-y-1">
                  <div className="flex space-x-4 items-center justify-center">
                    <div className="h-5 w-[103px] relative justify-start items-start">
                      <Image src={content.imgSrc}
                      fill
                      objectFit="contain"
                      objectPosition="left"
                        alt='tokopedia' />
                    </div>
                    <p className="text-black text-sm">{content.name}</p>  
                  </div>
                 {content.isSelected && content?.child}
                </div>
              </label>
            );
          })}
        </div>
       {props.datas.length-1 !== i && <div className="w-full h-[1px] bg-gray-800/20"/>}
      </>
       
      );
    })}
    </div>

  );
};
export default Radio