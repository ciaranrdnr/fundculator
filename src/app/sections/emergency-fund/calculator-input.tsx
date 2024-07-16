"use client";
import { useEffect, useState } from "react";
import { moneyDot } from "@/helper";
import NumericKeyboard from "@/app/components/numeric-keyboard/index";

export interface ICalculatorInputProps {
  title: string;
  range: { min: number; max: number };
  getValue?: (value?: number) => void;
  variant?: "percentage" | "years" | "money";
  defaultValue?: number;
}

const CalculatorInput = ({
  range,
  title,
  getValue,
  variant,
  defaultValue,
}: ICalculatorInputProps) => {
  const [value, setValue] = useState(defaultValue || range.min);

  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  const toggleKeyboard = (isVisible: boolean) => {
    setKeyboardVisible(isVisible);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value.replace(/\./g, ""), 10);
    if (isMoney || (!isNaN(newValue) && newValue <= range.max)) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    defaultValue && setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (getValue) {
      getValue(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  const sliderClass = `
    w-full appearance-none cursor-pointer rounded-full 
    [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-grey-10/25
    [&::-ms-track]:cursor-pointer
    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 
    [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-none 
    [&::-webkit-slider-thumb]:rotate-45 [&::-webkit-slider-thumb]:bg-white
    [&::-webkit-slider-thumb]:outline-2 [&::-webkit-slider-thumb]:outline
    [&::-webkit-slider-thumb]:hover:cursor-grab [&::-webkit-slider-thumb]:focus:cursor-grabbing
    [&::-webkit-slider-thumb]:outline-navy z-10
  `;

  const isYears = variant === "years";
  const isMoney = variant === "money";
  const prefix = isMoney ? "Rp" : "";
  const suffix = `${variant === "percentage" ? "%" : ""} ${
    isYears ? "Tahun" : ""
  }`;
  const label = `${prefix}${isMoney ? moneyDot(value) : value}${suffix}`;
  const labelMin = `${prefix}${
    isMoney ? moneyDot(range.min) : range.min
  }${suffix}`;
  const labelMax = `${prefix}${
    isMoney ? moneyDot(range.max) : range.max
  }${suffix}`;
  const previewPosition = Math.min((value / range.max) * 100, 100);

  const handleKeyPress = (key: string) => {
    if (key === "delete") {
      setValue((prevValue) => {
        const stringValue = prevValue.toString();
        if (stringValue.length > 1) {
          return parseInt(stringValue.slice(0, -1), 10);
        } else {
          return range.min;
        }
      });
    } else {
      setValue((prevValue) => parseInt(`${prevValue}${key}`));
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full items-start justify-start desktop-sm:items-center gap-2">
          <p className="text-base capitalize font-medium text-left">{title}</p>
          <div className="border px-4 py-2 flex justify-between rounded-lg focus-within:border-grey-10 w-full sm:w-fit">
            {isMoney ? <p className="text-grey-10">Rp</p> : ""}
            <input
              onFocus={() => toggleKeyboard(true)}
              value={isMoney ? moneyDot(value) : value}
              max={isMoney ? undefined : range.max}
              min={range.min}
              onChange={handleInputChange}
              className="items-end text-right outline-none font-bold text-xl w-full"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center text-xs">
            <div className="flex w-full justify-between">
              <div
                className={`${
                  range.min == value
                    ? "bg-navy text-white"
                    : "bg-grey-10/25 text-grey-10"
                } items-center justify-center text-xs flex min-w-fit px-2 -translate-y-2`}
              >
                <p className="line-clamp-1 flex-none mx-2">{labelMin}</p>
              </div>
              <div
                className={`${
                  range.max == value
                    ? "bg-navy text-white"
                    : "bg-grey-10/25 text-grey-10"
                } items-center justify-center text-xs flex min-w-fit px-2 -translate-y-2`}
              >
                <p className="line-clamp-1 flex-none mx-2">{labelMax}</p>
              </div>
            </div>
            <div className="relative w-full">
              <input
                type="range"
                min={range.min}
                max={range.max}
                value={value}
                step={range.max / 20}
                onChange={handleChange}
                className={sliderClass}
              />
              {range.min !== value && range.max !== value && (
                <div
                  className="absolute -top-1 -translate-y-5 bg-navy items-center justify-center text-white text-xs flex -translate-x-[50%] min-w-fit px-2"
                  style={{ left: `calc(${previewPosition}%)` }}
                >
                  <p className="line-clamp-1 flex-none mx-2">{label}</p>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <div className="absolute -top-1 left-0 right-0 flex justify-between z-0 translate-x-1 pr-2">
                {Array.from({
                  length: isYears ? range.max - range.min + 1 : 21,
                }).map((_, index) => {
                  const showNumber = isYears || index % 5 === 0;
                  const number = isYears
                    ? index + range.min
                    : (index / 20) * range.max;
                  const isMinMaxHalf =
                    range.max == number ||
                    range.min == number ||
                    range.max / 2 == number;

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center relative"
                    >
                      <div
                        className={`w-0.5 ${
                          showNumber ? "h-3" : "h-1.5"
                        } bg-grey-10`}
                      />
                      <p
                        className={`${
                          isMoney && !isMinMaxHalf
                            ? "hidden"
                            : "absolute bottom-0"
                        } translate-y-5 text-grey-25`}
                      >
                        {showNumber
                          ? isMoney
                            ? moneyDot(number)
                            : number.toFixed(0)
                          : ""}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {keyboardVisible && (
        <NumericKeyboard
          onClose={() => toggleKeyboard(false)}
          onKeyPress={handleKeyPress}
        />
      )}
    </>
  );
};

export default CalculatorInput;
