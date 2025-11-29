"use client";
import freshCart from "@assets/images/fresh-cart.png";
import kanban from "@assets/images/kanban-board.png";
import examApp from "@assets/images/exam-app.png";
import aroundTheWorld from "@assets/images/around-the-word.png";
import Image from "next/image";
import { motion } from "motion/react";
import { TProjects } from "@/lib/types/projects";
import movieFlex from "@assets/images/screen-1.png";
import flower from "@assets/images/flower-app.png";
import fitness from "@assets/images/fitness-app.png";
import quickAI from "@assets/images/quick-ai.png";
import sportify from "@assets/images/sportify.png";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
// Projects component
export default function Projects() {
  // Projects list
  const projects: TProjects[] = [
    {
      image: quickAI,
      title: "AI Saas",
      summary: `My full stack a SaaS AI-powered platform, where users can generate and manage creative content with ease. The system integrates multiple AI services (text and image generation, resume review, and more) under authentication and billing model.`,
      tools:
        "NextJs, TypeScript, Tailwind, React Query, shad/cn, NodeJS, expressJS, PostgresSQL, neon ",
      github: "https://github.com/Ehabzakout/quick-ai",
      demo: "https://quick-ai-jet-nine.vercel.app/",
    },
    {
      image: fitness,
      title: "Fitness App",
      summary: `I worked on this Fitness App with a team using Agile methodology. Built with React, it features AI Chat bot,workout sections, meal plans for three levels, muscle-based workout browsing, and instructional videos.`,
      tools:
        "React, Vite,TypeScript, Use-Intl, Tailwind, React Query, shad/cn, React-Hook-Form, Zod ",
      github: "https://github.com/Ehabzakout/fitness-app",
      demo: "https://fitness-app-psi-nine.vercel.app/",
    },
    {
      image: flower,
      title: "Rose App",
      summary: `e-commerce app designed for selling flowers and gifts in both Arabic and English. supporting Dashboard for admins to add and update items and know statistics about products.`,
      tools:
        "NextJs, Next-Auth, Next-Intl, , Tailwind, React Query, shad/cn, React-Hook-Form Zod ",
      github: "https://github.com/Ehabzakout/flower-app",
    },
    {
      image: movieFlex,
      title: "Movie Flex(mobile app)",
      summary: `This is a React Native mobile application built with Expo that allows users to discover popular movies, view trending searches, and manage their saved movies`,
      tools: "React Native, Native wind, Expo, Tailwind, React Query",
      github: "https://github.com/Ehabzakout/rn-movie-app",
    },

    {
      image: freshCart,
      title: "E-commerce App",
      summary:
        "A store for many categories of products, it's support payment visa and cash.",
      tools:
        "React.js, Context API, Formik, Yup, Tailwind CSS, React Query, Axios, JWT, React Router DOM.",
      github: "https://github.com/Ehabzakout/FreshCart",
      demo: "https://fresh-cart-five-kohl.vercel.app/",
    },

    {
      image: sportify,
      title: "Sportify App",
      summary:
        "Sportify is a web application for booking sports courts. Built with Flask and Vanilla JavaScript, it provides users with an easy way to check available slots, reserve courts, and manage bookings",
      tools: "Python, Flask, Vanilla JavaScript, html, css, tailwind",
      github: "https://github.com/Ehabzakout/sportify",
    },
    {
      image: examApp,
      title: "Exam App",
      summary:
        "it provides multi exams in many field of programming for users and give user results to determine user level.",
      tools:
        "Next.js, Route Handler, Server Action, React-Hook-Form, Zod, Next-Auth, Shad cn",
      github: "https://github.com/Ehabzakout/Elevate-Exam-App",
    },
    {
      image: aroundTheWorld,
      title: "Around The world",
      summary:
        "App shows information about countries, it provides search bar, filter list and dark mode.",
      tools: "React.js,React Router DOM, ParamsID,Dark/Light Mode",
      github: "https://github.com/Ehabzakout/Around-the-world",
      demo: "https://around-the-world-wine.vercel.app/",
    },
    {
      image: kanban,
      title: "Kanban Board",
      summary:
        "App provides dashboard to organize tasks,it update and save data ,and support darg and drop,build by react.js",
      tools: "React.js, Context API, Drag-and-drop library",
      github: "https://github.com/Ehabzakout/Kanban-Board",
      demo: "https://kanban-board-nine-teal.vercel.app/",
    },
  ];

  const [showProjects, setShowProjects] = useState(3);

  function handleShowMore() {
    if (showProjects < projects.length) setShowProjects((prev) => prev + 3);
    else setShowProjects(3);
  }
  return (
    <div
      id="work"
      className="w-full scroll-mt-10 space-y-10 px-[12%] py-10 sm:scroll-mt-28"
    >
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-ovo text-center text-5xl"
      >
        My Latest Works
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="font-ovo text-center text-zinc-500 dark:text-zinc-200"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in web development.
      </motion.p>

      {/* Projects list */}
      <div className="flex w-full justify-center gap-10">
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects
            .slice(0, showProjects)
            .map(({ image, title, summary, tools, github, demo }) => (
              <motion.li
                key={title}
                className="hover:bg-lightHover cursor-pointer rounded-xl border-[.5px] border-gray-200 p-3 duration-500 hover:-translate-y-1 hover:shadow-black dark:hover:bg-black"
              >
                {/* Project image */}
                <Image src={image} alt="" className="aspect-3/2 h-48 w-full" />

                {/* Project title */}
                <h3 className="my-2 font-semibold text-gray-700 dark:text-zinc-200">
                  {title}
                </h3>

                {/* Project summary */}
                <p
                  className={`mb-3 h-32 text-sm text-gray-600 transition-all duration-500 md:h-28 dark:text-zinc-200`}
                >
                  {summary}
                </p>

                {/* Project tools */}
                <span className="font-semibold dark:text-zinc-200">Tools:</span>
                <p className="h-16 text-sm text-gray-600 dark:text-zinc-200">
                  {tools}
                </p>

                {/* anchors */}
                <div className="mt-5 mb-4 flex flex-col items-center justify-center space-y-5 px-4 sm:flex-row sm:justify-between sm:space-y-0">
                  {/* Github anchor */}
                  <a href={github} target="_blank">
                    <button className="cursor-pointer rounded-full border border-gray-300 bg-zinc-50 px-5 py-2 text-sm hover:bg-black hover:text-white md:text-[16px] dark:border-none dark:bg-zinc-800 dark:hover:bg-zinc-700">
                      Github Repo
                    </button>
                  </a>

                  {/* Show anchor demo if is exist */}
                  {demo && (
                    <a href={demo} target="_blank">
                      <button className="cursor-pointer rounded-full border border-gray-300 bg-zinc-50 px-5 py-2 text-sm hover:bg-black hover:text-white md:text-[16px] dark:border-none dark:bg-zinc-800 dark:hover:bg-zinc-700">
                        Demo
                      </button>
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
        </motion.ul>
      </div>

      {/* Show more button */}
      <button
        className="group mx-auto mt-10 flex w-fit cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-8 py-3 text-gray-500 hover:bg-black/85 hover:text-white dark:bg-zinc-200 dark:text-black dark:hover:bg-white"
        onClick={() => handleShowMore()}
      >
        {projects.length > showProjects ? "Show More" : "Show less"}
        <GoArrowRight className="my-auto mt-2.5 w-6 group-hover:animate-bounce" />
      </button>
    </div>
  );
}
