interface IMinusIcon {
  size: number;
}
const MinusIcon = (props: IMinusIcon) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox={`0 0 ${props.size} ${props.size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66669 16H25.3334"
        stroke="#F58220"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinusIcon;
