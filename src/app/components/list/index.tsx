import CheckedIcon from "@/app/assets/icons/checked";

interface IList {
  content: {
    title: string;
    desc: string;
  }[];
}
const List = (props: IList) => {
  return (
    <div className="w-3/5 flex flex-col space-y-12 pl-[10%] pt-[10%]">
      {props.content.map((content, idx: number) => {
        const lastIdx = props.content.length == idx + 1;
        return (
          <div className="flex space-x-4" key={content.title + idx}>
            <div className="flex flex-col items-center">
              <CheckedIcon size={48} />
              {!lastIdx && (
                <div className="bg-gray-300 w-0.5 h-[120%] -translate-y-4 flex-none" />
              )}
            </div>
            <div className="flex flex-col space-y-[14px] text-black">
              <p className="text-[26px] font-bold">{content.title}</p>
              <p className="text-xl">{content.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default List;
