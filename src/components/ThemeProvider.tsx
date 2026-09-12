"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("nivoraib-theme") as Theme | null;
      if (savedTheme === "dark") {
        setThemeState("dark");
        applyTheme("dark");
      } else {
        setThemeState("light");
        applyTheme("light");
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  const applyTheme = (t: Theme) => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (t === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem("nivoraib-theme", newTheme);
    } catch {
      // ignore storage access errors
    }
  };

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("theme-transitioning");
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transitioning");
      }, 1250);
    }
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const value = React.useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
