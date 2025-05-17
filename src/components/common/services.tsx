"use client";
import { TbWorld } from "react-icons/tb";
import { SiGoogleearthengine } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { motion } from "motion/react";
export default function Services() {
  const services = [
    {
      icon: <TbWorld className="size-5 text-white" />,
      title: "frontend web developer",
      summary: "Web development is the process of building, programming",
    },
    {
      icon: <FaProjectDiagram className="size-5 text-white" />,
      title: "Project Scheduling",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis repellat consequatur vero animi, adipisci amet reiciend",
    },
    {
      icon: <SiGoogleearthengine className="size-5 text-white" />,
      title: "Engineering drawing",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis repellat consequatur vero animi, adipisci amet reiciend",
    },
  ];

  return (
    <div
      id="services"
      className="w-full scroll-mt-10 px-[12%] py-10 sm:scroll-mt-28"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-ovo mb-10 text-center text-5xl"
      >
        My Services
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="font-ovo text-center text-zinc-500 dark:text-zinc-200"
      >
        I am a junior frontend developer,specializing in React and Next.js with
        typescript.
      </motion.h3>
      <div className="mt-10 flex w-full flex-col justify-center gap-10 lg:flex-row">
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-(--auto-grid) gap-6"
        >
          {services.map(({ icon, title, summary }) => (
            <motion.li
              whileHover={{ scale: 1.05 }}
              key={title}
              className="hover:bg-lightHover cursor-pointer space-y-5 rounded-xl border-[.5px] border-gray-200 p-3 duration-500 hover:-translate-y-1 hover:shadow-black dark:hover:bg-zinc-900"
            >
              <div className="w-fit rounded-md bg-[#FF388B] p-3">{icon} </div>
              <h3 className="my-2 font-semibold text-gray-700 dark:text-zinc-200">
                {title}
              </h3>
              <p
                className={`line-clamp-3 h-16 text-sm text-gray-600 transition-all duration-500 dark:text-zinc-200`}
              >
                {summary}
              </p>
              <p className="mt-auto flex items-end gap-2 text-gray-500 dark:text-zinc-200">
                Reade more <GoArrowRight className="my-auto w-4 pt-1" />
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
