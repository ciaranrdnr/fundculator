interface IChartIcon {
  size: number;
}
const ChartIcon = (props: IChartIcon) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16H6.13333C5.3866 16 5.01323 16 4.72801 16.1453C4.47713 16.2732 4.27316 16.4771 4.14532 16.728C4 17.0132 4 17.3866 4 18.1333V25.8667C4 26.6134 4 26.9868 4.14532 27.272C4.27316 27.5229 4.47713 27.7268 4.72801 27.8547C5.01323 28 5.3866 28 6.13333 28H12M12 28H20M12 28L12 11.4667C12 10.7199 12 10.3466 12.1453 10.0613C12.2732 9.81046 12.4771 9.60649 12.728 9.47866C13.0132 9.33333 13.3866 9.33333 14.1333 9.33333H17.8667C18.6134 9.33333 18.9868 9.33333 19.272 9.47866C19.5229 9.60649 19.7268 9.81046 19.8547 10.0613C20 10.3466 20 10.7199 20 11.4667V28M20 28H25.8667C26.6134 28 26.9868 28 27.272 27.8547C27.5229 27.7268 27.7268 27.5229 27.8547 27.272C28 26.9868 28 26.6134 28 25.8667V6.13333C28 5.3866 28 5.01323 27.8547 4.72801C27.7268 4.47713 27.5229 4.27316 27.272 4.14532C26.9868 4 26.6134 4 25.8667 4H22.1333C21.3866 4 21.0132 4 20.728 4.14533C20.4771 4.27316 20.2732 4.47713 20.1453 4.72801C20 5.01323 20 5.3866 20 6.13333V10.6667"
        stroke="white"
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChartIcon;