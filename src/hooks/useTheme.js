import { useState, useEffect, useCallback } from "react";

const THEME_STORAGE_KEY = "browser-extensions-theme";
const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      return savedTheme;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return THEMES.DARK;
    }

    return THEMES.LIGHT;
  });

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    document.documentElement.classList.toggle("dark", theme === THEMES.DARK);
  }, [theme]);


  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        setTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    );
  }, []);

  const isDark = theme === THEMES.DARK;

  return {
    theme,
    isDark,
    toggleTheme,
    THEMES,
  };
};
