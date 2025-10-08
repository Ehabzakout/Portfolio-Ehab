"use client";
import Image from "next/image";
import { assets, toolsIcon } from "@assets/images/assets";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { AiFillCode } from "react-icons/ai";
import { motion } from "motion/react";
import { useContext } from "react";
import { themeContext } from "../providers/theme.provider";
import { PiBagSimpleFill } from "react-icons/pi";
// List
const infoList = [
  {
    icon: <FaCode className="size-7" />,
    title: "Languages",
    description: "HTML, CSS, JavaScript, TypeScript, Python, SQL",
  },
  {
    icon: <FaLaptopCode className="size-7" />,
    title: "FrontEnd",
    description:
      "ReactJs, NextJs, Tailwind, React Query, Redux, Shadcn, React Native, PWA",
  },
  {
    icon: <AiFillCode className="size-7" />,
    title: "BackEnd",
    description:
      "NodeJS, ExpressJS, MongoDB, MySql, Socket.io, GraphQl, NestJs",
  },

  {
    icon: <PiBagSimpleFill className="size-7" />,
    title: "Projects",
    description: "Built more than 6 projects",
  },
  {
    icon: <FaGraduationCap className="size-7" />,
    title: "Education",
    description: "Bachelor degree in industrial engineering",
  },
];

// About component
export default function About() {
  // Context for theme mode
  const theme = useContext(themeContext);
  const isDarkMode = theme?.isDarkMode;

  return (
    <div
      id="about"
      className="w-full scroll-mt-10 px-[12%] pt-10 sm:scroll-mt-28"
    >
      {/* headline */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="font-ovo mb-10 text-center text-5xl"
      >
        About me
      </motion.h2>

      {/* User info */}
      <div className="flex w-full flex-col justify-center gap-16 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto flex w-46 max-w-none items-center rounded-3xl sm:w-56"
        >
          {/* User photo */}
          <Image
            src={assets.userImg}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <div className="mx-auto flex-1">
          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="font-ovo mb-10 max-w-2xl text-center md:text-start"
          >
            Full Stack Developer with strong expertise in React.js, Next.js, and
            TypeScript, and solid backend experience using Node.js, Express,
            MongoDB, MySQL, and Sequelize. Passionate about building scalable,
            high-performance web and mobile applications, I focus on delivering
            clean, maintainable, and efficient solutions. I have developed
            multiple full-stack web applications, applying best practices in
            state management, API integration, and performance optimization,
            while maintaining a strong emphasis on code readability,
            reusability, and modular architecture.
          </motion.p>

          {/* List of information */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {infoList.map(({ icon, title, description }) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                key={title}
                className="hover:bg-lightHover cursor-pointer rounded-xl border-[.5px] border-gray-400 p-3 duration-500 hover:-translate-y-1 hover:shadow-black dark:hover:bg-zinc-900"
              >
                <span className="block size-7">{icon} </span>
                <h3 className="my-2 font-semibold text-gray-700 dark:text-zinc-200">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-zinc-200">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="font-ovo my-6 text-center font-semibold text-gray-700 dark:text-zinc-100"
          >
            Tools I Use
          </motion.h4>

          {/* List of tools */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
            className="grid grid-cols-[repeat(auto-fit,minmax(55px,auto))] items-center gap-3 sm:gap-5"
          >
            {toolsIcon.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                key={index}
                className={`flex aspect-square w-12 cursor-pointer items-center justify-center rounded-lg border border-gray-400 duration-500 hover:-translate-y-1 sm:w-14`}
              >
                <Image
                  src={
                    isDarkMode && tool === assets.nextIcon
                      ? assets.nextIconWhite
                      : tool
                  }
                  alt=""
                  width={30}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
