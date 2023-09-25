interface IUploadIcon {
  size: number
}
const UploadIcon = (props: IUploadIcon) => {
  return (
    <svg className="flex-none z-10" width={props.size} height={props.size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M4.66663 24.2671V24.4004C4.66663 25.6004 5.59996 26.5338 6.66663 26.5338H25.0666C26.1333 26.5338 27.0666 25.6004 27.0666 24.5338V19.0671C26.4 18.5338 25.6 18.2671 24.8 17.8671C22.2666 17.0671 19.6 17.2004 17.2 18.5338C15.7333 19.7338 14.2666 20.6671 12.5333 21.3338C10.2666 22.0004 6.93329 19.2004 4.66663 23.2004C4.79996 23.4671 4.79996 23.8671 4.66663 24.2671Z" fill="#4199D5"/>
      <path d="M27.3333 18.9336V24.1336C27.3333 25.6003 26.2666 26.6669 24.8 26.6669H7.19996C5.73329 26.6669 4.66663 25.4669 4.66663 24.1336V18.9336" stroke="#4199D5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.86633 11.7334L15.2777 6.08678C15.6714 5.67598 16.328 5.67598 16.7217 6.08678L22.133 11.7334" stroke="#4199D5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0001 6.53353V19.2002" stroke="#4199D5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

UploadIcon.displayName = 'UploadIcon';

UploadIcon.defaultProps = {
};

export default UploadIcon;