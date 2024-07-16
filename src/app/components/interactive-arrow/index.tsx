import ArrowIcon from "@/app/assets/icons/arrow";

interface IInteractiveArrow {
  className?: string;
  color?: string;
}
const InteractiveArrow = (props: IInteractiveArrow) => {
  return (
    <div
      className={`flex ${
        props.className ?? "opacity-70 text-white"
      } justify-center space-x-2 animate-[bounce_1.5s_ease-in-out_infinite] z-20`}
    >
      <ArrowIcon size={24} color={props.color ?? "#ffffff"} />
      <p className="text-base">Anda dapat berinteraksi pada tampilan ini</p>
    </div>
  );
};

export default InteractiveArrow;
