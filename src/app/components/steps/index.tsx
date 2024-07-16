"use client";
import CheckedIcon from "@/app/assets/icons/checked";
import PlusIcon from "@/app/assets/icons/minus";
import MinusIcon from "@/app/assets/icons/plus";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

interface ISteps {
  contents: any[];
  selected?: number;
  autoChange?: boolean;
  variant?: "vertical" | "horizontal";

  onClick?: MouseEventHandler<HTMLDivElement>;
  onChange?: (e: any) => void;

  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
const Steps = (props: ISteps) => {
  const defaultClass = `flex flex-col rounded-lg items-start cursor-pointer ease-in transition-colors border sm:px-6 sm:py-4`;
  const contentRefs = useRef<any>([]);

  switch (props.variant) {
    case "horizontal":
      return (
        <div
          className={`flex items-center justify-evenly ${
            props.className ?? ""
          }`}
        >
          {props.contents.map((content, idx: number) => {
            let num = idx + 1;
            const isActive = props.selected == idx;

            return (
              <>
                <div
                  onClick={() => {
                    props.onChange && props.onChange(idx);
                  }}
                  className={`flex  w-fit items-center`}
                  key={idx + content.image}
                >
                  <div className="flex space-x-1 items-center">
                    {props.selected && props.selected > idx ? (
                      <CheckedIcon size={32} />
                    ) : (
                      <div
                        className={`border flex-none ${
                          isActive
                            ? "bg-green-50 border-green-50 text-white"
                            : "bg-transparent border-black text-black"
                        } w-6 h-6 rounded-full text-center text-sm `}
                      >
                        {num}
                      </div>
                    )}
                    <p
                      className={` ${
                        isActive ? "text-green-50" : "text-black/50"
                      } font-bold text-sm flex-none max-w-[120px]`}
                    >
                      {content.desc}
                    </p>
                  </div>
                </div>
                {idx !== props.contents.length - 1 && (
                  <div className="flex-none h-0.5 bg-black/30 w-7" />
                )}
              </>
            );
          })}
        </div>
      );

    default:
      return (
        <div className={`flex flex-col gap-4 ${props.className ?? ""} `}>
          {props.contents.map((content, idx: number) => {
            const isActive = props.selected == idx;
            return (
              <div
                onClick={() => {
                  props.onChange && props.onChange(isActive ? undefined : idx);
                }}
                className={`${defaultClass} ${
                  isActive
                    ? "border-apricot-50 drop-shadow-[-16px_12px_16px_rgb(0,0,0,0.1)] bg-white"
                    : "border-grey-10"
                }`}
                key={idx + content.image}
              >
                <div className="text-xl sm:text-2xl font-bold flex justify-between w-full">
                  <h3>{content.title}</h3>
                  <span
                    className={`transform transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  >
                    {isActive ? (
                      <MinusIcon size={32} />
                    ) : (
                      <PlusIcon size={32} />
                    )}
                  </span>
                </div>
                <div
                  ref={(el) => (contentRefs.current[idx] = el)}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? "pt-4" : ""
                  }`}
                  style={{ maxHeight: isActive ? "100vh" : "0px" }}
                >
                  <p className="text-sm sm:text-base text text-grey-50">
                    {content.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      );
  }
};
Steps.displayName = "Steps";

Steps.defaultProps = {
  autoChange: true,
  variant: "vertical",
};

export default Steps;
