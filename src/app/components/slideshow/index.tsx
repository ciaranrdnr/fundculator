"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ISlideshow {
  urls: string[];
  active: number;
}

const Slideshow = (props: ISlideshow) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (props.active !== URLSearchParams.length - 1) {
      setPosition(props.active * 556);
    } else {
      setPosition(0);
    }
  }, [props.active]);
  return (
    <div className="flex flex-col items-center sm:w-1/2 px-4 h-full translate-y-20">
      <div className="max-h-[296px] sm:max-h-[556px] overflow-hidden">
        <div
          className="transition-transform"
          style={{ transform: `translateY(-${position}px)` }}
        >
          {props.urls.map((url, idx: number) => {
            return (
              <div key={url + idx} className="h-[556px]">
                <Image
                  draggable={false}
                  src={url}
                  width={600}
                  height={556}
                  objectFit="contain"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Slideshow;
