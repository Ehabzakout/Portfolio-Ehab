"use client";
import Image from "next/image";
import bgNavbar from "@assets/images/header-bg-color.png";
import Logo from "./logo";
import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import DarkModeIcon from "../common/dark-mode-icon";
import { themeContext } from "../providers/theme.provider";

// List of links
const links = [
  { href: "#top", title: "Home" },
  { href: "#about", title: "About me" },
  { href: "#services", title: "Services" },
  { href: "#work", title: "My Work" },
  { href: "#contact", title: "Concat me" },
];

// Navbar component
export default function Navbar() {
  // Context for theme mode
  const theme = useContext(themeContext);
  const isDarkMode = theme?.isDarkMode;

  // State to change nav style when page scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // hook to control menu bar
  const menuBar = useRef<HTMLUListElement>(null);

  // hook to listen on window for scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    });
  }, []);

  // Function to open menu bar on small screens
  const openMenuBar = () => {
    if (menuBar.current) {
      menuBar.current.style.transform = "translateX(-16rem)";
    }
  };

  // Function to close menu bar on small screens
  const closeMenuBar = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "UL" || target.tagName === "LI") return;
    else {
      if (menuBar.current) {
        menuBar.current.style.transform = "translateX(16rem)";
      }
    }
  };

  return (
    <>
      {/* Show background in light mode */}
      {!isDarkMode && (
        <div className="fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%]">
          <Image src={bgNavbar} className="w-full" alt="" />
        </div>
      )}

      {/* Nav  */}
      <nav
        className={`fixed ${isScrolled && "bg-white/50 shadow-sm backdrop-blur-lg dark:bg-black/30"} z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 lg:px-8 xl:px-[8%]`}
      >
        <Logo />

        {/* Links list */}
        <ul
          className={`font-outfit hidden items-center gap-6 rounded-full ${!isScrolled && "border border-white/50 bg-white/50 shadow-sm dark:bg-transparent"} px-12 py-3 md:flex lg:gap-8`}
        >
          {links.map((link) => (
            <li key={link.title}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Icon to change mode */}
          <DarkModeIcon />

          {/* Anchor */}
          <a
            href="#contact"
            className="ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 hover:bg-black hover:text-white lg:flex dark:hover:border-transparent dark:hover:bg-zinc-800"
          >
            Contact <MdOutlineArrowOutward className="size-4" />
          </a>

          {/* Menu trigger on small screens */}
          <button
            className="block cursor-pointer md:hidden"
            onClick={openMenuBar}
          >
            <RiMenu3Fill className="size-6" />
          </button>
        </div>

        {/* Mobile menu */}

        <ul
          ref={menuBar}
          className={`fixed top-0 -right-64 bottom-0 z-50 flex h-screen w-64 flex-col gap-4 bg-rose-50 px-10 py-20 transition duration-500 md:hidden dark:bg-zinc-800 dark:text-gray-200`}
          onClick={(e) => closeMenuBar(e)}
        >
          <IoMdClose className="absolute top-5 right-5 size-8 cursor-pointer" />

          {links.map((link) => (
            <li key={link.title}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
