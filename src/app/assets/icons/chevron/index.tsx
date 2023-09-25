interface IChevronIcon {
  size: number;
  color: string;
}
const ChevronIcon = (props: IChevronIcon) => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9.5L5 5.5L1 1.5" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

ChevronIcon.displayName = "ChevronIcon";

ChevronIcon.defaultProps = {};

export default ChevronIcon;
