import React from "react";

type TButtonVariants = "contained" | "outlined" | "outlined-blue";

interface IButton {
  ariaAttributes?: React.AriaAttributes;
  label?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
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
      "align-middle justify-center items-center cursor-pointer text-sm desktop-sm:text-base rounded-lg";
    const disabledClass =
      "bg-grey-10 text-white border-2 border-grey-10 !cursor-default";
    const variantClass = {
      contained:
        "text-white bg-apricot-50 border-2 border-apricot-50 transition ease-in-out delay-150 hover:bg-apricot-100/80",
      outlined:
        "text-apricot-50 border-2 border-apricot-50 transition ease-in-out delay-150 hover:bg-apricot-50/10",
      "outlined-blue":
        "text-blue border-2 border-blue transition ease-in-out delay-150 hover:bg-blue/10",
    };
    return (
      <button
        disabled={isDisabled}
        ref={ref}
        style={style}
        className={`${defaultClass} ${isFullWidth ? "w-full" : ""} ${
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

export default Button;
