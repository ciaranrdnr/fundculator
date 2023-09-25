"use client";
import CheckedIcon from "@/app/assets/icons/checked";
import { MouseEventHandler, useEffect } from "react";

interface ISteps {
  contents: string[];
  selected: number;
  autoChange?: boolean;
  variant?: "vertical" | "horizontal";

  onClick?: MouseEventHandler<HTMLDivElement>;
  onChange?: (e: any) => void;

  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
const Steps = (props: ISteps) => {
  const defaultClass = `flex space-x-5 p-[22px] rounded-[10px] items-center cursor-pointer ease-in transition-colors`;

  const autoChange = () => {
    const lastIdx = props.contents.length - 1;
    setTimeout(() => {
      if (props.selected == lastIdx) {
        props.onChange && props.onChange(0);
      } else {
        props.onChange && props.onChange(props.selected + 1);
      }
    }, 3000);
  };

  useEffect(() => {
    autoChange();
  }, [props.selected]);

  switch (props.variant) {
    case "horizontal":
      return (
        <div
          className={`flex items-center justify-evenly ${
            props.className ?? ""
          }`}
        >
          {props.contents.map((data, idx: number) => {
            let num = idx + 1;
            return (
              <>
                <div
                  onClick={() => {
                    props.onChange && props.onChange(idx);
                  }}
                  className={`flex  w-fit items-center`}
                  key={idx + data}
                >
                  <div className="flex space-x-1 items-center">
                    {props.selected > idx ? (
                      <CheckedIcon size={32} />
                    ) : (
                      <div
                        className={`border flex-none ${
                          props.selected == idx
                            ? "bg-green-50 border-green-50 text-white"
                            : "bg-transparent border-black text-black"
                        } w-6 h-6 rounded-full text-center text-sm `}
                      >
                        {num}
                      </div>
                    )}
                    <p
                      className={` ${
                        props.selected == idx
                          ? "text-green-50"
                          : "text-black/50"
                      } font-bold text-sm flex-none max-w-[120px]`}
                    >
                      {data}
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
        <div
          className={`flex flex-col space-y-[18px] ${props.className ?? ""}`}
        >
          {props.contents.map((data, idx: number) => {
            let num = idx + 1;
            return (
              <div
                onClick={() => {
                  props.onChange && props.onChange(idx);
                }}
                className={`${defaultClass} ${
                  props.selected == idx
                    ? "bg-blue text-white"
                    : "bg-white text-navy hover:bg-blue/10"
                }`}
                key={idx + data}
              >
                <span className="text-xl sm:text-5xl">{num}</span>
                <p className="text-sm sm:text-xl">{data}</p>
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
