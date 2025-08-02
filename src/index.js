// Component exports
export { default as App } from "./App";
export { default as Navbar } from "./components/Navbar";
export { default as ExtensionsList } from "./components/ExtensionsList";
export { default as ExtenstionCard } from "./components/ExtenstionCard";
export { default as Tab } from "./components/Tab";
export { default as TabNavigation } from "./components/TabNavigation";
export {
  LoadingSpinner,
  ErrorMessage,
  EmptyState,
} from "./components/StateComponents";

// Context exports
export {
  BrowserExtensionsProvider,
  useBrowserExtensions,
} from "./context/BrowserExtensionsContext";

// Hook exports
export { useExtensions } from "./hooks/useExtensions";
export { useTheme } from "./hooks/useTheme";

// Utility exports
export * from "./utils/extensionUtils";
export * from "./utils/helpers";

// Constants exports
export * from "./constants/extensionTabs";
