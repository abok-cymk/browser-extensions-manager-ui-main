import useSWR from "swr";
import { useState, useMemo, useCallback } from "react";
import {
  filterExtensionsByTab,
  removeExtensionByName,
  toggleExtensionStatus,
} from "../utils/extensionUtils";
import { EXTENSION_TABS } from "../constants/extensionTabs";

const fetcher = async (url) => {
  const data = await import("../../data.json");
  return data.default;
};

export const useExtensions = () => {
  const [activeTab, setActiveTab] = useState(EXTENSION_TABS.ALL);
  const [localExtensions, setLocalExtensions] = useState(null);

  const {
    data: extensionsData,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/extensions", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    dedupingInterval: 60000, 
  });

  const extensions = localExtensions || extensionsData || [];

  const filteredExtensions = useMemo(() => {
    return filterExtensionsByTab(extensions, activeTab);
  }, [extensions, activeTab]);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const handleRemoveExtension = useCallback(
    (extensionName) => {
      const updatedExtensions = removeExtensionByName(
        extensions,
        extensionName
      );
      setLocalExtensions(updatedExtensions);

    },
    [extensions]
  );

  const handleToggleExtension = useCallback(
    (extensionName) => {
      const updatedExtensions = toggleExtensionStatus(
        extensions,
        extensionName
      );
      setLocalExtensions(updatedExtensions);
    },
    [extensions]
  );

  const resetExtensions = useCallback(() => {
    setLocalExtensions(null);
    mutate(); 
  }, [mutate]);

  return {
    extensions,
    filteredExtensions,
    activeTab,
    isLoading,
    error,
    handleTabChange,
    handleRemoveExtension,
    handleToggleExtension,
    resetExtensions,
  };
};
