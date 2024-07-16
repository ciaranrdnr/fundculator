"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ISlideshow {
  contents: any[];
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
    <div className="flex flex-col items-center sm:w-1/2 px-4 h-full pt-5">
      <div className="max-h-[296px] sm:max-h-[556px] overflow-clip rounded-2xl">
        <div
          className="transition-transform ease-out delay-150"
          style={{ transform: `translateY(-${position}px)` }}
        >
          {props.contents.map((content, idx: number) => {
            return (
              <div key={content.image + idx} className="h-[556px]">
                <Image
                  draggable={false}
                  src={content.image}
                  width={380}
                  height={495}
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
