"use client";

import { SunMedium } from "lucide-react";
import { useContext, useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { themeContext } from "../providers/theme.provider";

// Dark mode icon component
export default function DarkModeIcon() {
  // Context for theme mode
  const theme = useContext(themeContext);
  const isDarkMode = theme?.isDarkMode;
  const setDarkMode = theme?.setISDarkMode;

  // Hook to set mode for first time
  useEffect(() => {
    if (isDarkMode && setDarkMode) {
      if (
        localStorage.theme === "dark" ||
        ("theme" in localStorage &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      )
        setDarkMode(true);
      else setDarkMode(false);
    }
  }, []);

  // Hook to set mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <div>
      <button className="cursor-pointer">
        {!isDarkMode ? (
          <FiMoon
            className="size-6"
            onClick={() => setDarkMode && setDarkMode(!isDarkMode)}
          />
        ) : (
          <SunMedium
            className="size-6"
            onClick={() => setDarkMode && setDarkMode(!isDarkMode)}
          />
        )}
      </button>
    </div>
  );
}
