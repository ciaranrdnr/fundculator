import React from "react";

type TButtonVariants = "contained" | "outlined" | "outlined-blue";

interface IButton {
  ariaAttributes?: React.AriaAttributes;
  label?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isCapitalize?: boolean;
  isFullWidth?: boolean;
  variant: TButtonVariants;

  onClick?: (e: any) => void;
  onBlur?: () => void;
  onFocus?: () => void;

  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Button = React.forwardRef(
  (
    {
      ariaAttributes,
      label,
      type,
      isDisabled,
      isCapitalize,
      isFullWidth,
      variant,
      onClick,
      onBlur,
      onFocus,
      className,
      id,
      style,
    }: IButton,
    ref: React.LegacyRef<HTMLButtonElement>
  ) => {
    const defaultClass =
      "align-middle justify-center items-center cursor-pointer text-lg";
    const disabledClass =
      "bg-[#E0E4E7] text-[#9AA6B0] border-2 border-green-[#E0E4E7] cursor-default";
    const variantClass = {
      contained:
        "text-white bg-green-50 border-2 border-green-50 transition ease-in-out delay-150 hover:text-green-50 hover:bg-transparent",
      outlined:
        "text-green-50 border-2 border-green-50 transition ease-in-out delay-150 hover:text-white hover:bg-green-50",
      "outlined-blue":
        "text-blue border-2 border-blue transition ease-in-out delay-150 hover:bg-blue/10",
    };
    return (
      <button
        disabled={isDisabled}
        ref={ref}
        style={style}
        className={`rounded-full ${defaultClass} ${
          isCapitalize ? "capitalize" : ""
        }  ${isFullWidth ? "w-full" : ""} ${
          isDisabled ? disabledClass : variantClass[variant]
        } ${className}`}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        id={id}
        type={type}
        {...ariaAttributes}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";

Button.defaultProps = {
  isCapitalize: false,
};

export default Button;
