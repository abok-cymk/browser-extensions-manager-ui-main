import { memo } from "react";
import { useBrowserExtensions } from "../context/BrowserExtensionsContext";
import ExtenstionCard from "./ExtenstionCard";
import TabNavigation from "./TabNavigation";
import { LoadingSpinner, ErrorMessage, EmptyState } from "./StateComponents";

const ExtensionsList = memo(() => {
  const {
    filteredExtensions,
    activeTab,
    isLoading,
    error,
    handleTabChange,
    handleRemoveExtension,
    handleToggleExtension,
    resetExtensions,
  } = useBrowserExtensions();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={resetExtensions} />;
  }

  return (
    <div>
      <div className="flex-cols text-center md:flex items-center md:justify-between mb-5">
        <h1 className="text-2xl font-bold text-Neutral-800 dark:text-Neutral-0 text-center md:text-left mb-2 md:mb-0">
          Extensions List
        </h1>
        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {filteredExtensions.length === 0 ? (
        <EmptyState activeTab={activeTab} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filteredExtensions.map((extension) => (
            <ExtenstionCard
              key={`${extension.name}-${extension.isActive}`}
              logo={extension.logo}
              name={extension.name}
              description={extension.description}
              isActive={extension.isActive}
              onRemove={handleRemoveExtension}
              onToggle={handleToggleExtension}
            />
          ))}
        </div>
      )}
    </div>
  );
});

ExtensionsList.displayName = "ExtensionsList";

export default ExtensionsList;
