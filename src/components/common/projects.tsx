import freshCart from "@assets/images/fresh-cart.png";
import kanban from "@assets/images/kanban-board.png";
import examApp from "@assets/images/exam-app.png";
import aroundTheWorld from "@assets/images/around-the-word.png";
// import { GoArrowRight } from "react-icons/go";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "motion/react";

export default function Projects() {
  type TProjects = {
    image: StaticImageData;
    title: string;
    summary: string;
    tools: string;
    github: string;
    demo?: string;
  };
  const projects: TProjects[] = [
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

  return (
    <div
      id="work"
      className="w-full scroll-mt-10 space-y-10 px-[12%] py-10 sm:scroll-mt-28"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-ovo text-center text-5xl"
      >
        My Latest Works
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="font-ovo text-center text-zinc-500 dark:text-zinc-200"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.h3>
      <div className="flex w-full justify-center gap-10">
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(300,1fr))] gap-6"
        >
          {projects.map(({ image, title, summary, tools, github, demo }) => (
            <motion.li
              key={title}
              className="hover:bg-lightHover cursor-pointer rounded-xl border-[.5px] border-gray-200 p-3 duration-500 hover:-translate-y-1 hover:shadow-black dark:hover:bg-black"
            >
              <Image src={image} alt="" className="aspect-3/2 h-48 w-full" />
              <h3 className="my-2 font-semibold text-gray-700 dark:text-zinc-200">
                {title}
              </h3>
              <p
                className={`mb-3 h-16 text-sm text-gray-600 transition-all duration-500 dark:text-zinc-200`}
              >
                {summary}
              </p>
              <span className="font-semibold dark:text-zinc-200">Tools:</span>
              <p className="h-16 text-sm text-gray-600 dark:text-zinc-200">
                {tools}
              </p>
              <div className="mt-5 mb-4 flex justify-between px-4">
                <a href={github} target="_blank">
                  <button className="cursor-pointer rounded-full border border-gray-300 bg-zinc-50 px-5 hover:bg-black hover:text-white dark:border-none dark:bg-zinc-800 dark:hover:bg-zinc-700">
                    Github Repo
                  </button>
                </a>
                {demo && (
                  <a href={demo} target="_blank">
                    <button className="cursor-pointer rounded-full border border-gray-300 bg-zinc-50 px-5 hover:bg-black hover:text-white dark:border-none dark:bg-zinc-800 dark:hover:bg-zinc-700">
                      Demo
                    </button>
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {/* <button className="group mx-auto mt-10 flex w-fit cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-8 py-3 text-gray-500 hover:bg-black/85 hover:text-white dark:bg-zinc-200 dark:text-black dark:hover:bg-white">
        Show more
        <GoArrowRight className="my-auto mt-2.5 w-6 group-hover:animate-bounce" />
      </button> */}
    </div>
  );
}
