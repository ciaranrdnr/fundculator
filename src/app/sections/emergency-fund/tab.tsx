export interface ITab {
  id: number;
  title: string;
  image: string;
}

interface IProps {
  selectedTab: ITab;
  tabs: ITab[];
  onClick: (tab: ITab) => void;
}
const EmergencyFundTabs = ({ tabs, selectedTab, onClick }: IProps) => {
  return (
    <div className="flex border-b overflow-x-auto no-scrollbar">
      {tabs.map((tab) => {
        const isActive = selectedTab.id == tab.id;
        return (
          <div
            key={tab.id + tab.title}
            onClick={() => onClick(tab)}
            className={`${
              isActive
                ? "bg-apricot-50 text-white"
                : "bg-white hover:bg-gray-100 text-grey-10 cursor-pointer"
            } flex-none no-scrollbar font-bold text-center items-center py-2 sm:pb-[13px] sm:pt-6 text-sm capitalize px-4 sm:text-lg flex-grow "`}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};

export default EmergencyFundTabs;
