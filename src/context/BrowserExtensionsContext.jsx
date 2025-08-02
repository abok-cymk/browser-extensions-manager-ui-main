import { createContext, useContext } from "react";
import { useExtensions } from "../hooks/useExtensions";
import { useTheme } from "../hooks/useTheme";

const BrowserExtensionsContext = createContext();

export const BrowserExtensionsProvider = ({ children }) => {
  const extensionsData = useExtensions();
  const themeData = useTheme();

  const contextValue = {
    ...extensionsData,
    ...themeData,
  };

  return (
    <BrowserExtensionsContext.Provider value={contextValue}>
      {children}
    </BrowserExtensionsContext.Provider>
  );
};

export const useBrowserExtensions = () => {
  const context = useContext(BrowserExtensionsContext);

  if (context === undefined) {
    throw new Error(
      "useBrowserExtensions must be used within a BrowserExtensionsProvider"
    );
  }

  return context;
};
