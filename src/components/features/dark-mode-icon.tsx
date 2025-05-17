"use client";
import { SunMedium } from "lucide-react";
import { SetStateAction, useEffect } from "react";
import { FiMoon } from "react-icons/fi";

export default function DarkModeIcon({
  isDarkMode,
  setDarkMode,
}: {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      setDarkMode(true);
    else setDarkMode(false);
  }, []);

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
