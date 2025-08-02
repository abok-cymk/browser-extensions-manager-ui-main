import { memo } from "react";
import clsx from "clsx";

const Tab = memo(({ tabTitle, onClick, isTabActive }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full px-4 py-1 text-sm font-medium shadow cursor-pointer transition-colors",
        isTabActive && [
          "bg-Red-500 text-neutral-100",
          "hover:bg-Red-700 hover:text-neutral-50",
          "dark:bg-Red-500",
        ],
        !isTabActive && [
          "bg-neutral-0 text-neutral-800",
          "hover:bg-neutral-50 hover:text-neutral-600",
          "dark:bg-neutral-800 dark:text-neutral-200",
          "dark:hover:bg-neutral-700 dark:hover:text-neutral-100",
        ]
      )}
      aria-pressed={isTabActive}
      role="tab"
    >
      {tabTitle}
    </button>
  );
});

Tab.displayName = "Tab";

export default Tab;
