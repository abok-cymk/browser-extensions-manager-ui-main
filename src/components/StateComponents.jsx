import { memo } from "react";

const LoadingSpinner = memo(() => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-custom-red-700"></div>
      <span className="ml-2 text-neutral-600">Loading extensions...</span>
    </div>
  );
});

LoadingSpinner.displayName = "LoadingSpinner";

const ErrorMessage = memo(({ error, onRetry }) => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className="text-lg text-red-500 mb-4">
        Error loading extensions: {error?.message || "Unknown error"}
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-custom-red-700 text-white rounded hover:bg-custom-red-800 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
});

ErrorMessage.displayName = "ErrorMessage";

const EmptyState = memo(({ activeTab }) => {
  return (
    <div className="text-center py-8">
      <div className="text-neutral-500 text-lg mb-2">
        No {activeTab.toLowerCase()} extensions found
      </div>
      <p className="text-sm text-neutral-400">
        {activeTab === "All"
          ? "Try adding some extensions to get started."
          : `Switch to "All" to see all extensions.`}
      </p>
    </div>
  );
});

EmptyState.displayName = "EmptyState";

export { LoadingSpinner, ErrorMessage, EmptyState };
