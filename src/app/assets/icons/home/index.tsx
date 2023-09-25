interface IHomeIcon {
  size: number
}
const HomeIcon = (props: IHomeIcon) => {
  return (
    <svg className="flex-none z-10" width={props.size} height={props.size} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_83583)">
      <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13.5475 14.5556V15.4445C13.5475 16.1111 12.9814 16.6667 12.3022 16.6667H3.47199C3.01916 16.6667 2.56633 16.4445 2.45312 16.1111C2.56633 15.6667 2.79275 15.2222 3.24558 14.6667C3.92482 13.7778 5.28331 13.3333 6.07577 13.2222C6.18897 13.2222 6.18897 13.2222 6.30218 13.2222C7.20784 13.3333 8.1135 13.3333 8.67954 13.2222C9.13237 13.1111 9.47199 12.8889 9.92482 12.5556C10.4909 12.2222 11.1701 12 12.189 12.3333C12.9814 12.6667 13.4343 13.5556 13.5475 14.5556Z" fill="white"/>
      <path d="M11.6229 7.00004L13.6606 8.5556V15.3334C13.6606 16 13.0946 16.5556 12.4153 16.5556H3.58513C3.1323 16.5556 2.67947 16.3334 2.56626 16C2.45305 15.7778 2.33984 15.5556 2.33984 15.3334V8.66671L8.00022 4.33337L9.69833 5.66671" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.07617 16.6667V10.4445H9.92523V16.6667" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_1_83583">
      <rect width="12" height="13" fill="white" transform="translate(2 4)"/>
      </clipPath>
      </defs>
    </svg>

  );
};

HomeIcon.displayName = 'HomeIcon';

HomeIcon.defaultProps = {
};

export default HomeIcon;