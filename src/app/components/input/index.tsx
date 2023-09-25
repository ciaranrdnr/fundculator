import React from "react";

interface IInputNumber {
  value?: any;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const InputNumber = ({
  value,
  min,
  max,
  prefix,
  suffix,
  type,
  placeholder,
  onChange,
  className,
  ...props
}: IInputNumber) => {
  return (
    <div className={className} {...props}>
      {prefix && <span>{prefix}</span>}
      <input
        value={value}
        onChange={onChange}
        type={type}
        min={min}
        max={max}
        placeholder={placeholder}
        className={`outline-none appearance-none bg-transparent ${
          suffix ? "w-8" : ""
        }`}
      />
      {suffix && <span>{suffix}</span>}
    </div>
  );
};

InputNumber.displayName = "InputNumber";

InputNumber.defaultProps = {
  type: "number",
  placeholder: 0,
};

export default InputNumber;
