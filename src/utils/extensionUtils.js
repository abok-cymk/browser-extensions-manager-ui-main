import { EXTENSION_TABS } from "../constants/extensionTabs";

export const filterExtensionsByTab = (extensions, activeTab) => {
  if (!extensions || !Array.isArray(extensions)) {
    return [];
  }

  switch (activeTab) {
    case EXTENSION_TABS.ACTIVE:
      return extensions.filter((extension) => extension.isActive);
    case EXTENSION_TABS.INACTIVE:
      return extensions.filter((extension) => !extension.isActive);
    case EXTENSION_TABS.ALL:
    default:
      return extensions;
  }
};

export const removeExtensionByName = (extensions, extensionName) => {
  if (!extensions || !Array.isArray(extensions)) {
    return [];
  }

  return extensions.filter((extension) => extension.name !== extensionName);
};

export const toggleExtensionStatus = (extensions, extensionName) => {
  if (!extensions || !Array.isArray(extensions)) {
    return [];
  }

  return extensions.map((extension) =>
    extension.name === extensionName
      ? { ...extension, isActive: !extension.isActive }
      : extension
  );
};

export const searchExtensions = (extensions, searchTerm) => {
  if (!extensions || !Array.isArray(extensions) || !searchTerm) {
    return extensions || [];
  }

  const lowerSearchTerm = searchTerm.toLowerCase();
  return extensions.filter(
    (extension) =>
      extension.name.toLowerCase().includes(lowerSearchTerm) ||
      extension.description.toLowerCase().includes(lowerSearchTerm)
  );
};
