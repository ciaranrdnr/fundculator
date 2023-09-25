interface ICrossIcon {
  size: number;
  color: string;
}
const CrossIcon = (props: ICrossIcon) => {
  return (
    <svg   width={props.size} height={props.size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6.5L6 18.5" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 18.5L6 6.5" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

CrossIcon.displayName = "CrossIcon";

CrossIcon.defaultProps = {};

export default CrossIcon;
