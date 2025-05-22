import { SetStateAction } from "react";

export type TDarkModeProps = {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<SetStateAction<boolean>>;
};

export type TTipTapProps = {
  onChange: (value: string) => void;
  setPost: React.Dispatch<SetStateAction<string | null>>;
  className: string;
};
