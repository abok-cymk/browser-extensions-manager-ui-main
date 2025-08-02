export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const isValidExtension = (extension) => {
  return (
    extension &&
    typeof extension === "object" &&
    typeof extension.name === "string" &&
    typeof extension.description === "string" &&
    typeof extension.logo === "string" &&
    typeof extension.isActive === "boolean"
  );
};
