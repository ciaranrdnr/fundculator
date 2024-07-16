interface IPlusIcon {
  size: number;
}
const PlusIcon = (props: IPlusIcon) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox={`0 0 ${props.size} ${props.size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 6.66663V25.3333M6.66669 16H25.3334"
        stroke="#313233"
        stroke-width="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
