export interface ITab {
  id: number;
  title: string;
  image: string;
}

interface IProps {
  selectedTab: ITab;
  tabs: any[];
  onClick: (tab: ITab) => void;
}
const EmergencyFundTabs = ({ tabs, selectedTab, onClick }: IProps) => {
  return (
    <div className="flex border-b">
      {tabs.map((tab) => {
        const isActive = selectedTab.id == tab.id;
        return (
          <div
            onClick={() => onClick(tab)}
            className={`${
              isActive
                ? "bg-apricot-50 text-white"
                : "bg-white hover:bg-gray-100 text-grey-10 cursor-pointer"
            } font-bold text-center items-center pb-[13px] pt-6 text-lg flex-grow "`}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};

export default EmergencyFundTabs;
