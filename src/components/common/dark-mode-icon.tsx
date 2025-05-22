"use client";
import { TDarkModeProps } from "@/lib/types/component-props";
import { SunMedium } from "lucide-react";
import { useEffect } from "react";
import { FiMoon } from "react-icons/fi";

// Dark mode icon component
export default function DarkModeIcon({
  isDarkMode,
  setDarkMode,
}: TDarkModeProps) {
  // Hook to set mode for first time
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      setDarkMode(true);
    else setDarkMode(false);
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
          <FiMoon className="size-6" onClick={() => setDarkMode(!isDarkMode)} />
        ) : (
          <SunMedium
            className="size-6"
            onClick={() => setDarkMode(!isDarkMode)}
          />
        )}
      </button>
    </div>
  );
}
