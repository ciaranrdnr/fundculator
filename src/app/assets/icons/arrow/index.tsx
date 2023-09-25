interface IArrowIcon {
  size: number;
  color: string;
}
const ArrowIcon = (props: IArrowIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 19V5M12 5L5 12M12 5L19 12"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowIcon.displayName = "ArrowIcon";

ArrowIcon.defaultProps = {};

export default ArrowIcon;
