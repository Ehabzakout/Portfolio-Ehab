import Image from "next/image";
import { assets, toolsIcon } from "@assets/images/assets";
import { FaCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { motion } from "motion/react";

// List
const infoList = [
  {
    icon: <FaCode className="size-7" />,
    title: "Languages",
    description: "HTML, CSS, JavaScript, React Js, Next Js",
  },
  {
    icon: <FaGraduationCap className="size-7" />,
    title: "Education",
    description: "Bachelor degree in industrial engineering",
  },
  {
    icon: <PiShoppingBagOpenFill className="size-7" />,
    title: "Projects",
    description: "Built more than 4 projects",
  },
];

// About component
export default function About({ isDarkMode }: { isDarkMode: boolean }) {
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
            className="font-ovo mb-10 max-w-2xl"
          >
            I am a junior frontend developer,s specializing in React and Next.js
            with typescript. I also have experience with Node.js and am
            currently learning backend development using Node.js to become a
            full-stack developer. I have built several web applications,
            focusing on clean, readable, and reusable code, state management,
            and performance optimization.
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
