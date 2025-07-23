"use client";

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
export const themeContext = createContext<null | {
  isDarkMode: boolean;
  setISDarkMode: Dispatch<SetStateAction<boolean>>;
}>(null);

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [isDarkMode, setISDarkMode] = useState(false);
  return (
    <themeContext.Provider value={{ isDarkMode, setISDarkMode }}>
      {children}
    </themeContext.Provider>
  );
}
