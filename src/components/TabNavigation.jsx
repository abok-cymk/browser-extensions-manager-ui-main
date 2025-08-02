import { memo } from "react";
import Tab from "./Tab";
import { TAB_OPTIONS } from "../constants/extensionTabs";

const TabNavigation = memo(({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {TAB_OPTIONS.map((tab) => (
        <Tab
          key={tab.id}
          tabTitle={tab.label}
          onClick={() => onTabChange(tab.id)}
          isTabActive={activeTab === tab.id}
        />
      ))}
    </div>
  );
});

TabNavigation.displayName = "TabNavigation";

export default TabNavigation;
